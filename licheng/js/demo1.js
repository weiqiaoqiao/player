/**
 * Created by Administrator on 2017/6/4.
 */
window.onload = function(){
    //var imgot1 = document.getElementById("imgot1");
    //document.onmousemove =function (e){
    //    e = e || window.event;
    //    var x = e.pageX ;
    //    var y = e.pageY;
    //
    //    imgot1.style.left = x +'px';
    //    imgot1.style.top = y+'px';
    //}
    var imgot2 = document.getElementById("imgot2");
    var imgot2_2 = document.getElementById("imgot2_2");
    var imgot2_closebtn = document.getElementById("imgot2_closebtn");

    imgot2_closebtn.onclick = function() {
        animate(imgot2_2, {height: 150}, function () {
            animate(imgot2_2,{
                width:0
            })
        })
    }
    $(function () {
        $("#nr1 a").mouseenter(function () {
            $(this).css('opacity','1').siblings().css('opacity',"0.2")
        }).mouseleave(function () {
            $('#nr1').find('a').css('opacity','1')
        })
    })





    var node_small1 = id("node_small1");
    var erweima = id("er1");
    node_small1.onmouseover = function () {
        erweima.className = erweima.className.replace("hide","show");

    }
    node_small1.onmouseout = function () {
        erweima.className = erweima.className.replace("show","hide");
    }


}