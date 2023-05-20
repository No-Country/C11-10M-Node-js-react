const { Router } = require("express");
const router = Router();

const employees = require("./employee.js");
const wages = require("./wage.js");
const users = require("./user.js");

router.use("/employees", employees);
router.use("/wages", wages);
router.use("/users", users);

module.exports = router;
