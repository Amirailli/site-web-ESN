import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Server,
  Eye,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

import Head from "../../components/Head";
import Footer from "../../components/Footer";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const brand = {
  red:       "#C0392B",
  redHover:  "#A93226",
  redLight:  "#FADBD8",
  gray:      "#6D6E71",
  grayLight: "#F2F2F2",
  grayMid:   "#D1D1D1",
  white:     "#FFFFFF",
  textDark:  "#2C2C2C",
};
// ─────────────────────────────────────────────────────────────────────────────

const engagements = [
  "Confidentialité des données",
  "Intégrité des systèmes",
  "Disponibilité des services",
  "Résilience face aux menaces",
];

const expertises = [
  {
    icon: <AlertTriangle color={brand.red} size={40} />,
    title: "Audit & Évaluation de Sécurité",
    items: [
      "Audit de sécurité des systèmes",
      "Analyse de vulnérabilités",
      "Tests d'intrusion (Pentest)",
      "Audit de conformité réglementaire",
    ],
  },
  {
    icon: <Server color={brand.red} size={40} />,
    title: "Sécurité des Infrastructures & Réseaux",
    items: [
      "Pare-feu nouvelle génération (NGFW)",
      "Segmentation réseau",
      "IDS / IPS",
      "VPN et MFA",
    ],
  },
  {
    icon: <Lock color={brand.red} size={40} />,
    title: "Sécurité des Applications & Données",
    items: [
      "Sécurisation ERP et Cloud",
      "Chiffrement des données",
      "Gestion des identités (IAM)",
      "Protection OWASP",
    ],
  },
  {
    icon: <Eye color={brand.red} size={40} />,
    title: "Supervision & Détection des Menaces",
    items: [
      "Monitoring sécurité en temps réel",
      "Analyse SIEM",
      "Détection d'anomalies",
      "Alertes et reporting sécurité",
    ],
  },
  {
    icon: <AlertTriangle color={brand.red} size={40} />,
    title: "Gestion des Incidents & Continuité d'Activité",
    items: [
      "Plan de Réponse aux Incidents (PRI)",
      "Plan de Continuité d'Activité (PCA)",
      "Plan de Reprise d'Activité (PRA)",
      "Sauvegarde sécurisée des données",
      "Procédures de restauration",
    ],
  },
  {
    icon: <Shield color={brand.red} size={40} />,
    title: "Gouvernance & Conformité",
    items: [
      "Élaboration de politiques et procédures internes",
      "Sensibilisation et formation des collaborateurs",
      "Gestion des risques cyber",
      "Accompagnement à la conformité réglementaire",
    ],
  },
];

const CyberSecurity = () => {
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
                Cybersécurité & Protection des Systèmes
              </h1>
              <p
                className="text-xl max-w-3xl mx-auto"
                style={{ color: brand.redLight }}
              >
                Sécuriser vos systèmes. Protéger vos données.
                Garantir votre continuité d'activité.
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
              Cybersécurité : un enjeu stratégique majeur
            </h2>
            <p className="text-lg mb-6" style={{ color: brand.gray }}>
              Dans un environnement numérique marqué par la sophistication
              croissante des cybermenaces, la cybersécurité constitue un enjeu
              stratégique majeur pour les organisations.
            </p>
            <p className="text-lg mb-6" style={{ color: brand.gray }}>
              Notre entreprise accompagne ses clients dans la conception,
              le déploiement et l'exploitation de dispositifs de sécurité robustes
              visant à protéger leurs systèmes d'information,
              leurs données sensibles et leurs infrastructures critiques.
            </p>
            <p className="text-lg" style={{ color: brand.gray }}>
              Notre approche repose sur une stratégie globale intégrant
              prévention, détection, réponse et amélioration continue.
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
            <p className="text-lg mb-10" style={{ color: brand.gray }}>
              Notre démarche s'inscrit dans une logique de sécurité globale
              et proactive. Nous combinons expertise technique,
              méthodologie rigoureuse et outils avancés pour garantir :
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
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
          </div>
        </section>

        {/* ── Expertises ─────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: brand.grayMid }}>
          <div className="container mx-auto px-6">
            <h2
              className="text-3xl font-bold text-center mb-16"
              style={{ color: brand.textDark }}
            >
              Nos expertises en cybersécurité
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {expertises.map(({ icon, title, items }) => (
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

export default CyberSecurity;