const express = require('express');
const router = express.Router();

const Pictures = require('../models/Picture.model');

// GET API for Pictures -----------------------------------
router.get('/pictures', function (req, res, next) {
  Pictures.find()
    .then(pictures => res.json(pictures))
    .catch(next);
});

module.exports = router;