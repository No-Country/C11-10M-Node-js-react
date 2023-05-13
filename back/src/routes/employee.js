const { Router } = require("express");
const { findAllEmployees, postEmployee } = require("../controllers/index.js");

// const {} = require("../controllers/index");

const router = Router();

router.get("/", async (req, res) => {
	findAllEmployees(req, res);
});

router.post("/", async (req, res) => {
	postEmployee(req, res);
});

module.exports = router;
