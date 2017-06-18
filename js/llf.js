/**
 * Created by lenovo on 2017/6/4.
 */
//$(function (){
//    $("clk").mouseenter(function(){
//        $(this).css("backgroundColor","0.8");
//        $(this).css("opacity","0.8");
//    })
//})

$(function(){
    $(window).load(function(){
        //$("#dao").addClass('opacity');
        $("#dao").animate({opacity : 1},2500);
    })

    $("#clk").click(function(){
        $("#_overlay_").attr("style","background-color: rgb(17, 17, 17); display:block; border-top: 1px solid rgb(17, 17, 17); position: absolute; height: 3088px; z-index: 9998; width: 100%; left: 0px; top: 0px; opacity: 0.7;");
        $("#eventlayer").attr("style","position: fixed; display: block; visibility: visible; z-index: 9999; left: 50%; top: 100px; margin-left: -393px; margin-bottom: 100px; margin-top: 0px;");
        $("tabt").css("display","block");
        $("#taba_l").addClass('cur');
        $("#tabc_1").attr('style','display:block');
        $("#tabc_2").attr('style','display:none');
    })

    $("#close").click(function(){
        $("#_overlay_").attr("style","background-color: rgb(17, 17, 17); display:none; border-top: 1px solid rgb(17, 17, 17); position: absolute; height: 3088px; z-index: 9998; width: 100%; left: 0px; top: 0px; opacity: 0.7;");
        $("#eventlayer").attr("style","position: absolute; display: none; visibility: visible; z-index: 9999; left: 50%; top: 100px; margin-left: -393px; margin-bottom: 100px; margin-top: 0px;");
        $("#taba_r").removeClass('cur');
    })

    $("#taba_l").click(function(){
        $("#tabc_1").attr('style','display:block');
        $("#tabc_2").attr('style','display:none');
        $("#taba_l").addClass('cur');
        $("#taba_r").removeClass('cur');
    })
    $("#taba_r").click(function(){
        $("#tabc_1").attr('style','display:none');
        $("#tabc_2").attr('style','display:block');
        $("#taba_l").removeClass('cur');
        $("#taba_r").addClass('cur');
    })
    $("#view").click(function(){
        $("#vplayer").attr('style','display:block');
        //$("video").play();
        $("#_overlay_").attr("style","background-color: rgb(17, 17, 17); display:block; border-top: 1px solid rgb(17, 17, 17); position: absolute; height: 3088px; z-index: 9998; width: 100%; left: 0px; top: 0px; opacity: 0.7;");
    })

    $("#exit").click(function(){
        $("#_overlay_").attr("style","background-color: rgb(17, 17, 17); display:none; border-top: 1px solid rgb(17, 17, 17); position: absolute; height: 3088px; z-index: 9998; width: 100%; left: 0px; top: 0px; opacity: 0.7;");
        $("#vplayer").attr('style','display:none');
        //$("video").removeClass('autoplay');
        //$('video').stop();
    })

})



$(function() {
    $('body').sakura();
});
$(window).load(function() {
    $('body').sakura();
})


