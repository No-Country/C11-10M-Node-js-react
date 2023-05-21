const { DataTypes } = require("sequelize");

const employees = (sequelize) => {
	sequelize.define(
		"employees",
		{
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
			dni: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			cuil: {
				type: DataTypes.BIGINT,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					is: {
						args: [
							"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)(\\.[a-zA-Z]{2,5}){1,2}$",
						],
						msg: "Must be valid email address",
					},
				},
			},
			province: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			position: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			startDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			birthDate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			civilStatus: {
				type: DataTypes.ENUM("Soltero", "Casado"),
				allowNull: false,
			},
			children: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			contractType: {
				type: DataTypes.ENUM("A tiempo parcial", "A tiempo completo"),
				allowNull: false,
			},
			numberART: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
		},
		{ timestamps: false }
	);
};

module.exports = employees;
