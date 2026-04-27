import React from "react";
import Header from "../components/Head";
import Footer from "../components/Footer";
import { motion } from "framer-motion";


const brand = {
  red: "#C0392B",
  redHover: "#A93226",
  gray: "#6D6E71",
  grayLight: "#F2F2F2",
  grayMid: "#D1D1D1",
  white: "#FFFFFF",
  textDark: "#2C2C2C",
};

export default function Confidentialite() {
  return (
    <div
      className="overflow-x-hidden"
      style={{ backgroundColor: brand.white, color: brand.textDark }}
    >
      <Header activeSection="Confidentialité" />

      {/* Hero Section */}
      <section
        className="relative min-h-[45vh] flex items-center justify-center pt-20"
        style={{ backgroundColor: brand.red }}
      >
        

        <div className="w-full px-6 md:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: brand.white }}
            >
              Politique de confidentialité
            </h1>
            <p className="text-lg" style={{ color: brand.grayLight }}>
              Votre vie privée est notre priorité
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      {/* Content Section */}
<section className="py-16" style={{ backgroundColor: brand.grayMid }}>
  <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-10">

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >

      {/* Intro */}
      <p className="mb-8 text-base md:text-lg text-left" style={{ color: brand.gray }}>
        La présente politique de confidentialité décrit la manière dont nous collectons,
        utilisons et protégeons vos données personnelles lorsque vous utilisez notre site web.
      </p>

      {/* Section 1 */}
      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-left" style={{ color: brand.red }}>
          1. Collecte des données personnelles
        </h2>

        <p className="mb-3 text-left" style={{ color: brand.gray }}>
          Nous collectons uniquement les informations que vous fournissez via le formulaire :
        </p>

        <ul className="list-disc list-inside md:list-outside md:ml-6 space-y-2 text-left" style={{ color: brand.gray }}>
          <li>Nom et prénom</li>
          <li>Email</li>
          <li>Téléphone</li>
          <li>Entreprise</li>
          <li>Fonction</li>
        </ul>
      </div>

      {/* Section 2 */}
      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-left" style={{ color: brand.red }}>
          2. Utilisation des données
        </h2>

        <ul className="list-disc list-inside md:list-outside md:ml-6 space-y-2 text-left" style={{ color: brand.gray }}>
          <li>Répondre aux demandes</li>
          <li>Contacter l’utilisateur</li>
          <li>Améliorer nos services</li>
        </ul>
      </div>

      {/* Section 3 */}
      <div className="mb-10 text-left">
        <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: brand.red }}>
          3. Partage des données
        </h2>
        <p style={{ color: brand.gray }}>
          Aucune donnée personnelle n’est vendue. Elles peuvent être utilisées uniquement pour traiter votre demande.
        </p>
      </div>

      {/* Section 4 */}
      <div className="mb-10 text-left">
        <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: brand.red }}>
          4. Conservation des données
        </h2>
        <p style={{ color: brand.gray }}>
          Les données sont conservées uniquement le temps nécessaire au traitement de la demande.
        </p>
      </div>

      {/* Section 5 */}
      <div className="mb-10 text-left">
        <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: brand.red }}>
          5. Sécurité
        </h2>
        <p style={{ color: brand.gray }}>
          Nous mettons en place des mesures pour protéger les données contre tout accès non autorisé.
        </p>
      </div>

      {/* Section 6 */}
      <div className="mb-10">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-left" style={{ color: brand.red }}>
          6. Vos droits
        </h2>

        <ul className="list-disc list-inside md:list-outside md:ml-6 space-y-2 mb-3 text-left" style={{ color: brand.gray }}>
          <li>Droit d’accès</li>
          <li>Droit de modification</li>
          <li>Droit de suppression</li>
          <li>Droit d’opposition</li>
        </ul>

        <p className="text-left" style={{ color: brand.gray }}>
          Contactez-nous pour exercer vos droits.
        </p>
      </div>

      {/* Section 7 */}
      <div className="mb-10 text-left">
        <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: brand.red }}>
          7. Cookies
        </h2>
        <p style={{ color: brand.gray }}>
          Ce site n'utilise pas de cookies de suivi ou publicitaires.
        </p>
      </div>

      {/* Section 8 */}
      <div className="text-left">
        <h2 className="text-xl md:text-2xl font-bold mb-4" style={{ color: brand.red }}>
          8. Modifications
        </h2>
        <p style={{ color: brand.gray }}>
          Cette politique peut être mise à jour à tout moment.
        </p>
      </div>

      {/* Contact */}
      <div
        className="mt-12 p-6 md:p-8 rounded-xl shadow-lg text-left"
        style={{
          backgroundColor: brand.grayLight,
          borderLeft: `4px solid ${brand.red}`,
        }}
      >
        <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: brand.red }}>
          Contact
        </h3>

        <p style={{ color: brand.gray }}>
          Email : <strong>contact@keepcontact.dz</strong>
        </p>
      </div>

    </motion.div>
  </div>
</section>

      <Footer />
    </div>
  );
}