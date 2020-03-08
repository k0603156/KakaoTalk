const router = require("express").Router();

router.get("/", function(req, res, next) {
  res.json({ title: "Express" });
});

module.exports = router;
