const { DataTypes } = require("sequelize");

const user = (sequelize) => {
	sequelize.define("user", {
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			allowNull: true,
			primaryKey: true,
		},
		userName: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	});
};

module.exports = user;
