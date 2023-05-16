const { Router } = require("express");
const {
	findAllWages,
	findWageByID,
	deleteWage,
	postWage,
} = require("../controllers/index.js");

const router = Router();

router.get("/", async (req, res) => {
	findAllWages(req, res);
});

router.get("/:id", async (req, res) => {
	findWageByID(req, res);
});

router.post("/", async (req, res) => {
	postWage(req, res);
});

router.delete("/:id", async (req, res) => {
	deleteWage(req, res);
});

module.exports = router;
