const { Router } = require("express");
const router = Router();

const employees = require("./employee.js");

router.use("/employees", employees);

module.exports = router;
