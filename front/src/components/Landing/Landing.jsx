import { useNavigate } from "react-router-dom";
import { stylesButton } from "../../styles";
import { useState } from "react";
import { isLogin } from "../../redux/actions";
import {useDispatch} from "react-redux"
import swal from "sweetalert";

const Landing = () => {
	const [inputs, setInputs] = useState({
		userName: "",
		password: ""
	})

	const dispatch = useDispatch()

	const handleChange = (e) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		if(inputs?.userName && inputs?.password){
			dispatch(isLogin(inputs))
				.then((data)=>{
					if(data.type==='LOGIN'){ //*returns correctly the code
						navigate("/home")
					}
					else{
						swal({
							title: "Datos incorrectos",
							icon: "error"
						})
					}
				})
				.catch(()=>console.log("error"))
		}
	}

	const navigate = useNavigate();


	// }
	return (
		<div className="flex flex-col gap-2 pl-2">
			<h1 className="font-bold text-3xl">Landing</h1>
			<div className="flex gap-10">
				<button
					onClick={() => navigate("/home")}
					className={stylesButton + " px-8"}
				>
					Ingresar
				</button>
				<button
					onClick={() => navigate("/signup")}
					className={stylesButton + " px-8"}
				>
					Registrarse
				</button>
				<button
					onClick={() => navigate("/registerEmployee")}
					className={stylesButton + " px-8"}
				>
					Agregar Empleado
				</button>
			</div>
			<div className="grid place-items-center m-auto mt-12 mb-12">
				<div className="box grid place-items-center m-auto mb-5">
					<div className="grid grid-cols-1 place-items-center m-auto">
						<img className="logo" src="./src/assets/logo.png"></img>
					</div>

					<form className="grid w-t font-semibold" onSubmit={handleSubmit}>
						<hr className="line my-8" />
						<label htmlFor="userName">Usuario</label>
						<input className="my-2 bc" id="userName" type="text" name="userName"
						onChange={handleChange} value={inputs?.userName}/>

						<label htmlFor="password">Contraseña</label>
						<input className="my-2 bc" id="password" type="text" name="password"
						onChange={handleChange} value={inputs?.password}/>

						<span className="text-right underline">
							<a href="">Necesito ayuda</a>
						</span>
						<hr className="line mb-8 mt-4" />
					</form>

					<div className="grid grid-cols-2 gap-10 mt-5 mb-10 font-semibold w-auto">
						<button className="btn-secondary " onClick={() => navigate("/register")}>
							Recuperar Contraseña
						</button>
						<button className=" btn-primary" onClick={handleSubmit}>
							Ingresar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
