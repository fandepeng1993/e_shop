(function ($) {
    $(function(){
       var tapLi=$('.companydetailnav ul li a');
       tapLi.click(function () {
            var tempNumber=$(this).parent().index();
            var Iframe=$('#companydetailframe');
            var bottomPage= $('.FindLogistics-advantage');
            if(tempNumber!=0){
                bottomPage.removeClass('firstshow');
            }else {
                bottomPage.addClass('firstshow');
            }
            if(tempNumber==0||tempNumber==2||tempNumber==3||tempNumber==5||tempNumber==6||tempNumber==7){
                Iframe.height(814);
            }else if(tempNumber==1){
                Iframe.height(1156);
            }else if(tempNumber=4){
                Iframe.height(967.5);
            }
            $(this).parent().addClass('active').siblings().removeClass('active')
       });
        //轮播图
        $('#demo01').flexslider({
            animation: "slide",
            direction:"horizontal",
           // direction:"vertical",
            easing:"swing"
        });
    })



})(jQuery)