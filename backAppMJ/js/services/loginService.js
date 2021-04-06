'use strict';

app.factory('loginService', function($http, $location, sessionService){
	return{
		login: function(user, $scope){
			var validate = $http.post('connections/login.php', user);
			validate.then(function(response){
				var uid = response.data.user;
				var typeP = response.data.typePeople;
				console.log(response.data)
				if(uid){
					if(typeP == "CLI"){
						sessionService.set('user',uid);
						$location.path('/home');
						console.log(typeP)

					}
					
					if(typeP == "COL"){
						sessionService.set('user',uid);
						$location.path('/home');
						console.log(typeP)

					}
					
				}else{
					$scope.successLogin = false;
					$scope.errorLogin = true;
					$scope.errorMsg = response.data.message;
				}
			});
		},
		logout: function(){
			sessionService.destroy('user');
			$location.path('/');
		},
		islogged: function(){
			var checkSession = $http.post('connections/session.php');
			return checkSession;
		},
		fetchuser: function(){
			var user = $http.get('connections/fetch.php');
			return user;
		},
		// getColaboradores: function(user, $scope){
		// 	console.log(user)
		// 	var validate = $http.post('connections/getCol.php', user);
		// 	validate.then(function(response){
		// 		console.log(response)
		// 	});
		// },
	}
});