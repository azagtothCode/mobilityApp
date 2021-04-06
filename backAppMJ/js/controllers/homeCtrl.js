'use strict';

app.controller('homeCtrl', ['$scope', 'loginService','$location','$http', function($scope, loginService, $location, $http){
	//logout
	$scope.logout = function(){
		loginService.logout();
	}
	
	//fetch login user
	var userrequest = loginService.fetchuser();
	userrequest.then(function(response){
		$scope.user = response.data[0];
	});

	//  $location.path('/homeTab');


		// $scope.getColaboradores = function(search) {
		// 	 var searchP = $scope.search;

		// 	 console.log(searchP)
		// 	 var executeGet = $http.post('connections/getCol.php',searchP);
		// 	 executeGet.then(function(response){

		// 		var str = response.data;
		// 		var res = str.replace("}", "},");
		// 		console.log(res)

		// 		var obj = JSON.parse(res);
		// 		console.log(obj)

		// 		});
		// 	 return executeGet;
			
		//   }

		$scope.serV = [
			{ idServ:'M1', nameServ: 'Reparacion de equipos de computo y llenado de tinta para cartuchos de inyeccion laser', nameCol: 'Esteban Isidro Hernadez Cruz', statusServ: 'warning', catSer:'Tecnologia', servCosto:'650.00', servPay:'Efectivo, Tarjeta Debito',nameZone:'Nezahualcoyotl' },
			{ idServ:'M2', nameServ: 'Instalacion de Sistema operativo Mac', nameCol: 'Brenda Navarro Cortez', statusServ: 'danger',catSer:'Tecnologia', servCosto:'350.00', nameZone:'Ecatepec'},
			{ idServ:'M3', nameServ: 'Compostura de Impresora', nameCol: 'Mirna Reyes Godines', statusServ: 'warning', catSer:'Hogar', servCosto:'850.00',nameZone:'Toluca'},
			{ idServ:'M4', nameServ: 'Servicio Tecnico preventivo y correctivo', nameCol: 'Agustin Rodriguez Perez', statusServ: 'success', catSer:'Automotriz', nameZone:'CDMX'},
			{ idServ:'M5', nameServ: 'Servicio de Jardineria', nameCol: 'Jorge BArrera Gonzales', statusServ: 'success', catSer:'Hogar', nameZone:'CDMX'},
			{ idServ:'M6', nameServ: 'Serviciode encerado de coche', nameCol: 'Manuel Carrasco Li', statusServ: 'success', catSer:'Automotriz', nameZone:'CDMX'},

			
			
			{ idServ:'M7', nameServ: 'Pintura de Coche', nameCol: 'Monica Guzman Solis', statusServ: 'warning', catSer:'Automotriz', nameZone:'CDMX'}

		];

		$scope.removeItem = function (x) {
			$scope.scolV.splice(x, 1);
		  } 

		  $scope.addItem = function () {
			$scope.serV.push({ idServ:'M8',nameServ: 'diceeees de Equipo telefonico Android, Actualizacion, reparacion ', nameCol: 'Pablo Fernandez Zavala', statusServ: 'warning', catSer:'Tecnologia', servCosto:'650.00', nameZone:'Nezahualcoyotl' },
			);
		  } 

		$scope.scolV = [
			{ idServMod:'M1', nameServ: 'Reparacion de Equipo telefonico Android, Actualizacion, reparacion ', nameCol: 'Pablo Fernandez Zavala', statusServ: 'warning', catSer:'Tecnologia', servCosto:'650.00', nameZone:'Nezahualcoyotl' },
			{ idServMod:'M2', nameServ: 'Mantenimiento preventivo de PC, instalacion de Hardware', nameCol: 'Saul Juarez Sosa', statusServ: 'warning',catSer:'Tecnologia', servCosto:'350.00', nameZone:'Ecatepec'},
			{ idServMod:'M3', nameServ: 'Mantenimiento de Jardin y podado de arboles', nameCol: 'Luis Mondragon Fernandez', statusServ: 'warning', catSer:'Hogar', servCosto:'850.00',nameZone:'Toluca'},

			{ idServMod:'M4', nameServ: 'Reparacion de Equipo telefonico IOS', nameCol: 'Pablo Fernandez Zavala', statusServ: 'warning', catSer:'Tecnologia', servCosto:'650.00', nameZone:'Iztapalapa' },
			{ idServMod:'M5', nameServ: 'Mantenimiento preventivo de PC, actualizacion Hardware y Software', nameCol: 'Saul Juarez Sosa', statusServ: 'warning',catSer:'Tecnologia', servCosto:'350.00', nameZone:'Centro Historico'},
			{ idServMod:'M6', nameServ: 'Podado de arbustos, se cortan todo tipo de arbustos se elaboran figuras etc.', nameCol: 'Luis Mondragon Fernandez', statusServ: 'warning', catSer:'Hogar', servCosto:'850.00',nameZone:'Atizapan de Zaragoza'},

			{ idServMod:'M7', nameServ: 'Reparacion de Equipo telefonico Andorid', nameCol: 'Pablo Fernandez Zavala', statusServ: 'warning', catSer:'Tecnologia', servCosto:'650.00', nameZone:'Arboleadas' },
			{ idServMod:'M8', nameServ: 'Mantenimiento preventivo de PC', nameCol: 'Saul Juarez Sosa', statusServ: 'warning',catSer:'Tecnologia', servCosto:'350.00', nameZone:'Aviacion Civil'},
			{ idServMod:'M9', nameServ: 'Compostura de Impresora', nameCol: 'Luis Mondragon Fernandez', statusServ: 'warning', catSer:'Hogar', servCosto:'850.00',nameZone:'Zaragoza'},
			{ idServMod:'M0', nameServ: 'Imagenes en arboles', nameCol: 'Monica Guzman Solis', statusServ: 'warning', catSer:'Automotriz', nameZone:'CDMX'}
		];

		
		$scope.serFactura = [
			{ nameServ: 'Reparacion de Equipo telefonico Android, Actualizacion', idFactura: '12345', fechaFactura: '2020-06-09' },
			{ nameServ: 'Mantenimiento preventivo de PC, instalacion de Hardware', idFactura: '0002', fechaFactura: '2020-06-09' },
			{ nameServ: 'Mantenimiento de Jardin y podado de arboles', idFactura: '0008', fechaFactura: '2020-06-09' },
			{ nameServ: 'Reparacion de Equipo telefonico IOS', idFactura: '00087', fechaFactura: '2020-06-09' },
			{ nameServ: 'Mantenimiento preventivo de PC, actualizacion Hardware y Software', idFactura: '007766', fechaFactura: '2020-06-09' }
		];

		$scope.serStatus = [
			{ valueSta: '24', stateStatus: 'Bueno', classStatus: 'success', descSta:'Bien Hecho, sigue llegando puntual y dando lo mejor de ti para tener mayor puntuaje.' },
			{ valueSta: '6', stateStatus: 'Regular', classStatus: 'warning', descSta:'Procura no llegar tarde a tus servicios, esto ocasiona que disminuya tu puntuaje.'},
			{ valueSta: '4', stateStatus: 'Malo', classStatus: 'danger' , descSta:'Procura no cancelar tus servicios, esto ocasiona que disminuya tu puntuaje.'},

		];


}]);