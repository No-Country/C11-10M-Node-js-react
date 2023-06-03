const { wage } = require("../../db");

const createWage = async (req, res) => {
	try {
		const { nhours, ehours, plus, payment, employeeId } = req.body;
		let base = payment * nhours + payment * ehours * 1.5;
		const deductions = (base * 17) / 100;
		let nincome = base - deductions + plus;
		await wage.create({
			nincome,
			nhours,
			ehours,
			deductions,
			payment,
			plus,
			employeeId,
		});
		res.status(200).json({ success: true });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = createWage;
