<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Accept: application/json');
session_start();
require 'dbconnection.php';

$query1 = $conn->query("SELECT * FROM users WHERE user_id = '".$_POST['user_id']."'");
$row1 = $query1->fetch_assoc();

$venue = $_POST['venue'];
$date = $_POST['date'];
$time = $_POST['time'];
$lecturer_id = $row1['user_id'];
$lecturer_name = $row1['f_name'].' '.$row1['l_name'];
$lecturer_contacts = $row1['contacts'];
$lecturer_email = $row1['email'];
$module_code = $row1['module_code'];

$do_check = $conn->query("SELECT * FROM bookings WHERE date = '$date' && time = '$time' && venue = '$venue'");
if ($do_check->num_rows > 0) {
    echo json_encode('<div class="alert alert-info alert-dismissible" role="alert">
    <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span class="mdi mdi-close" aria-hidden="true"></span></button>
    <div class="icon"><span class="mdi mdi-info-outline"></span></div>
    <div class="message"><strong>Info!</strong> Booking for this slot was already made, try another slot.</div>
    </div>');
} else {
   
    $insert = $conn->query("INSERT INTO bookings(venue, date, time, lecturer_id, lecturer_name, lecturer_contacts, lecturer_email, module_code) VALUES('$venue','$date','$time','$lecturer_id','$lecturer_name','$lecturer_contacts','$lecturer_email','$module_code')");

    if ($insert) {
        echo json_encode('<div class="alert alert-success alert-dismissible" role="alert">
        <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span class="mdi mdi-close" aria-hidden="true"></span></button>
        <div class="icon"><span class="mdi mdi-check"></span></div>
        <div class="message"><strong>Good!</strong> Your booking was made successfully.</div>
        </div>');
    }else {
        echo json_encode('<div class="alert alert-danger alert-dismissible" role="alert">
        <button class="close" type="button" data-dismiss="alert" aria-label="Close"><span class="mdi mdi-close" aria-hidden="true"></span></button>
        <div class="icon"><span class="mdi mdi-check"></span></div>
        <div class="message"><strong>Good!</strong> Your booking was made successfully.</div>
        </div>');  
    }
}



?>