//*employees
const findAllEmployees = require("./employees/findAllEmployees");
const postEmployee = require("./employees/postEmployee");
const deleteEmployee = require("./employees/deleteEmployee");
const findEmployeeByID = require("./employees/findEmployeeByID");

//*wages
const deleteWage = require("./wage/deleteWage");
const findAllWages = require("./wage/findAllWage");
const findWageByID = require("./wage/findWageByID");
const postWage = require("./wage/postWage");

//*users
const findAllUsers = require("./user/findAllUsers");
const findUserByID = require("./user/findUserByID");
const postUser = require("./user/postUsers");
const deleteUser = require("./user/deleteUser");

module.exports = {
	findAllEmployees,
	postEmployee,
	deleteEmployee,
	findEmployeeByID,
	deleteWage,
	findAllWages,
	findWageByID,
	postWage,
	findAllUsers,
	findUserByID,
	postUser,
	deleteUser,
};
