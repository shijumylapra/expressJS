const _express = require("express");
const { urlencoded } = require("express");
const app = _express();
//middleware convert data to json the parse
app.use(_express.json());
app.use(urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "views", "index.html"));
// });
app.use(_express.static("views"));
const emailDB = "shiju@gmail.com";
const passDB = "123";

app.post("/login", (req, res) => {
  //restructure email and password  from req.body
  const { email, password } = req.body;

  if (email === emailDB && password === passDB) {
    res.send("Login Scucessfull");
  } else {
    res.send("Login Failed");
  }
});

const PORT = process.env.PORT || "3007";
app.listen(PORT, (err) => {
  if (err) throw err;
});
