const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
dotenv.config();

// const {} = require("./models/index");

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

const db = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
	{
		logging: false, // set to console.log to see the raw SQL queries
		native: false, // lets Sequelize know we can use pg-native for ~30% more speed
	}
);

// Activities(db);

// const { activities, blog, client, trainer } = db.models;

// activities.belongsToMany(client, { through: "ActivitiesClient" });
// client.belongsToMany(activities, { through: "ActivitiesClient" });

// trainer.belongsToMany(activities, { through: "ActivitiesTrainer" });
// activities.belongsToMany(trainer, { through: "ActivitiesTrainer" });

// trainer.hasMany(blog);
// blog.belongsTo(trainer);

module.exports = {
	// ...db.models,
	conn: db,
};
