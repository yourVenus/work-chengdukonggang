$(function(){
	$('#news1').click(function(){
	
		$('#active').remove()
		var span = $("<span>");
		span.attr('id','active');
		$("#news1").append(span)
		$(this).css('background-color','#e16910')
		$('#news2').css('background-color','#1063b4')
		$('.list-information').animate({
			left:'0',
			opacity:'1'
		})
		$('.list-information-two').animate({
			left:'-454px',
			opacity:'0'
		})
	})
	$('#news2').click(function(){
		
		$('#active').remove()
		var span = $("<span>");
		span.attr('id','active');
		$("#news2").append(span)
		$(this).css('background-color','#e16910')
		$('#news1').css('background-color','#1063b4')
		$('.list-information-two').animate({
			left:'0',
			opacity:'1'
		})
		$('.list-information').animate({
			left:'-454px',
			opacity:'0'
		})
	})
	
	
	!function(e) {
	    function t() {
	        e.rem = d.getBoundingClientRect().width / 16, d.style.fontSize = e.rem + "px";
	    }
	    var n, 
	        i = e.navigator.appVersion.match(/iphone/gi) ? e.devicePixelRatio :1, 
	        a = 1 / i, 
	        d = document.documentElement, 
	        o = document.createElement("meta");
	    if (e.dpr = i, 
	        e.addEventListener("resize", function() {
	        clearTimeout(n), n = setTimeout(t, 300);
	    }, !1), 
	        e.addEventListener("pageshow", function(e) {
	        e.persisted && (clearTimeout(n), n = setTimeout(t, 300));
	    }, !1), 
	        d.setAttribute("data-dpr", i), o.setAttribute("name", "viewport"), 
	        o.setAttribute("content", "initial-scale=" + a + ", maximum-scale=" + a + ", minimum-scale=" + a + ", user-scalable=no"), d.firstElementChild) 
	        d.firstElementChild.appendChild(o); 
	    else {
	        var m = document.createElement("div");
	        m.appendChild(o), document.write(m.innerHTML);
	    }
	    t();
	}(window), document.addEventListener("DOMContentLoaded", function() {
	    var e = document.createElement("input");
	    e.type = "hidden", 
	    e.value = '{"platform": "qq_qzone_weixin_weibo_copy","title":"","desc": "","image":"","comment": "", "url":"","callback":"shareCallback()"}', 
	    e.id = "app_share_conf", document.getElementsByTagName("body")[0].appendChild(e);
	}, !1);
})