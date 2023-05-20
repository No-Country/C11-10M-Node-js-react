const { user } = require("../../db");

const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		const find = user.findOne({ where: { id } });
		if (find) {
			await user.destroy({
				where: {id},
			});
			res.status(200).json({ success: true });
		} else {
			throw new Error("Couldn't find the user");
		}
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = deleteUser;
