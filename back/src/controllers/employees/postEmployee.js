const { employees } = require("../../db");

const createEmployee = async (req, res) => {
	try {
		const {
			fname,
			lname,
			email,
			dni,
			cuil,
			province,
			position,
			startDate,
			birthDate,
			civilStatus,
			children,
			contractType,
			numberART,
		} = req.body;

		await employees.create({
			fname,
			lname,
			email,
			dni,
			cuil,
			province,
			position,
			startDate,
			dni,
			birthDate,
			civilStatus,
			children,
			contractType,
			numberART,
		});
		res.status(200).json({ success: true });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = createEmployee;
