var mySwiper = new Swiper('.swiper-container', {
	        direction: 'horizontal',
	        onlyExternal : true
});
var module = angular.module('myapp',[]);
var data = [{
		orderNum:'0000000001',
		name: '张三',
		type:'注销抵押，房产过户',
		status: 0,
		phone:'13580503220',
		helpType:'全权委托',
		identification:'441322199310120234',
		housePlace:'南山',
		houseName:'佳兆业城市广场5503G',
		idNum:'90000000000023'
},{
		orderNum:'0000000002',
		name: '李四',
		type:'注销抵押',
		status: 1,
		phone:'13580503220',
		helpType:'全权委托',
		identification:'441322199310120234',
		housePlace:'福田',
		houseName:'佳兆业城市广场5504G',
		idNum:'90000000000024'
},{
		orderNum:'0000000003',
		name: '王五',
		type:'注销抵押',
		status: 2,
		phone:'13580503220',
		helpType:'全权委托',
		identification:'441322199310120234',
		housePlace:'龙岗',
		houseName:'佳兆业城市广场5505G',
		idNum:'90000000000025'
}
];
module.controller('myctrl',['$scope','detailCheck',function($scope,detailCheck){
	$scope.details=data;
	$scope.orderDetail = function(e){
		detailCheck.check($scope,e.detail);
	}
}]);

module.directive("status",function(){
	return{
		link:function(scope,elem,attr){
			if(attr.status==0)
				elem.text('办理中');
			else if(attr.status==1)
				elem.text('待确认');
			else if(attr.status==2)
				elem.text('已完成');
			else 
				elem.text('状态异常');
		}
	}
});
module.factory('detailCheck',function(){
	return{
		check: function(scope,e){
			scope.detail = e;
			mySwiper.slideNext();
			window.scrollTo(0,0);
		}
	}
});