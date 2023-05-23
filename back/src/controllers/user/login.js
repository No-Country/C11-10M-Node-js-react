const { user } = require("../../db");

const login = async (req, res) => {
	try {
		const { userName, password } = req.body;
		const find = await user.findOne({ where: { userName, password } });
		if (find) res.status(200).json({ success: true });
		else res.status(400).json({ success: false });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = login;
