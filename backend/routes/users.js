const router = require("express").Router();

router.get("/", function(req, res, next) {
  res.json("respond with a resource");
});

module.exports = router;
