const { employees } = require("../../db");

const deleteEmployees = async (req, res) => {
	try {
		const { id } = req.params;
		await employees.destroy({
			where: {
				id,
			},
		});
		res.status(200).json({ success: true });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = deleteEmployees;
