$(function() {
	// 标题信息切换
	// $(".mem-right-ul li").click(function() {
	// 	$(this).addClass("active").siblings().removeClass("active");
	// })
	var numCo = $(".mem-Con");
	$.each(numCo, function(i) {
		$(".mem-right-ul li").eq(i).click(function(){
			$(this).addClass("active").siblings().removeClass("active");
			numCo.eq(i).addClass("active").siblings().removeClass("active");
		})
	})
})