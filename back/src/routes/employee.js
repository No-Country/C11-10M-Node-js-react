const { Router } = require("express");
const {
	findAllEmployees,
	postEmployee,
	deleteEmployee,
	findEmployeeByID,
} = require("../controllers/index.js");

const router = Router();

router.get("/", async (req, res) => {
	findAllEmployees(req, res);
});

router.get("/:id", async (req, res) => {
	findEmployeeByID(req, res);
});

router.post("/", async (req, res) => {
	postEmployee(req, res);
});

router.delete("/:id", async (req, res) => {
	deleteEmployee(req, res);
});

module.exports = router;
