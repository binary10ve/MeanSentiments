'use strict';

angular.module('meanSentiments')
  .controller('MainCtrl', ['$scope','$rootScope','$http', function ($scope,$rootScope,$http) {


$scope.doAnalysis = function(){

	$http.post('/sentiment',{
		sentence : $scope.sentiments
	})
	.then(function(response){
		$scope.analysis = response.data.analysis;
	}, function(response){
		
	})

}
	$rootScope.pageTitle = 'Homepage';
  }]);