const router = require('express').Router();
const fileUploader = require('../config/uploadConfig');
const Picture = require('../models/Picture.model');

// GET Main Feed View
router.get('/main-feed', (req, res) => {
  Picture.find()
    .then(imagesFromDb => {
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
  
  Picture.create({ image: imageUrl })
    .then(imagesFromDb => {
      console.log(imagesFromDb);
      res.redirect('/pictureApp/main-feed');
    })
    .catch(error => console.log(`Error while uploading a picture: ${error}`));
});


module.exports = router;