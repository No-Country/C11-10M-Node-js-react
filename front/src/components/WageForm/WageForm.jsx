import { useEffect, useState } from "react";
import { stylesButton, stylesErrorForm } from "../../styles";
import { InputSelect, InputText } from "../Inputs/Input";
import { useDispatch, useSelector } from "react-redux";
// import Validate from "./Validate";
import swal from "sweetalert";
import { getEmployees, postWage } from "../../redux/actions";
import Validate from "./Validate";

const WageForm = () => {
	const initialState = {
    employeeId: "",
    nhours: 0, 
		ehours: 0,
    nincome: 0,    
    payment: 0,
    plus: "false"
	};

	const [inputs, setInputs] = useState(initialState);
	const [errors, setErrors] = useState(initialState);
	const [flag, setFlag] = useState(false)
  
	const dispatch = useDispatch();
  const { allEmployees } = useSelector((s) => s);

	const handleChange = (e) => {
    const {name} = e.target.value
		if(name==="nhours" || name==="ehours" || name==="nincome"){
      setInputs({
        ...inputs,
        [e.target.name]: Number(e.target.value),
      });
      setErrors(
        Validate({
          ...inputs,
          [e.target.name]: e.target.value,
        })
      );
    } else{
      setInputs({
        ...inputs,
        [e.target.name]: e.target.value,
      });
      setErrors(
        Validate({
          ...inputs,
          [e.target.name]: e.target.value,
        })
      );
    }
	};
  // const onClick = () => {
  //   setInputs({
	// 		...inputs
	// 	});
  // };
  
	const handleSubmit = (e) => {
		e.preventDefault();

		const find = Object.values(errors).find((el) => el !== "");

    if (!find) {
      dispatch(postWage(inputs)).then((data) => {
        if (data.status && data.status === 200) {
          swal({
            title: "Pago registrado",
            icon: "success",
          });
          setInputs(initialState)
          setErrors(initialState)
          setFlag(prev=>!prev)
        } else {
          swal({
            title: "Error",
            text: data.response.data.message,
            icon: "error",
          });
        }
      });
    } else {
      swal({
        title: "Pago no registrado",
        text: find,
        icon: "error",
      });
    }
	};

	useEffect(()=>{
		dispatch(getEmployees())
	}, [dispatch, flag])

  console.log(inputs)

	return (
		<div className="bg-main-gray min-h-screen flex flex-col justify-center items-center py-8">
			<div
				className="grid grid-cols-1 gap-8 w-3/4 xl:w-1/2 md:grid-cols-2 bg-white py-6
        rounded-sm pborder"				
			>
						{/* employee */}
						<div className="w-1/1 bg-white px-10 py-6 rounded-sm">
							<InputSelect
								title="Empleado"
								name="employeeId"
								value={inputs?.employeeId}
								onChange={handleChange}
								options={allEmployees.map((e)=> {
                  return {name: e.fname + " " + e.lname, id: e.id}
                } )}
							/>
							{errors?.employeeId && (
								<p className={stylesErrorForm}>{errors?.employeeId}</p>
							)}
						</div>			
				
				<div className={"md:col-start-1 md:col-end-3"}>
					<div className="grid grid-cols-1 gap-10 w-30 md:w-30 xl:w-1/1 md:grid-cols-2 xl:grid-cols-3 bg-white xl:gap-18 justify-between px-10 py-6
        rounded-sm">
            {/* income for hour */}
              <div>
                <InputText
                  type="number"
                  title={"Basico por hora"}
                  name={"nincome"}
                  value={inputs?.nincome?.toString()}
                  onChange={handleChange}
                  autofocus={true}                  
                />
                {errors?.nincome != 0 && <p className={stylesErrorForm}>{errors?.nincome}</p>}
              </div>
            
            {/* number of normal hours worked */}
              <div>
                <InputText
                  type="number"
                  title={"Horas Trabajadas"}
                  name={"nhours"}
                  value={inputs?.nhours?.toString()}
                  onChange={handleChange}
                  autofocus={true}
                />
                {errors?.nhours != 0 && <p className={stylesErrorForm}>{errors?.nhours}</p>}
              </div>
            
            {/* number of extra hours worked */}
              <div>
                <InputText
                  type="number"
                  title={"Horas extra"}
                  name={"ehours"}
                  value={inputs?.ehours?.toString()}
                  onChange={handleChange}
                  autofocus={true}
                />
                {errors?.ehours != 0 && <p className={stylesErrorForm}>{errors?.ehours}</p>}
              </div>
					</div>
          
          <br />
          <div className="px-10">
            <label>Presentismo? </label>
            <input type="checkbox" name="plus" value={inputs.plus === 'false'? 'true': 'false'} onChange={handleChange}/>
          </div>
          <br />
          
					<div style={{display: 'flex', justifyContent: 'center'}}>
						<button type="submit" form="wageForm" onClick={handleSubmit} className={stylesButton + " bg-main-green text-white"}>
							Cargar
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WageForm;