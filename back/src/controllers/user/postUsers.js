const { user } = require("../../db");

const postUsers = async (req, res) => {
	try {
		const { userName, password } = req.body;
		await user.create({ userName, password });
		res.status(200).json({ success: true });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = postUsers;
