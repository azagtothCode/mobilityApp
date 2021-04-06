var app = angular.module('app', ['ngRoute','chart.js']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'sites/login.html',
		controller: 'loginCtrl'
	})
	.when('/home', {
		templateUrl: 'sites/home.html',
		controller: 'homeCtrl',
		// redirectTo: 'sites/colReg.html'
	})
	.when('/homeCol', {
		templateUrl: 'sites/homeCol.html',
		controller: 'homeColCtrl'
	})
	.when("/registerUser", {
		templateUrl : "sites/register.html",
		controller: 'registerCtrl'
    })
    .when("/cliReg", {
        templateUrl : "sites/cliReg.html",
		controller: 'insertCliCtrl'
	})
	.when("/SolicitarCli", {
		templateUrl: "sites/SolicitarCli.html",
		controller: 'homeCtrl'

	})
	.when("/ActualizarCli", {
		templateUrl: "sites/ActualizarCli.html",
		controller: 'homeCtrl'

	})
	.when("/ConsultarCli", {
		templateUrl: "sites/ConsultarCli.html",
		controller: 'homeCtrl'
	})
	.when("/ProgramarCli", {
		templateUrl: "sites/ProgramarCli.html"
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.directive('header', function () {
	return {
	  restrict: 'A',
	  replace: true,
	  templateUrl:'sites/menuPanel.html'
	}
  })

app.directive('main', function () {
	return {
	  restrict: 'A',
	  replace: true,
	  templateUrl:'sites/menuView.html'
	}
  })



app.run(function($rootScope, $location, loginService){
	//prevent going to homepage if not loggedin
	var routePermit = ['/'];
	$rootScope.$on('$routeChangeStart', function(){
		if(routePermit.indexOf($location.path()) !=-1){
			var connected = loginService.islogged();
			connected.then(function(response){
				if(!response.data){
					$location.path('/');
				}
			});
			
		}
	});
	//prevent going back to login page if sessino is set
	var sessionStarted = ['/home'];
	$rootScope.$on('$routeChangeStart', function(){
		if(sessionStarted.indexOf($location.path()) !=-1){
			var cantgoback = loginService.islogged();
			cantgoback.then(function(response){
				if(response.data){
					$location.path('/home');
				}
			});
		}
	});

	var sessionStartedCol = ['/homeCol'];
	$rootScope.$on('$routeChangeStart', function(){
		if(sessionStartedCol.indexOf($location.path()) !=-1){
			var cantgoback = loginService.islogged();
			cantgoback.then(function(response){
				if(response.data){
					$location.path('/homeCol');
				}
			});
		}
	});
});



app.controller('enviaDatosLogin', ['$scope', '$http', function($scope, $http) {
	$scope.btnIng = function() {
	  $http.post("connections/login.php", { nickname:$scope.nickname, pass:$scope.pass})
	  .then(function (response) {
  
		if(!response.data){
		  $scope.errorLogin = true;
		  $scope.correctLogin = false;
		  $scope.messageError="Contraseña o Nombre de usuario Incorrecto";
		}
		
		if(response.data){
		  $scope.errorLogin = false;
		  $scope.correctLogin = true;
		  $scope.messageCorrecto="Datos Correctos";
  
		  console.log(response.data);
		  
		  if(response.data=="Cliente"){
			console.log(response.data);
			location.replace("src/connections/welcome.php");
		  }
  
		  if(response.data=="Colaborador"){
			console.log(response.data);
			location.replace("src/connections/welcome.php");
		  }
		}
	  });
	};
  }]);

  
  /*Validar contraseñas*/
  app.controller("valida", function($scope) {
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
  });

  app.controller('nivel', ['$scope',
  function($scope) {
	  $scope.colaboradorPass = {
		  pass: ''
	  };
  }
]).directive('passwordStrength', [
  function() {
	  return {
		  require: 'ngModel',
		  restrict: 'E',
		  scope: {
			  pass: '=ngModel'
		  },
		  link: function(scope, elem, attrs, ctrl) {
			  scope.$watch('pass', function(input_Value) {

				  scope.strength = isSatisfied(input_Value && input_Value.length >= 8) +
					  isSatisfied(input_Value && /[A-z]/.test(input_Value)) +
					  isSatisfied(input_Value && /(?=.*\W)/.test(input_Value)) +
					  isSatisfied(input_Value && /\d/.test(input_Value));

				  function isSatisfied(criteria) {
					  return criteria ? 1 : 0;
				  }
			  }, true);
		  },
		  template: '<div class="progress">' +
			  '<div class="progress-bar progress-bar-danger progress-bar-striped active" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: {{strength >= 1 ? 25 : 0}}%"></div>' +
			  '<div class="progress-bar progress-bar-warning progress-bar-striped active" style="width: {{strength >= 2 ? 25 : 0}}%"></div>' +
			  '<div class="progress-bar progress-bar-info progress-bar-striped active" style="width: {{strength >= 3 ? 25 : 0}}%"></div>' +
			  '<div class="progress-bar progress-bar-success progress-bar-striped active" style="width: {{strength >= 4 ? 25 : 0}}%"></div>' +
			  '</div>'
	  }
  }
]).directive('patternValidator', [
function() {
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function(scope, elem, attrs, ctrl) {
			ctrl.$parsers.unshift(function(viewStrength) {
				var patt = new RegExp(attrs.patternValidator);
				var isValid = patt.test(viewStrength);
				ctrl.$setValidity('pass_Check', isValid);
				return viewStrength;

			});
		}
	};
}
]);
  
  //Función para validar una CURP
function curpValida(curp) {
    var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
        validado = curp.match(re);
    if (!validado) //Coincide con el formato general?
        return false;
    //Validar que coincida el dígito verificador
    function digitoVerificador(curp17) {
        //Fuente https://consultas.curp.gob.mx/CurpSP/
        var diccionario = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
            lngSuma = 0.0,
            lngDigito = 0.0;
        for (var i = 0; i < 17; i++)
            lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
        lngDigito = 10 - lngSuma % 10;
        if (lngDigito == 10) return 0;
        return lngDigito;
    }
    if (validado[2] != digitoVerificador(validado[1]))
        return false;
    return true; //Validado
}
//Handler para el evento cuando cambia el input
//Lleva la CURP a mayúsculas para validarlo
function validarInput(input) {
    var curp = input.value.toUpperCase(),
        resultado = document.getElementById("resultado"),
        valido = "No válido";
    if (curpValida(curp)) { // ⬅️ Acá se comprueba
        valido = "Válido";
        resultado.classList.add("ok");
    } else {
        resultado.classList.remove("ok");
    }

    resultado.innerText = "CURP: " + curp + "\nFormato: " + valido;
}

