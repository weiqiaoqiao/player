/**
 * Created by jessie-ouyang on 2017/6/5.
 */
$(function(){
    //����ƽ���ǰli��ǩ��ʾͼƬ͸��������������͸���Ƚ���Ϊ0.6
    $(".feat ul li").on("mouseenter",function(){
        $(this).css({
            //opacity:1,
            background:"url(images/role-"+($(this).index()+2)+".png) no-repeat",
        }).siblings().stop().animate({
            opacity:.6,
        },150)
    })

    //����Ƴ�����ͼƬ������͸���Ȼ�ԭ
    $(".feat ul li").on("mouseleave",function(){
        $(this).css({
            //opacity:0.4,
            backgroundImage:""
        }).siblings().stop().animate({
            opacity:1,
        },150)
    })
    //ȫ�����ݲ��ֵĽ���
    //�̶��������ֿ�ʼ
    $("#fds").slideDown(500);//����
    $("#fds").slideUp(500);//����
    $("#fds").fadeIn(1000);//̸��
    $("#fds .close").on("click",function(){
        $("#fds").fadeOut(500);//�����ťʵ�ֵ���
    })


    $("#ewm1").hover(function (){
        //��ά���ƽ�ͼƬ�Ŵ�
        $(this).animate({
            marginLeft:-9,
            width:143,
            height:143,
            zIndex:999
        })
    },function(){
        //��ά���Ƴ�ͼƬ��ԭ
        $("#ewm1").animate({
            width:122,
            height:122,
            marginLeft:0,

        })
    });
//�̶��������ֽ���
})
// �ĺ��˻�����ʼ
    $(window).load(function (){
        $(".wrap .item").hover(function(){ // ������뵱ǰ�ı�ǩ��ʱ�������
            $(this).addClass('box').siblings().removeClass('box');
        },function (){  //����뿪��ʱ�򣬻ָ�ԭ������ʽ
            $(".wrap .item:first").addClass('box').siblings().removeClass('box');
        })
    })
//    �ĺ��˻Ľ���