var http = require("http");
var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});
app.post("/test",function(req,res){
    res.sendFile(__dirname + "/reply.html");
    console.log("THIS IS POST");
});

app.listen("1234");