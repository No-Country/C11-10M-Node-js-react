const { employees, wage, user } = require("../../db");

const findAllEmployees = async (req, res) => {
	try {
		const { userName } = req.query;
		if (userName) {
			const findID = await user.findOne({ where: { userName } });
			const find = await employees.findAll({
				where: { idUser: findID.dataValues.id },
				include: wage,
			});
			res.status(200).json(find);
		} else {
			const find = await employees.findAll({
				include: wage,
			});
			res.status(200).json(find);
		}
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = findAllEmployees;
