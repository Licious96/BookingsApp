<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Accept: application/json');
require 'dbconnection.php';


$query1 = $conn->query("SELECT * FROM users WHERE user_id = '".$_GET['user_id']."'");
$row = $query1->fetch_assoc();         
echo json_encode($row);
?>