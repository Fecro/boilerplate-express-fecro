var express = require('express');
var app = express();
var absolutePath = __dirname + "/views/index.html";
var stylePath = __dirname + "/public";
app.use("/public", express.static(stylePath));
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});
app.get("/json", (req, res) => {
  res.json({
    "message": "Hello json"
  });
});




































 module.exports = app;
