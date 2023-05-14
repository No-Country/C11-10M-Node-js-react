const findAllEmployees = require("./employees/findAllEmployees");
const postEmployee = require("./employees/postEmployee");
const deleteEmployee = require("./employees/deleteEmployee");
const findEmployeeByID = require("./employees/findEmployeeByID");

module.exports = {
	findAllEmployees,
	postEmployee,
	deleteEmployee,
	findEmployeeByID,
};
