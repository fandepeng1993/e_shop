/*zoom插件*/
(function ($) {
    $.fn.fdpZoom=function(spuersmall,small,big,move,setWHidth,scaleNumber){
        var small=$(this).find(small);
        var smallImg=$(this).find(small).find('img');
        var big=$(this).find(big);
        var bigImg=$(this).find(big).find('.bigImg');
        var supersmall=$(this).find(spuersmall);
        var supersmallImg=$(this).find(spuersmall).find('li');
        var move=$(this).find(move);
        var moveX=0;
        var moveY=0;
        var smallwidth=setWHidth.setsmall[0];
        var smallheight=setWHidth.setsmall[1];
        var movewidth=setWHidth.setsmall[0]/scaleNumber;
        var moveheight=setWHidth.setsmall[1]/scaleNumber;
        small.children('img').width(smallwidth).height(smallheight);
        big.width(smallwidth).height(smallheight)
            .find('img').width(smallwidth*scaleNumber).height(smallheight*scaleNumber);
        move.width(movewidth).height(moveheight);
        bigImg.css({position: 'absolute'});
        big.css({'left':smallwidth+20+'px','top':0});
        small.mousemove(function (e) {
                // var windowScrollTop=$(Window).scrollTop();
                var smalloffsetleft=small.offset().left;
                var smalloffsettop=small.offset().top;
                moveX=e.clientX-smalloffsetleft;
                moveY=e.clientY-smalloffsettop;
                var moveLeft=moveX-(movewidth/2);
                var moveTop=moveY-(moveheight/2);
                if(moveX<=(movewidth/2)){
                    moveLeft=0
                }
                if(moveX>=(smallwidth-(movewidth/2))){
                    moveLeft=smallwidth-movewidth
                }
                if(moveY<=(moveheight/2)){
                    moveTop=0
                }
                if(moveY>=(smallheight-(moveheight/2))){
                    moveTop=smallheight-moveheight
                }
                big.css({display:'block'});
                bigImg.css({left:-moveLeft*scaleNumber+'px',top:-moveTop*scaleNumber+'px'});
                 move.css({display:'block',left:moveLeft+'px',top:moveTop+'px'});


        }).mouseout(function () {
                move.css({display:'none'});
                big.css({display:'none'});
        });
        supersmallImg.click(function () {
            $(this).addClass('active').siblings().removeClass('active');
            var srcImg=$(this).find('img').attr('src');
            smallImg.attr('src',srcImg);
            bigImg.attr('src',srcImg);
        })
        
        return {
            authour:function () {
                console.warn('作者：范德鹏,270178123@qq.com')
            }
        };

    }
    $.fn.extend({
        setABC:function (a,b,c) {
            console.log(a,b,c,this)

        }
    })


})(jQuery)








/*
var bigimg = document.getElementsByClassName("bigimg").item(0);
small.onmousemove = function(e){
    var cc=$('.small').offset().left;
    var aa= $('.small').offset().top;
    var bb=$(window).scrollTop();
    var top = e.clientY-(aa-bb)-50;
    var left = e.clientX-cc-50;
    if(top>300){
        top=300;
    }
    if(top<0){
        top=0;
    }
    if(left>300){
        left=300
    }
    if(left<0){
        left=0
    }
    move.style.top = top+'px';
    move.style.left = left+'px';
    move.style.display="block";
    big.style.display='block';
    bigimg.style.top = -top*4+'px';
    bigimg.style.left = -left*4+'px';
};
small.onmouseout = function(){
    move.style.display="none";
    big.style.display='none';
};*/
