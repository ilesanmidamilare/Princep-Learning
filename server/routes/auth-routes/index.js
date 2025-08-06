const express = require("express");
const {
  registerUser,
  loginUser,
} = require("../../controllers/auth-controller/index");
const authenticateMiddleware = require("../../middleware/auth-middleware");
const User = require("../../models/User");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/check-auth", authenticateMiddleware, (req, res) => {
  const user = req.user;

  res.status(200).json({
    success: true,
    message: "Authenticated user!",
    data: {
      user,
    },
  });
});

// Debug route to check users (remove in production)
router.get("/debug/users", async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 }); // Exclude password
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Debug route to clear all users (remove in production)
router.delete("/debug/clear-users", async (req, res) => {
  try {
    await User.deleteMany({});
    res.json({ success: true, message: "All users cleared" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
