const router = require("express").Router();

// GET Main Feed View
router.get("/main-feed", (req, res) => {
  res.render("pictureApp/main-feed", { userInSession: req.session.currentUser });
});

// GET User Profile View
router.get("/add-photo", (req, res) => {
  res.render("pictureApp/add-photo", { userInSession: req.session.currentUser });
});

module.exports = router;