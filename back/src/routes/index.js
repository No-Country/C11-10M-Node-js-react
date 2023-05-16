const { Router } = require("express");
const router = Router();

const employees = require("./employee.js");
const wages = require("./wage.js");

router.use("/employees", employees);
router.use("/wages", wages);

module.exports = router;
