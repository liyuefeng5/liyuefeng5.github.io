// JavaScript Document
$(document).ready(function(e) {
    $(".ico-weixin").bind("click",function (){
			     $("#myModal").fadeIn();
   });
   $(".closeBtn").bind("click",function (){
		 $("#myModal").fadeOut();
   });
   $("#myModal").bind("click",function (e){
		 $("#myModal").fadeOut();
		 e.stopPropagation();
   });
   $("#nav").children("li").children("a").hover(function (){
			   $(this).addClass("hover");
  },function (){
	   $(this).removeClass("hover");
  });
});