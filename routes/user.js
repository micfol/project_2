const router = require("express").Router();
const User = require("../models/User.model");

// GET User Profile View
router.get("/profile", (req, res) => {
  res.render("user/profile", { userInSession: req.session.currentUser });
});

// GET Edit Profile View
router.get("/edit-profile", (req, res) => {
  const userId  = req.session.user._id;
  User.findById(userId)
    .then(userDataToEdit => {
      res.render('user/edit-profile', { user: userDataToEdit });
    })
    .catch(error => next(error));
  ;
});

// POST Edit Profile Changes
router.post('/edit-profile/:userId/edit', (req, res, next) => {
  const { userId } = req.params;
  const { username, bio } = req.body;

  User.findByIdAndUpdate(userId, { username, bio }, { new: true })
    .then(updatedUserData => res.redirect("/user/profile")) 
    .catch(error => next(error));
});

module.exports = router;