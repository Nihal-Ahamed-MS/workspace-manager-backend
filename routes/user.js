const { getUser } = require("../controllers/user");

const router = require("express").Router();

router.post("/user", getUser);

module.exports = router;
