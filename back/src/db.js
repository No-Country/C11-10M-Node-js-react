const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config();

const { Employees, Wage, User } = require("./models/index");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const db = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
	{
		logging: false, // set to console.log to see the raw SQL queries
		native: false, // lets Sequelize know we can use pg-native for ~30% more speed
	}
);

// const { DB_DEPLOY } = process.env;

// const db = new Sequelize(DB_DEPLOY, { logging: false, native: false });

Employees(db);
Wage(db);
User(db);

const { employees, wage, user } = db.models;

wage.belongsTo(employees, {
	through: "WageEmployee",
	foreignKey: "employeeId",
});
employees.belongsToMany(wage, {
	through: "WageEmployee",
});

// employees.hasOne(user, {
// 	through: "UserEmployee",
// });
// user.belongsToMany(employees, {
// 	through: "UserEmployee",
// 	foreignKey: "idUser",
// });

module.exports = {
	...db.models,
	conn: db,
};
