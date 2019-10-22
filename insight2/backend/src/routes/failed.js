const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("failed to auth");
  res.send("failed to auth");
});

module.exports = router;
