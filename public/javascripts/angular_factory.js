module.exports = function(myapp){
	myapp.factory('pp',['$http',function($http){
		var p = 0;
		this.op=function(){
			return ++p;
		}
		return {
			op:this.op
		}
	}]);
	myapp.factory('logins',['$http',function($http,data){
		this.login = function(data){
			 return $http({ method: 'POST', url: '../../bin/www', params: {action:'login',data:data}});
		}
		return{
			login:this.login
		}
	}]);	
	myapp.factory('registers',['$http',function($http,data){
		return{
			register: function(what,data){
				if(!data)
				{
					data = what;
					what = 'register';
				}
				return $http({ method: 'POST', url: '../../bin/www', params: {'action':what,data:data}});
			}
		}
	}]);
}
