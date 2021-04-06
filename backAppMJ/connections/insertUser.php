<?php

session_start();
	
$conn = new mysqli("localhost:3306", "root", "Wolverine66_67", "mobilityJobBD");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$out = array('error' => false);

$user = json_decode(file_get_contents('php://input'));

$userName = $user->inputName;	
$userApm = $user->inputApm;	
$userApp = $user->inputApp;	
$userNac = $user->inputNac;
$userGender = $user->inputGender;	

$userCURP = $user->inputCURP;	
$userINE = $user->inputINE;	
$userBirth = $user->inputBirth;	
$userTel = $user->inputTel;	
$userEmail = $user->inputMail;	
$userPass = $user->inputPass;	

$userMuni = $user->inputMuni;	
$userCol = $user->inputCol;	
$userStreet = $user->inputStreet;	
$userOffice = $user->inputOffice;	
$userCP = $user->inputCP;	

$userType = $user->inputType;	



// Turn autocommit off
$conn -> autocommit(TRUE);

$sql = "INSERT INTO MB_Users  VALUES (NULL,\"$userName\",\"$userApm\",\"$userApp\",\"$userNac\",\"$userGender\",\"$userCURP\",\"$userINE\",\"1992-09-15\",\"$userTel\",\"$userEmail\",MD5('".$userPass."'),\"$userMuni\",\"$userCol\",\"$userStreet\",\"$userOffice\",\"$userCP\",\"$userType\")";

if ($conn->query($sql) === TRUE) {
//   echo "New record created successfully";
$out['message'] = "New record created successfully";
$out['statusInsert'] = "Add";
$out['user'] = uniqid('ang_');
$_SESSION['user'] = $username;

} else {
//   echo "Error: " . $sql . "<br>" . $conn->error;
  	$out['error'] = $sql;
	$out['message'] = $conn->error;
}

// echo $user;

// $sql = "SELECT typeinput FROM input";

// $query = $conn->query($sql);

// if($query->num_rows>0){
	// $row = $query->fetch_array(MYSQLI_ASSOC);
	// echo ($row["typeinput"]);
	// $out['typePeople'] = $row["typeinput"];

	// $out['message'] = 'Login Successful';
	// $out['user'] = uniqid('ang_');
	// $_SESSION['user'] = $username;

// }
// else{
// 	$out['error'] = true;
// 	$out['message'] = 'No hya usuario';
// }

echo json_encode($out);

?>