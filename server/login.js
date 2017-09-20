var querystring = require('querystring');
var list=[
	{
		username:'dingding',			
		password:'1234'			
	},
	{
		username:'李四',			
		password:'20144891'			
	},
	{
		username:'王五',			
		password:'20144892'		
	},
];
function login(req,res){
	var qStr='';
	req.addListener('data',function(dataPart){
		qStr+=dataPart;
	});
	req.addListener('end',function(){
		// 将客户端发过来的数据转换一个格式
		var temp =querystring.parse(qStr)
		// console.log(temp);
		//迭代服务器数据，如果用户输入的数据已在服务器，说明用户已注册，返回OK
		//如果用户输入的信息不在服务器，说明用户输入信息有误，返回false
		for(var i=0;i<list.length;i++){
			if(temp.username==list[i].username && temp.password==list[i].password){
				res.write('ok');
				res.end();
				return;
			}else {
				res.write('false');
				res.end();
				return;
			};
		}	
	});		
}
module.exports = login;
