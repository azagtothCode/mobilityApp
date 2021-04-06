<?php

session_start();
	
// $conn = new mysqli("localhost:3306", "root", "Wolverine66_67", "mobilityjob");
$conn = new mysqli("localhost:3306", "root", "Wolverine66_67", "mobilityJobBD");


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$out = array('error' => false);

$user = json_decode(file_get_contents('php://input'));

$username = $user->inputMail;
$password = $user->inputPass;


// $sql = "SELECT typeColaborador FROM colaborador
// INNER JOIN registro ON colaborador.idRegistroCol=registro.idregistro 
// where registro.registroNickname= \"$username\" and registro.registroPass=\"$password\" ";

$sql = "SELECT typeUser FROM MB_Users as mobUsers
where mobUsers.mailUser= \"$username\" and mobUsers.passUser=MD5('".$password."') ";

// echo $sql;

$query = $conn->query($sql);

if($query->num_rows>0){
	$row = $query->fetch_array(MYSQLI_ASSOC);
	// echo ($row["typeColaborador"]);
	$out['typePeople'] = $row["typeUser"];
	$out['message'] = 'Login Successful';
	$out['user'] = uniqid('ang_');
	$_SESSION['user'] = $username;

}
else{
	$out['error'] = true;
	$out['message'] = 'Contraseña o Nombre de usuario Incorrecto';
}

echo json_encode($out);

?>