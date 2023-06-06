const { wage, employees } = require("../../db");

const createWage = async (req, res) => {
	try {
		const { nhours, ehours, plus, payment, employeeId } = req.body;

		let base = payment * nhours + payment * ehours * 1.5;
		const deductions = (base * 17) / 100;
		let nincome = base - deductions + plus;

		// Create or update the associated employee record
		const employee = await employees.findByPk(employeeId);

		if (!employee) {
			return res.status(404).json({ message: "Employee not found" });
		}

		const createdWage = await wage.create({
			nincome,
			nhours,
			ehours,
			deductions,
			payment,
			plus,
			employeeId,
			idUser: employee.idUser,
		});

		res.status(200).json({ success: true });
	} catch (err) {
		res.status(400).json({ message: err.message });
	}
};

module.exports = createWage;
