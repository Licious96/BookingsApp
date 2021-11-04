<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Accept: application/json');
require 'dbconnection.php';

$query1 = $conn->query("SELECT * FROM users WHERE staff_no = '$username' OR email = '$username'");

if ($query1->num_rows > 0) {

    $row = $query1->fetch_assoc();

    if ($row['password'] === $password) {
       $user_id = $row['user_id'];
       echo json_encode($user_id);
    } else {
        echo json_encode('wrong password');
    }
   
} else {
    echo json_encode('Your username is not not registered');
}

?>