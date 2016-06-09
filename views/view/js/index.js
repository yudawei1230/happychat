!function(){
	var module = angular.module('myapp',[]);
	
	var mySwiper = new Swiper('.swiper-container', {
	        direction: 'horizontal',
	        onlyExternal : true
	});

	module.controller('myctrl',['$scope','infoInput',function($scope,infoInput){
		$scope.page=0;
		$scope.inputs={
			place:'请选择',
			type:'请选择'
		};
		$scope.infoInput= function(data){
			infoInput.judge(data,this);	
		}
		$scope.backToChoose = function(){
			mySwiper.slideTo(0, 200, false);
			window.scroll(0,0);
			$scope.inputs={
				place:'请选择',
				type:'请选择'
			};
		}
		$scope.choosePlace = function(index){
			$scope.page = index;
			mySwiper.slideTo(3, 200, false);
			window.scroll(0,0);
		}
		$scope.placeChose = function(place){
			$scope.inputs.place = place;
			mySwiper.slideTo($scope.page, 200, false);
			window.scroll(0,0);
		}
		$scope.chooseType = function(index){
			$scope.page = index;
			mySwiper.slideTo(4, 200, false);
			window.scroll(0,0);
		}
		$scope.typeChose = function(type){
			$scope.inputs.type = type;
			mySwiper.slideTo($scope.page, 200, false);
			window.scroll(0,0);
		}
		$scope.submit = function(data){
			console.log(data);
		}
	}]);

	module.factory('infoInput',function(){
		function choiceIsEmpty(json){
			for(var i in json)
				if(json[i]==true)
					return true
			return false;
		}
		return{
			judge: function(data,scope){
				if(choiceIsEmpty(data))
				{
					if(data.transfer)
						mySwiper.slideTo(2, 200, false);
					else
						mySwiper.slideTo(1, 200, false);
					window.scroll(0,0);
				}
			}
		}
	});

}()
