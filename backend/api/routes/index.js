const express = require("express");
const router = express.Router();

router.post("/login", userController.login);
router.post("/search", movieController.search);

module.exports = router;
