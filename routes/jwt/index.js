const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.get("/", async (req, res, next) => {
  const token = req.headers.access_token;
  let isAuthenticated = null;

  if (!token) {
    isAuthenticated = {};
    res.status(200).json({
      status : 200 ,
      result : true,
      msg : "no token",
      isAuthenticated : isAuthenticated,
    });
    return;
  }else{
    try {
      const decoded = jwt.verify(token, "tmctmc");
  
      req.userInfo = {
        _id: decoded._id,
        useremail: decoded.useremail,
      };
      isAuthenticated = { useremail: decoded.useremail };
      res.send(isAuthenticated);
      return;
    } catch (error) {
      res.status(500).send("jwt error!");
    }
  }

});

module.exports = router;
