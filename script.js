const _express = require("express");
const app = _express();
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

const PORT = process.env.PORT || "3007";
app.listen(PORT, (err) => {
  if (err) throw err;
});
