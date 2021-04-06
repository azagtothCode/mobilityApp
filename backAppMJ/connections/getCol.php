<?php

session_start();
	
// $conn = new mysqli("localhost:3306", "root", "Wolverine66_67", "mobilityjob");
$conn = new mysqli("localhost:3306", "root", "Wolverine66_67", "mobilityJobBD");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$out = array('error' => false);

$search = json_decode(file_get_contents('php://input'));

$catName = $search->catCol;

// $sql = "SELECT typeColaborador FROM colaborador
// INNER JOIN registro ON colaborador.idRegistroCol=registro.idregistro 
// where registro.registroNickname= \"$username\" and registro.registroPass=\"$password\" ";

$sql = "SELECT  mobUsers.idmobUsers, mobUsers.mobUsersName, mobUsers.mobUsersApm, mobUsers.mobUsersApp, mobUsers.mobUsersGender, mobUsers.mobUsersBirth, mobUsers.mobUsersNac, 
mobUsers.mobUsersEstudy, mobUsers.mobUsersCURP, mobUsers.mobUsersINE, mobUsers.mobUsersEmail, mobUsers.mobUsersPass, mobUsers.mobUsersType,
servicio.servicioName, servicio.servicioCarac, servicio.servicioCosto, servicio.servicioPago, servicio.servicioCategory, servicio.servicioStatus
from mobUsers
INNER JOIN servicio on mobUsers.idmobUsers=servicio.mobUsers_idmobUsers
WHERE servicio.servicioCategory=\"$catName\"";

// echo $sql;

$query = $conn->query($sql);

if($query->num_rows>0){
	while($row = $query->fetch_assoc()) {
	// echo ($row["typeColaborador"]);
		$out['nameCo'] = $row["mobUsersName"];
		$out['appCo'] = $row["mobUsersApp"];
		$out['apmCo'] = $row["mobUsersApm"];
		$out['genCo'] = $row["mobUsersGender"];
		$out['birthCo'] = $row["mobUsersBirth"];
		$out['nacCo'] = $row["mobUsersNac"];
		$out['estCo'] = $row["mobUsersEstudy"];
		$out['curpCo'] = $row["mobUsersCURP"];
		$out['ineCo'] = $row["mobUsersINE"];
		$out['mailCo'] = $row["mobUsersEmail"];
		$out['typeCo'] = $row["mobUsersType"];
		$out['nameServ'] = $row["servicioName"];
		$_SESSION['user'] = $username;

		echo json_encode($out);

	}
}
else{
	$out['error'] = true;
	$out['message'] = 'Contraseña o Nombre de usuario Incorrecto';
}



?>