const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// POST /auth/login
router.post("/signin", authController.login);
router.post("/signup", authController.signup);

module.exports = router;
