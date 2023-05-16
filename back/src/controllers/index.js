const findAllEmployees = require("./employees/findAllEmployees");
const postEmployee = require("./employees/postEmployee");
const deleteEmployee = require("./employees/deleteEmployee");
const findEmployeeByID = require("./employees/findEmployeeByID");
const deleteWage = require("./wage/deleteWage");
const findAllWages = require("./wage/findAllWage");
const findWageByID = require("./wage/findWageByID");
const postWage = require("./wage/postWage");

module.exports = {
	findAllEmployees,
	postEmployee,
	deleteEmployee,
	findEmployeeByID,
	deleteWage,
	findAllWages,
	findWageByID,
	postWage
};
