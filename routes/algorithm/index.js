const express = require("express");
const algorithmCtr = require("../../controller/algorithmCtr");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("algorithm");
});

router.get("/myalgo", algorithmCtr.myalgo);
router.post("/myalgo", algorithmCtr.algoSave);


module.exports = router;
