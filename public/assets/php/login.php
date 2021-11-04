<?php
session_start();
require 'dbconnection.php';

$username = $_POST['username'];
$password = $_POST['password'];

$query1 = $conn->query("SELECT * FROM users WHERE staff_no = '$username' OR email = '$username'");

if ($query1->num_rows > 0) {
    
   $row = $query1->fetch_assoc();

   if ($row['password'] === $password) {
       $_SESSION['user_id'] = $row['user_id'];
       echo 'login';
   } else {
      echo 'wrong password';
   }
   
} else {
    echo 'Your username is not not registered';
}


?>