// JavaScript Document
window.onload=function()
 {
//随便扔
	(function(){
		var pos=[]; //move 脱离鼠标后的位置储存
		var pos1=[]; //drag 鼠标拖拽时的位置储存
		var oThrow=document.querySelector('#Throw');
		var obtn=oThrow.querySelector('input');
		var timer;

		pos1[0]={l:oThrow.offsetLeft,t:oThrow.offsetTop};
		obtn.onclick=function(){
			obtn.style.display='none'
			clearInterval(timer);
			timer=setInterval(function(){
				var last=pos.pop();
				oThrow.style.left=last.l+'px';
				oThrow.style.top=last.t+'px';
				if(pos.length==1){
					clearInterval(timer);
					timer=setInterval(function(){
						var last=pos1.pop();
						oThrow.style.left=last.l+'px';
						oThrow.style.top=last.t+'px';
						if(pos1.length==1){
							clearInterval(timer);
							oThrow.style.left=pos1[0].l+'px';
							oThrow.style.top=pos1[0].t+'px';
						}
					},30);
				}
			},30);
		}



		drag(oThrow)

		function drag(oThrow){

			var lastX=0;
			var lastY=0;
			var speedX=0;
			var speedY=0;

			oThrow.onmousedown=function(ev){
				clearInterval(timer);
				var disX=ev.clientX-oThrow.offsetLeft;
				var disY=ev.clientY-oThrow.offsetTop;
				document.onmousemove=function(ev){
					var x=ev.clientX-disX;
					var y=ev.clientY-disY;
					oThrow.style.left=x+'px';
					oThrow.style.top=y+'px';

					//不断的存坐标
					pos1.push({l:x,t:y});

					speedX=ev.clientX-lastX;
					speedY=ev.clientY-lastY;

					lastX=ev.clientX;
					lastY=ev.clientY;


				};
				document.onmouseup=function(){
					document.onmousemove=null;
					document.onmouseup=null;
					move(speedX,speedY);
				};
				return false;
			};

		}

		function move(speedX,speedY){
			clearInterval(timer);
			timer=setInterval(function(){
				speedY+=2;
				var t=oThrow.offsetTop+speedY;
				var l=oThrow.offsetLeft+speedX;
				if(t>document.documentElement.clientHeight-oThrow.offsetHeight){
					t=document.documentElement.clientHeight-oThrow.offsetHeight;
					speedY*=-0.8;
					speedX*=0.8;
				}
				if(l>document.documentElement.clientWidth-oThrow.offsetWidth){
					l=document.documentElement.clientWidth-oThrow.offsetWidth;
					speedX*=-0.8;
					speedY*=0.8;
				}
				if(l<0){
					l=0;
					speedX*=-0.8;
					speedY*=0.8;
				}
				if(t<0){
					t=0;
					speedX*=0.8;
					speedY*=-0.8;
				}

				if(Math.abs(speedX)<1 && Math.abs(speedY)<1 && oThrow.offsetTop==document.documentElement.clientHeight-oThrow.offsetHeight){
					clearInterval(timer);
					obtn.style.display='block'

				}

				oThrow.style.top=t+'px';
				oThrow.style.left=l+'px';
				//不断的存坐标
				pos.push({l:l,t:t});

			},30);
		}
	})()
//无缝滚动
var  owufeng=document.getElementById('wufeng');
var  oul=owufeng.getElementsByTagName('ul')[0];
var  aul_li=oul.children;

var  ool=owufeng.getElementsByTagName('ol')[0];	
var  abtn=ool.children;

var  opre=owufeng.getElementsByTagName('a')[0];
var  onxt=owufeng.getElementsByTagName('a')[1];

var n=0;
	oul.innerHTML+=oul.innerHTML;
	oul.style.width=aul_li[0].offsetWidth*aul_li.length+'px';
	var W=oul.offsetWidth/2;
	
	for(var i=0; i<abtn.length; i++){	
		(function(index){	
				abtn[i].onclick=function(){
					
						if((n%abtn.length==abtn.length-1||n%abtn.length==-1)&&index==0){
							n++;
						}
						if(n%abtn.length==0&&index==abtn.length-1){
							n--;
						}
						n = Math.floor(n/abtn.length)*abtn.length+index;	
						wufengtab();				
				}
		})(i)
	}
	var wufengtimer=null;
	clearInterval(wufengtimer)
	wufengtimer=setInterval(function(){	
		n++;		
		wufengtab();
	},3000)
	owufeng.onmouseover=function(){	
			opre.style.display='block';
			onxt.style.display='block';
			clearInterval(wufengtimer)
	}
	owufeng.onmouseout=function(){	
			opre.style.display='none';
			onxt.style.display='none';
			wufengtimer=setInterval(function(){	
				n++;		
				wufengtab();
			},3000)
	}
	onxt.onclick=function(){	
		n++;		
		wufengtab();
	}
	opre.onclick=function(){	
		n--;		
		wufengtab();
	}
	
	function wufengtab(){		
			for(var i=0; i<abtn.length; i++){	
						abtn[i].className='';
			}
			if(n>0){	
				abtn[n%abtn.length].className='active';
			}else{	
				abtn[(n%abtn.length+abtn.length)%abtn.length].className='active';
			}
			wufengmove(oul,-aul_li[0].offsetWidth*n);
	}
	var left = 0;
	function wufengmove(obj,iTarget){
		var start = left;
		var dis = iTarget - start;
		var count = Math.floor(300/30);
		var n = 0;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			n++;
			var a = 1-n/count;
			left = start+dis*(1-Math.pow(a,3));
			if(left<0){
				obj.style.left = left%W+'px';
			}else{
				obj.style.left = (left%W-W)%W+'px';
			}
			
			
			if(n==count){
				clearInterval(obj.timer);
			}
		},30);
	}
	
	
	
//3D轮播图
 	var oRight = document.getElementById('btn1');
	var oLeft = document.getElementById('btn2');
	var oznsRotatePic = document.getElementById('znsRotatePic');
	var aLi = oznsRotatePic.getElementsByTagName('li');
	var aImg = oznsRotatePic.getElementsByTagName('img');
	var aA = oznsRotatePic.getElementsByTagName('a');
	
	aA[0].onclick=function(){
		aMsg.push(aMsg.shift());
		tab();
		return false;
	};
	aA[2].onclick=function(){
		aMsg.unshift(aMsg.pop());
		tab();
		return false;
	};
	
	
	
	var aMsg = [];
	for(var i=0;i<aLi.length;i++){
		aMsg.push({
			left:aLi[i].offsetLeft,
			top:aLi[i].offsetTop,
			opacity:getStyle(aImg[i],'opacity'),
			imgT:aImg[i].offsetTop,
			imgW:aImg[i].offsetWidth,
			fnClick:aA[i].onclick
		});
	}
	function tab(){
		for(var i=0;i<aMsg.length;i++){
			doMove(aLi[i],{left:aMsg[i].left,top:aMsg[i].top});
			doMove(aImg[i],{top:aMsg[i].imgT,opacity:aMsg[i].opacity,width:aMsg[i].imgW});
			aA[i].onclick = aMsg[i].fnClick;
		}
	}
	oRight.onclick=function(){
		aMsg.push(aMsg.shift());
		tab();
	};
	oLeft.onclick=function(){
		aMsg.unshift(aMsg.pop());
		tab();
	};
		
		//回到顶部
		var oClick=document.getElementById('click');
		    oClick.style.display='none';
		    oClick.onclick=function()
			{
			   parent.scrollTo(0,0);
			}
		$(window).scroll(function(){
		if($(window).scrollTop()>500){
			$('#click').css('display','block')
			}
		else{
			$('#click').css('display','none')
			}
		})
		
		//文字滚动

		var t1=setInterval(function(){
			$('#gundong').animate({marginTop:-40},1000,function(){
				$('#gundong').css({'marginTop':0});
				$('#gundong').find("li").first().appendTo('#gundong')
			});
		},2000);
	    /*var ogundong=document.getElementById('gundong');
		 var ogundong_li=ogundong.getElementsByTagName('li');
		  ogundong.innerHTML=ogundong.innerHTML+ogundong.innerHTML;
		  ogundong.style.height=ogundong_li[0].offsetHeight*ogundong_li.length+'px';
          setInterval(function speed(){	
		      if(ogundong.offsetTop<-ogundong.offsetHeight/2){	
			     ogundong.style.top=0+'px';
			  }
			  ogundong.style.top=ogundong.offsetTop-40+'px';		  
			},2000);*/
		//导航滑动
		var oNav_bg=document.getElementById('nav_bg');
		var oNav_bg_li=oNav_bg.getElementsByTagName('li');
		var oNav_over=document.getElementById('nav_over');
		var oWhite=document.getElementById('white');
		var oAbt=document.getElementById('abt');
		var oAbt_li=oAbt.getElementsByTagName('li');
		var timer=null;
		
		for(var i=0; i<oAbt_li.length; i++){	
		    
		    oAbt_li[i].onmouseover=function(){
				var target=this.offsetLeft;
				startMove(oNav_over, {left: target}, function(){	
				    startMove(oWhite, {left: (-target+15)}) 
				})   
				      
			}
			 oAbt_li[i].onmouseout=function(){
				startMove(oNav_over, {left: 15})   
				startMove(oWhite, {left: 0})          
			}
		}

	//登录
	var oScreen=document.getElementById('screen');
	    
		//oScreen.style.width=document.documentElement.clientWidth+'px';
		//oScreen.style.height=document.documentElement.clientHeight+'px';
		
	$('.login').click(function(){	
	  $('#login').show();
	  $('#screen').show();
	  $("body").css({"overflow":"hidden"});
	});	  
	$('.close').click(function(){	
	  $('#login').hide();
	  $('#screen').hide();
	  $("body").css({"overflow":"auto"});
	});	
	
	var oLogin=document.getElementById('login');
	var oH2=document.getElementById('h2');
	   oH2.onmousedown=function(e){
		   var oEvent=e||event;
		   var dis_X=oEvent.clientX-oLogin.offsetLeft;
		   var dis_Y=oEvent.clientY-oLogin.offsetTop;
	        document.onmousemove = function (e) {
			     var oEvent=e||event;
				 var l=oEvent.clientX-dis_X;
				 var t=oEvent.clientY-dis_Y;
				 
				 if(l<0){	
				    l=0;
				 }else if(l>(document.documentElement.clientWidth-oLogin.offsetWidth)){	
				    l=document.documentElement.clientWidth-oDiv.offsetWidth;
				 }
				 
				 if(t<0){	
				    t=0
				 }else if(t>(document.documentElement.clientHeight-oLogin.offsetHeight)){	
				     t=(document.documentElement.clientHeight-oLogin.offsetHeight)
				 }
				 oLogin.style.left=l+'px';
				 oLogin.style.top=t+'px';
			} 
			document.onmouseup = function () {
				document.onmousemove = null;
				document.onmouseup = null;
			}
			return false;
	   }
	  
		 
//-------------------------------------------	
 }
 
 
 
 