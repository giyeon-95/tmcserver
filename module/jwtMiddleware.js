const jwt = require("jsonwebtoken");
const secretKey = require('../config/secretKey.json');

const jwtMiddleware = async (req, res, next) => {
  const token = req.headers.access_token;
  let isAuthenticated = null ;

  if (!token) {
    isAuthenticated = {}
    res.send(isAuthenticated) ;
    return ;
  }else{
    try {
      const decoded = jwt.verify(token, secretKey.key);
      req.userInfo = {
        _id: decoded._id,
        useremail: decoded.useremail,
      };
      isAuthenticated = { useremail: decoded.useremail };
      console.log('authen', isAuthenticated);
      res.send(isAuthenticated);
      return next();
    } catch (error) {
      res.json({
        status: 200,
        result: false,
        msg: "no token",
      });
    }
  }
};

module.exports = jwtMiddleware;
