<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Formulaire;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache; // <-- Import cache

require base_path('PHPMailer-master/src/Exception.php');
require base_path('PHPMailer-master/src/PHPMailer.php');
require base_path('PHPMailer-master/src/SMTP.php');

class FormulaireController extends Controller
{
    // Enregistrement + envoi du mail avec code
    public function store(Request $request)
    {
        try {
            
            // 🔹 Validation Laravel
            $request->validate([
                'nomPrenom' => 'required|string|min:3',
                'entreprise' => 'required|string|min:2',
                'email' => 'required|email',
                'fonction' => 'required|string|min:2',
                'telephone' => ['required', 'regex:/^(0|\+213)[0-9]{9}$/'],
            ], [
                'telephone.regex' => 'Le téléphone doit commencer par 0 ou +213 et contenir 10 chiffres',
            ]);

            $code = rand(100000, 999999); // code 6 chiffres

            // Stocker dans le cache Laravel pour 5 minutes
            Cache::put('verification_code_'.$request->email, $code, now()->addMinutes(5));

            // Enregistrer le formulaire (sans code)
            $formulaire = Formulaire::create([
                'nomPrenom' => $request->nomPrenom,
                'entreprise' => $request->entreprise,
                'email' => $request->email,
                'fonction' => $request->fonction,
                'telephone' => $request->telephone,
                'typeRequete' => $request->typeRequete ?? null,
                'message' => $request->message ?? null,
            ]);

            // Envoyer le mail
            $mail = new PHPMailer(true);
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'amirabenbellil7@gmail.com';
            $mail->Password   = 'mdtn mzqa scfv zvcj';
            $mail->SMTPSecure = 'tls';
            $mail->Port       = 587;

            $mail->setFrom('amirabenbellil7@gmail.com', 'Keep Contact');
            $mail->addAddress($request->email, $request->nomPrenom);
            $mail->isHTML(true);
            $mail->Subject = 'Code de vérification';
            $mail->Body    = "Bonjour <b>{$request->nomPrenom}</b>,<br><br>
                              Votre code de vérification est : <b>$code</b><br>
                              Ce code expire dans 5 minutes.";

            $mail->send();

            return response()->json([
                'success' => true,
                'message' => 'Formulaire enregistré et code envoyé !'
            ], 201);

        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Erreur serveur : ' . $e->getMessage()
            ], 500);
        }
    }

    // Vérification du code
    public function verifierCode(Request $request)
    {
        $email = $request->email;
        $code = $request->code;

        // Récupérer le code depuis le cache
        $cachedCode = Cache::get('verification_code_'.$email);

        if (!$cachedCode) {
            return response()->json([
                'success' => false,
                'message' => 'Aucun code envoyé ou code expiré.'
            ]);
        }

        if ($cachedCode != $code) {
            return response()->json([
                'success' => false,
                'message' => 'Code invalide.'
            ]);
        }

        // Code correct → supprimer du cache
        Cache::forget('verification_code_'.$email);

        return response()->json([
            'success' => true,
            'message' => 'Email confirmé !'
        ]);
    }
}