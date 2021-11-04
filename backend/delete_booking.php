<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Accept: application/json');
require 'dbconnection.php';

$_GET['id'];

$query = $conn->query("DELETE FROM bookings WHERE id = ".$_GET['id']);

if($query){
    echo json_encode('deleted');
}else{
    echo json_encode('error');
}

?>