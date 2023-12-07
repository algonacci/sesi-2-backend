const express = require("express");
const router = express.Router();

const { getIndexPage } = require("./index.controller");

router.route("/").get(getIndexPage);

module.exports = router;
