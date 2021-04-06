'use strict';

app.controller('registerCtrl', ['$scope', 'insertService', function($scope, insertService){
	//logout
	$scope.errorLogin = false;
	
	$scope.validateUser = function(user){

		$scope.errorValida = "";
		$scope.correctValida = "";
		$scope.formHidden = "";
		$scope.formOther = "";

		if(user){
			if(user.inputINE=="GRPEUL92091515H300" && user.inputCURP=="GAPU920915HMCRXL04"){
				console.log("Datos Correctos");
				$scope.correctValida = "true";
				$scope.formHidden = "true";
	
			}else{
				console.log("Datos Incorrectos");
				$scope.errorValida = "true";
				$scope.formOther = "false";
	
			}
		}

		
		// insertService.insertUserCol(user, $scope);
	}

	$scope.insertUserCol = function(user){
		console.log(user)
		insertService.insertUserCol(user, $scope);
	}

	$scope.clearMsg = function(){
		$scope.errorLogin = false;
	}

}]);