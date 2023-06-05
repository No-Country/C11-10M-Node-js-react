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
			userName,
		} = req.body;

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
				res.status(200).json({ success: true });
			} else throw new Error("Not user found with that username");
		} else {
			throw new Error(`Not username passed`);
		}
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = createEmployee;
