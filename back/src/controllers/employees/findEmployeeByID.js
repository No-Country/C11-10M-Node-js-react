const { employees } = require("../../db");

const findEmployeeByID = async (req, res) => {
	try {
		const { id } = req.params;
		const find = await employees.findOne({
			where: {
				id
			},
		});
		res.status(200).json(find);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = findEmployeeByID;
