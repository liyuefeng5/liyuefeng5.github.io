$(function(){
  var newtop=(setoffWindow().height-320)/2
  var zzbg=document.createElement("div")
  zzbg.style.cssText="width:100%;height:100%;position:fixed;top:0;left:0;background:rgba(0,0,0,0.5);z-index:9999999999999"
   document.body.appendChild(zzbg)
   var zza=document.createElement("div")
   zza.style.cssText="display:block;width:600px;height:320px;margin:0 auto;position:relative;cursor: pointer;"
   zza.style.marginTop=newtop+"px"
   zzbg.appendChild(zza)
  var zz=document.createElement("img")
  zz.setAttribute("data-src","img/111.jpg")
  zza.appendChild(zz)
  var gb=document.createElement("img")
  gb.setAttribute("data-src","img/112.jpg")
  gb.className="gb"
  zza.appendChild(gb)
  gb.onclick=function(){
    document.body.removeChild(zzbg)
  }
	var topr=$(".topr")[0]
	var topr1=$(".topr1")[0]
	var top=$(".top")[0]
    topr.onclick=function(){
    	top.style.display="block"
    	 topr.style.display="none"
    }
    topr1.onclick=function(){
    	top.style.display="none"
    	topr.style.display="block"
    }
    var wzdh=$(".wzdh")[0]
    var tck=$(".tck")[0]
    var top3=$(".top3")[0]
    hover(top3,function(){wzdh.style.background="#fff"
      wzdh.style.border="1px solid #ddd"
      wzdh.style.borderBottomWidth=0
      tck.style.display="block"
      animate(tck,{height:200},200)},function(){animate(tck,{height:0},200,function(){
   tck.style.display="none"
   wzdh.style.border=0
   wzdh.style.background="#F5F5F5"})})
    var wzdh1=$(".wzdh")[1]
    var tck1=$(".tck")[1]
    var top4=$(".top4")[0]
    hover(top4,function(){wzdh1.style.background="#fff"
        wzdh1.style.border="1px solid #ddd"
        wzdh1.style.borderBottomWidth=0
        tck1.style.display="block"
        animate(tck1,{height:95},200)},function(){animate(tck1,{height:0},200,function(){
   tck1.style.display="none"
   wzdh1.style.border=0
   wzdh1.style.background="#F5F5F5"})})
var wzdh2=$(".wzdh")[2]
    var tck2=$(".tck")[2]
var wddd=$(".wddd")[0]
hover(wddd,function(){wzdh2.style.background="#fff"
        wzdh2.style.border="1px solid #ddd"
        wzdh2.style.borderBottomWidth=0
        tck2.style.display="block"
        animate(tck2,{height:120},200)},function(){animate(tck2,{height:0},200,function(){
   tck2.style.display="none"
   wzdh2.style.border=0
   wzdh2.style.background="#F5F5F5"})})
var wzdh3=$(".wzdh")[3]
    var tck3=$(".tck")[3]
var wdyg=$(".wdyg")[0]
hover(wdyg,function(){ wzdh3.style.background="#fff"
        wzdh3.style.border="1px solid #ddd"
        wzdh3.style.borderBottomWidth=0
        tck3.style.display="block"
        animate(tck3,{height:210},200)},function(){    animate(tck3,{height:0},200,function(){
   tck3.style.display="none"
   wzdh3.style.border=0
   wzdh3.style.background="#F5F5F5"})})

var wzdh4=$(".wzdh")[4]
    var tck4=$(".tck")[4]
var khfw=$(".khfw")[0]
hover(khfw,function(){wzdh4.style.background="#fff"
        wzdh4.style.border="1px solid #ddd"
        wzdh4.style.borderBottomWidth=0
        tck4.style.display="block"
        animate(tck4,{height:159},200)},function(){ animate(tck4,{height:0},200,function(){
   tck4.style.display="none"
   wzdh4.style.border=0
   wzdh4.style.background="#F5F5F5"})})

var left=$(".left")[0]
var right=$(".right")[0]
var banner=$(".banner")[0]
var color=["#F6E5D1","#E01324","#D80911","#39427D","#B21C0E","#647CE8","#FED406","#E62916","#DE1A1E","#EF1D38","#9C0E0A","#B20000","#E22416","#D10121","#E12208","#62020E","#A00024","#EDF0E9","#FD1E4B","#000000"]
var col=["#F6E5D1","#D80911","#B21C0E","#FED406","#DE1A1E","#9C0E0A","#E22416","#E12208","#A00024","#FD1E4B","#000000"]
  var btli=$(".btli")
  var btngroup=$(".btngroup")
  var bli=$(".bli")
var bangroup=$(".bangroup")
var btnbg=$(".btnbg")
var n=0
function move(){n++
  if(n==20){n=0}
     for (var i = 0; i < bli.length; i++) {
       bli[i].style.display="none"
       btli[i].style.background="#fff"
     };
    for (var i = 0; i <btnbg.length; i++) {
      if(btli[n].parentNode!=btnbg[i]){
      btnbg[i].style.display="none"
      btnbg[i].style.top=0
      btngroup[i].style.background="rgba(0,0,0,0.4)"}
    };
     btli[n].parentNode.style.display="block"
     //btli[n].parentNode.style.top=0
     animate(btli[n].parentNode,{top:-15},function(){})
      bli[n].style.display="block"
      bli[n].style.opacity=0.1
      animate(bli[n],{opacity:1},500)
      btli[n].style.background="yellow"
      btli[n].parentNode.parentNode.style.background="rgba(0,0,0,0.8)"
      banner.style.background=color[n]
}
var m=20
left.onclick=function(){m--
if(m==0){m=20}
     for (var i = 0; i < bli.length; i++) {
       bli[i].style.display="none"
       btli[i].style.background="#fff"
     };
    for (var i = 0; i <btnbg.length; i++) {
      if(btli[n].parentNode!=btnbg[i]){
      btnbg[i].style.display="none"
      btnbg[i].style.top=0
      btngroup[i].style.background="rgba(0,0,0,0.4)"}
    };
     btli[m].parentNode.style.display="block"
     //btli[m].parentNode.style.top=0
     animate(btli[m].parentNode,{top:-15},function(){})
      bli[m].style.display="block"
      bli[m].style.opacity=0.1
      animate(bli[m],{opacity:1},500)
      btli[m].style.background="yellow"
      btli[m].parentNode.parentNode.style.background="rgba(0,0,0,0.8)"
      banner.style.background=color[m]
      n=m
}
var t1
var bbli=$(".bbli")
var bbgz=$(".bbgz")
var cc=$(".cc")
right.onclick=function(){move()}
for (var i = 0; i < btngroup.length; i++) {
  btngroup[i].index=i
  hover(btngroup[i],function(){
    var that=this
    clearTimeout(t1)
   t1=setTimeout(function(){
for (var j = 0; j < bli.length; j++) {
  bli[j].style.display="none"
  bbgz[j].style.background="#fff"
}
for (var q = 0; q < cc.length; q++) {
  cc[q].style.display="none"
  btngroup[q].style.background="rgba(0,0,0,0.4)"
  btnbg[q].style.display="none"
};
cc[that.index].style.display="block"
btngroup[that.index].style.background="rgba(0,0,0,0.8)"
getChildren(bangroup[that.index])[0].style.display="block"
getChildren(bangroup[that.index])[0].style.opacity=0.1
$(".bbgz",cc[that.index])[0].style.background="yellow"
//getChildren(bangroup[this.index])[0].style.display="block"
banner.style.background=col[that.index]
for (var j = 0; j < bli.length; j++) {
  if(color[j]==col[that.index]){m=n=j}
};
animate(getChildren(bangroup[that.index])[0],{opacity:1},500)},300)},function(){
    cc[this.index].style.display="none"
   })

}
for (var i = 0; i < bbli.length; i++) {
  bbli[i].index=i
  hover(bbli[i],function(){
    bli[this.index].style.opacity=0.1
  for (var j = 0; j < bli.length; j++) {
  bli[j].style.display="none"
  bbgz[j].style.background="#fff"
   }

bbgz[this.index].style.background="yellow"
bli[this.index].style.display="block"
animate(bli[this.index],{opacity:1},500)
banner.style.background=color[this.index]
},function(){})

};

var t=setInterval(move,4000)
banner.onmouseover=function(){
left.style.display="block"
right.style.display="block"
clearInterval(t)
}
banner.onmouseout=function(){
left.style.display="none"
right.style.display="none"
t=setInterval(move,4000)
}



 var fsbtn2=$(".fsbtn2")
 var fsbtn1=$(".fsbtn1")
 var fsbox1=$(".fsbox1")
 var fsbox2=$(".fsbox2")
 for (var i = 0; i < fsbtn2.length; i++) {fsbtn2[i].index=i
fsbtn2[i].onmouseover=function(){
  fsbox1[this.index].style.display="none"
fsbox2[this.index].style.display="block"
fsbtn1[this.index].style.borderBottomWidth=0
fsbtn2[this.index].style.borderBottom="3px solid #ff6b80"
fsbtn1[this.index].style.fontWeight="normal"
fsbtn1[this.index].style.color="#666"
fsbtn2[this.index].style.fontWeight="bold"
fsbtn2[this.index].style.color="#222"}};
for (var i = 0; i < fsbtn1.length; i++) {
  fsbtn1[i].index=i
fsbtn1[i].onmouseover=function(){
fsbox2[this.index].style.display="none"
fsbox1[this.index].style.display="block"
fsbtn2[this.index].style.borderBottomWidth=0
fsbtn1[this.index].style.borderBottom="3px solid #ff6b80"
fsbtn2[this.index].style.fontWeight="normal"
fsbtn2[this.index].style.color="#666"
fsbtn1[this.index].style.fontWeight="bold"
fsbtn1[this.index].style.color="#222"
 }
 };

 var left1=$(".left1")[0]
 var right1=$(".right1")[0]
 var snrbox=$(".snrbox")[0]
 snrbox.onmouseover=function(){
    left1.style.display="block"
    right1.style.display="block"
 }
snrbox.onmouseout=function(){
    left1.style.display="none"
    right1.style.display="none"
}
var hdbox=$(".hdbox")[0]
function yd(){
 animate(hdbox,{marginLeft:-999},500,function(){
    var f1=getFirst(hdbox)
    hdbox.appendChild(f1)
    hdbox.style.marginLeft=0
flag3=1
 })
}
var flag3=1
var flag4=1
left1.onclick=function(){
if(flag3){flag3=0
    yd()}
    }
right1.onclick=function(){
if(flag4){flag4=0
    var l1=getLast(hdbox)
    var f1=getFirst(hdbox)
    hdbox.insertBefore(l1,f1)
    hdbox.style.marginLeft="-999px"
    animate(hdbox,{marginLeft:0},500,function(){flag4=1})
    }
    }
var bb=document.documentElement.scrollTop?document.documentElement:document.body
var zbtn=$(".zbtn")[0]
   if(bb.scrollTop>720){
    zbtn.style.display="block"}
if(bb.scrollTop<720){
    zbtn.style.display="none"
}
var imgs=$("img")
for (var i = 0; i < imgs.length; i++) {
          if(imgs[i].offsetTop<setoffWindow().height)
          {imgs[i].src=imgs[i].getAttribute("data-src")}  
        }
window.onscroll=function(){
  fhbox.onclick=function(){
  animate(aa,{scrollTop:0})
}
    var zbtn=$(".zbtn")[0]
    var aa=document.documentElement.scrollTop?document.documentElement:document.body
    var flag5=1
    var flag6=1
    var tss=$(".tss")[0]


    if(aa.scrollTop>900){
  tss.style.display="block"
    }
      if(aa.scrollTop<900){
  tss.style.display="none"
    }
   if(aa.scrollTop>720){
   if(flag5){flag5=0
    zbtn.style.display="block"
flag6=1
}
    }
    if(aa.scrollTop<720){
    if(flag6){flag6=0
    zbtn.style.display="none"
    flag5=1
}
}
 var btns=$("li",zbtn)
 var fsbhbox=$(".fsbhbox")
 var ph=$(".ph")
  var bh=$(".bh")
for (var i = 0; i < btns.length; i++) {
  btns[i].index=i
if(fsbhbox[i].offsetTop<=aa.scrollTop&&fsbhbox[i].offsetTop+fsbhbox[i].offsetHeight>aa.scrollTop){
    for (var j = 0; j < bh.length; j++) {
      bh[j].style.display="block"
       ph[j].style.display="none"
    };
     bh[i].style.display="none"
     ph[i].style.display="block"
    btns[i].style.background="#fff"
    }
    btns[i].onclick=function(){
    top1=fsbhbox[this.index].offsetTop
    animate(aa,{scrollTop:top1})
    bh[this.index].style.display="none"
     ph[this.index].style.display="block"
   }
  
    hover(btns[i],function(){bh[this.index].style.display="none"
     ph[this.index].style.display="block"
     btns[this.index].style.background="#fff"},function(){bh[this.index].style.display="block"
     ph[this.index].style.display="none"
 btns[this.index].style.background="#f4f4f4"})
}
/*var fh=$(".fh")[0]
fh.onclick=function(){
  animate(aa,{scrollTop:0})
}*/
var imgs=$("img")
  for (var a = 0; a < imgs.length; a++) {
          if(aa.scrollTop>imgs[a].offsetTop-setoffWindow().height)
          {imgs[a].src=imgs[a].getAttribute("data-src")}  
}  
}
var lc=$(".lc")
var zzb=$(".zzb")
var tb1=$(".tb1")
var position1=["8px -84px","9px -114px","7px -287px"]
var position2=["-27px -84px","-26px -114px","-28px -287px"]
var position3=["7px -174px","8px -204px","7px -234px"]
var position4=["-28px -174px","-27px -204px","-28px -234px"]
var fhbox=$(".fhbox")[0]

for (var i = 0; i < zzb.length; i++) {zzb[i].index=i
  hover(zzb[i],function(){
tb1[this.index].style.backgroundColor="#FFAA01"
tb1[this.index].style.backgroundPosition=position1[this.index]
    lc[this.index].style.background="#FFAA01"
    lc[this.index].style.color="#383838"
    animate(lc[this.index],{left:-47},500)},function(){
tb1[this.index].style.backgroundColor="#383838"
tb1[this.index].style.backgroundPosition=position2[this.index]
      animate(lc[this.index],{left:0},500)
    lc[this.index].style.background="#383838"
    lc[this.index].style.color="#FFAA01"})
  }
var lc1=$(".lc1")
var zzb1=$(".zzb1")
var tb2=$(".tb2")

for (var i = 0; i < zzb1.length; i++) {zzb1[i].index=i
  hover(zzb1[i],function(){
tb2[this.index].style.backgroundColor="#FFAA01"
tb2[this.index].style.backgroundPosition=position3[this.index]
    lc1[this.index].style.background="#FFAA01"
    lc1[this.index].style.color="#383838"
    animate(lc1[this.index],{left:-74},500)},function(){
tb2[this.index].style.backgroundColor="#383838"
tb2[this.index].style.backgroundPosition=position4[this.index]
      animate(lc1[this.index],{left:0},500)
    lc1[this.index].style.background="#383838"
    lc1[this.index].style.color="#FFAA01"})
  }



var banl=$(".banl")[0]
var bana=getChildren(banl)
var zbdtckk=$(".zbdtckk")
var zbdtck=$(".zbdtck")[0]
for (var i = 0; i < bana.length; i++) {bana[i].index=i
  hover(bana[i],function(){for (var i = 0; i < bana.length; i++) {
      bana[i].style.background="#2b2b2b"
      bana[i].style.color="#fff"
      zbdtckk[i].style.display="none"
    }
  zbdtckk[this.index].style.display="block"  
bana[this.index].style.background="#fff"
bana[this.index].style.color="#2b2b2b"
bana[this.index].style.fontWeight="bold"},function(){zbdtckk[this.index].style.display="none" 
bana[this.index].style.background="#2b2b2b"
bana[this.index].style.color="#fff"
})
}
var t1=$("#t1")
t1.value="年货一路省到家"
t1.onfocus=function(){
  t1.value=""
}
t1.onblur=function(){
  if(t1.value==""){t1.value="年货一路省到家"}
  
}
})