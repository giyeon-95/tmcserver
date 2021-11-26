const express = require("express");
const qnaCtr = require("../../controller/qnaCtr");
const router = express.Router();

router.get("/", qnaCtr.qnaList);
  
router.post("/create", qnaCtr.createQna);

module.exports = router;
