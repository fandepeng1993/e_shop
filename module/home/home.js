(function ($) {
    $(function(){
        //自定义无缝滚动
        /* var startscrollHeight=0;
         var scrollNode=$('.hot-list-recommend').clone(true);
         var scrollOut= $('.home-auto-scroll');
         var scrollHeight=$('.hot-list-recommend').height();
         $('.home-auto-scroll').append(scrollNode);

         AutoScroll=function () {
             if(scrollHeight<=startscrollHeight){
                 scrollOut.scrollTop(0);
                 startscrollHeight=0;
             }
             else {
                 startscrollHeight+=2;
                 scrollOut.scrollTop(startscrollHeight)
             }
         }*/

        /* TImer=setInterval("AutoScroll()",50);
         $('.home-auto-scroll').hover(function () {
             clearInterval(TImer);
         },function () {
             TImer=setInterval("AutoScroll()",50);
         })*/

        //无缝滚动
        $('.home-auto-scroll li:even').addClass('lieven');
        $(".home-auto-scroll").myScroll({
            speed:40, //数值越大，速度越慢
            rowHeight:62//li的高度
        });
        $(".home-fsuls-list").Scroll({line:1,speed:1000,timer:2000});

        //轮播图
       /* $('#demo02').flexslider({
            animation: "slide",
            direction:"vertical",
            easing:"swing"
        });*/
        $('.home-f-ul>li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.home-fshow-ul>li').eq( $(this).index()).addClass('active').siblings().removeClass('active')
        });
        $('.home-fsu-ul li').click(function () {
            $(this).addClass('acTive').siblings().removeClass('acTive');
            $('.home-fsus-ul>li').eq($(this).index()).addClass('ACtive').siblings().removeClass('ACtive')
        });
        $('.home-Info-title a').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            $('.home-Info-content ul').eq($(this).index()).addClass('AcTive').siblings().removeClass('AcTive')
        })

        
    });
})(jQuery)