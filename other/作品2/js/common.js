// JavaScript Document
$(function (){
	
	
	 
	$("#sliderbar").children("li").hover(function (){
		$(this).children(".sliderbarsub").stop().animate({'height':'84px'});
		$(this).addClass("active");
	},function (){
		$(this).children(".sliderbarsub").stop().animate({'height':'0'});
		$(this).removeClass("active");
	});
	$("#teamBox").children("li").hover(function (){
		$(this).children(".temaModel").fadeIn();
	},function (){
		$(this).children(".temaModel").fadeOut();
	});
	$(".btn").hover(function (){
		$(this).addClass("active");
	},function (){
		$(this).removeClass("active");
	});

     /*回到顶部*/
    var gotop=document.getElementById('gotop');
    gotop.onclick=function(){
        var oTop=document.body.scrollTop||document.documentElement.scrollTop;
        var n=0;
        var count=Math.floor(1000/30);
        var start=oTop;
        var dis=0-start;

        var timer=null;

        clearInterval(timer);
        timer=setInterval(function(){
            n++;

            var cur=start+dis*n/count;

            document.body.scrollTop=document.documentElement.scrollTop=cur;
            if(n==count){
                clearInterval(timer);
            }
        },30)
    }
    
 $("#gotBottom").click(function(){
    	
    	 var oHeight=document.documentElement.clientHeight;

	   var n=0;
	   var count=Math.floor(1000/30);
	   var start=0;
	   var dis=oHeight-start;
	   var timers=null;
	   clearInterval(timers);
	   timers=setInterval(function(){
			n++;
			var cur=start+dis*n/count;
			document.body.scrollTop=document.documentElement.scrollTop=cur;
			if(n==count){
				clearInterval(timers);
			}
		},30)
    	
    })
   
});

