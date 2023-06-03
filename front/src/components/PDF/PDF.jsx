import { Document, Page, Text, View, Image } from "@react-pdf/renderer";

import logo from "../../assets/logo.png";
const DocuPDF = ({ data }) => {
	if (data) {
		//*personal data
		var {
			fname,
			lname,
			dni,
			position,
			contractType,
			numberART,
			birthDate,
			// lname, dni, email, province, contractType
		} = data.employee;

		//*wage data
		var { payment, nincome, nhours, ehours, deductions, createdAt } = data;

    const date = new Date(createdAt)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    var fullDate = day + "/" + month + "/" + year
	}

	//*calculating age
	const fechaNacimiento = new Date(birthDate);
	const fechaActual = new Date();
	const tiempoDiferencia = fechaActual - fechaNacimiento;
	const age = Math.floor(tiempoDiferencia / (1000 * 60 * 60 * 24 * 365.25));

	return (
		<>
			{data && (
				<Document>
					<Page
						size="A4"
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "white",
							width: "100%",
						}}
					>
						<View
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "white",
								padding: 10,
								width: "100%",
							}}
						>
							<Image
								src={logo}
								alt="logo image"
								style={{ maxWidth: "320px", maxHeight: "220" }}
							/>

							{/* titulo */}
							<Text
								style={{
									fontSize: "22px",
									paddingTop: "8px",
									textDecoration: "underline",
								}}
							>
								Datos personales:
							</Text>

							{/* personal data */}
							<div>
								<div>
									<Text style={{ fontSize: "12px", paddingTop: "8px" }}>
										Nombre: {fname + " " + lname}
									</Text>
									<Text style={{ fontSize: "12px", paddingTop: "8px" }}>DNI: {dni}</Text>
									<Text style={{ fontSize: "14px", paddingTop: "8px" }}>
										Position: {position}
									</Text>
									<Text style={{ fontSize: "12px", paddingTop: "8px" }}>
										Contrato: {contractType}
									</Text>
									<Text style={{ fontSize: "12px", paddingTop: "8px" }}>
										ART: {numberART}
									</Text>
									<Text style={{ fontSize: "12px", paddingTop: "8px" }}>
										EDAD: {age}
									</Text>
								</div>
							</div>

							<Text
								style={{
									fontSize: "22px",
									paddingTop: "8px",
									textDecoration: "underline",
								}}
							>
								Salario mensual:
							</Text>

							{/* wage data */}
							<div>
								<div>
									<Text style={{ fontSize: "12px", paddingTop: "8px" }}>
										BASE: ${payment}
									</Text>
									<Text style={{ fontSize: "12px", paddingTop: "8px" }}>
										Horas trabajadas: ${nhours}
									</Text>
									<Text style={{ fontSize: "12px", paddingTop: "8px" }}>
										Horas extras: ${ehours}
									</Text>
									<Text style={{ fontSize: "12px", paddingTop: "8px" }}>
										Deducciones: ${deductions}
									</Text>
									<Text style={{ fontSize: "12px", paddingTop: "8px" }}>
										Total: ${nincome}
									</Text>
                  <Text style={{ fontSize: "12px", paddingTop: "8px" }}>
										Fecha: {fullDate}
									</Text>
								</div>
							</div>
						</View>
					</Page>
				</Document>
			)}
		</>
	);
};

export default DocuPDF;
