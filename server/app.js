var http = require('http');
var querystring=require('querystring');
var routers = require('./routers.js');
http.createServer(function(req,res){
	res.writeHeader(200,{
		'Access-Control-Allow-Origin':'*',
		'Access-Control-Allow-Methods':'POST,GET,PUT,DELETE,OPTIONS',
		'Access-Control-Allow-Headers':'Content-Type',
	});
	routers(req,res)
	
}).listen(8080);
console.log('server is running at 8080 port...')