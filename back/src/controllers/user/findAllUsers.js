const { user } = require("../../db");

const findAllUsers = async (req, res) => {
	try {
		const find = await user.findAll({});
		res.status(200).json(find);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = findAllUsers;
