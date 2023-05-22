const regexPassword = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

const Validate = (inputs) => {
	let errors = {};

	if (!inputs.userName) {
		errors.fname = "El campo usuario debe estar completo";
	} else if (inputs.userName.length > 25) {
		errors.userName = "El usuario es demasiado largo, Max 25 caracteres.";
	} else if (inputs.userName.length < 2) {
		errors.userName = "El usuario es demasiado corto, Min 2 caracteres.";
	} else if (!inputs.password) {
		errors.password = "El campo contraseña debe estar completo";
	} else if (inputs.password.length < 4) {
		errors.password = "La contraseña es demasiado corta, Min 4 caracteres.";
	} else if (inputs.password.length > 32) {
		errors.password = "La contraseña es demasiada larga, Max 32 caracteres.";
	} else if (!regexPassword.test(inputs.password)) {
		errors.password = "La contraseña debe tener al menos un caracter y un número";
	} else if (!inputs.password_bis) {
		errors.password_bis = "El campo repetir contraseña debe estar completo";
	} else if (inputs.password !== inputs.password_bis) {
		errors.password_coincidence = "Las contraseñas no coinciden";
	}

	return errors;
};

export default Validate;
