<?php
$host = "localhost";
$user = "root";
$password = "";
$db = "keep_contact";
$port = 3307;

$conn = new mysqli($host, $user, $password, $db, $port);

if ($conn->connect_error) {
    die(json_encode([
        "status" => "error",
        "message" => "Connection failed: " . $conn->connect_error
    ]));
}
?>
