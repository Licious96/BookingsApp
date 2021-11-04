<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Accept: application/json');
require 'dbconnection.php';

$query = $conn->query("SELECT * FROM bookings WHERE lecturer_id =" . $_GET['user_id']);

$array = array();
while ($row = $query->fetch_assoc()) {
    $array[] = $row;
}
echo json_encode($array);

?>