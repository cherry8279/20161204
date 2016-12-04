var http = require("http"); //內建模組
//function裡面的屬性 要求,回應
var server = http.createServer(function(req,res){
//    res.writeHead(200,{"Content-Type":"text/plain"});
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<h1>HELLO NODE!!!!</h1>");
    res.end();
});
server.listen(3333);