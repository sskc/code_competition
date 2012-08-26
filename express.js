var express = require('express');
var server = express.createServer();

server.get('/',function(req,res){
	console.log("hello world");
	res.end();
});

var port=4000;
server.listen(port);
console.log("express server running...");