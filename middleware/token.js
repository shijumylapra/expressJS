module.exports = function (req, res, next) {
  console.log("Creating Token");

  req._token = true;
  next();
};

