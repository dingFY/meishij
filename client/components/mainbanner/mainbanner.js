Vue.component('mainbanner',{
	template:'#mainbanner',

})

var curIndex=0;
var handle= null;
function changeImg(nextIndex){
	var imgs=tag('img',id('imgs'));
	var lis=tag('li',id('m_banner'));
	imgs[curIndex].className='hide';
	imgs[nextIndex].className='show';
	lis[curIndex].className='';
	lis[nextIndex].className='active';
	curIndex=nextIndex;
}
function autoChange(){
	var imgs=tag('img',id('imgs'));
	var nextIndex=curIndex+1>=imgs.length? 0:curIndex+1;
	changeImg(nextIndex);

}
window.onload = function(){
	
	handle=setInterval(autoChange,5000);
	id('m_banner').onmouseover= function(){
		clearInterval(handle);
	}
	id('m_banner').onmouseout= function(){
		handle=setInterval(autoChange,5000);
	}
	var lis=tag('li',id('m_banner'));
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick = function(){
			changeImg(this.index);
		};
	}
};