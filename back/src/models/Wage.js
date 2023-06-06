const { DataTypes } = require("sequelize");

const wage = (sequelize) => {
	sequelize.define("wage", {
		/*facture id*/
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: true,
			primaryKey: true,
		},
		employeeId: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: true,
		},

		/*income for hour*/
		nincome: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},

		/* number of normal hours worked */
		nhours: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		/* number of extra hours worked */
		ehours: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		/* deductions for retirement and other benefice*/
		deductions: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		/*bonification for perfect attendance*/
		plus: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
		},
		/* total to pay to worker */
		payment: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
		idUser: {
			type: DataTypes.UUID,
			allowNull: false,
		},
	});
};

module.exports = wage;
