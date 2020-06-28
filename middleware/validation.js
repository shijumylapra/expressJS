function Validation(req, res, next) {
  if (req._token) {
    console.log("Token approved");
    //console.log(req.url);
    next();
    return;
  }
  console.log("No Token");
  res.send("<h1>No Auth </h1>");
}
module.exports = Validation;
