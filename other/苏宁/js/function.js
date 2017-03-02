//兼容的通过类名获取元素集合
function getClass(selector,obj){
	obj=obj||document
	if(obj.getElementsByClassName){
		var aa=obj.getElementsByClassName(selector)
		return aa
	}
	else{var cc=[]
		var bb=obj.getElementsByTagName("*")
		for (var i = 0; i < bb.length; i++) {
			if(bb[i].className==selector){cc.push(bb[i])}
		};
	return cc
	}
	
}
//兼容的获取和设置对象起始和结束标签内的文字内容
function getText(obj,value){
	if(arguments.length==1){
	if(obj.textContent!=undefined){
       return obj.textContent
	}
	else{
		return obj.innerText
	}
    }
    else if(arguments.length==2){
    	if(obj.textContent!=undefined){
        return obj.textContent=value
	}
	else{
		 return obj.innerText=value
	}

    }
}
//兼容获取对象的样式 全部样式 行内 外部都有
function getStyle(obj,attr){
  if(!obj.currentStyle){
  	return getComputedStyle(obj,null)[attr]
  }
  else{return obj.currentStyle[attr]}
}
//获取元素的函数     通过类名ID标签名
function $(selector,obj){
	if(typeof selector=="string"){
	obj=obj||document
	if(selector.charAt(0)=="."){
      return getClass(selector.slice(1),obj)
	}
	else if(selector.charAt(0)=="#"){
      return obj.getElementById(selector.slice(1))
	}
	else{return obj.getElementsByTagName(selector)}
}
else if(typeof selector=="function"){addEvent(window,"load",selector)}
}
//获取一个对象的子元素节点集合
function getChildren(obj){
	var child=obj.childNodes
	var arr=[]
	for (var i = 0; i < child.length; i++) {
		if(child[i].nodeType==1){
			arr.push(child[i])
		}
	}
	return arr
}
function getFirst(obj){
	return getChildren(obj)[0]
}
function getLast(obj){
	var aa=getChildren(obj)
	return aa[aa.length-1]
}
function getNext(obj){
	if(obj.getElementsByClassName){
		return obj.nextElementSibling;
	}
	else{
	var next=obj.nextSibling
	if(next==null){return null}
	while(next.nodeType!=1){
		next=next.nextSibling
		if(next==null){
			return null
		}
	}
	return next
}
}
function hm(newobj,obj){
	var parent=obj.parentNode
	var next=getNext(obj)
	if(next==null){
		parent.appendChild(newobj)
	}
	else{
		parent.insertBefore(newobj,next)
	}

}
function setoffWindow(){
	var x=document.documentElement.clientWidth
	var y=document.documentElement.clientHeight
	return {width:x,height:y}
}
function getPosition(obj){
	var parent=obj.parentNode
	var left=obj.offsetLeft
	var top=obj.offsetTop
	while(parent.nodeName!="BODY"){
        if(getStyle(parent,"position")=="absolute"||"raletive"){
          left+=(parent.offsetLeft+parseInt(getStyle(parent,"borderLeftWidth")))
          top+=(parent.offsetTop+parseInt(getStyle(parent,"borderTopWidth")))
        }
		parent=parent.parentNode
	}
	return {x:left,y:top}
}
//兼容的给同一个事件，添加不同的处理程序
function addEvent(obj,event,callback){
if(obj.addEventListener){obj.addEventListener(event,callback,false)}
	else{
		obj.attachEvent("on"+event,callback)
	}
}
function removeEvent(obj,event,callback){
if(obj.addEventListener){obj.removeEventListener(event,callback,false)}
	else{
		obj.detachEvent("on"+event,callback)
	}
}
//兼容的处理向上滚动 向下滚动
function mouseWheel(obj,upfun,downfun){
         if(obj.addEventListener){
         	obj.addEventListener("mousewheel",fun,false)
         	obj.addEventListener("DOMMouseScroll",fun,false)
         }
         else{
         	obj.attachEvent("onmousewheel",fun)
         }
         function fun(e){
         	var ev=e||window.event
         	if(ev.detail==-3||ev.wheelDelta==120){
         		if(upfun){upfun.call(obj)}
         	}
         else if(ev.detail==3||ev.wheelDelta==-120){
         	if(downfun){downfun.call(obj)}
         }
         }
		}
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
	if(parent.contains){
	   return parent.contains(child) && parent!=child;
	}else{
	  return (parent.compareDocumentPosition(child)===20);
	}
 }

 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；

  function checkHover (e,target) {
	 if(getEvent(e).type=="mouseover"){
	    return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
		!((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
	 }else{
		return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
		!((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
		}
  }


//鼠标移入移除事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
	  if(overfun){
	    obj.onmouseover=function  (e) {
			  if(checkHover(e,obj)){
			     overfun.call(obj,[e]);
			  }
	    }
	  }
	  if(outfun){
	    obj.onmouseout=function  (e) {
			  if(checkHover(e,obj)){
			     outfun.call(obj,[e]);
			  }
	    }
	  }
}
 
  function getEvent(e){
    return e||window.event;
  }