const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/authController");

router.post("/signIn", AuthController.signin);

router.post("/signUp", AuthController.signup);

router.get("/", AuthController.check);

module.exports = router;
