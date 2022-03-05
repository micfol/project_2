const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Picture = require('../models/Picture.model');
const User = require("../models/User.model");

// GET User Profile View -----------------------------------
router.get("/profile", isLoggedIn, (req, res, next) => {
  User.findById(req.session.user._id)
    .populate('pictureEntries')
    .then(loggedInUser => {
      res.render('user/profile', { loggedInUser });
    })
    .catch(error => next(error));
});

// GET Edit Profile View -----------------------------------
router.get("/edit-profile", isLoggedIn, (req, res, next) => {
  const userId  = req.session.user._id;
  User.findById(userId)
    .then(userDataToEdit => {
      res.render('user/edit-profile', { user: userDataToEdit });
    })
    .catch(error => next(error));
  ;
});

// POST Edit Profile Changes -----------------------------------
router.post('/edit-profile/:userId/edit', (req, res, next) => {
  const { userId } = req.params;
  const { username, bio } = req.body;

  User.findByIdAndUpdate(userId, { username, bio }, { new: true })
    .then(updatedUserData => res.redirect("/user/profile")) 
    .catch(error => next(error));
});

module.exports = router;