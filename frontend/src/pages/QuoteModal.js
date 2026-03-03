import React from "react";
import { useForm } from "react-hook-form";
import { X } from "lucide-react";

export default function QuoteModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const typeRequete = watch("typeRequete");
  const message = watch("message");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Demande de devis envoyée avec succès !");
    reset();
    onClose();
  };

  const validateAtLeastOne = () => {
    if (!typeRequete && !message) {
      return "Veuillez remplir au moins le type de demande ou le message";
    }
    return true;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-start justify-center pt-20 z-50 overflow-y-auto">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl rounded-lg relative">
        {/* Header */}
        <div className="bg-red-600 text-white px-6 py-4 flex justify-between items-center rounded-t-lg">
          <h3 className="text-lg font-bold">Demande de devis</h3>
          <button onClick={onClose} className="text-white text-xl font-bold hover:opacity-70">
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
          {/* Nom & Entreprise */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Nom et Prénom *</label>
            <input
             type="text"
             placeholder="Votre nom et prénom"
             {...register("nomPrenom", { required: "Ce champ est obligatoire" })}
             className="mt-1 w-full border border-gray-300 rounded-lg p-2"
            />
             {errors.nomPrenom && (
               <p className="text-red-600 text-sm">{errors.nomPrenom.message}</p>
             )}
            </div>

          <div>
          <label className="block font-medium text-gray-700">Entreprise *</label>
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
              <label className="block font-medium text-gray-700">Email *</label>
              <input
                type="email"
                placeholder="votremail@exemple.com"
                {...register("email", { required: "L'email est obligatoire" })}
                className="mt-1 w-full border border-gray-300 rounded-lg p-2"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
            </div>
            <div>
            <label className="block font-medium text-gray-700">Fonction *</label>
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
    <label className="block font-medium text-gray-700">Téléphone *</label>
    <input
      type="tel"
      placeholder="+213 XX XX XX XX"
      {...register("telephone", { required: "Le téléphone est obligatoire" })}
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
    <option value="" disabled>-- Sélectionnez un type de demande --</option>
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

          {/* Boutons */}
          <div className="flex gap-4 pt-4 border-t">
            <button
              type="button"
              onClick={() => { reset(); onClose(); }}
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