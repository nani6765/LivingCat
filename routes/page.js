var router = require("express").Router();

router.get("/0", (req, res) => {
  res.render("page/0.ejs", {});
});

module.exports = router;
