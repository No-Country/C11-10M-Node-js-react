const { employees } = require("../../db");

const findAllEmployees = async (req, res) => {
	try {
		const find = await employees.findAll();
		res.status(200).json(find);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = findAllEmployees;
