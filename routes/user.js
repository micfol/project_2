const router = require("express").Router();

// GET User Profile View
router.get("/profile", (req, res) => {
  res.render("user/profile", { userInSession: req.session.currentUser });
});

// GET Edit Profile View
router.get("/edit-profile", (req, res) => {
  res.render("user/edit-profile", { userInSession: req.session.currentUser });
});

module.exports = router;