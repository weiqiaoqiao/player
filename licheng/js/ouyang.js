/**
 * Created by jessie-ouyang on 2017/6/4.
 */
$(function (){
    $('.nr3 a').each(function (i,ele){
        $('.nr3 a').eq(i).addClass('btn btn'+(i+3));

    })
    $('.nr3 a').on('mouseenter',function (){
        $('.nr3 a').each(function (i,ele){
            $('.nr3 a').eq(i).get(0).className = 'btn btn' + (i+3);
        })
        var index =$(this).index();
        $(this).get(0).className = 'btn btn_' + (index+3);
    })
    $('.nr3 a').on('mouseleave',function (){
        $('.nr3 a').each(function (i,ele){
            $('.nr3 a').eq(i).get(0).className = 'btn btn' + (i+3);
        })
    })

})
