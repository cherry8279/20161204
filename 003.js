var http = require("http");
var express = require("express");
var app = express();
//var server = http.createServer(app);

app.get("/",function(req,res){
//    res.send("HELLO");
    res.sendFile(__dirname + "/index.html");
//    res.end();
})
//server.listen(8888);
app.listen(8888);