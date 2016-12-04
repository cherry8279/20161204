var http = require("http");
var express = require("express");
var app = express();

//自訂靜態路由 網址變成1234/about/index.html  去抓/public裡面的檔案
app.use("/about",express.static(__dirname + "/public"));
app.use("/Portfolio",express.static(__dirname + "/gallery"));

app.listen("1234");