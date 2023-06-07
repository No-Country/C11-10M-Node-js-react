const { wage, employees } = require("../../db");

const createWage = async (req, res) => {
	try {
		let { nhours, ehours, plus, nincome, employeeId } = req.body;

		nincome = Number(nincome);
		nhours = Number(nhours);
		ehours = Number(ehours);

		let wageplane = nincome * nhours;
		let wageExtra = nincome * ehours * 1.5;

		let subtotal = wageplane + wageExtra;

		let plusTotal = subtotal * 0.05;
		plusTotal = Number(plusTotal.toFixed(2));

		let deductions = (subtotal + plusTotal) * 0.17;
		deductions = Number(deductions.toFixed(2));

		let finalPayment = subtotal - deductions;
		finalPayment = Number(finalPayment.toFixed(2));

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
			payment: finalPayment,
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
