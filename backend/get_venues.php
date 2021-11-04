<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Accept: application/json');
require 'dbconnection.php';

$query = $conn->query("SELECT * FROM venues");
$row_num = $query->num_rows;
//echo json_encode($row_num);
$array = array();
while ($row = $query->fetch_assoc()) {
    $array[] = $row;
}
echo json_encode($array);                    
                        

?>