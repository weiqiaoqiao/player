/**
 * Created by Administrator on 2017/5/10.
 */

function id(id){
    return document.getElementById(id);
}


//���� дһ������
//��ȡĳһ��Ԫ��������ı��ġ�
function getText(ele){
//    ele.textContent
//    ele.innerText
    //a.������� ����⵱ǰ�������js������������û��������ܣ�
    //�����ǰ��������֧��textContent����ôele.textContent�ͻ��з���ֵ�� ��������undefined��
    if(typeof ele.textContent  == "string"){
        return ele.textContent;
    }else {
        return ele.innerText;
    }
}


//����ĳһ��Ԫ��������ı�
function setText(ele,text){
    //�������
    if(typeof ele.textContent  == "string"){
        ele.textContent = text;
    }else {
        ele.innerText = text;
    }
}

//���ȡ�ı����������ı���صĶ���
var Txt = {
    getText: function (ele) {
        if (typeof ele.innerText == "string") {
            return ele.innerText;//����ȡ���ı����ݷ���
        } else {
            return ele.textContent;
        }
    },
    setText: function (ele, value) {
        // ������⣺����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Ի��Ƿ���
        if (typeof ele.innerText == "string") {
            ele.innerText = value;
        } else { // textContent
            ele.textContent = value;
        }
    }
}

//��ȡԪ������
function getStyle(obj,attr){   // attribute
    //������� �� ����Ҫ����ǰ��������Ƿ�֧�ִ˶�������Ի��Ƿ���
    if(obj.currentStyle) {
        return   obj.currentStyle[attr];
    }else {
        return  getComputedStyle(obj,null)[attr];
    }
}

//��ȡҳ���ȥ�ĸ߶Ȼ���������ĺ���
function scroll(){
    return{
        top:window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,
        left:window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0
    }
}


//��ȡ������������Ŀ�߼������Եķ�װ
function client(){
    return {
        width:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight               || 0
    }
}
//��ȡ�����ҳ���е�����λ��
function page(e){
    return {
        pageX: e.pageX || e.clientX+document.documentElement.scrollLeft,
        pageY: e.pageY || e.clientY+document.documentElement.scrollTop
    }
}

/**
 * ��װ��һ�����ݵ�ע���¼��ĺ���
 * @param obj
 * @param type
 * @param listener
 */
function addEventListener(obj, type, listener) {
    // �������
    if (obj.addEventListener) {
        obj.addEventListener(type, listener, false);
    } else if (obj.attachEvent) {
        obj.attachEvent("on" + type, listener);
    } else {
        obj["on" + type] = listener;
    }
}
/**
 * ��װ��һ�����ݰ汾���Ƴ��¼��ĺ���
 * @param obj
 * @param type
 * @param listener
 */
function removeEventListener(obj, type, listener) {
    // �������
    if (obj.removeEventListener) {
        obj.removeEventListener(type, listener, false);
    } else if (obj.detachEvent) {
        obj.detachEvent("on" + type, listener);
    } else {
        obj["on" + type] = null;
        // �Ѷ����ֵ����Ϊnull �����൱���Ƴ��˶�����
    }
}


//ע��/�Ƴ�/��ֹð�� ��װ�ɺ���
var eventTools = {
//ע���¼��ĺ���
 addEventListener:function(obj,type,listener){
        // �������
        if(obj.addEventListener){
          obj.addEventListener(type,listener,false);
        }else if(obj.attachEvent) {
          obj.attachEvent("on"+type,listener);
        }else {
          obj["on"+type]  = listener;
        }
      },
//�Ƴ��¼��ĺ���
 removeEventListener:function(obj,type,listener){
    // �������
    if(obj.removeEventListener){
        obj.removeEventListener(type,listener,false);
    }else if(obj.detachEvent){
        obj.detachEvent("on"+type,listener);
    }else {
        obj["on"+type] = null;
        // �Ѷ����ֵ����Ϊnull �����൱���Ƴ��˶�����
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


//��ֹð��
function stopPropagation(e){
    if(e&&e.stopPropagation){
        e.stopPropagation();
    }else{
        e.cancenBubble = true;
    }
}


//��װanimate ����һ��
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

////����һάһ��
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

////����һά����
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

////��������һ��
//function animate(obj,json){
//    clearInterval(obj.timeId);
//    obj.timeId =  setInterval(function (){
//        var flag = true;
//        for(var key in json){
//            var leader = parseInt(getStyle(obj,key))||0;// key���Ƕ����е�������  �˴�����ȡԭ����ֵ
//            var target = json[key];//Ҫ�����Ŀ��λ��
//            var step = (target-leader)/10;
//            step = step>0?Math.ceil(step):Math.floor(step);
//            leader = leader + step;
//            obj.style[key]= leader +'px'; // �����Ը�ֵ
//            if(leader!=target){ //�����Ƕ����Ե�һ�������������ô�жϵĻ���ֻҪ��һ�����Ե�����Ŀ��λ�þͻὫ��ʱ�����������ô���� ��������������Զ���ﲻ��Ŀ��λ��
//                flag = false;
//            }
//        }
//        if(flag){
//            clearInterval(obj.timeId);
//        }
//    },15);
//}

////������������
//function animate(obj, json, fn) {
//    clearInterval(obj.timeId);
//    obj.timeId = setInterval(function () {
//        var flag = true;
//        for (var key in json) {
//            var leader = parseInt(getStyle(obj,key))||0;
//            var target = json[key];//Ҫ�����Ŀ��λ��
//            var step = (target - leader) / 10;
//            step = step > 0 ? Math.ceil(step) : Math.floor(step);
//            leader = leader + step;
//            obj.style[key] = leader + 'px'; // �����Ը�ֵ
//            if (leader != target) { //�����Ƕ����Ե�һ�������������ô�жϵĻ���ֻҪ��һ�����Ե�����Ŀ��λ�þͻὫ��ʱ�����������ô���� ��������������Զ���ﲻ��Ŀ��λ��
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

//��������͸����+�㼶
function animate(obj,json,fn){
    clearInterval(obj.timeId);
    obj.timeId =  setInterval(function (){
        var flag = true;
        for(var key in json){
            if(key=='opacity'){
                var leader = parseInt(getStyle(obj,key)*100)||0;// key���Ƕ����е�������  ��ʱ�����opacity�Ļ����п�����С���������ʱ��Ƚ��鷳����� ���ǿ�����opacity��ԭֵ��Ŀ��ֵ������100���ٽ�������
                var target = json[key]*100;//Ҫ�����Ŀ��λ��
                var step = (target-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key]= leader/100; // �����Ը�ֵ
            }else if(key=='zIndex'){
                var leader = parseInt(getStyle(obj,key))||0;// key���Ƕ����е�������  �˴�����ȡԭ����ֵ
                var target = json[key];//Ҫ�����Ŀ��λ��
                var step = (target-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key]= leader ; // �����Ը�ֵ
            }else {
                var leader = parseInt(getStyle(obj,key))||0;// key���Ƕ����е�������  �˴�����ȡԭ����ֵ
                var target = json[key];//Ҫ�����Ŀ��λ��
                var step = (target-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                leader = leader + step;
                obj.style[key]= leader +'px'; // �����Ը�ֵ
            }
            if(leader!=target){ //���ڵ�����ж�����������������κ�һ������û�е���Ŀ��λ�ã�����flag=false,������ж�����flag��false�Ļ����Ͳ��������ʱ����ֻ�����е����Զ�������Ŀ��λ�ã��ſ��������ʱ�� ��ʱ��flag����true
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







