var module = angular.module('myapp',[]);
var data = [{
		name:'0000000001',
		orderNum: '张三',
		type:'注销抵押，房产过户',
		status: 0
},{
		name:'0000000002',
		orderNum: '李四',
		type:'注销抵押',
		status: 1
},{
		name:'0000000003',
		orderNum: '王五',
		type:'注销抵押',
		status: 2
}
];
var data1 = [{
		name:'0000000001',
		orderNum: '张三1',
		type:'注销抵押，房产过户',
		status: 0
},{
		name:'0000000002',
		orderNum: '李四2',
		type:'注销抵押',
		status: 1
},{
		name:'0000000003',
		orderNum: '王五3',
		type:'注销抵押',
		status: 2
}
]

module.controller('myctrl',['$scope',function($scope){
	$scope.details=data;
	$scope.detailss=data1;
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
var mySwiper = new Swiper('.swiper-container', {
	onlyExternal : true
});
