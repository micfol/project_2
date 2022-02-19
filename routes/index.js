const router = require("express").Router();

/* GET Home Page View */
router.get("/", (req, res, next) => {
  res.render("index");
});

// // GET Signup View
// router.get("/signup", (req, res) => {
//   res.render("auth/signup");
// });

// // GET Login View
// router.get("/login", (req, res) => {
//   res.render("auth/login");
// });

// // GET User-Profile View
// router.get("/userProfile", (req, res) => {
//   res.render("users/user-profile", { userInSession: req.session.currentUser });
// });

module.exports = router;
