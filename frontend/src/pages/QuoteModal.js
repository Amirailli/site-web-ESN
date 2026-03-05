import React , { useState }from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
// Accordion
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "@radix-ui/react-accordion";

// Checkbox & Label (si tu utilises shadcn/ui)


export default function QuoteModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    getValues,
  } = useForm();

  const typeRequete = watch("typeRequete");
  const message = watch("message");

  const [captchaValue, setCaptchaValue] = useState(null);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [savedEmail, setSavedEmail] = useState("");

  const validateAtLeastOne = () => {
  const values = getValues(); // récupère toutes les valeurs du formulaire
  if (!values.typeRequete && !values.message) {
    return "Veuillez remplir au moins le type de demande ou le message";
  }
  return true;
};

  if (!isOpen) return null;

 
  
 const onSubmit = async (data) => {
  if (!captchaValue) {
    alert("Veuillez confirmer que vous n'êtes pas un robot.");
    return;
  }

  try {
    const response = await fetch("http://127.0.0.1:8000/api/formulaire", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomPrenom: data.nomPrenom,
        entreprise: data.entreprise,
        email: data.email,
        fonction: data.fonction,
        telephone: data.telephone,
        typeRequete: data.typeRequete,
        message: data.message,
        acceptPolitique: data.acceptPolitique ? true : false,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setShowCodeInput(true);      // 🔥 afficher champ code
      setSavedEmail(data.email);   // 🔥 sauvegarder email
      alert("Un code de confirmation a été envoyé à votre email.");
    } else {
      alert("Erreur : " + result.message);
    }
  } catch (error) {
    console.error("Erreur:", error);
    alert("Une erreur est survenue.");
  }
};
  
  const handleVerifyCode = async () => {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/verifier-code", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: savedEmail,
        code: verificationCode,
      }),
    });

    const result = await response.json();

    if (result.success) {
      alert("Email confirmé avec succès !");
      alert("Ton formulaire a ete envoyer avec succes");
      reset();
      setCaptchaValue(null);
      setShowCodeInput(false);
      setVerificationCode("");
      onClose();
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error("Erreur:", error);
    alert("Erreur lors de la vérification.");
  }
};

const handleClose = () => {
  reset();                // Vide tous les champs du formulaire
  setCaptchaValue(null);   // Réinitialise le captcha
  setShowCodeInput(false); // Cache le champ code
  setVerificationCode(""); // Vide le code
  setSavedEmail("");       // Vide l’email sauvegardé
  onClose();               // Ferme le modal
};


  return (
    <div className="fixed inset-0 bg-black/40 flex items-start justify-center pt-10 pb-10 z-50 overflow-y-auto">
      <div className="bg-white w-full max-w-xl max-h-[90vh] shadow-2xl rounded-lg relative flex flex-col">
        {/* Header */}
        <div className="bg-red-600 text-white px-6 py-4 flex justify-between items-center rounded-t-lg">
          <h3 className="text-lg font-bold">Demande de devis</h3>
          <button onClick={handleClose} className="text-white text-xl font-bold hover:opacity-70">
            ✕
          </button>
        </div>

         {/* Form */}
         <form
               onSubmit={handleSubmit(onSubmit)}
               className="p-6 space-y-6 overflow-y-auto flex-1 scrollbar-hide"
         >

          {/* Nom & Entreprise */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Nom et Prénom <span className="text-red-600">*</span></label>
            <input
             type="text"
             placeholder="Votre nom et prénom"
             {...register("nomPrenom", { 
    required: "Ce champ est obligatoire",
    validate: value => {
        // On coupe le texte par espaces, et on garde les mots non vides
        const mots = value.trim().split(/\s+/);
        return mots.length >= 2 || "Veuillez entrer au moins un nom et un prénom";
    }
})}
             className="mt-1 w-full border border-gray-300 rounded-lg p-2"
            />
             {errors.nomPrenom && (
               <p className="text-red-600 text-sm">{errors.nomPrenom.message}</p>
             )}
            </div>

          <div>
          <label className="block font-medium text-gray-700">Entreprise <span className="text-red-600">*</span></label>
          <input
            type="text"
            placeholder="Nom de votre entreprise"
            {...register("entreprise", { required: "L'entreprise est obligatoire" })}
            className="mt-1 w-full border border-gray-300 rounded-lg p-2"
          />
           {errors.entreprise && (
            <p className="text-red-600 text-sm">{errors.entreprise.message}</p>
           )}
          </div>
         </div>

          {/* Email + Fonction */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Email <span className="text-red-600">*</span></label>
              <input
                type="email"
                placeholder="votremail@exemple.com"
                // {...register("email", { required: "L'email est obligatoire" })}
                {...register("email", { 
  required: "L'email est obligatoire",
  pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Format email invalide"
  }
})}
                className="mt-1 w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
            </div>
            <div>
            <label className="block font-medium text-gray-700">Fonction <span className="text-red-600">*</span></label>
            <input
              type="text"
              placeholder="Ex: Directeur IT"
              {...register("fonction", { required: "La fonction est obligatoire" })}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2"
            />
            {errors.fonction && <p className="text-red-600 text-sm">{errors.fonction.message}</p>}
          </div>
            
          </div>
          
          {/* Téléphone + Type de demande */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {/* Téléphone */}
           <div>
              <label className="block font-medium text-gray-700">Téléphone <span className="text-red-600">*</span></label>
              <input
                type="tel"
                placeholder="+213 XX XX XX XX"
                // {...register("telephone", { required: "Le téléphone est obligatoire" })}
                {...register("telephone", { 
  required: "Le téléphone est obligatoire",
  pattern: {
    value: /^(0|\+213)[0-9]{9}$/,
    message: "Téléphone invalide, doit commencer par 0 ou +213 et contenir 10 chiffres"
  }
})}
                className="mt-1 w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.telephone && <p className="text-red-600 text-sm">{errors.telephone.message}</p>}
            </div>

            {/* Type de demande */}
            <div>
              <label className="block font-medium text-gray-700">Type de demande</label>
              <select
                 {...register("typeRequete", { validate: validateAtLeastOne })}
                 className="mt-1 w-full border border-gray-300 rounded-lg p-2"
                 defaultValue=""
              >
               <option value="" disabled>-- Sélectionnez le --</option>
               <option value="information">Demande d'information</option>
               <option value="rendez-vous">Prendre un rendez-vous</option>
               <option value="reclamation">Réclamation</option>
              </select>
              {errors.typeRequete && !typeRequete && !message && (
                 <p className="text-red-600 text-sm mt-1">
                    ⚠️ Veuillez choisir un type de demande ou écrire un message
                 </p>
              )}
            </div>
          </div>
          {/* Message */}
          <div>
            <label className="block font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Décrivez votre demande..."
              {...register("message", { validate: validateAtLeastOne })}
              className="mt-1 w-full border border-gray-300 rounded-lg p-2 min-h-[120px]"
            />
          </div>

          {(errors.typeRequete || errors.message) && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-600 text-sm">⚠️ Veuillez remplir au moins le type de demande ou le message</p>
            </div>
          )}
          {/* Politique de confidentialité */}
<div className="border border-gray-200 rounded-lg p-4 bg-gray-50 mb-6">
  <details className="border border-gray-200 rounded-lg p-3 bg-gray-50">
    <summary className="font-semibold cursor-pointer text-gray-900 text-sm">
       Politique de confidentialité
    </summary>
    <div className="mt-2 text-sm text-gray-600 space-y-3">
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">Collecte des données :</h4>
        <p>
          Nous collectons les informations que vous nous fournissez volontairement dans ce formulaire, 
          comme votre nom, email, téléphone, entreprise, fonction et message.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">Utilisation des données :</h4>
        <p>
          Ces informations sont utilisées uniquement pour traiter votre demande de devis, 
          vous répondre et améliorer nos services.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">Partage des données :</h4>
        <p>
          Vos données ne seront jamais vendues ou partagées avec des tiers à des fins commerciales. 
          Elles peuvent être partagées avec des prestataires uniquement pour le traitement de votre demande.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">Sécurité :</h4>
        <p>
          Nous mettons en place des mesures techniques et organisationnelles pour protéger vos 
          informations personnelles contre tout accès non autorisé, perte ou divulgation.
        </p>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">Vos droits :</h4>
        <p>
          Vous pouvez à tout moment demander l'accès, la modification ou la suppression de vos 
          données en nous contactant via notre formulaire ou email.
        </p>
      </div>
    </div>
  </details>

  {/* Case à cocher */}
  <div className="flex items-start space-x-3 mt-3">
    <input
      type="checkbox"
      id="acceptPolitique"
      {...register("acceptPolitique", {
        required: "Vous devez accepter la politique de confidentialité pour continuer"
      })}
      className="mt-1"
    />
    <label htmlFor="acceptPolitique" className="flex-1 cursor-pointer text-sm">
      J'accepte la politique de confidentialité et consens au traitement de mes données personnelles
      pour le traitement de ma demande. <span className="text-red-600">*</span>
    </label>
  </div>
  {errors.acceptPolitique && (
    <p className="text-red-600 text-sm mt-1">{errors.acceptPolitique.message}</p>
  )}
</div>
          
          
          <div className="flex justify-center">
           <ReCAPTCHA
               sitekey="6LfGvn4sAAAAAPkI0wC--z6W0qNweJrPJj19KbhW"
               onChange={(value) => setCaptchaValue(value)}
           />
          </div>

          
          {showCodeInput && (
  <div className="border border-blue-200 bg-blue-50 p-4 rounded-lg">
    <h4 className="font-semibold mb-2">
      Entrez le code reçu par email
    </h4>

    <input
      type="text"
      placeholder="Code à 6 chiffres"
      value={verificationCode}
      onChange={(e) => setVerificationCode(e.target.value)}
      className="w-full border border-gray-300 rounded-lg p-2 mb-3"
    />

    <button
      type="button"
      onClick={handleVerifyCode}
      className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg"
    >
      Vérifier le code
    </button>
  </div>
)}

          {/* Boutons */}
          <div className="flex gap-4 pt-4 border-t">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-semibold shadow-md"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}