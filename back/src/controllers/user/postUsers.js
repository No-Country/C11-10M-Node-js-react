const { user } = require("../../db");
const bcriptjs = require("bcryptjs");

const postUsers = async (req, res) => {
	try {
		const { userName, password } = req.body;
		let passwordHash = await bcriptjs.hash(password, 8);
		await user.create({ userName, password: passwordHash });
		res.status(200).json({ success: true });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = postUsers;
