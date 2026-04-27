import React from "react";
import { motion } from "framer-motion";
import {
  Headphones,
  Phone,
  PhoneOutgoing,
  MessageCircle,
  Server,
  BarChart,
  CheckCircle
} from "lucide-react";

import Head from "../../components/Head";
import Footer from "../../components/Footer";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const brand = {
  red:       "#C0392B",
  redHover:  "#A93226",
  redLight:  "#FADBD8",   // très léger rouge pour fonds subtils
  gray:      "#6D6E71",
  grayLight: "#F2F2F2",
  grayMid:   "#D1D1D1",
  white:     "#FFFFFF",
  textDark:  "#2C2C2C",
};
// ─────────────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <Phone color={brand.red} size={40} />,
    title: "Services Inbound",
    items: [
      "Service client & support technique",
      "Assistance commerciale",
      "Gestion des réclamations",
      "Prise de commandes et suivi",
    ],
  },
  {
    icon: <PhoneOutgoing color={brand.red} size={40} />,
    title: "Services Outbound",
    items: [
      "Téléprospection et génération de leads",
      "Enquêtes de satisfaction",
      "Relance commerciale",
      "Fidélisation client",
    ],
  },
  {
    icon: <MessageCircle color={brand.red} size={40} />,
    title: "Gestion Multicanale",
    items: [
      "Téléphonie IP (VoIP)",
      "Emailing structuré",
      "Chat en ligne",
      "Réseaux sociaux",
    ],
  },
  {
    icon: <Server color={brand.red} size={40} />,
    title: "Infrastructure & Technologies",
    items: [
      "Téléphonie IP haute disponibilité",
      "CRM intégré",
      "Monitoring en temps réel",
      "Archivage des appels",
    ],
  },
  {
    icon: <BarChart color={brand.red} size={40} />,
    title: "Pilotage & Qualité",
    items: [
      "Définition des SLA et indicateurs de performance (KPI)",
      "Contrôle qualité et écoute des appels",
      "Reporting périodique détaillé",
      "Formation continue et évaluation des téléopérateurs",
    ],
  },
  {
    icon: <Headphones color={brand.red} size={40} />,
    title: "Externalisation Back-Office (BPO)",
    items: [
      "Traitement et saisie de données",
      "Gestion documentaire",
      "Validation administrative",
      "Support opérationnel",
    ],
  },
];

const engagements = [
  "Qualité de service élevée",
  "Réduction des coûts opérationnels",
  "Flexibilité et scalabilité",
  "Amélioration de l'expérience client",
];

const CenterAppel = () => {
  return (
    <>
      <Head />

      <div className="pt-10">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: brand.red }}>
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: brand.white }}
              >
                Centre d'Appel & Services BPO
              </h1>
              <p
                className="text-xl max-w-3xl mx-auto"
                style={{ color: brand.redLight }}
              >
                Une plateforme multicanale dédiée à l'externalisation
                de la relation client et à l'optimisation
                de la performance commerciale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* ── Intro ──────────────────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: brand.grayMid }}>
          <div className="container mx-auto px-6 max-w-5xl">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: brand.textDark }}
            >
              Une plateforme orientée performance et qualité de service
            </h2>
            <p className="text-lg mb-6" style={{ color: brand.gray }}>
              Notre centre d'appel constitue une structure opérationnelle
              dédiée à la gestion externalisée de la relation client
              et des processus métiers à forte volumétrie.
            </p>
            <p className="text-lg mb-6" style={{ color: brand.gray }}>
              Conçu selon des standards professionnels stricts,
              notre dispositif repose sur une infrastructure
              technologique sécurisée, des procédures qualité
              formalisées et des équipes formées aux meilleures
              pratiques de gestion de l'expérience client.
            </p>
            <p className="text-lg" style={{ color: brand.gray }}>
              Nous accompagnons les entreprises dans l'optimisation
              de leurs interactions clients et l'amélioration continue
              de leurs indicateurs de performance.
            </p>
          </div>
        </section>

        {/* ── Engagement ─────────────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: brand.grayLight }}>
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: brand.textDark }}
            >
              Notre Engagement
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: brand.gray }}>
              Nous offrons un environnement professionnel structuré,
              sécurisé et évolutif garantissant :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">
              {engagements.map((item) => (
                <div
                  key={item}
                  className="shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition"
                  style={{ backgroundColor: brand.grayMid }}
                >
                  <CheckCircle
                    className="mt-1 flex-shrink-0"
                    color={brand.red}
                  />
                  <span style={{ color: brand.textDark }}>{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-10" style={{ color: brand.gray }}>
              Notre centre d'appel constitue un levier stratégique
              de performance commerciale et relationnelle actif
              dans le domaine depuis 2011.
            </p>
          </div>
        </section>

        {/* ── Services ───────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: brand.grayMid }}>
          <div className="container mx-auto px-6">
            <h2
              className="text-3xl font-bold text-center mb-16"
              style={{ color: brand.textDark }}
            >
              Nos Services
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {services.map(({ icon, title, items }) => (
                <div
                  key={title}
                  className="shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl"
                  style={{
                    backgroundColor: brand.grayLight,
                    borderLeft: `4px solid ${brand.red}`,
                  }}
                >
                  <div className="mb-4">{icon}</div>
                  <h3
                    className="text-xl font-bold mb-4"
                    style={{ color: brand.textDark }}
                  >
                    {title}
                  </h3>
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2"
                        style={{ color: brand.gray }}
                      >
                        <CheckCircle
                          size={18}
                          className="flex-shrink-0 mt-0.5"
                          color={brand.gray}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default CenterAppel;