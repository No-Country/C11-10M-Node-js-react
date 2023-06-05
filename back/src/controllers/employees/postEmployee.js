const { employees, user } = require("../../db");

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

		const { userName } = req.query;

		if (userName) {
			const find = await user.findOne({ where: { userName } });
			if (find) {
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
					idUser: find.dataValues.id,
				});
			} else throw new Error("Not user found with that username");
			res.status(200).json({ success: true });
		} else {
			throw new Error(`Not username passed`);
		}
	} catch (err) {
		console.log(err.message);
		res.status(400).json({ message: err.message });
	}
};

module.exports = createEmployee;
