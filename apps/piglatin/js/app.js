var app = angular.module('pigLatin',[])

app.controller('textCtrl', function($scope, $http){
	$scope.encrypt = function(str){
		$scope.pigtext = str.split(" ").map(function(e){
			return e.slice(1)+e.slice(0,1)+"ay"
		}).join(" ")
	}
})
