var store = new Vuex.Store({
	state:{
		isShow:false,
		msg:'true',
		url:'http://localhost:8080/',
	},
	getters:{},
	mutations:{
		open:function(state){
			state.isShow=true;
			
		},
		close:function(state){
			state.isShow = false;
		}
	},
	actions:{},
});
