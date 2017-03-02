// JavaScript Document
$(document).ready(function(e) {
      //用户名
	   $(".user_hint").focus(function(){	
			$(".user_info").show();   
			$(".user_succ").hide();
			$(".user_error").hide(); 
	   });
	   $(".user_hint").blur(function(){	
			if($(".user_hint").val()==""){	
			  $(".user_info").hide();  
			  $(".user_succ").hide();
			  $(".user_error").hide(); 
			}else if(!/[a-zA-Z0-9_]{2,20}/.test($(".user_hint").val())){
				      $(".user_error").show();
					  $(".user_info").hide();  
					  $(".user_succ").hide();
				  }else{	
						  $(".user_succ").show(); 
						  $(".user_error").hide(); 
						  $(".user_info").hide();
						  }  
	   })
	   //密码
	  $(".pass_hint").focus(function(){	
			$(".pass_info").show();   
			$(".pass_succ").hide();
			$(".pass_error").hide(); 
	   });
		$(".pass_hint").blur(function(){	
			if($(".pass_hint").val()==""){	
			     $(".pass_info").hide();   
			}else if($(".pass_hint").val().length>=6&&!/\s/.test($(".pass_hint").val())){
				   $(".pass_info").hide();   
					$(".pass_succ").show();
					$(".pass_error").hide();
				}else{	
				   $(".pass_info").hide();   
					$(".pass_succ").hide();
					$(".pass_error").show();
				}
	   });
	   //密码强度
	    $(".pass_hint").keyup(function(){	
		
		    var value=$(".pass_hint").val();
			var value_length=value.length;
			var add_length=0;
			
			//第一个条件：6-20个字符
			if(value_length>=6&&value_length<=20){	
			   $(".pass_info p .q1").html("●").css({"color":"green"});
			}else{	
			   $(".pass_info p .q1").html("○").css({"color":"#ccc"});
			}
			
			//第二个条件：只能包含大小写字母·数字·和非空格字符
			if(value_length>0&&!/\s/.test(value)){	
			   $(".pass_info p .q2").html("●").css({"color":"green"});
			}else{	
			   $(".pass_info p .q2").html("○").css({"color":"#ccc"});
			}
			
			//第三个条件：大·小写字母·数字·非空字符，2种以上
			if(/[0-9]/.test(value)){	
			   add_length++;
			}
			if(/[a-z]/.test(value)){	
			   add_length++;
			}
			if(/[A-Z]/.test(value)){	
			   add_length++;
			}
			if(!/[0-9a-zA-Z]/.test(value)){	
			   add_length++;
			}
			if(add_length>=2){	
			   $(".pass_info p .q3").html("●").css({"color":"green"});
			}else{	
			   $(".pass_info p .q3").html("○").css({"color":"#ccc"});
			}
			
			// 一定要从高像低判断，避免冲突。
			//安全级别： 高：大于等于10个字符，并且三种不同类别的字符混拼
			//         中：大于等于8个字符，2种不同类别的字符
			//         低：大于等于1个字符混拼
              if(value_length>=10&&add_length>=3){	
				   $(".pass_info p .s1").html("●").css({"color":"green"});
				   $(".pass_info p .s2").html("●").css({"color":"green"});
				   $(".pass_info p .s3").html("●").css({"color":"green"});
				   $(".pass_info p .s4").html("高").css({"color":"green"});
				}else if(value_length>=8&&add_length>=2){	
				   $(".pass_info p .s1").html("●").css({"color":"green"});
				   $(".pass_info p .s2").html("●").css({"color":"green"});
				   $(".pass_info p .s3").html("●").css({"color":"#ccc"});
				   $(".pass_info p .s4").html("中").css({"color":"green"});
				}else if(value_length>=1){	
				   $(".pass_info p .s1").html("●").css({"color":"green"});
				   $(".pass_info p .s2").html("●").css({"color":"#ccc"});
				   $(".pass_info p .s3").html("●").css({"color":"#ccc"});
				   $(".pass_info p .s4").html("低").css({"color":"green"});
				}else{	
				   $(".pass_info p .s1").html("●").css({"color":"#ccc"});
				   $(".pass_info p .s2").html("●").css({"color":"#ccc"});
				   $(".pass_info p .s3").html("●").css({"color":"#ccc"});
				   $(".pass_info p .s4").html("");
				} 		
		});
	   
	   //密码再次确认
	   $(".pass_again").focus(function(){	
	         $(".againpass_info").show();   
			 $(".againpass_succ").hide();
			 $(".againpass_error").hide(); 
	   });
	   
	   $(".pass_again").blur(function(){	
	          if($(".pass_again").val()==""){	
				  $(".againpass_info").hide();   
				  $(".againpass_succ").hide();
			  	  $(".againpass_error").hide(); 
			  } else if($(".pass_again").val()!=$(".pass_hint").val()){	
			      $(".againpass_info").hide();   
				  $(".againpass_succ").hide();
			  	  $(".againpass_error").show(); 
			  }else{	
			      $(".againpass_info").hide();   
				  $(".againpass_succ").show();
			  	  $(".againpass_error").hide(); 
			  }
	   });
	   //显示密码
	   var oEye=document.getElementById('eye');
	   var oPass=document.getElementById('pass');
	   var oEye1=document.getElementById('eye1');
	   var oPass1=document.getElementById('pass1');
	       
		   oEye.onclick=function(){	
		      show_hade(oPass)
		   }
		    oEye1.onclick=function(){	
		       show_hade(oPass1)
		   }
	       function show_hade(apass){	
		        if(apass.type=="password"){	
			       apass.type="text"
			   }else{	
			       apass.type="password"
			   }
		   }
	   
	   //回答
	     $(".answer").focus(function(){	
	         $(".ans_info").show();   
			 $(".ans_succ").hide();
			 $(".ans_error").hide(); 
	   });
	   
	   $(".answer").blur(function(){	
	          if($(".answer").val()==""){	
				  $(".ans_info").hide();   
				  $(".ans_succ").hide();
			  	  $(".ans_error").hide(); 
			  } else if($(".answer").val()>=2&&$(".answer").val()<=32){	
			      $(".ans_info").hide();   
				  $(".ans_succ").hide();
			  	  $(".ans_error").show(); 
			  }else{	
			      $(".ans_info").hide();   
				  $(".ans_succ").show();
			  	  $(".ans_error").hide(); 
			  }
	   });
	   
	   //电子邮件
	    $(".e_mail").focus(function(){	
		     $(".all_email").show(); 
	         $(".e_m_info").show();   
			 $(".e_m_succ").hide();
			 $(".e_m_error").hide(); 
	   });
	   
	   $(".e_mail").blur(function(){	
	         $(".all_email").hide(); 
	          if($(".e_mail").val()==""){	
				  $(".e_m_info").hide();   
				  $(".e_m_succ").hide();
			  	  $(".e_m_error").hide(); 
				        //523455308        @ qq           .com
			  } else if(!/^[a-zA-Z0-9_\-\.]+@[a-zA-Z0-9\-_]+(\.[a-zA-Z]{2,4}){1,2}/.test($(".e_mail").val())){	
			      $(".e_m_info").hide();   
				  $(".e_m_succ").hide();
			  	  $(".e_m_error").show(); 
			  }else{	
			      $(".e_m_info").hide();   
				  $(".e_m_succ").show();
			  	  $(".e_m_error").hide(); 
			  }
	   });
	   
	   //电子邮件补全系统
	    $(".e_mail").keyup(function(){	
		    if($(this).val().indexOf("@")==-1){
		       $(".all_email li span").html($(this).val());
			}else{	
			   $(".all_email").hide();
			}
		});
	   
	    //电子邮件补全系统点击获取
		//这里不能用点击事件click来执行。因为click是点击弹起后触发的，而blur以后就执行不到click了。		
	    $(".all_email li").mousedown(function(){
			  //  $(".e_mail").val($(this).html());
			});
	   
	   //生日
	   
	   
	   //备注
	      var t=document.getElementById("textBig");
		  var str=document.getElementById("strLength");
		  t.onkeydown=function (){
			  str.innerHTML=200-(t.value.length);
		  }
	   
//--------------------------------------------------------	   
});