<?php
session_start();

$user_id = $_SESSION['user_id'];
require 'dbconnection.php';

if (isset($_POST['update'])){
    $f_name = $_POST['f_name'];
    $l_name = $_POST['l_name'];
    $module_name = $_POST['module_name'];
    $module_code = $_POST['module_code'];
    $email = $_POST['email'];
    $contacts = $_POST['contacts'];

    $sql = $conn->query("UPDATE users SET f_name = '$f_name', l_name = '$l_name', module_name = '$module_name', module_code = '$module_code', email = '$email', contacts = '$contacts' WHERE user_id = '$user_id'");

    if ($sql) {
        header('location: http://localhost/beagle/pages-profile.php');
    } else {
        echo "error";
    }
    
}


?>