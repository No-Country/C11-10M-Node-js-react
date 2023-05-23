import { useEffect, useState } from "react";
import { stylesButton, stylesContainer, stylesErrorForm } from "../../styles";
import { InputSelect, InputText } from "../Inputs/Input";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Validate from "./Validate";
import swal from "sweetalert";
import { getEmployees, postEmployee } from "../../redux/actions";

const Register = () => {
	const initialState = {
		fname: "",
		lname: "",
		dni: "",
		cuil: "",
		province: "",
		adress: "",
		phone: "",
		email: "",
		birthDate: "",
		startDate: "",
		civilStatus: "",
		children: "",
		position: "",
		contractType: "",
		numberART: "",
	};

	const [inputs, setInputs] = useState(initialState);
	const [errors, setErrors] = useState(initialState);
	const [flag, setFlag] = useState(false)

	const navigate = useNavigate();
	const dispatch = useDispatch();

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

	const handleSubmit = (e) => {
		e.preventDefault();

		const find = Object.values(errors).find((el) => el !== "");

		if (!find) {
			dispatch(postEmployee(inputs)).then((data) => {
				if (data.status && data.status === 200) {
					swal({
						title: "Empleado registrado",
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
				title: "Empleado no registrado",
				text: find,
				icon: "error",
			});
		}
	};

	useEffect(()=>{
		dispatch(getEmployees())
	}, [dispatch, flag])
	return (
		<div className="bg-main-gray min-h-screen flex flex-col justify-center items-center py-8">
			<form
				className="grid grid-cols-1 gap-8 w-3/4 xl:w-1/2 md:grid-cols-2 bg-white px-10 py-6
        rounded-sm"
				onSubmit={handleSubmit}
			>
				{/* first name */}
				<div>
					<InputText
						type="text"
						title={"Nombre"}
						name={"fname"}
						value={inputs?.fname}
						onChange={handleChange}
						autofocus={true}
					/>
					{errors?.fname && <p className={stylesErrorForm}>{errors?.fname}</p>}
				</div>

				{/* last name */}
				<div>
					<InputText
						type="text"
						title={"Apellido"}
						name={"lname"}
						value={inputs?.lname}
						onChange={handleChange}
					/>
					{errors?.lname && <p className={stylesErrorForm}>{errors?.lname}</p>}
				</div>

				{/* dni */}
				<div>
					<InputText
						type="number"
						title={"DNI"}
						name={"dni"}
						value={inputs?.dni}
						onChange={handleChange}
					/>
					{errors?.dni && <p className={stylesErrorForm}>{errors?.dni}</p>}
				</div>

				{/* cuil / cuit */}
				<div>
					<InputText
						type="number"
						title={"CUIL/CUIT"}
						name={"cuil"}
						value={inputs?.cuil}
						onChange={handleChange}
					/>
					{errors?.cuil && <p className={stylesErrorForm}>{errors?.cuil}</p>}
				</div>

				{/* nacionality */}
				<div>
					<InputText
						type="text"
						title={"Province"}
						name={"province"}
						value={inputs?.province}
						onChange={handleChange}
					/>
					{errors?.province && <p className={stylesErrorForm}>{errors?.province}</p>}
				</div>

				{/* adress */}
				<div>
					<InputText
						type="text"
						title={"Dirección"}
						name={"adress"}
						value={inputs?.adress}
						onChange={handleChange}
					/>
					{errors?.adress && <p className={stylesErrorForm}>{errors?.adress}</p>}
				</div>

				{/* phone */}
				<div>
					<InputText
						type="number"
						title={"Phone"}
						name={"phone"}
						value={inputs?.phone}
						onChange={handleChange}
					/>
					{errors?.phone && <p className={stylesErrorForm}>{errors?.phone}</p>}
				</div>

				{/* email */}
				<div>
					<InputText
						type="email"
						title={"Email"}
						name={"email"}
						value={inputs?.email}
						onChange={handleChange}
					/>
					{errors?.email && <p className={stylesErrorForm}>{errors?.email}</p>}
				</div>

				{/* birthDate */}
				<div>
					<InputText
						type="date"
						title={"Fecha de nacimiento"}
						name={"birthDate"}
						value={inputs?.birthDate}
						onChange={handleChange}
					/>
					{errors?.birthDate && (
						<p className={stylesErrorForm}>{errors?.birthDate}</p>
					)}
				</div>

				{/* start date */}
				<div>
					<InputText
						type="date"
						title={"Fecha de inicio"}
						name={"startDate"}
						value={inputs?.startDate}
						onChange={handleChange}
					/>
					{errors?.startDate && (
						<p className={stylesErrorForm}>{errors?.startDate}</p>
					)}
				</div>

				{/* selects container */}
				<div className={stylesContainer + " md:col-start-1 md:col-end-3"}>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-6">
						{/* civil status */}
						<div>
							<InputSelect
								title="Estado Civil"
								name="civilStatus"
								value={inputs?.civilStatus}
								onChange={handleChange}
								options={["Soltero/a", "Casado/a", "Divorciado/a", "Viudo/a"]}
							/>
							{errors?.civilStatus && (
								<p className={stylesErrorForm}>{errors?.civilStatus}</p>
							)}
						</div>

						{/* children */}
						<div>
							<InputSelect
								title="Hijos"
								name="children"
								value={inputs?.children}
								onChange={handleChange}
								options={["0", "1", "2", "3", "4", "5", "6+"]}
							/>
							{errors?.children && (
								<p className={stylesErrorForm}>{errors?.children}</p>
							)}
						</div>

						{/* position */}
						<div>
							<InputSelect
								title="Puesto"
								name="position"
								value={inputs?.position}
								onChange={handleChange}
								options={["Oficial esp", "Oficial med", "Ayudante", "Sereno", "Otro"]}
							/>
							{errors?.position && (
								<p className={stylesErrorForm}>{errors?.position}</p>
							)}
						</div>

						{/* contractType */}
						<div>
							<div>
								<InputSelect
									title="Tipo de contrato"
									name="contractType"
									value={inputs?.contractType}
									onChange={handleChange}
									options={["Permanente", "Temporal"]}
								/>
								{errors?.contractType && (
									<p className={stylesErrorForm}>{errors?.contractType}</p>
								)}
							</div>
						</div>

						{/* numberART */}
						<div>
							<div>
								<InputText
									type="number"
									title="Número de ART"
									name="numberART"
									value={inputs?.numberART}
									onChange={handleChange}
								/>
								{errors?.numberART && (
									<p className={stylesErrorForm}>{errors?.numberART}</p>
								)}
							</div>
						</div>
					</div>
					{/* buttons */}
					<div className="grid grid-cols-2 mt-10 gap-6">
						<button className={stylesButton} onClick={() => navigate("/employees")}>
							Atrás
						</button>
						<button className={stylesButton + " bg-main-green text-white"}>
							Cargar
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Register;
