const { employees } = require("../../db");

const deleteEmployees = async (req, res) => {
	try {
		const { id } = req.params;
		const find = employees.findOne({ where: { id } });
		if (find) {
			await employees.destroy({
				where: {id}
			});
			res.status(200).json({ success: true });
		} else throw new Error("Could not find the employee");
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = deleteEmployees;
