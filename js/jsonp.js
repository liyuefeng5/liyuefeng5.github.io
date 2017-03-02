window.onload=function(){
	//百度
	;(function(){
		var oBaidu=document.getElementById('baidu');
		var oTxt=oBaidu.getElementsByTagName('input')[0];

		var url = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";           //百度
		//var url = "http://sug.so.360.cn/suggest"; 										//360
		oTxt.onkeydown=function(){
			jsonp({
				url:url,
				data:{
					wd:this.value,			//百度
					word:this.value		//360
				},
				cbName:"cb",				//百度
				//cbName : "callback",		//360
				success:function(json){
					var oUl = oBaidu.getElementsByTagName("ul")[0];
					oUl.innerHTML = "";
					for(var i = 0; i < json.s.length; i++){
						var oLi = document.createElement("li");
						oLi.innerHTML = json.s[i];
						oUl.appendChild(oLi);
					}
				},
				timeout:1000,
				error:function(){
					alert("失败");
				}
			});
		}
	})()
}
//jsonp封装
function jsonp(options){
	options = options || {};
	if(!options.url){
		return ;
	}

	options.data = options.data || {};
	options.cbName = options.cbName || "cb";
	options.timeout = options.timeout || 0;

	var fnName = ("jsonp_"+Math.random()).replace(".","");

	//2 定义全局函数
	window[fnName] = function(json){
		options.success && options.success(json);

		//释放资源
		window[fnName] = null;
		oHead.removeChild(oS);
		clearTimeout(timer);
	};

	var arr = [];
	//cbName: cb/callback
	options.data[options.cbName] = fnName;
	for(var name in options.data){
		arr.push(name + "=" + options.data[name]);
	}
	var str = arr.join("&");

	//1 创建script —— 函数的调用
	var oS = document.createElement("script");
	oS.src = options.url + "?" + str;
	var oHead = document.getElementsByTagName("head")[0];
	oHead.appendChild(oS);

	if(options.timeout){
		var timer = setTimeout(function(){
			options.error && options.error();
			window[fnName] = function(){};
			oHead.removeChild(oS);
		},options.timeout);
	}
}
