'use strict';

app.controller('homeColCtrl', ['$scope', 'loginService', function($scope, loginService){
	//logout
	$scope.logout = function(){
		loginService.logout();
	}
	
	//fetch login user
	var userrequest = loginService.fetchuser();
	userrequest.then(function(response){
		$scope.user = response.data[0];
	});

	$scope.funcionPrueba = function() {
		console.log($scope.user.clientePass);
		console.log($scope.confirm_password);
		$scope.result = angular.equals($scope.user.clientePass, $scope.confirm_password);
		if ($scope.result === true) {
			//console.log("Las contraseñas son correctas")
		}
		if ($scope.result === false) {
			//console.log("Las contraseñas son incorrectas")
		}
	  }

	  

}]);