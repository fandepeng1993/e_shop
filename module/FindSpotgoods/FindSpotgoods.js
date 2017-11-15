
(function ($) {
    $(function () {
        $('.searchCompany').click(function () {
            window.location.href = "searchCompany/index.html";
        })
        $("#zlCalculator").click(function(){
            $(".calculator-hide-show").show('slow');
        })

        $(".chs-top-close").click(function(){
            $(".calculator-hide-show").hide('slow');
        })

        $(".calculator-bottom").click(function(){
            $(".yl-calculator").show('slow');
        })

        $(".chs-top-close").click(function(){
            $(".yl-calculator").hide('slow');
        })

        $(".gouwuche").click(function(){
            window.location.href = "../ShoppingCart/index.html";
        })
    })
    
})(jQuery)
