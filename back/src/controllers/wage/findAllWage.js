const { wage } = require("../../db");

const findAllWage = async (req, res) => {
	try {
		const findall = await wage.findAll();
		res.status(200).json(findall);
	} catch(err) {
		res.status(400).json({ mensage: err.mensage });
	}
};

module.exports = findAllWage;
