var angular = require('../../bower_components/angular/angular.min.js')()
var myapp = angular.module('myapp',[]);
require('./angular_directive.js')(myapp);
require('./angular_factory.js')(myapp);
myapp.controller('login',['$scope','$timeout','logins','registers',function($scope,$timeout,logins,registers){
	$scope.login = function(user){
		logins.login(user).then(function(res){
			if(res.data==="")
				alert('此帐号不存在');
			else if(res.data)
				 window.location.replace(res.data);
			else
				alert('请输入正确的密码');
		});
	};
	$scope.register = function(user){
		registers.register(user).then(function(res){
			if(res.data)
				alert('注册成功');
			else
				alert('注册失败');
		});
	};
	$scope.validate = function(what,data){
		return registers.register(what,data);
	}
}]);
