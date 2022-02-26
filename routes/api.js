const express = require('express');
const router = express.Router();

const Pictures = require('../models/Picture.model');

// GET  /api/pictures     -  Get pictures feed to mapbox.
router.get('/pictures', function (req, res, next) {
  Pictures.find()
    .then(pictures => res.json(pictures))
    .catch(next);
});

module.exports = router;