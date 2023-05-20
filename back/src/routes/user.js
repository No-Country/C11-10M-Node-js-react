const { Router } = require("express");
const {
	findAllUsers,
	postUser,
	deleteUser,
	findUserByID,
} = require("../controllers/index.js");

const router = Router();

router.get("/", async (req, res) => {
	findAllUsers(req, res);
});

router.get("/:id", async (req, res) => {
	findUserByID(req, res);
});

router.post("/", async (req, res) => {
	postUser(req, res);
});

router.delete("/:id", async (req, res) => {
	deleteUser(req, res);
});

module.exports = router;
