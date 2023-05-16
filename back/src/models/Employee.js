const { DataTypes } = require("sequelize");

const employees = (sequelize) => {
	sequelize.define("employees", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: true,
			primaryKey: true,
		},
		fname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		dni: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		//*ideas: position, start date
	});
};

module.exports = employees;
