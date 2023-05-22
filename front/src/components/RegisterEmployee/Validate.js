const regexPhone =
	/(\(?\d{3}\)?[- .]?\d{4}[- .]?\d\d\d\d)|(\(?\d{4}\)?[- .]?\d{3}[- .]?\d\d\d\d)|(\(?\d{5}\)?[- .]?\d{2}[- .]?\d\d\d\d)/;
const regexDni = /^[0-9]{6,10}$/;
const regexMail =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const Validate = (inputs) => {
	let errors = {};

	//*nombre
	if (!inputs.fname) {
		errors.fname = "El campo nombre debe estar completo";
	} else if (inputs.fname.length > 50) {
		errors.fname = "El Nombre es demasiado largo, Max 50 caracteres.";
	} else if (inputs.fname.length < 2) {
		errors.fname = "El Nombre es demasiado corto, Min 2 caracteres.";
	}

	//*apellido
	else if (!inputs.lname) {
		errors.lname = "El campo apellido debe estar completo";
	} else if (inputs.lname.length > 50) {
		errors.lname = "El Apellido es demasiado largo, Max 50 caracteres.";
	} else if (inputs.lname.length < 2) {
		errors.lname = "El Apellido es demasiado corto, Min 2 caracteres.";
	}

	//*dni
	else if (!inputs.dni) {
		errors.dni = "El campo dni debe estar completo";
	} else if (!regexDni.test(inputs.dni)) {
		errors.dni = "Debe ingresar un Dni valido";
	} else if (inputs.dni.length > 11) {
		errors.dni = "El DNI muy largo.";
	} else if (inputs.dni.length < 6) {
		errors.dni = "El DNI muy corto.";
	}

	//*cuil
	else if (!inputs.cuil) {
		errors.cuil = "El campo cuil debe estar completo";
	}

	//*province
	else if (!inputs.province) {
		errors.province = "El campo provincia debe estar completo";
	}

	//*adress
	else if (!inputs.adress) {
		errors.adress = "El campo dirección debe estar completo";
	}

	//*phone
	else if (!inputs.phone) {
		errors.phone = "El campo teléfono debe estar completo";
	} else if (!regexPhone.test(inputs.phone)) {
		errors.phone = "El Teléfono debe ser formato internacional válido";
	}

	//*email
	else if (!inputs.email) {
		errors.email = "El campo email debe estar completo";
	} else if (!regexMail.test(inputs.email)) {
		errors.email = "El Teléfono debe ser formato internacional válido";
	}

	//*birth date
	else if (!inputs.birthDate) {
		errors.birthDate = "El campo fecha de nacimiento debe estar completo";
	}

	//*start date
	else if (!inputs.startDate) {
		errors.startDate = "El campo fecha de inicio debe estar completo";
	}

	//*civil status
	else if (!inputs.civilStatus) {
		errors.civilStatus = "El campo estado civil debe estar completo";
	}

	//*children
	else if (!inputs.children) {
		errors.children = "El campo hijos debe estar completo";
	}

	//*position
	else if (!inputs.position) {
		errors.position = "El campo posición debe estar completo";
	}

	//*contractType
	else if (!inputs.contractType) {
		errors.contractType = "El campo contrato debe estar completo";
	}

	//*numberART
	else if (!inputs.numberART) {
		errors.numberART = "El campo contrato debe estar completo";
	}

	return errors;
};

export default Validate;
