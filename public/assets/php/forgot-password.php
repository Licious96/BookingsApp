<?php
require 'dbconnection.php';

$email = $_POST['email'];

$query = $conn->query("SELECT * FROM users WHERE email = '$email'");

if ($query->num_rows > 0) {

    $row = $query->fetch_assoc();

    $password = $row['password'];

    $message = "You have requested your password for your V-booking account <br> Password: '$password'";
    $check = mail($email,"V-booking password recovery",$message);

    if ($check) {
        echo "Your password was sent to your email";
    } else {
        echo "There was an error sending you an email";
    }
    
    
} else {
    echo "This email is not registered";
}


?>