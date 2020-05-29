/*  */
function tabs(obj,swiperObj,className) {
    var tabSwiper = new Swiper(swiperObj, {
       direction: 'horizontal', // 
        loop: true, // 循环模式选项
        autoHeight: true, // 高度随内容变化
		// navigation: {
		//   prevEl: '.swiper-button-prev',
		// }
		
        onSlideChangeStart : function() {
            $(obj+"."+className).removeClass(className); /*有当前类名的删除类名,给下一个添加当前类名*/
            $(obj).eq(tabSwiper.activeIndex).addClass(className);/*activeIndex是过渡后的slide索引*/
        }
    });
    // 模拟点击事件，如果是移入事件，将mousedown 改为 mouseenter
    $(obj).on('touchstart mousedown', function(e) {
        e.preventDefault();/*清除默认事件*/
        $(obj+"."+className).removeClass(className);
        $(this).addClass(className); /*点击当前导航 改变当前样式*/
        tabSwiper.slideTo($(this).index());/*滑动到对应的滑块*/
    });
    $(obj).click(function(e) {
        e.preventDefault();/*清除默认点击事件*/
    });
	// swiperObj.navigation.$prevEl.on('click',function(e){
	// 	alert()
	// 	  $(obj).eq($(this).index()).addClass(className);
	// })
}



 /*swiper选项卡切换*/
    $(function () {
      //swiperTab 是你导航的className,active是你当前状态的className
        $('.content-business-exhibition-bottom> p').eq(0).addClass('active-business');
        tabs('.content-business-exhibition-bottom> p','#swiper3','active-business');
		
    });