/**
 * Created by cheng on 2017/6/4.
 */



window.onload = function () {

    var view = document.getElementById("view");
    var exit = document.getElementById("exit");
    var video = document.getElementById("videos");

    view.onclick = function(){
        video.play();
    }
    exit.onclick = function(){
        video.pause();
    }




    var box = document.getElementById("box");
    var ad = box.children[0];
    var ul = document.getElementById("imgs");
    var lis = ul.children;
    var ol = ad.children[1];
    var imgWidth = ad.offsetWidth;
    var timeId = null;
    //2. 动态生成小方块
    for (var i = 0; i < lis.length; i++) {
        var li = document.createElement("li");
//        li.innerHTML = i + 1;
        ol.appendChild(li);
    }
    var olLis = ol.children; // 获取所有的小方块
    olLis[0].className = 'current'; // 给第一个小方块设置默认颜色

    //3. 鼠标移入小方块让背景颜色变色
    for (var i = 0; i < olLis.length; i++) {
        olLis[i].setAttribute('index', i);
        olLis[i].onmouseover = function () {
            for (var j = 0; j < olLis.length; j++) {
                olLis[j].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index');
            //12. 让三个变量统一起来
            pic=square = index;
            //4. 鼠标移入对应小方块，让ul移动对应小方块索引个图片宽度的距离
            var target = -imgWidth * index;
            animate(ul, target);
        }
    }

    //8. 克隆第一张，放到最后
//     var firstChild= lis[0].cloneNode(true);
//      ul.appendChild(firstChild);
    ul.appendChild(lis[0].cloneNode(true));
    //13.  开启自动轮播
    timeId=  setInterval(playNext,3000);

    var pic = 0;
    var square = 0;
    /**
     * 封装了一个自动向左播放的函数
     * */
    function playNext(){
        if (pic == lis.length - 1) {
            ul.style.left = '0px'; //让ul 迅速的恢复到原来的位置
            pic = 0;//从头重新计算
        }
        pic++;
        var target = -imgWidth * pic;
        animate(ul, target);
        //9. 点击按钮的时候，设置小方块的背景颜色显示
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = '';
        }
        olLis[square].className = 'current';
    }

    /**
     * 封装了一个匀速移动的函数
     * @param obj
     * @param target
     */
    function animate(obj, target) {   // 动态的弱类型语言   可以随时的给对象添加属性或是方法
        // 保证当前对象在运动的时候，只开启一个定时器，就是在开启定时器的时候，把timeId存在对象的属性当中
        clearInterval(obj.timeId);
        obj.timeId = setInterval(function () {
            var leader = obj.offsetLeft;//先获得盒子当前的位置
            var step = 20;
            step = leader < target ? step : -step;
            if (Math.abs((leader - target)) > Math.abs(step)) {
                leader = leader + step;
                obj.style.left = leader + 'px';
            } else {
                clearInterval(obj.timeId);
                obj.style.left = target + 'px';
            }
        }, 15);
    }

}