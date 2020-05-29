/* 引入swiper插件 */
window.onload = function(){
	/* 项目展示轮播 */
	 var swiper = new Swiper('#swiper4', {
		 autoHeight: true, 
	      speed:500,//自动滑动开始到结束的时间（单位ms）
	      loop:true,//开启循环
	      loopedSlides:3,//在loop模式下使用slidesPerview:'auto',还需使用该参数设置所要用到的loop个数。
	      observer: true,//实时检测，动态更新
		  slidesPerView:'auto',//设置slider容器能够同时显示的slides数量(carousel模式)。另外，支持'auto'值，会根据容器container的宽度调整slides数目。
	      effect:'coverflow',//可以实现3D效果的轮播
		  autoplay:{
			 delay:2000,
			disableOnInteraction:false
		  },
		  pagination: {
		    el: '.swiper-pagination',
			clickable :true,
			type: 'custom',
			renderCustom: function (swiper, current, total) {
						var paginationHtml = " ";
						for (var i = 0; i < total; i++) {
							// 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
							if (i === (current - 1)) {
								paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
							}else{
								paginationHtml += '<span class="swiper-pagination-customs"></span>';
							}						  
						}
						return paginationHtml;
					}
		   },//分页器
	      centeredSlides:true,//设定为true时，active slide会居中，而不是默认状态下的居左。
		  navigation: {
		      nextEl: '.swiper-button-next',
		      prevEl: '.swiper-button-prev',
		    },
	      coverflowEffect:{
	      rotate:0,//slide做3d旋转时Y轴的旋转角度。默认50。
	      stretch:50,//每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
	      depth:320,//slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
	      modifier:1,//depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显。默认1。
	      slideShadows:false,//开启slide阴影。默认 true。
	      },
	    });	
		$(".swiper-pagination").on("click","span",function(){
		    		var index = $(this).index();
		    		swiper.slideTo(index);
		    	})	
		/* 业务模板轮播 */	
			var myswiper = new Swiper('#swiper3',{
				 direction: 'horizontal', // 垂直切换选项
				  loop: true, // 循环模式选项
				  autoplay:{
				  			 delay:4000,
				  			disableOnInteraction:false
				  },
				  // 如果需要前进后退按钮
				      navigation: {
				         nextEl: '.swiper-button-next'
				      },
			})	
			/* 咨询模板轮播 */
			var myswiperOne = new Swiper('#swiper2',{
				direction: 'horizontal', // 垂直切换选项
				 loop: true, // 循环模式选项
				 autoplay:{
				 			 delay:2000,
				 			disableOnInteraction:false
				 },
				 pagination: {
				   el: '#swiper-pagination-information',
						clickable :true,
						type: 'bullets',
				
					bulletsClass:'my-bullet',//未选中样式
					bulletActiveClass:'my-bullet-active'
					
					}//分页器  
	
			})
	
		/* 缩略图banner */
		 var gallerySwiper = new Swiper('#gallery',{
			  loop:true,//开启循环
		      spaceBetween: 10,
		      thumbs: {
		        swiper: {
		          el: '#thumbs',
		          spaceBetween: 10,
		          slidesPerView: 1,
		          watchSlidesVisibility: true, /* 避免出现bug */
		        },
		        slideThumbActiveClass: 'swiper-slide-thumb-active',
		        thumbsContainerClass: 'swiper-container-thumbs',
		      },
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      }
		    })
		
	
}
