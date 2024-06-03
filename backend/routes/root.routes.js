const express = require("express");
const serverRoute = require("../controllers/root.controllers");

const router = express.Router();

router.get("/", serverRoute);

module.exports = router;
