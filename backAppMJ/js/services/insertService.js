'use strict';

app.factory('insertService', function($http, $location, sessionService){
	return{
		insertUserCol: function(user,$scope){

			var insertResponse = $http.post('connections/insertUser.php', user);
			insertResponse.then(function(response){
				// var status = response.data.statusInsert;
				console.log(response.data);

				var uid = response.data.user;
				if(uid){

					var validate = $http.post('connections/login.php', user);
					validate.then(function(response){
					// console.log(response.data.typePeople);
					var typeP = response.data.typePeople;
					var uidIn = response.data.user;

						if(uidIn){
							if(typeP == "CLI"){
								sessionService.set('user',uid);
								$location.path('/home');
								console.log(typeP)
		
							}
							
							if(typeP == "COL"){
								sessionService.set('user',uid);
								$location.path('/homeCol');
								console.log(typeP)
		
							}
							
						}else{
							$scope.successLogin = false;
							$scope.errorLogin = true;
							$scope.errorMsg = response.data.message;
						}
					});
				}
			});


		},
		logout: function(){
			insertServiceCol.destroy('user');
			$location.path('/');
		},
		islogged: function(){
			var checkSession = $http.post('connections/session.php');
			return checkSession;
		},
		fetchuser: function(){
			var user = $http.get('connections/fetch.php');
			return user;
		}
	}
});