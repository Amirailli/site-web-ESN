<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

include 'Base.php';

$data = json_decode(file_get_contents("php://input"), true);

$email = $data['email'];
$code = $data['code'];

// récupérer code
$res = $conn->query("SELECT * FROM verification_codes WHERE email='$email'");

if ($res->num_rows == 0) {
    echo json_encode(["success"=>false,"message"=>"Code introuvable"]);
    exit;
}

$row = $res->fetch_assoc();

// vérifier expiration
if (strtotime($row['expires_at']) < time()) {
    echo json_encode(["success"=>false,"message"=>"Code expiré"]);
    exit;
}

// vérifier code
if ($row['code'] != $code) {
    echo json_encode(["success"=>false,"message"=>"Code incorrect"]);
    exit;
}

// récupérer form_temp
$res2 = $conn->query("SELECT * FROM form_temp WHERE email='$email'");
$dataForm = $res2->fetch_assoc();

// insertion finale
$stmt = $conn->prepare("INSERT INTO formulaires (nomPrenom, entreprise, email, fonction, telephone, typeRequete, message) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param(
    "sssssss",
    $dataForm['nomPrenom'],
    $dataForm['entreprise'],
    $dataForm['email'],
    $dataForm['fonction'],
    $dataForm['telephone'],
    $dataForm['typeRequete'],
    $dataForm['message']
);
$stmt->execute();

// suppression
$conn->query("DELETE FROM verification_codes WHERE email='$email'");
$conn->query("DELETE FROM form_temp WHERE email='$email'");

echo json_encode([
    "success"=>true,
    "message"=>"Formulaire enregistré"
]);
?>