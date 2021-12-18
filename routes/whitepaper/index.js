const express = require("express");
const whitepaperCtr = require("../../controller/whitepaperCtr");
const router = express.Router();

router.get("/", whitepaperCtr.whitepaperList);
  
router.post("/create", whitepaperCtr.createWhitepaper);

module.exports = router;
