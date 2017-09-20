
//jS方法
   var img = document.getElementsByTagName("img");
   var num=img.length;
   var n = 0; //存储图片加载到的位置，避免每次都从第一张图片开始遍历
   lazyload(); //页面载入完毕加载可是区域内的图片
   window.onscroll = lazyload;
   function lazyload() { //监听页面滚动事件
       var seeHeight = document.documentElement.clientHeight; //可见区域高度
       // console.log(document.getElementsByClassName('test')[0].scrollTop);
       var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
       for (var i = 0; i <num; i++) {
           if (img[i].offsetTop < scrollTop+seeHeight-300){
               if (img[i].getAttribute("src") == "") {
                   img[i].src = img[i].getAttribute("data-src");
               }
               n = i + 1;
           }                     
       }
   } 
// 
// // jQ方法
// var n = 0, imgNum = $("img").length, img = $('img');
//     lazyload();
//     $(window).scroll(lazyload);
//     function lazyload(event) {
//         for (var i = n; i < imgNum; i++) {
//             if (img.eq(i).offset().top < parseInt($(window).height()) + parseInt($(window).scrollTop())) {
//                 if (img.eq(i).attr("src") == "") {
//                     var src = img.eq(i).attr("data-src");
//                     img.eq(i).attr("src", src);
//                     n = i + 1;
//                 }
//             }
//         }
//     }

// function a(){
// 	$('html, body').animate({ scrollTop: 0 }, 'fast');
// }
