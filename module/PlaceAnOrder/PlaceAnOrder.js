(function($){
	$(function(){
		if((screen.availWidth < 1920)) {
			$(".pdList span").css("font-size","12px");
			$(".needBorder").css("height","28px");
			$(".needBorder").css("line-height","28px");

			$(".needListStyle li").css("font-size","12px");
			$(".needListStyle li").css("overflow","hidden");
			$(".needListStyle li").css("white-space","nowrap");
			$(".needListStyle li").css("text-overflow","ellipsis");

			$(".smartImg span").css("margin-left","0")
		} 

		var t = $(".count-input");
		$(".reduce").click(function(){
			if(parseInt(t.val()) > 1) {
				t.val(parseInt(t.val()) - 1);
			} else {
				$(".reduce").attr("disabled","disabled");
			}
		})
		$(".add").click(function(){
			t.val(parseInt(t.val()) + 1);
			$(".reduce").removeAttr("disabled");
		})

		$(".gouwuche").click(function(){
            window.location.href = "../ShoppingCart/index.html";
        })
	})
})(jQuery)