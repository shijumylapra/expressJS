const express = require("express");

// //store express method into app varable

const app = express();
const path = require("path");
const { runInNewContext } = require("vm");

const Token = require("../middleware/token");
const Validation = require("../middleware/validation");

const _middleware = [Token, Validation];
// // app.get("/", (req, res) => {
// //   res.send("<h1>Home</h1>");
// //   //res.json("<h1>Home</h1>");
// // });
// // app.get("/Contact", (req, res) => {
// //   //res.send("<h1>Home</h1>");
// //   res.json("<h1>Contact</h1>");
// // });
// // app.get("/About", (req, res) => {
// //   //res.send("<h1>Home</h1>");
// //   res.json("<h1>About</h1>");
// // });

// // app.get("*", (req, res) => {
// //   //   res.status(404);
// //   //     res.send("<h1>404</h1>");
// //   //chaining method
// //   res.status(404).send("<h1>404</h1>");
// // });

// // app.get("/", (req, res) => {
// //   res.sendFile(path.join(__dirname, "views", "index.html"));
// //   //res.json("<h1>Home</h1>");
// // });
// // app.get("/Contact", (req, res) => {
// //   res.sendFile(path.join(__dirname, "views", "contact.html"));
// // });

// // app.get("*", (req, res) => {
// //   //   res.status(404);
// //   //     res.send("<h1>404</h1>");
// //   //chaining method
// //   res.status(404).send("<h1>404</h1>");
// // });

// // const PORT = process.env.PORT || 3002;

// // app.listen(PORT, () => {
// //   console.log(`Server running on ${PORT}`);
// // });
// //automatic content type is text/html
// //if you need it to json format change to res.json("<h1>Home</h1>");

// //Custom middileware
// //middleware is a function ake three parameters
// //its act as a middle man
// const token = "123";

//or

// app.get(
//   "/about",
//   Token,
//   Validation,
//   (req, res, next) => {
//     console.log("User Logged");
//     res.send("<h1>Succes</h1>");
//     next();
//   },
//   (req, res, next) => {
//     console.log("second Last middleware");
//     next();
//   },
//   (req, res) => {
//     console.log("Last middleware");
//   }
// );

// function Token(req, res, next) {
//   console.log("Creating Token");

//   //req is an object we can create a proprty in req object
//   // eg:
//   // req.username = "Shiju Media";
//   // console.log(req);

//   setInterval(() => {
//     const TOKEN = "005";
//     req._token = TOKEN;
//     next();
//   }, 1000);
// }
// function Validation(req, res, next) {
//   if (req._token) {
//     console.log("Token approved");
//     //console.log(req.url);

//     next();
//   }
// }

// app.get("/about", ..._middleware, (req, res, next) => {
//   console.log("User Logged");
//   res.send("<h1>Succes</h1>");
//   next();
// });

//we need to call everytime one middleware eg:homepage
//that case use application level middileware

//app.use always top middleware
app.use(Dategenerator);

app.get("/about", ..._middleware, (req, res, next) => {
  console.log("User Logged");
  res.send("<h1>Succes</h1>");
  next();
});

function Dategenerator(req, res, next) {
  console.log(new Date());
  next();
}

// sum = (a, b) => {
//   console.log(a + b);
// };
// sum(1, 2);

const PORT = process.env.PORT || 3001;
app.listen(PORT);
