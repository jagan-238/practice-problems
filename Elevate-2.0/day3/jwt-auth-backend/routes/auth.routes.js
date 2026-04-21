const express = require("express");
const router = express.Router();

const { signup, login } = require("../controllers/auth.controller");
const { verifyToken } = require("../middleware/auth.middleware");

// public routes
router.post("/signup", signup);
router.post("/login", login);

// protected route
router.get("/profile", verifyToken, (req, res) => {
  res.json({ message: "Welcome user", userId: req.user.id });
});

module.exports = router;