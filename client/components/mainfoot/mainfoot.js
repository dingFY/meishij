Vue.component('mainfoot',{
	template:'#mainfoot',
	data:function(){
		return {
			data:[
					['中国,最大的菜谱库 ','每月，用户访问数量 ','每年，菜谱被浏览量 '],
					['800,000 篇','20,000,000 次','36,000,000,000 次'],
					['现在，这些数字还在不断的增长着，欢迎您来一起使用美食杰'],
				],
			icon:[
					{image:'components/mainfoot/img/weibo.png',icon1:'点击进入',icon2:'美食杰官方微博'},
					{image:'components/mainfoot/img/qq.png', icon1:'点击进入', icon2:'美食杰QQ空间'},
					{image:'components/mainfoot/img/weixin.png',icon1:'扫描二维码添加', icon2:'美食杰为微信好友'},
					{image:'components/mainfoot/img/client.png', icon1:'扫描二维码下载', icon2:'美食杰手机客户端'}
				],
			links:['美食','体质测试','伊特','大粤网美食','9酷音乐网','123菜谱大全','爱奇艺生活','365音乐网','图吧','汽车论坛','39健康饮食','QQ下载','家具网','搜狐美食','美食天下','特色菜网','poco美食网','中华美食网','合肥公交网','苹果园','红餐微杂志','北京搜房网','东莞赶集网','厨师网','铲土官','更多友情链接'],
			business:['公司简介', '企业文化', '公司动态', '免责声明','联系我们', '招贤纳士', '商务合作', '网站地图' ,'友情链接' ,'美食杰移动APP'],		
				
		}
	}
})











