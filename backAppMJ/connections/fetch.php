<?php
	session_start();
	
	$conn = new mysqli("localhost:3306", "root", "Wolverine66_67", "mobilityJobBD");

	$output = array();
	// $sql = "SELECT mobUsers.idmobUsers, mobUsers.idmobUsers, mobUsers.mobUsersName, mobUsers.mobUsersApm, mobUsers.mobUsersApp, mobUsers.mobUsersGender, mobUsers.mobUsersBirth, mobUsers.mobUsersNac, 
	// mobUsers.mobUsersEstudy, mobUsers.mobUsersCURP, mobUsers.mobUsersINE, mobUsers.mobUsersEmail, mobUsers.mobUsersPass, mobUsers.mobUsersType,
	// solicitaServicio.solicitaServicioDate, solicitaServicio.solicitaServicioStatus
	// from mobUsers
	// LEFT JOIN solicitaServicio on mobUsers.idmobUsers=solicitaServicio.mobUsers_idmobUsers
	// WHERE mobUsersEmail = ('".$_SESSION['user']."') ";


	$sql = "call getInfoUser('".$_SESSION['user']."') ";
	// echo $sql;
	$query=$conn->query($sql);
	while($row=$query->fetch_array()){
		$output[] = $row;
	}

	echo $user=json_encode($output);
?>