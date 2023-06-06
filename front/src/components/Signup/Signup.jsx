import { useNavigate } from "react-router-dom";
import { stylesButton, stylesErrorForm } from "../../styles";
import { InputText } from "../Inputs/Input";
import { useState } from "react";
import Validate from "./Validate";
import swal from "sweetalert";
import { postUser } from "../../redux/actions";
import {useDispatch} from "react-redux"

const Signup = () => {
	const initialState = {
		userName: "",
		password: "",
		password_bis: "",
	};
	const [inputs, setInputs] = useState(initialState);
  const [errors, setErrors] = useState(initialState);
  const [counter, setCounter] = useState(0)

	const measures = "w-full md:w-[500px] xl:w-[600px] 2xl:w-[700px] px-4";
	const navigate = useNavigate();
  const dispatch = useDispatch()

	const handleChange = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
    setErrors(Validate({
      ...inputs,
      [e.target.name]: e.target.value
    }))
	};

  const handleSubmit = (e) => {
    e.preventDefault()

    const find = Object.values(errors).find(el=>el!=="")

    if(!find){
      dispatch(postUser({userName: inputs.userName, password: inputs.password})).then((data)=>{
        if(data.status===200){
          swal({
            title: "Usuario registrado",
            icon: "success",
          })
        }
        else{
          swal({
            title: "Error",
            text: data.response.data.message,
            icon: "error",
          })
        }
      })
    }
    else{
      //*solo podes tener no coincidiendo la contra 3 veces,
      //*dsp redirige al home
      if(inputs?.password!==inputs?.password_bis){
        setCounter(prev=>prev+1)
      }
      if(counter+1<3){ 
        swal({
          title: "Usuario no registrado",
          text: find,
          icon: "error",
        })
      }
      else{
        navigate("/")
        swal({
          title: "Atención",
          text: "Ha sobrepasado los 3 intentos de coincidencia de contraseñas, lo redirigimos al home",
          icon: "warning",
        })
      }
    }
  }

	return (
		<div
			className="min-h-screen w-full bg-input-green px-4
    flex flex-col items-center justify-center"
		>
			<div className={measures + " py-8"}>
				<form className="flex flex-col gap-2 w-full bg-white py-6 px-8 rounded-lg" onSubmit={handleSubmit}>
					<div className="w-full pl-2 pb-6 text-center">
						<p className="text-[22px] pb-2 uppercase underline">
							Registro de usuario
						</p>
						<p>Regístrese en el sistema para poder acceder a la página.</p>
					</div>

					<hr className="border-main-green pt-4"></hr>

					<div className={`w-full pl-2`}>
						<InputText
							type="text"
							title="Usuario"
							name="userName"
              value={inputs?.userName}
							onChange={handleChange}
							autofocus={true}
						/>
            {errors?.userName && <p className={stylesErrorForm}>{errors?.userName}</p>}
					</div>

					<div className={`w-full pl-2`}>
						<InputText
							type="password"
							title="Contraseña"
							name="password"
              value={inputs?.password}
							onChange={handleChange}
						/>
            {errors?.password && <p className={stylesErrorForm}>{errors?.password}</p>}
					</div>

					<div className={`w-full pl-2`}>
						<InputText
							type="password"
							title={"Escriba de nuevo la contraseña"}
							name="password_bis"
              value={inputs?.password_bis}
							onChange={handleChange}
						/>
            {errors?.password_bis && <p className={stylesErrorForm}>{errors?.password_bis}</p>}
					</div>

					<div className="w-full flex justify-between pt-6">
						<button
							className={stylesButton + " ml-2 w-[150px]"}
							onClick={() => navigate("/logIn")}
						>
							Atrás
						</button>
						<button
							className={
								stylesButton + " bg-main-green text-white px-4 ml-2 w-[150px]"
							}
						>
							Registrarse
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Signup;
