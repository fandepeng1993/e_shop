(function ($) {
    $(function () {
        $('#distpicker1').distpicker({
            autoSelect: true,
            placeholder:true
        });
        $(".add-new-addr").click(function () {
        	$(".add-addr").show("");
        });
        $(".addr-top-right .icon-guanbi").click(function () {
        	$(".add-addr").hide();
        });
        $(".gouwuche").click(function(){
            window.location.href = "../../ShoppingCart/index.html";
        });
        $(".back-shopping-cart").click(function(){
            window.location.href = "../../ShoppingCart/index.html"
        })
    });
})(jQuery)