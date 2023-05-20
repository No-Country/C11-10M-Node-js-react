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
			validate: {
				is: {
					args: ["^(?=.*[a-zA-Z])(?=.*\\d)[a-zA-Z\\d]+$", "i"],
					msg: "At least one letter and one number required",
				},
				len: {
					args: [4, 32],
					msg: "Password field must be between 4 and 32 characters",
				},
			},
		},
	});
};

module.exports = user;
