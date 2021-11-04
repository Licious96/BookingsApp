<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');
header('Content-Type: application/json');

require 'dbconnection.php';

$f_name = $_POST['f_name'];
$l_name = $_POST['l_name'];
$staff_no = $_POST['staff_no'];
$email = $_POST['email'];
$contacts = $_POST['contacts'];
$module_name = $_POST['module_name'];
$module_code = $_POST['module_code'];
$password = $_POST['password'];

$query1 = $conn->query("SELECT * FROM users WHERE staff_no = '$staff_no' OR email = '$email'");

if($query1->num_rows > 0 ){
    echo json_encode('<div class="alert alert-info p-3" role="alert">
                        Staff number or email already registered!
                    </div>');
}else{
    $query2 = $conn->query("INSERT INTO users(f_name, l_name, staff_no, email, contacts, module_code, module_name, password) VALUES('$f_name','$l_name', '$staff_no','$email','$contacts','$module_code','$module_name','$password')");
    if($query2){
        $query3 = $conn->query("SELECT * FROM users WHERE staff_no = '$staff_no'");
        $row = $query3->fetch_assoc();
        $_SESSION['user_id'] = $row['user_id'];
        echo json_encode($_SESSION['user_id']);
    }
}

?>