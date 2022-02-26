const router = require("express").Router();

/* GET Home Page View */
router.get("/", (req, res, next) => {
  res.render("index");
});

module.exports = router;
