$(function(){
    $('#fullpage').fullpage({
        scrollingSpeed:1500,
        navigation:true,
        navigationTooltips:["首页","视觉","交互","皮肤","功能","代办邮件","联系人邮件"],
        //anchors: ['firstPage', 'secondPage','lastPage'],
        afterLoad: function(anchorLink, index){
            //using index
            $(".scale").css("transform","scale(1,1)")
            $(".opacity").css("opacity","1")
            if(index == 1){
                $(".sec1-mail").css("top","44.7%")
                $(".sec1-smail").css("top","27%")
                $(".sec1-logo").css("top","2%")
            }
            if(index == 2){
                $(".sec2-index").css("top","37%")
                $(".sec2-l").css("left","6%")
                $(".sec2-r").css("right","8%")
            }
            if(index == 3){
                $(".sec3-wz2").css("left","15%")
                $(".sec3-hand").css("right","30%")
            }
            if(index == 4){
                $(".sec4-y2").css("top","17.2%")
                $(".sec4-y1").css("top","17.2%")
                $(".sec4-y3").css("top","17.2%")
            }
            if(index == 5){
                $(".sec5-box1").css("left","10%")
                $(".sec5-box2").css("left","30%")
                $(".sec5-box3").css("right","10%")
                $(".sec5-box4").css("right","30%")
            }
            if(index == 6){
                $(".sec6-l").css("left","12%")
                $(".sec6-r").css("right","12%")
                $(".sec6-s").css("height","545px")
            }
            if(index == 7){
                $(".sec7-bg71").css("top","30%")
                $(".sec7-bg72").css("top","20%")
            }
            if(index == 8){
                $(".to").css({opacity:1,transform:"translate(0,0)"})
            }
            if(index == 9){
                $(".sec9-y1").css("left","15%")
                $(".sec9-y2").css("opacity",1)
                $(".sec9-y3").css("right","15%")
            }
            if(index == 10){
                $(".sec10-y1").css("top","50%")
            }
        },
        onLeave: function(index, nextIndex, direction){
            var leavingSection = $(this);
            $(".scale").css("transform","scale(0.3,0.3)")
            $(".l").css("left","-40%")
            $(".r").css("right","-40%")
            $(".top").css("top","100%")
            $(".sec3-wz2").css("left","-40%")
            $(".opacity").css("opacity","0.3")
            $(".sec6-s").css("height",0)
            if(index == 1){
                $(".sec1-logo").css("top","-10%")
            }
            if(index == 8) {
                $(".to").css({opacity: 0, transform: "translate(80px,80px)"})
            }
        }
})
})