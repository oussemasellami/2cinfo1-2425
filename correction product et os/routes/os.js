var express = require("express");
var router = express.Router();
var os = require("os");
router.get("/", function (req, res) {
  res.json({
    hostname: os.hostname(),
    type: os.type(),
    paltform: os.platform(),
  });
});

router.get("/cpus", function (req, res) {
  res.json({
    cpus: os.cpus(),
  });
});

router.get("/cpus/:id", function (req, res) {
  const { id } = req.params;
  res.json({
    cpus: os.cpus()[id],
  });
});

module.exports = router;
