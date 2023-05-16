const { wage } = require("../../db");

const findWageByID = async (req, res) => {
	try {
		const { id } = req.params;
		const find = await wage.findOne({
			where: {
				id,
			},
		});
		res.status(200).json(find);
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = findWageByID;
