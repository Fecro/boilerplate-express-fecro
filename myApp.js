var express = require('express');
var app = express();
var absolutePath = __dirname + "/views/index.html";
var stylePath = __dirname + "/public";
app.use("*", (req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});
app.use("/public", express.static(stylePath));
app.get("/", (req, res) => {
  res.sendFile(absolutePath);
});
app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE==="uppercase"){
    res.json({
      "message": "HELLO JSON"
    });
  } else {
    res.json({
      "message": "Hello json"
  });
  }
});




































 module.exports = app;
