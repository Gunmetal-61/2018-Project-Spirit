const express = require("express");
const router = express.Router();
const passport = require("../passport/passport_local");

// middleware
router.use(passport.passport.initialize());
router.use(passport.passport_local);

router.post("/", (req, res) => {
  console.log("login success");
  res.send("login success");
});

module.exports = router;
