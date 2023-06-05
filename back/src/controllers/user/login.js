const { user } = require("../../db");
const bcriptjs = require("bcryptjs");

const login = async (req, res) => {
	try {
		const { userName, password } = req.body;
		const find = await user.findOne({ where: { userName } });
		let compare = await bcriptjs.compare(password, find.password);
		if (compare) res.status(200).json({ success: true });
		res.status(400).json({ success: false });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = login;
