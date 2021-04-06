'use strict';

app.controller('loginCtrl', function($scope, loginService){
	$scope.errorLogin = false;
	
	$scope.login = function(user){
		loginService.login(user, $scope);
	}

	$scope.clearMsg = function(){
		$scope.errorLogin = false;
	}
});