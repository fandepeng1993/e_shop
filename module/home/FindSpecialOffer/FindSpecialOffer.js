$(document).ready(function() {
	// 笔记本屏	

	var titleLength = $("#title li");
	for (var i = 0; i < titleLength.length; i++) {
		titleLength.eq(i).click(function(){
			$(this).addClass("active").siblings().removeClass("active");
		})
	}
})