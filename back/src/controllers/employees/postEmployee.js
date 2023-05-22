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
		const find = await employees.findOne({ where: { email } });
		if (!find.dataValues) {
			res.status(200).json({ success: true });
		} else {
			throw new Error("Ya hay un empleado con ese email");
		}
	} catch (err) {
		console.log(err.message);
		res.status(400).json({ message: err.message });
	}
};

module.exports = createEmployee;
