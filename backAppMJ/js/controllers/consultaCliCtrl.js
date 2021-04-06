'use strict';

app.controller('consultaCliCtrl', function($scope) {
    $scope.recibeServ = [
        { nameServ: 'Jani', nameCol: 'jose', statusServ: 'danger' },
        { nameServ: 'Jani', nameCol: 'jose', statusServ: 'success' },
        { nameServ: 'Jani', nameCol: 'jose', statusServ: 'danger' },
        { nameServ: 'Jani', nameCol: 'jose', statusServ: 'warning' },
        { nameServ: 'Jani', nameCol: 'jose', statusServ: 'success' },
        { nameServ: 'Jani', nameCol: 'jose', statusServ: 'warning' }
    ];
});