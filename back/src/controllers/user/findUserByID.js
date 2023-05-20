const { user } = require("../../db");

const findAllUsers = async (req, res) => {
	try {
		const { id } = req.params;
		const find = await user.findOne({ where: { id } });

		if (find) res.status(200).json(find);
		else throw new Error("Could not find the user");
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = findAllUsers;
