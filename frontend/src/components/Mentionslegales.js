import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Head";
import Footer from "../components/Footer";

const brand = {
  red: "#C0392B",
  redHover: "#A93226",
  gray: "#6D6E71",
  grayLight: "#F2F2F2",
  grayMid: "#D1D1D1",
  white: "#FFFFFF",
  textDark: "#2C2C2C",
};

export default function MentionsLegales() {

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: brand.white, color: brand.textDark }}>

      <Header activeSection="Mentions légales" />

      {/* HERO */}
      <section
        className="relative min-h-[45vh] flex items-center justify-center pt-20"
        style={{
          background: `linear-gradient(to right, ${brand.red}, ${brand.redHover})`,
          color: brand.white
        }}
      >
        <motion.div
          className="text-center max-w-3xl px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mentions légales
          </h1>
          <p style={{ color: "rgba(255,255,255,0.8)" }}>
            Informations légales concernant l'éditeur du site
          </p>
        </motion.div>
      </section>

      {/* CONTENT */}
      <section className="py-16" style={{ backgroundColor: brand.grayMid}}>
        <div className="max-w-5xl mx-auto px-6">

          <motion.div variants={containerVariants} initial="hidden" animate="show">

            {/* ÉDITEUR */}
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.red }}>
                1. Éditeur du site
              </h2>

              <ul className="list-disc ml-6 space-y-2" style={{ color: brand.gray }}>
                <li>Nom de l'entreprise : <strong>Keep Contact</strong></li>
                <li>Statut juridique : Société (à préciser)</li>
                <li>Adresse : (à compléter)</li>
                <li>Email : contact@keepcontact.dz</li>
                <li>Téléphone : (à compléter)</li>
              </ul>
            </motion.div>

            {/* DIRECTEUR */}
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.red }}>
                2. Directeur de publication
              </h2>
              <p style={{ color: brand.gray }}>
                Le directeur de la publication est le représentant légal de l’entreprise Keep Contact.
              </p>
            </motion.div>

            {/* HÉBERGEMENT */}
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.red }}>
                3. Hébergement
              </h2>

              <ul className="list-disc ml-6 space-y-2" style={{ color: brand.gray }}>
                <li>Hébergeur du site : (à compléter)</li>
                <li>Adresse : (à compléter)</li>
                <li>Site web : (à compléter)</li>
              </ul>
            </motion.div>

            {/* PROPRIÉTÉ INTELLECTUELLE */}
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.red }}>
                4. Propriété intellectuelle
              </h2>
              <p style={{ color: brand.gray }}>
                L’ensemble du contenu présent sur ce site (textes, images, logos, graphismes, icônes, etc.)
                est protégé par les lois en vigueur relatives à la propriété intellectuelle.
                Toute reproduction, représentation, modification ou adaptation, totale ou partielle,
                est interdite sans autorisation préalable.
              </p>
            </motion.div>

            {/* RESPONSABILITÉ */}
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.red }}>
                5. Responsabilité
              </h2>
              <p style={{ color: brand.gray }}>
                L’éditeur du site met tout en œuvre pour fournir des informations fiables et à jour.
                Toutefois, il ne saurait être tenu responsable des erreurs, omissions ou d’un éventuel
                dysfonctionnement du site.
              </p>
            </motion.div>

            {/* DONNÉES PERSONNELLES */}
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.red }}>
                6. Données personnelles
              </h2>
              <p style={{ color: brand.gray }}>
                Les informations collectées via les formulaires sont utilisées uniquement pour traiter
                les demandes des utilisateurs. Pour plus d’informations, veuillez consulter la politique
                de confidentialité.
              </p>
            </motion.div>

            {/* COOKIES */}
            <motion.div variants={itemVariants} className="mb-10">
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.red }}>
                7. Cookies
              </h2>
              <p style={{ color: brand.gray }}>
                Ce site peut utiliser des cookies techniques nécessaires au bon fonctionnement.
                Aucun cookie de suivi ou publicitaire n’est utilisé.
              </p>
            </motion.div>

            {/* DROIT APPLICABLE */}
            <motion.div variants={itemVariants}>
              <h2 className="text-2xl font-bold mb-4" style={{ color: brand.red }}>
                8. Droit applicable
              </h2>
              <p style={{ color: brand.gray }}>
                Les présentes mentions légales sont régies par la législation en vigueur en Algérie.
              </p>
            </motion.div>

            {/* CONTACT */}
            <motion.div
              variants={itemVariants}
              className="mt-16 p-8 rounded-xl shadow-md"
              style={{
                backgroundColor: brand.grayLight,
                borderLeft: `4px solid ${brand.red}`
              }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: brand.red }}>
                Contact
              </h3>
              <p style={{ color: brand.gray }}>
                Email : <strong>contact@keepcontact.dz</strong>
              </p>
            </motion.div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}