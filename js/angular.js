var app=angular.module('app',['ngRoute']);
//路由跳转
app.config(function($routeProvider){
	$routeProvider.when('/index',{
		templateUrl:'../index.html'
	}).when('/about',{
		templateUrl:'../case/case.html'
	}).otherwise({
		redirectTo:'../index.html'
	});
});
//百度搜索
app.controller('baidu',function($scope,$http){
	$scope.fnSou=function(){
		var url='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+$scope.msg+'&cb=JSON_CALLBACK'
		$http.jsonp(url).success(function(data){
			$scope.arr=data.s;
		}).error(function(){
			alert('错误');
		});
	};
});
//留言板
app.controller('Message',function($scope){
	$scope.arr=[];
	$scope.fnSend=function(){
		if(!$scope.msg){
			alert("请输入留言在提交")
		}else{
			$scope.arr.unshift($scope.msg);
			$scope.msg=''
		}
	};
	$scope.fnDel=function(i){
		$scope.arr.splice(i,1)
	}
});
//购物车
app.controller('shopping',function($scope){
	$scope.arr=[
		{name:'西红柿',price:3.5,count:5},
		{name:'土豆',price:1.3,count:3},
		{name:'黄瓜',price:2.5,count:10}
	];
	$scope.num=function(){
		var result=0;
		angular.forEach($scope.arr,function(json,index){
			result+=json.price*json.count
		});
		return result
	}
});
