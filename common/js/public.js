$(document).ready(function(){
	// 头部样式优化
    var width = $("body").width();
    if(width <= 1366){
    	$("body").addClass("smallScreen");
    }
    if(width <= 1600){
    	$("body").addClass("middleScreen");
    }
    if(width < 1920){
    	$("body").addClass("largeScreen");
    }
})
