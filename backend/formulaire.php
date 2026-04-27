<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");

include 'Base.php';

require "PHPMailer-master/src/PHPMailer.php";
require "PHPMailer-master/src/SMTP.php";
require "PHPMailer-master/src/Exception.php";

use PHPMailer\PHPMailer\PHPMailer;

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode([
        "success" => false,
        "message" => "Aucune donnée reçue (utiliser POST avec JSON)"
    ]);
    exit;
}

$nom = $data['nomPrenom'];
$entreprise = $data['entreprise'];
$email = $data['email'];
$fonction = $data['fonction'];
$telephone = $data['telephone'];
$typeRequete = $data['typeRequete'] ?? null;
$message = $data['message'] ?? null;

// validation simple
if (!$nom || !$entreprise || !$email || !$fonction || !$telephone) {
    echo json_encode(["success"=>false,"message"=>"Champs obligatoires manquants"]);
    exit;
}

// générer code
$code = rand(100000, 999999);
$expires = date("Y-m-d H:i:s", strtotime("+5 minutes"));

// 🔥 verification_codes
$stmt = $conn->prepare("REPLACE INTO verification_codes (email, code, expires_at) VALUES (?, ?, ?)");
$stmt->bind_param("sis", $email, $code, $expires);
$stmt->execute();

// 🔥 form_temp
$stmt2 = $conn->prepare("REPLACE INTO form_temp (email, nomPrenom, entreprise, fonction, telephone, typeRequete, message) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt2->bind_param("sssssss", $email, $nom, $entreprise, $fonction, $telephone, $typeRequete, $message);
$stmt2->execute();

// 📧 envoyer email
$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host='smtp.gmail.com';
    $mail->SMTPAuth=true;
    $mail->Username='amirabenbellil7@gmail.com';
    $mail->Password='mdtn mzqa scfv zvcj';
    $mail->SMTPSecure='tls';
    $mail->Port=587;

    $mail->setFrom('amirabenbellil7@gmail.com','Keep Contact');
    $mail->addAddress($email,$nom);

    $mail->isHTML(true);
    $mail->Subject='Code de verification';
    $mail->Body = "Bonjour $nom,<br><br>
                   Bienvenue chez Keep Contact !<br><br>
                   Votre code de vérification est : <b>$code</b><br>
                   Ce code expire dans 5 minutes.";
    $mail->send();

    echo json_encode([
        "success"=>true,
        "message"=>"Code envoyé"
    ]);

} catch (Exception $e) {
    echo json_encode([
        "success"=>false,
        "message"=>$mail->ErrorInfo
    ]);
}
?>