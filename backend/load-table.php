<?php
session_start();
require 'dbconnection.php';

$query2 = $conn->query("SELECT * FROM bookings WHERE lecturer_id =" . $_SESSION['user_id']);

while ($row2 = $query2->fetch_assoc()) {
    $date = $row2['date'];
    $time = $row2['time'];
    echo '<tr>
        <td>' . $row2['venue'] . '</td>
        <td>' . $row2['module_code'] . '</td>
        <td>' . $row2['date'] . '</td>
        <td>' . $row2['time'] . '</td>
        <td class="actions"><a class="icon" href="#" onclick="delete_booking(\''.$date.'\',\''.$time.'\')"><i class="mdi mdi-delete"></i></a></td>
    </tr>
';
}
?>