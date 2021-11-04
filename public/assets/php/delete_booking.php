<?php
require 'dbconnection.php';

$date = $_POST['date'];
$time = $_POST['time'];

$query = $conn->query("DELETE FROM bookings WHERE date = '$date' && time = '$time'");

?>