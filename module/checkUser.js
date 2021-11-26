const checkUser = (req, res, next) => {
  // console.log(req.cookies);
  const token = req.headers.access_token;

  if (!token) {
    res.json({
      status: 404,
    });
    return;
  } else {
    return next();
  }
};

module.exports = checkUser;
