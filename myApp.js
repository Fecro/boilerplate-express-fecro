// Modules
var express = require('express');
// Initialize Object
var app = express();
// Variables
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
app.get("/now", (req, res, next) => {
  req.time = new Date().toString();
  next();
}, (req, res) => {
  res.json({
    "time" : req.time
  });
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
