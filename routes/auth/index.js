const express = require("express");
const authCtr = require("../../controller/authCtr");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("TMC authentication");
});

router.get("/register", (req, res, next) => {
  res.send("TMC register");
});

router.get("/login2", (req, res, next) => {
  res.send("TMC login");
});

router.post("/register", authCtr.register);
router.post("/login2", authCtr.login);
router.get("/logout", authCtr.logout);
router.post("/changepw", authCtr.changePW);
router.get("/mypage", authCtr.mypage);
router.post("/grading", authCtr.grading);
router.get("/userinfo", authCtr.userInfo);

module.exports = router;
