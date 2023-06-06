const { employees, wage, user } = require("../../db");

const findAllWage = async (req, res) => {
	try {
		const { userName } = req.query;
		console.log(userName !== "");
		if (userName !== "") {
			const findID = await user.findOne({ where: { userName } });
			const find = await wage.findAll({
				where: { idUser: findID.dataValues.id },
				include: employees,
			});
			res.status(200).json(find);
		} else {
			const find = await wage.findAll({
				include: employees,
			});
			res.status(200).json(find);
		}
	} catch (err) {
		res.status(400).json({ mensage: err.mensage });
	}
};

module.exports = findAllWage;
