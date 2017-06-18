/**
 * Created by jessie-ouyang on 2017/6/5.
 */
$(function(){
    //鼠标移进当前li标签显示图片透明度正常，其它透明度渐变为0.6
    $(".feat ul li").on("mouseenter",function(){
        $(this).css({
            //opacity:1,
            background:"url(images/role-"+($(this).index()+2)+".png) no-repeat",
        }).siblings().stop().animate({
            opacity:.6,
        },150)
    })

    //鼠标移出隐藏图片及缓变透明度还原
    $(".feat ul li").on("mouseleave",function(){
        $(this).css({
            //opacity:0.4,
            backgroundImage:""
        }).siblings().stop().animate({
            opacity:1,
        },150)
    })
    //全新内容部分的结束
    //固定导航部分开始
    $("#fds").slideDown(500);//滑入
    $("#fds").slideUp(500);//滑出
    $("#fds").fadeIn(1000);//谈入
    $("#fds .close").on("click",function(){
        $("#fds").fadeOut(500);//点击按钮实现淡出
    })


    $("#ewm1").hover(function (){
        //二维码移进图片放大
        $(this).animate({
            marginLeft:-9,
            width:143,
            height:143,
            zIndex:999
        })
    },function(){
        //二维码移出图片还原
        $("#ewm1").animate({
            width:122,
            height:122,
            marginLeft:0,

        })
    });
//固定导航部分结束
})
// 四海八荒区域开始
    $(window).load(function (){
        $(".wrap .item").hover(function(){ // 鼠标移入当前的标签的时候，添加类
            $(this).addClass('box').siblings().removeClass('box');
        },function (){  //鼠标离开的时候，恢复原来的样式
            $(".wrap .item:first").addClass('box').siblings().removeClass('box');
        })
    })
//    四海八荒结束