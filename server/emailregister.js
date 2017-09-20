var querystring = require('querystring');
var config=[
	{
		email:'1332600421@qq.com',
		password:'123456'
	}
];
function emailregister(req,res){
	var qStr='';
	req.addListener('data',function(dataPart){
		qStr+=dataPart;
	});
	req.addListener('end',function(){
		// 将客户端发过来的数据转换一个格式
		var temp =querystring.parse(qStr)
		console.log(temp)
		// 迭代服务器数据，如果用户输入的数据服务器已存在则返回注册失败结果，否则返回注册成功，并保存这些数据
		for(var i=0;i<config.length;i++){
			if(temp.email==config[i].email){			
				res.write('false');
				res.end();
				return;	
				}				
			}
			res.write('ok');
			res.end();	
			config.push(temp);  //保存数据
			return;
	});		
}
module.exports = emailregister;