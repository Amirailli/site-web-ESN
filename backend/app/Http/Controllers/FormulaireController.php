<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Formulaire;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Illuminate\Support\Facades\Cache;

require base_path('PHPMailer-master/src/Exception.php');
require base_path('PHPMailer-master/src/PHPMailer.php');
require base_path('PHPMailer-master/src/SMTP.php');

class FormulaireController extends Controller
{
    // envoyer le code
    public function store(Request $request)
    {
        try {

            $request->validate([
                'nomPrenom' => 'required|string|min:3',
                'entreprise' => 'required|string|min:2',
                'email' => 'required|email',
                'fonction' => 'required|string|min:2',
                'telephone' => ['required','regex:/^(0|\+213)[0-9]{9}$/'],
            ]);

            $code = rand(100000,999999);

            // stocker code
            Cache::put('verification_code_'.$request->email,$code,now()->addMinutes(5));

            // stocker données formulaire TEMPORAIREMENT
            Cache::put('formulaire_data_'.$request->email,[
                'nomPrenom'=>$request->nomPrenom,
                'entreprise'=>$request->entreprise,
                'email'=>$request->email,
                'fonction'=>$request->fonction,
                'telephone'=>$request->telephone,
                'typeRequete'=>$request->typeRequete ?? null,
                'message'=>$request->message ?? null,
            ],now()->addMinutes(5));

            // envoyer email
            $mail = new PHPMailer(true);

            $mail->isSMTP();
            $mail->Host='smtp.gmail.com';
            $mail->SMTPAuth=true;
            $mail->Username='amirabenbellil7@gmail.com';
            $mail->Password='mdtn mzqa scfv zvcj';
            $mail->SMTPSecure='tls';
            $mail->Port=587;

            $mail->setFrom('amirabenbellil7@gmail.com','Keep Contact');
            $mail->addAddress($request->email,$request->nomPrenom);

            $mail->isHTML(true);
            $mail->Subject='Code de vérification';
            $mail->Body="Bonjour {$request->nomPrenom},<br><br>
            Votre code de vérification est : <b>$code</b><br>
            Ce code expire dans 5 minutes.";

            $mail->send();

            return response()->json([
                'success'=>true,
                'message'=>'Code envoyé par email'
            ]);

        } catch (\Exception $e) {

            return response()->json([
                'success'=>false,
                'message'=>$e->getMessage()
            ]);
        }
    }

    // vérifier le code
    public function verifierCode(Request $request)
    {
        $email = $request->email;
        $code = $request->code;

        $cachedCode = Cache::get('verification_code_'.$email);

        if(!$cachedCode){
            return response()->json([
                'success'=>false,
                'message'=>'Code expiré'
            ]);
        }

        if($cachedCode != $code){
            return response()->json([
                'success'=>false,
                'message'=>'Code incorrect'
            ]);
        }

        // récupérer données
        $data = Cache::get('formulaire_data_'.$email);

        if(!$data){
            return response()->json([
                'success'=>false,
                'message'=>'Données expirées'
            ]);
        }

        // insertion SEULEMENT ICI
        Formulaire::create($data);

        // supprimer cache
        Cache::forget('verification_code_'.$email);
        Cache::forget('formulaire_data_'.$email);

        return response()->json([
            'success'=>true,
            'message'=>'Formulaire enregistré avec succès'
        ]);
    }
}