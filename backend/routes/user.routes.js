const express = require("express");
const { registerUser, getMe, loginUser } = require("../controllers/user.controllers");
const { protect } = require("../middlewares/auth.middleware");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe);

module.exports = router;
