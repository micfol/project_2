const router = require('express').Router();
const fileUploader = require('../config/uploadConfig');
const Picture = require('../models/Picture.model');
const User = require('../models/User.model');

// GET Main Feed View
router.get('/main-feed', (req, res) => {
  Picture.find()
    .then(imagesFromDb.sort({ createdAt: -1 }) => {
      res.render('pictureApp/main-feed', { image: imagesFromDb, userInSession: req.session.currentUser, accessToken: process.env.MAPBOXGL_ACCESSTOKEN });
    })
    .catch(err => console.log(`Error while getting the images from the DB: ${err}`));
});

// GET Add Photo View
router.get('/add-photo', (req, res) => {
      res.render('pictureApp/add-photo', { userInSession: req.session.currentUser });
});

// POST Add Photo Route
router.post('/add-photo', fileUploader.single('image'), (req, res) => {
  const imageUrl = req.file.path;
  const { lattitude, longitude, location, description } = req.body;
  const userId  = req.session.user._id;
  
  Picture.create({ image: imageUrl, lattitude, longitude, location, description, author: userId })
    .then(imagesFromDb => {
      return imagesFromDb;
    })
    .then(pictureData => {
      const pictureId = pictureData._id.toString()
      const userId = req.session.user._id
      console.log('userId :>> ', userId);
      User.findByIdAndUpdate(userId, { $push: { pictureEntries: pictureId } })
      .then(doesntmatter => res.redirect('/pictureApp/main-feed'));
      
    })
    .catch(error => console.log(`Error while uploading a picture: ${error}`));
});

// GET Delete Photo Route
// "/pictureEntries/{{_id}}/delete"
router.get('/:Id/delete', (req, res, next) => {
  const pictureId  = req.params.Id;
  Picture.findByIdAndDelete(pictureId)
    .then(() => res.redirect('/user/profile'))
    .catch(error => next(error));
});

module.exports = router;