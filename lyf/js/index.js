
$(function(){
    $(window).resize(function(){
        var flag10=true;
        $(window).scroll(function(){
            if($(window).scrollTop()>668){
                $("nav").css({position:"fixed",top:0,left:0,"z-index":1})
            }else{
                $("nav").css({position:"relative",top:0,left:0})
            }
            if($(window).scrollTop()>($(".floor").eq(0).offset().top-500)&&$(window).scrollTop()<$(".floor").eq(1).offset().top){$(".about-text").css({transform:"translate(0,0)",opacity:1})

            }
            if(!($(window).scrollTop()>($(".floor").eq(0).offset().top-500)&&$(window).scrollTop()<$(".floor").eq(1).offset().top)){$(".about-text").css({transform:"translate(-250px,0)",opacity:0})}
            if($(window).scrollTop()>($(".floor").eq(1).offset().top-500)&&$(window).scrollTop()<$(".floor").eq(2).offset().top){$(".game-box .row").css({transform:"translate(0,0)",opacity:1})
            }
            if(!($(window).scrollTop()>($(".floor").eq(1).offset().top-500)&&$(window).scrollTop()<$(".floor").eq(2).offset().top)){$(".game-box .row").css({transform:"translate(-200px,0)",opacity:0})}
            if($(window).scrollTop()>($(".floor").eq(2).offset().top-500)&&$(window).scrollTop()<$(".floor").eq(3).offset().top){$(".portfolio-box .row").css({transform:"translate(0,0)",opacity:1})
            }
            if(!($(window).scrollTop()>($(".floor").eq(2).offset().top-500)&&$(window).scrollTop()<$(".floor").eq(3).offset().top)){$(".portfolio-box .row").css({transform:"translate(-200px,0)",opacity:0})}

            if($(window).scrollTop()>($(".floor").eq(4).offset().top-500)&&$(window).scrollTop()<$(".floor").eq(5).offset().top){$(".time-con").css({transform:"translate(0,0)",opacity:1})
            }
            if(!($(window).scrollTop()>($(".floor").eq(4).offset().top-500)&&$(window).scrollTop()<$(".floor").eq(5).offset().top)){$(".time-con").css({transform:"translate(150px,0)",opacity:0})
                $(".sb").css({transform:"translate(-150px,0)",opacity:0})
            }

            if($(window).scrollTop()>($(".floor").eq(3).offset().top-500)&&$(window).scrollTop()<$(".floor").eq(4).offset().top){
                if(flag10){
                    flag10=false;
                    can(0,0.99)
                    can(1,0.99)
                    can(2,0.99)
                    can(3,0.99)
                    can(4,0.8)
                    can(5,0.8)
                }

            }
            if(!($(window).scrollTop()>($(".floor").eq(3).offset().top-500)&&$(window).scrollTop()<$(".floor").eq(4).offset().top)){
               flag10=true;
                can(0,0,1)
                can(1,0,1)
                can(2,0,1)
                can(3,0,1)
                can(4,0,1)
                can(5,0,1)
            }
    })
    })
    $(window).resize();
    $(".navr").click(function(){
        $(".list-box").finish()
        $(".list-box").slideToggle(400)
    })
    $(".title").click(function(){
        $(".list-box").slideUp()
        var index=$(".title").index(this);
        var tops=$(window).scrollTop();
        $({val:tops}).animate({val:$(".floor").eq(index).offset().top},{
            duration:1500,
            step:function(){
                $(window).scrollTop(this.val)
            }
        })

    })
    $(".list").click(function(){
        $(".list-box").slideUp();
        var index=$(".list").index(this);
        var tops=$(window).scrollTop();
        $({val:tops}).animate({val:$(".floor").eq(index).offset().top},{
            duration:1500,
            step:function(){
                $(window).scrollTop(this.val)
            }
        })

    })
    $(".intro-con-btn").eq(0).click(function(){
        var tops=$(window).scrollTop();
        $({val:tops}).animate({val:$(".floor").eq(0).offset().top},{
            duration:1500,
            step:function(){
                $(window).scrollTop(this.val)
            }
        })
    })
    $(".intro-con-btn").eq(1).click(function(){
        var tops=$(window).scrollTop();
        $({val:tops}).animate({val:$(".floor").eq(2).offset().top},{
            duration:1500,
            step:function(){
                $(window).scrollTop(this.val)
            }
        })
    })

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
    });


})
