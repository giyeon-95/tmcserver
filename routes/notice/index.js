const express = require("express");
const noticeCtr = require("../../controller/noticeCtr");
const router = express.Router();

router.get("/", noticeCtr.noticeList);
  
router.post("/create", noticeCtr.createNotice);

module.exports = router;
