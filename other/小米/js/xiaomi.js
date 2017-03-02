$(function(){
    $(".jia").click(function(){
        var index=$(".jia").index(this)
        $(".fuwu").finish()
        $(".fuwu").eq(index).slideToggle(200)
    })
    $(".icon-p-menus").click(function(){
        $(".top2-box").finish()
        $(".top2-box").slideToggle(200)
    })
})