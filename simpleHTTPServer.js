var http = require('http');
var mylib = require('./mylibrary.js');

http.createServer(function (req,res){
	res.writeHead(200,{"Content-Type":"text/html"});
	res.write("Hello World<br/>");
	res.write(mylib.method1() + "<br/>");
	res.write(mylib.method2() + "<br/>");	
	res.end();
}).listen(4000);

console.log("http server running...");