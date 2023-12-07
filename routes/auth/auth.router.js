const express = require("express");
const router = express.Router();

const { loginPage, login, logout } = require("./auth.controller");

router.route("/login").get(loginPage);
router.route("/login").post(login);
router.route("/logout").get(logout);

module.exports = router;
