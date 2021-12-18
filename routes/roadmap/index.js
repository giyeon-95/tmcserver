const express = require("express");
const roadmapCtr = require("../../controller/raodmapCtr");
const router = express.Router();

router.get("/", roadmapCtr.roadmapList);
  
router.post("/create", roadmapCtr.createRoadmap);

module.exports = router;
