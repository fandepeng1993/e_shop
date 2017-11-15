(function($){
	$(function(){

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

		$(".immediate-settlement").click(function(){
			window.location.href = "../ConfirmOrderInformation/index.html"
		})
	})
})(jQuery)