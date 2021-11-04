<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Accept: application/json');

require 'dbconnection.php';

$user_id = $_POST['user_id'];
$f_name = $_POST['f_name'];
$l_name = $_POST['l_name'];
$module_name = $_POST['module_name'];
$module_code = $_POST['module_code'];
$email = $_POST['email'];
$contacts = $_POST['contacts'];

$sql = $conn->query("UPDATE users SET f_name = '$f_name', l_name = '$l_name', module_name = '$module_name', module_code = '$module_code', email = '$email', contacts = '$contacts' WHERE user_id = '$user_id'");

if ($sql) {
    echo json_encode('<div class="alert alert-success p-1 text-center" role="alert">Changes made</div>');
} else {
    echo json_encode('error');
}



?>