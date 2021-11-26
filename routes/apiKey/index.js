const express = require("express");
const keyCtr = require("../../controller/keyCtr");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("key register");
});

router.get("/mykey", keyCtr.mykey);
router.post("/bithumb", keyCtr.bithumb);
router.post("/upbit", keyCtr.upbit);
router.post("/coinone", keyCtr.coinone);
router.post("/korbit", keyCtr.korbit);
router.post("/binance", keyCtr.binance);
router.post("/huobi", keyCtr.huobi);
router.post("/bitfinex", keyCtr.bitfinex);
router.post("/bitflyer",  keyCtr.bitflyer);

module.exports = router;
