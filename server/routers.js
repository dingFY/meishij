function routers(req,res){
	console.log(req.url)
	switch(req.url){
		case '/login':
			var login= require('./login.js')
			login(req,res); 
			break;
		case '/phoneregister':
			var phoneregister = require('./phoneregister.js')
			phoneregister(req,res); 
			break;
		case '/emailregister':
			var emailregister = require('./emailregister.js')
			emailregister(req,res); 
			break;
		default:break;
	}
}
module.exports = routers;