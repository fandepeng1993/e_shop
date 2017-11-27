(function($){

	$(function(){
		$('#distpicker1').distpicker({
            autoSelect: true,
            placeholder:true
        });
		$('.mem-right-ul li').click(function () {
	        $(this).addClass('active').siblings().removeClass('active');
	        $('.mem-right-ul-l>li').eq($(this).index()).addClass('ACtive').siblings().removeClass('ACtive')
	    });
	    $(".main-products input:checkbox").click(function(){
	    	$(this).replaceWith("<i class='iconfont icon-queren'></i>");
		    $(".icon-queren").click(function(){
	    		$(this).replaceWith("<input type='checkbox' />")
	    	})
	    });
	    $(".icon-queren").click(function(){
	    	$(this).replaceWith("<input type='checkbox' />");
		    $(".main-products input:checkbox").click(function(){
	    		$(this).replaceWith("<i class='iconfont icon-queren'></i>")
	    	})
	    });
	})
})(jQuery)