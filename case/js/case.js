// JavaScript Document
window.onload=function(){
//爆炸效果
(function(){
	var oBlast=document.getElementById('blast');
	var R=4;
	var C=7;
	for(var r=0; r<R; r++){
		for(var c=0;c<C;c++){
			var ospan=document.createElement('span');
			ospan.style.width=oBlast.offsetWidth/C+'px';
			ospan.style.height=oBlast.offsetHeight/R+'px';
			oBlast.appendChild(ospan);
			ospan.style.left=ospan.offsetWidth*c+'px';
			ospan.style.top=ospan.offsetHeight*r+'px';

			ospan.style.backgroundPosition='-'+oBlast.offsetWidth/C*c+'px -'+oBlast.offsetHeight/R*r+'px';
		}
	}
	var aSpan=oBlast.getElementsByTagName('span');
	var iNow=0;
	var bStart=true;
	oBlast.onclick=function(){
		if(!bStart)return;
		bStart=false;
		iNow++;
		for(var i=0; i<aSpan.length; i++){
			aSpan[i].style.transition='1s all cubic-bezier(0.99, 0.05, 0.13, 0.98)'
			var lx=aSpan[i].offsetWidth/2+aSpan[i].offsetLeft-oBlast.offsetWidth/2;
			var ty=aSpan[i].offsetHeight/2+aSpan[i].offsetTop-oBlast.offsetHeight/2;
			aSpan[i].style.transform='translate('+lx+'px,'+ty+'px) rotateX('+rad(-180,180)+'deg) rotateY('+rad(-180,180)+'deg)'
			aSpan[i].style.opacity=0
		}
		aSpan[0].addEventListener('transitionend',function(){
			oBlast.style.backgroundImage='url(../case/img/wufeng'+(iNow+1)%3+'.jpg)'
			for(var i=0; i<aSpan.length; i++){
				aSpan[i].style.transition='none'
				aSpan[i].style.transform='translate(0,0) rotateX(0deg) rotateY(0deg)'
				aSpan[i].style.opacity=1;
				aSpan[i].style.backgroundImage='url(../case/img/wufeng'+iNow%3+'.jpg)'
			}
			bStart=true;
		},false)
	}
	function rad(n,m){
		return Math.floor(Math.random()*(m-n)+n);
	}
})();
//翻页效果
;(function(){
		var oPageTurning=document.getElementById('pageTurning')	;
		var oPage1=oPageTurning.querySelector('.page1');
		var oPage2=oPageTurning.querySelector('.page2');
		var oFront=oPageTurning.querySelector('.front');
		var oBack=oPageTurning.querySelector('.back');
		var iNow=0;
		var bStart=true;
		oPageTurning.onclick=function(){
			if(!bStart)return;
			bStart=false;
			iNow++;
			oPage1.style.transition='1s all ease'
			oPage1.style.transform='rotateY(-180deg)';
			oPage1.addEventListener('transitionend',function(){
				oPage1.style.transition='none'
				oPage1.style.transform='rotateY(0deg)';

				oPageTurning.style.backgroundImage='url(../case/img/wufeng'+iNow%3+'.jpg)'//2
				oFront.style.backgroundImage='url(../case/img/wufeng'+iNow%3+'.jpg)'

				oBack.style.backgroundImage='url(../case/img/wufeng'+(iNow+1)%3+'.jpg)'//3
				oPage2.style.backgroundImage='url(../case/img/wufeng'+(iNow+1)%3+'.jpg)'
				bStart=true;
			},false)
		}
})()
//3D卡片
;(function(){
	var oCard3D=document.getElementById('card3D');
	var oNxt=oCard3D.getElementsByTagName('input')[1];
	var oPre=oCard3D.getElementsByTagName('input')[0];
	var aLi=oCard3D.getElementsByTagName('li');

	var bReady=true;
	var arr=[];
	for(var i=0; i<aLi.length; i++){
		arr[i]=aLi[i].className;
	}
	oNxt.onclick=function(){
		if(!bReady)return;
		bReady=false;
		arr.unshift(arr.pop());
		for(var i=0; i<aLi.length; i++){
			aLi[i].className=arr[i];
		}
		var oCur=oCard3D.querySelector('.cur');
		oCur.addEventListener('transitionend',function(){
			bReady=true;
		},false)
	}
	oPre.onclick=function(){
		if(!bReady)return;
		bReady=false;
		arr.push(arr.shift());
		for(var i=0; i<aLi.length; i++){
			aLi[i].className=arr[i];
		}
		var oCur=oCard3D.querySelector('.cur');
		oCur.addEventListener('transitionend',function(){
			bReady=true;
		},false)
	}

})();
//3D图片环
	;(function(){
		var oRing3dBox=document.getElementById('Ring3dBox');
		var N=11;
		for(var i=0; i<N; i++){
			var oli=document.createElement('li');
			oli.style.backgroundImage='url(img/3D'+(i+1)+'.jpg)';
			oRing3dBox.appendChild(oli);
			oli.style.transition='1s all ease '+(N-i)*200+'ms';
			(function(oli,i){                                                  //延时触发 0秒也是延迟
				setTimeout(function(){
					oli.style.transform='rotateY('+360/N*i+'deg) translateZ(300px)';
					oli.style.mstransform='rotateY('+360/N*i+'deg) translateZ(300px)';
				},0)
			})(oli,i)
		}
		var aLi=oRing3dBox.children;
		var y=0;
		aLi[0].addEventListener('transitionend',function(){
			change();
		},false)
		document.onkeydown=function(ev){
			var ev=event||ev;
			if(ev.keyCode==37){
				y-=360/N;
				change();
			}
			if(ev.keyCode==39){
				y+=360/N;
				change();
			}
		}
		function change(){
			for(var i=0; i<aLi.length; i++){
				aLi[i].style.transition='1s all ease';
				aLi[i].style.transform='rotateY('+(360/N*i+y)+'deg) translateZ(300px)';

				var d=Math.abs((360/N*i+y)%360);

				d>180 && (d=360-d);

				d=180-d;

				var scale=d/180;

				scale<0.2 && (scale=0.2);

				aLi[i].style.opacity=scale;
				//aLi[i].innerHTML=d;
			}
		}
	})();
//表
	(function(){
		var oClock=document.getElementById('clock');
		var oH=oClock.querySelector('.hour');
		var oM=oClock.querySelector('.min');
		var oS=oClock.querySelector('.sec');

		//创建刻度
		for(var i=0; i<60; i++){
			var oSpan=document.createElement('span');

			oClock.appendChild(oSpan);

			oSpan.style.transform='rotate('+i*6+'deg)';

			if(i%5==0){
				//大刻度
				oSpan.className='bs';
				var number=i/5==0?'12':i/5;
				oSpan.innerHTML='<strong>'+number+'</strong>';
				oSpan.children[0].style.transform='rotate(-'+i*6+'deg)';
			}else{
				oSpan.className='scale';
			}
		}

		function clock(){
			var oDate=new Date();
			var h=oDate.getHours();
			var m=oDate.getMinutes();
			var s=oDate.getSeconds();
			var ms=oDate.getMilliseconds();

			oH.style.transform='rotate('+(h*30+m/60*30)+'deg)';
			oM.style.transform='rotate('+(m*6+s/60*6)+'deg)';
			oS.style.transform='rotate('+(s*6+ms/1000*6)+'deg)';
		}
		clock();
		setInterval(clock,30);
	})();
//------------
var oCenter=document.getElementById('center');
//圆
var oYuan=document.getElementById('yuan');
var oYspan=oYuan.children[0];
var yuanR=oYuan.offsetWidth/2;
var yuanN=0
	function hudu(n){
		return n*Math.PI/180;
	}
	setInterval(function(){
		yuanN+=1
		var yuanX=yuanR*Math.sin(hudu(yuanN))+yuanR;
		var yuanY=yuanR-yuanR*Math.cos(hudu(yuanN));
		oYspan.style.left=yuanX+'px';
		oYspan.style.top=yuanY+'px';
	},30);

//苹果菜单
var opingguoDiv = document.getElementById('pingguo');
var apingguoImg = opingguoDiv.children;
document.onmousemove=function(ev){
		var oEvent = ev||event;
		for(var i=0;i<apingguoImg.length;i++){
			var a = oEvent.clientX-(opingguoDiv.offsetLeft+apingguoImg[i].offsetLeft+apingguoImg[i].offsetWidth/2);
			var b = opingguoDiv.offsetTop+apingguoImg[i].offsetTop+apingguoImg[i].offsetHeight/2-oEvent.clientY;
			var dis = Math.sqrt(a*a+b*b);
			var scale = 1-dis/300;

			if(scale<0.5)scale=0.5;

			apingguoImg[i].width = scale*128;
		}
	};
//图片查看器
var owrap=document.getElementById('wrap');
var oul=owrap.getElementsByTagName('ul')[0];
var oli=oul.children;
var iNow=0;
	owrap.onmousedown=function(ev){
			var ev=ev||event;
			var disX=ev.clientX-oul.offsetLeft;
			var downX=ev.clientX;
			document.onmousemove=function(ev){
					var ev=ev||event;
					var X=ev.clientX-disX;
					oul.style.left=X+'px';
			}
			document.onmouseup=function(ev){
					var ev=ev||event;
					var upX=ev.clientX;
					document.onmouseup=null;
					document.onmousemove=null;

					if(Math.abs(upX-downX)>50){
						if(downX>upX){
							iNow++;
							if(iNow>3)iNow=3;
						}else{
							iNow--;
							if(iNow<0)iNow=0;
						}
					}
					//oul.style.left=-iNow*oli[0].offsetWidth+'px';
					doMove(oul,{'left':-iNow*oli[0].offsetWidth},{'easing':Tween.Bounce.easeIn(),'duration':500})
					oul.releaseCapture&&oul.releaseCapture();
			}
			oul.setCapture&&oul.setCapture();
			return false;
	}
//-------------------------------------------------------------------------------
//进度条
var ojindutiao=document.getElementById('jindutiao');
var ospan=ojindutiao.getElementsByTagName('span')[0];
var op=ojindutiao.getElementsByTagName('p')[0];

	ojindutiao.onmouseover=function(){
		move(ospan,{'width':ojindutiao.offsetWidth},{'easing':'linear','duration':2000})
	}
	ojindutiao.onmouseout=function(){
		move(ospan,{'width':0},{'easing':'linear','duration':2000})
	}
 //蒙城效果
       $(function(){
                                                   $("#T_calculator").click(function(){
                                                      $("#calculator").show();
                                                      $("#calculator_screen").show();
                                                   });
                                                   $("#calculator_screen").click(function(){
                                                      $("#calculator").hide();
                                                      $("#calculator_screen").hide();
                                                   });
                                               });
//-------------------------------------------------------------------------------
//双色球
    var of5=document.getElementById('f5')

	of5.onclick=function(){
	      function rnd(n,m){
					return parseInt(Math.random()*(m-n)+n);
			}

			function toDub(n){
				return n<10?'0'+n:''+n;
			}

			function findInArr(olist,n){
				for(var i=0; i<olist.length;i++){
					if(olist[i]==n){
						return true;
					}
				}
				return false;
			}


			var op=document.getElementById('p1');
			var oh=document.getElementById('h21');
				 var olist=[]
				   while(olist.length<6){
					 var num=rnd(1,34)
					if(!findInArr(olist,num)){
						 olist.push(toDub(num));
					}
				   }

				op.innerHTML=olist;
				oh.innerHTML=toDub(rnd(1,16))
	}

//-------------------------------------------------------------------------------
}