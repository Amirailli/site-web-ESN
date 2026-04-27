import React from "react";
import { motion } from "framer-motion";
import { Server, Settings, Database, Wrench, Layers, CheckCircle } from "lucide-react";

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

const services = [
  {
    icon: <Server color={brand.red} size={40} />,
    title: "Implémentation SAP",
    items: [
      "Analyse des besoins et cadrage",
      "Conception et paramétrage",
      "Déploiement et mise en production",
      "Accompagnement au changement",
    ],
    span: false,
  },
  {
    icon: <Database color={brand.red} size={40} />,
    title: "Migration vers SAP S/4HANA",
    items: [
      "Audit de l'existant",
      "Plan de migration",
      "Conversion technique et fonctionnelle",
      "Tests et sécurisation des données",
    ],
    span: false,
  },
  {
    icon: <Wrench color={brand.red} size={40} />,
    title: "Support & Maintenance SAP",
    items: [
      "Support fonctionnel et technique",
      "Correction des incidents",
      "Optimisation des performances",
      "Assistance évolutive",
    ],
    span: false,
  },
  {
    icon: <Layers color={brand.red} size={40} />,
    title: "Déploiement des modules SAP",
    items: [
      "Finance & contrôle de gestion",
      "Achats & approvisionnement",
      "Ventes & distribution",
      "Ressources humaines",
    ],
    span: false,
  },
  {
    icon: <Settings color={brand.red} size={40} />,
    title: "Développement spécifique",
    items: [
      "Développements sur mesure",
      "Intégration avec systèmes tiers",
      "Automatisation des processus",
      "Reporting & tableaux de bord",
    ],
    span: true,
  },
];

const methodologie = [
  "Diagnostic & analyse des processus",
  "Conception adaptée à votre organisation",
  "Paramétrage & tests",
  "Formation des utilisateurs",
  "Accompagnement post-déploiement",
];

const IntegrationSAP = () => {
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
                Intégration SAP
              </h1>
              <p
                className="text-xl max-w-3xl mx-auto"
                style={{ color: brand.redLight }}
              >
                Structurer, optimiser et transformer votre système
                d'information avec des solutions SAP adaptées
                à votre organisation.
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
              Intégration SAP : structurer, optimiser, performer
            </h2>
            <p className="text-lg mb-6" style={{ color: brand.gray }}>
              En tant qu'intégrateur SAP, nous accompagnons les entreprises
              dans la mise en place, l'optimisation et l'évolution
              de leurs systèmes d'information afin d'améliorer
              leur performance opérationnelle et financière.
            </p>
            <p className="text-lg" style={{ color: brand.gray }}>
              Notre objectif est de transformer votre environnement SAP
              en un véritable levier stratégique pour soutenir
              votre croissance et vos décisions métiers.
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
              Notre engagement
            </h2>
            <p className="text-lg" style={{ color: brand.gray }}>
              Nous ne nous contentons pas d'implémenter un système.
              Nous construisons une solution adaptée à votre métier,
              alignée avec votre stratégie et conçue pour évoluer
              avec votre croissance.
            </p>
          </div>
        </section>

        {/* ── Services SAP ───────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: brand.grayMid }}>
          <div className="container mx-auto px-6">
            <h2
              className="text-3xl font-bold text-center mb-16"
              style={{ color: brand.textDark }}
            >
              Nos services SAP
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {services.map(({ icon, title, items, span }) => (
                <div
                  key={title}
                  className={`shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl${
                    span ? " md:col-span-2 md:w-1/2 justify-self-center w-full" : ""
                  }`}
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

        {/* ── Méthodologie ───────────────────────────────────────────────── */}
        <section className="py-20" style={{ backgroundColor: brand.grayLight }}>
          <div className="container mx-auto px-6 max-w-4xl">
            <h2
              className="text-3xl font-bold mb-10 text-center"
              style={{ color: brand.textDark }}
            >
              Notre méthodologie
            </h2>

            <ul className="grid md:grid-cols-2 gap-6 text-left text-lg">
              {methodologie.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 shadow-lg p-6 rounded-xl items-start hover:shadow-xl transition"
                  style={{ backgroundColor: brand.grayMid }}
                >
                  <CheckCircle
                    className="mt-1 flex-shrink-0"
                    color={brand.red}
                  />
                  <span style={{ color: brand.textDark }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default IntegrationSAP;