window.onload=function(){
		var nks=getClass("nk1")
		var axts=getClass("axt")
		for (var i = 0; i < nks.length; i++) {
			nks[i].index=i
			nks[i].onmouseover=function(){
              axts[this.index].style.display="block"

			}
		}
		for (var i = 0; i < nks.length; i++) {
			nks[i].index=i
			nks[i].onmouseout=function(){
              axts[this.index].style.display="none"

			}
		}
		var gzpps=getClass("gzppbox")
		var gjdps=getClass("gjdp")
		
		for (var i = 0; i < gzpps.length; i++) {
			gzpps[i].index=i
			
			gzpps[i].onclick=function(){
				for (var j = 0; j < gzpps.length; j++) {
				gjdps[j].style.display="none"
				gzpps[j].style.textDecoration="none"
        gzpps[j].style.color="#666"
        gzpps[j].style.fontWeight=300

			}

    gjdps[this.index].style.display="block"
this.style.textDecoration="underline"
this.style.color="#2F2F2F"
this.style.fontWeight=700
			}
		}
	var banner=getClass("banner")[0]
	var banz=getClass("banz")[0]
	var bans=getClass("banzbox")[0]
	var ban=getChildren(bans)
	var btns=getClass("btnbox")[0]
	var btn=getChildren(btns)
	var color=["#E8E8E8","#E8E8E8","#FFD0C8","#E62601","#FF4200"]
	for (var i = 0; i < btn.length; i++) {btn[i].index=i
   	btn[i].onmouseover=function(){
   		that=this
        t1=setTimeout(function(){
        for (var j= 0; j< btn.length; j++) {
        	ban[j].style.display="none"
        	btn[j].style.background="#ccc"
        }
        ban[that.index].style.display="block"
         that.style.background="#fff"
         banner.style.background=color[that.index]
         num=that.index},300)
   	}
   	btn[i].onmouseout=function(){
   		clearTimeout(t1)}
   }
   t2=setInterval(lunbo,3000)
   var num=0
   function lunbo(){num++
   	if(num==btn.length){num=0}
   	for (var i = 0; i < btn.length; i++) {
    ban[i].style.display="none"
   	btn[i].style.background="#ccc"
   }
   	ban[num].style.display="block"
  btn[num].style.background="#fff"
  banner.style.background=color[num]
      }

// banner.onmouseover=function(){
//       
//       }
// banner.onmouseout=function(){
//       
//       }
hover(banner,function(){
    clearInterval(t2)
},function(){
    t2=setInterval(lunbo,3000)
})
    var btnr=$(".zbtck")
    var tck=$(".tck")
    for (var i = 0; i < btnr.length; i++) {btnr[i].index=i
    	btnr[i].onmouseover=function(){
    		that=this
    		that.style.backgroundColor="#C40000"
    	    t=setTimeout(function(){
    	    tck[that.index].style.display="block"
    		animate(tck[that.index],{marginLeft:-91,opacity:1},200)},600)
    	}
    	btnr[i].onmouseout=function(){
    		aa=this
    		clearTimeout(t)
    		this.style.backgroundColor="#000"
    		animate(tck[this.index],{marginLeft:-106,opacity:0.7},200,function(){tck[aa.index].style.display="none"})
    	}
    }
   var zbtck11=$(".zbtck11")[0]
   var tsd=$(".tsd")[0]
   zbtck11.onmouseover=function(){zbtck11.style.backgroundColor="#C40000"
   t=setTimeout(function(){
   tsd.style.display="block"},600)
        }
   zbtck11.onmouseout=function(){
   	clearTimeout(t)
   	zbtck11.style.backgroundColor="#000"
    tsd.style.display="none"}

   var zbtck12=$(".zbtck12")[0]
   zbtck12.onmouseover=function(){zbtck12.style.backgroundColor="#C40000"}
   zbtck12.onmouseout=function(){
clearTimeout(t)
   	zbtck12.style.backgroundColor="#000"}




    var topbar=$(".topbar")[0]
    var flag1=true
    var flag2=true
    var imgs=$("img")
    var aa=document.documentElement.scrollTop?document.documentElement:document.body
    for (var i = 0; i < imgs.length; i++) {
        	if(imgs[i].offsetTop<setoffWindow().height)
        	{imgs[i].src=imgs[i].getAttribute("data-src")}	
        }
    window.onscroll=function(){
    	 aa=document.documentElement.scrollTop?document.documentElement:document.body
    	if(aa.scrollTop>886){if(flag1){flag1=false
    		animate(topbar,{top:0})
    		flag2=true}
    	}
    	if(aa.scrollTop<886){
      if(flag2){flag2=false
      	animate(topbar,{top:-50})
    		flag1=true}
        }
        for (var i = 0; i < imgs.length; i++) {
        	if(aa.scrollTop>imgs[i].offsetTop-setoffWindow().height)
        	{imgs[i].src=imgs[i].getAttribute("data-src")}	
        }
    }
    var fhtop=$("#qian7")
    fhtop.onclick=function(){
    	var aa=document.documentElement.scrollTop?document.documentElement:document.body
    	animate(aa,{scrollTop:0},1000)
    }
	}