import { useEffect, useState } from "react";
import { stylesButton, stylesContainer, stylesErrorForm } from "../../styles";
import { InputSelect, InputText } from "../Inputs/Input";
import { useDispatch, useSelector } from "react-redux";
// import Validate from "./Validate";
import swal from "sweetalert";
import { getEmployees, postWage } from "../../redux/actions";
import Validate from "./Validate";

const WageForm = () => {
	const initialState = {
    employeeId: "",
    nhours: "", 
		ehours: "",
    // inc1: 0,
    // inc2: 0,
    // inc3: 0,
    // txt1: "",
    // txt2: "",
    // txt3: "",
    payment: "",
    plus: "false"
	};

	const [inputs, setInputs] = useState(initialState);
	const [errors, setErrors] = useState(initialState);
	const [flag, setFlag] = useState(false)
  
	const dispatch = useDispatch();
  const { allEmployees } = useSelector((s) => s);

	const handleChange = (e) => {
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
	};
  const onClick = () => {
    setInputs({
			...inputs,
			payment: inputs.plus === 'false' ? ((parseInt(inputs.nhours)+parseInt(inputs.ehours*2))*parseInt(inputs.nincome))+(parseInt(inputs.inc1)+parseInt(inputs.inc2)+parseInt(inputs.inc3)) : ((parseInt(inputs.nhours)+parseInt(inputs.ehours*2))*parseInt(inputs.nincome))+(parseInt(inputs.inc1)+parseInt(inputs.inc2)+parseInt(inputs.inc3))+((parseInt(inputs.nhours)+parseInt(inputs.ehours*2))*parseInt(inputs.nincome))*0.2
		});
  };
  
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
				className="grid grid-cols-1 gap-8 w-3/4 xl:w-1/2 md:grid-cols-2 bg-white px-10 py-6
        rounded-sm"				
			>
						{/* employee */}
						<div>
							<InputSelect
								title="Empleado"
								name="employeeId"
								value={inputs?.employeeId}
								onChange={handleChange}
								options={allEmployees.map((e)=> {
                  return {name: e.fname + " " + e.lname + ",", id: e.id}
                } )}
							/>
							{errors?.employeeId && (
								<p className={stylesErrorForm}>{errors?.employeeId}</p>
							)}
						</div>			
				
				<div className={stylesContainer + " md:col-start-1 md:col-end-3"}>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* income for hour */}
              <div>
                <InputText
                  type="number"
                  title={"Basico por hora"}
                  name={"nincome"}
                  value={inputs?.nincome}
                  onChange={handleChange}
                  autofocus={true}
                />
                {errors?.nincome && <p className={stylesErrorForm}>{errors?.nincome}</p>}
              </div>
            
            {/* number of normal hours worked */}
              <div>
                <InputText
                  type="number"
                  title={"Horas Trabajadas"}
                  name={"nhours"}
                  value={inputs?.nhours}
                  onChange={handleChange}
                  autofocus={true}
                />
                {errors?.nhours && <p className={stylesErrorForm}>{errors?.nhours}</p>}
              </div>
            
            {/* number of extra hours worked */}
              <div>
                <InputText
                  type="number"
                  title={"Horas extra"}
                  name={"ehours"}
                  value={inputs?.ehours}
                  onChange={handleChange}
                  autofocus={true}
                />
                {errors?.ehours && <p className={stylesErrorForm}>{errors?.ehours}</p>}
              </div>
					</div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
          <InputText
            type="text"
            title={"Incidencia 1"}
            name={"txt1"}
            value={inputs?.txt1}
            onChange={handleChange}
            autofocus={true}
          />

          <InputText
            type="number"
            title={"Valor"}
            name={"inc1"}
            value={inputs?.inc1}
            onChange={handleChange}
            autofocus={true}
            style={{marginLeft: '20px'}}
          />
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <InputText
              type="text"
              title={"Incidencia 2"}
              name={"txt2"}
              value={inputs?.txt2}
              onChange={handleChange}
              autofocus={true}
            />

            <InputText
              type="text"
              title={"Valor"}
              name={"inc2"}
              value={inputs?.inc2}
              onChange={handleChange}
              autofocus={true}
              style={{marginLeft: '20px'}}
            />
          </div>

          <div style={{display: 'flex', flexDirection: 'row'}}>
            <InputText
              type="text"
              title={"Incidencia 3"}
              name={"txt3"}
              value={inputs?.txt3}
              onChange={handleChange}
              autofocus={true}
            />

            <InputText
              type="text"
              title={"Valor"}
              name={"inc3"}
              value={inputs?.inc3}
              onChange={handleChange}
              autofocus={true}
              style={{marginLeft: '20px'}}
            />
          </div>
          <br />
          <div>
            <label>Presentismo? </label>
            <input type="checkbox" name="plus" value={inputs.plus === 'false'? 'true': 'false'} onChange={handleChange}/>
          </div>
          <br />
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <button className={stylesButton + " bg-main-green text-white"} onClick={onClick}>Calcular salario</button>
            <h1>Valor a pagar: $ {inputs.payment}</h1>
          </div>
          <br />
					{/* buttons */}
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