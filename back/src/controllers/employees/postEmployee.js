const { employees } = require("../../db");

const createEmployee = async (req, res) => {
	try {
		const { fname, lname, email, dni } = req.body;
		const newEmployee = await employees.create({
			fname,
			lname,
			email,
			dni,
		});
		res.status(200).json({ success: true });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = createEmployee;
