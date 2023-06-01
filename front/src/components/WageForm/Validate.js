const Validate = (inputs) => {
	let errors = {};

	//*empleado
	if (!inputs.employee) {
		errors.employee = "Debe seleccionar un empleado";
	}

	//*salario basico por hora
	if (!inputs.nincome) {
		errors.nincome = "Este campo debe estar completo";
	} else if (isNaN(inputs.nincome)) {
		errors.nincome = "Debe ser un numero";
	} else if (parseInt(inputs.nincome) < 2000) {
		errors.nincome = "El valor no puede ser inferior al salario minimo";
	}

	//*horas trabajadas
	if (!inputs.nhours) {
		errors.nhours = "Este campo debe estar completo";
	} else if (isNaN(inputs.nhours)) {
		errors.nhours = "Debe ser un numero";
	} else if (inputs.nhours > 48) {
		errors.nhours = "El valor no puede exceder las 48 horas legales";
	}

	//*horas extra
	if (!inputs.ehours) {
		errors.ehours = "Este campo debe estar completo";
	} else if (isNaN(inputs.ehours)) {
		errors.ehours = "Debe ser un numero";
	} else if (inputs.ehours > 24) {
		errors.ehours = "El valor no puede exceder las 24 horas legales";
	}

  return errors;

}

export default Validate;
