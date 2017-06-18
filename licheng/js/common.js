/**
 * Created by Administrator on 2017/5/10.
 */

function id(id){
    return document.getElementById(id);
}


//兼容 写一个函数
//获取某一个元素里面的文本的。
function getText(ele){
//    ele.textContent
//    ele.innerText
    //a.能力检测 （检测当前运行这个js代码的浏览器有没有这个功能）
    //如果当前这个浏览器支持textContent，那么ele.textContent就会有返回值， 不可能是undefined。
    if(typeof ele.textContent  == "string"){
        return ele.textContent;
    }else {
        return ele.innerText;
    }
}


//设置某一个元素里面的文本
function setText(ele,text){
    //能力检测
    if(typeof ele.textContent  == "string"){
        ele.textContent = text;
    }else {
        ele.innerText = text;
    }
}

//与获取文本或是设置文本相关的对象
var Txt = {
    getText: function (ele) {
        if (typeof ele.innerText == "string") {
            return ele.innerText;//将获取的文本内容返回
        } else {
            return ele.textContent;
        }
    },
    setText: function (ele, value) {
        // 能力检测：就是要看当前的浏览器是否支持此对象的属性或是方法
        if (typeof ele.innerText == "string") {
            ele.innerText = value;
        } else { // textContent
            ele.textContent = value;
        }
    }
}

//获取元素属性
function getStyle(obj,attr){   // attribute
    //能力检测 ： 就是要看当前的浏览器是否支持此对象的属性或是方法
    if(obj.currentStyle) {
        return   obj.currentStyle[attr];
    }else {
        return  getComputedStyle(obj,null)[attr];
    }
}

//获取页面卷去的高度或是左侧距离的函数
function scroll(){
    return{
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
    }
}


//获取浏览器可视区的宽高及兼容性的封装
function client(){
    return {
        width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight               || 0
    }
}
//获取鼠标在页面中的坐标位置
function page(e){
    return {
        pageX: e.pageX || e.clientX+document.documentElement.scrollLeft,
        pageY: e.pageY || e.clientY+document.documentElement.scrollTop
    }
}

/**
 * 封装了一个兼容的注册事件的函数
 * @param obj
 * @param type
 * @param listener
 */
function addEventListener(obj, type, listener) {
    // 能力检测
    if (obj.addEventListener) {
        obj.addEventListener(type, listener, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + type, listener);
    } else {
        obj["on" + type] = listener;
    }
}
/**
 * 封装了一个兼容版本的移除事件的函数
 * @param obj
 * @param type
 * @param listener
 */
function removeEventListener(obj, type, listener) {
    // 能力检测
    if (obj.removeEventListener) {
        obj.removeEventListener(type, listener, false);
    } else if (obj.detachEvent) {
        obj.detachEvent("on" + type, listener);
    } else {
        obj["on" + type] = null;
        // 把对象的值设置为null ，就相当于移除此对象了
    }
}


//注册/移除/阻止冒泡 封装成函数
var eventTools = {
//注册事件的函数
 addEventListener:function(obj,type,listener){
        // 能力检测
        if(obj.addEventListener){
          obj.addEventListener(type,listener,false);
        }else if(obj.attachEvent) {
          obj.attachEvent("on"+type,listener);
        }else {
          obj["on"+type]  = listener;
        }
      },
//移除事件的函数
 removeEventListener:function(obj,type,listener){
    // 能力检测
    if(obj.removeEventListener){
        obj.removeEventListener(type,listener,false);
    }else if(obj.detachEvent){
        obj.detachEvent("on"+type,listener);
    }else {
        obj["on"+type] = null;
        // 把对象的值设置为null ，就相当于移除此对象了
    }
  },
    stopPropagation:function  (e){
        if(e&&e.stopPropagation){
            e.stopPropagation();
        }else {
            e.cancelBubble= true;
        }
    }
}


//阻止冒泡
function stopPropagation(e){
    if(e&&e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancenBubble = true;
    }
}


//封装animate 匀速一重
//function animate(obj,target){
//    clearInterval(obj.timerId);
//    obj.timerId=setInterval(function(){
//        var leader = obj.offsetLeft;
//        var step = 20;
//        step = leader<target?step:-step;
//        if(Math.abs(leader-target)>Math.abs(step)){
//            leader = leader + step;
//            obj.style.left = leader + 'px';
//        }else {
//            clearInterval(obj.timerId);
//            obj.style.left = target+"px";
//        }
//    },20)
//
//}

////缓速一维一重
//function animate(obj,target){
//    clearInterval(obj.timerId);
//    obj.timerId=setInterval(function(){
//        var leader = obj.offsetLeft;
//        console.log("leader"+leader);
//        var step =(target-leader)/10 ;
//        step = step>0?Math.ceil(step):Math.floor(step);
//        console.log("step"+step);
//        leader = leader+step;
//        obj.style.left = leader+'px';
//        if(leader ==target){
//            clearInterval(obj.timerId);
//        }
//    },30);
//}

////缓速一维多重
//function animate(obj,target,attr){
//    clearInterval(obj.timeId);
//    obj.timeId =  setInterval(function (){
//        var leader = parseInt(getStyle(obj,attr))||0;// Number('200px')
//        console.log("leader:"+leader);
//        var step = (target-leader)/10;
//        step = step>0?Math.ceil(step):Math.floor(step);
//        console.log("step"+step);
//        leader = leader + step;
//        obj.style[attr]= leader +'px';
//        if(leader==target){
//            clearInterval(obj.timeId);
//        }
//    },15);
//}

////缓动动画一重
//function animate(obj,json){
//    clearInterval(obj.timeId);
//    obj.timeId =  setInterval(function (){
//        var flag = true;
//        for(var key in json){
//            var leader = parseInt(getStyle(obj,key))||0;// key就是对象中的属性名  此处来获取原属性值
//            var target = json[key];//要到达的目标位置
//            var step = (target-leader)/10;
//            step = step>0?Math.ceil(step):Math.floor(step);
//            leader = leader + step;
//            obj.style[key]= leader +'px'; // 给属性赋值
//            if(leader!=target){ //现在是多属性的一个函数，如果这么判断的话，只要有一个属性到达了目标位置就会将定时器给清掉，那么会造 成其它的属性永远到达不了目标位置
//                flag = false;
//            }
//        }
//        if(flag){
//            clearInterval(obj.timeId);
//        }
//    },15);
//}

////缓动动画多重
//function animate(obj, json, fn) {
//    clearInterval(obj.timeId);
//    obj.timeId = setInterval(function () {
//        var flag = true;
//        for (var key in json) {
//            var leader = parseInt(getStyle(obj,key))||0;
//            var target = json[key];//要到达的目标位置
//            var step = (target - leader) / 10;
//            step = step > 0 ? Math.ceil(step) : Math.floor(step);
//            leader = leader + step;
//            obj.style[key] = leader + 'px'; // 给属性赋值
//            if (leader != target) { //现在是多属性的一个函数，如果这么判断的话，只要有一个属性到达了目标位置就会将定时器给清掉，那么会造 成其它的属性永远到达不了目标位置
//                flag = false;
//            }
//        }
//        if (flag) {
//            clearInterval(obj.timeId);
//            if (typeof fn == 'function') {
//                fn();
//            }
//        }
//    }, 15);
//}
//

//缓动动画透明度+层级
function animate(obj,json,fn){
    clearInterval(obj.timeId);
    obj.timeId =  setInterval(function (){
        var flag = true;
        for(var key in json){
            if(key=='opacity'){
                var leader = parseInt(getStyle(obj,key)*100)||0;// key就是对象中的属性名  此时如果是opacity的话，有可能是小数，计算的时候比较麻烦，因此 我们可以让opacity的原值和目标值都扩大100倍再进行运算
                var target = json[key]*100;//要到达的目标位置
                var step = (target-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key]= leader/100; // 给属性赋值
            }else if(key=='zIndex'){
                var leader = parseInt(getStyle(obj,key))||0;// key就是对象中的属性名  此处来获取原属性值
                var target = json[key];//要到达的目标位置
                var step = (target-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key]= leader ; // 给属性赋值
            }else {
                var leader = parseInt(getStyle(obj,key))||0;// key就是对象中的属性名  此处来获取原属性值
                var target = json[key];//要到达的目标位置
                var step = (target-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key]= leader +'px'; // 给属性赋值
            }
            if(leader!=target){ //现在的这个判断条件，就是如果有任何一个属性没有到达目标位置，就让flag=false,下面的判断条件flag是false的话，就不能清掉定时器，只有所有的属性都到达了目标位置，才可以清掉定时器 此时的flag就是true
                flag = false;
            }
        }
        if(flag){
            clearInterval(obj.timeId);
            if(fn){
                fn();
            }
        }
    },15);
}







