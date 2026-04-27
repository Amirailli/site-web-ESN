import React from "react";
import { motion } from "framer-motion";
import { Cloud as CloudIcon, Server, Shield, Database, CheckCircle } from "lucide-react";
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

const expertises = [
  {
    icon: <Server color={brand.red} size={40} />,
    title: "Architecture & Conception d'Infrastructure",
    items: [
      "Audit et diagnostic technique",
      "Conception d'architectures cloud ou hybrides",
      "Dimensionnement des ressources",
      "Optimisation des performances",
    ],
  },
  {
    icon: <CloudIcon color={brand.red} size={40} />,
    title: "Solutions Cloud",
    items: [
      "Migration vers le Cloud",
      "Déploiement d'environnements virtualisés",
      "Gestion d'infrastructures hybrides",
      "Optimisation des coûts",
    ],
  },
  {
    icon: <Database color={brand.red} size={40} />,
    title: "Hébergement & Virtualisation",
    items: [
      "Mise en place de serveurs virtualisés",
      "Gestion des environnements de production",
      "Haute disponibilité",
      "Continuité d'activité",
    ],
  },
  {
    icon: <Shield color={brand.red} size={40} />,
    title: "Sécurité & Protection des Données",
    items: [
      "Mise en place de politiques de sécurité",
      "Protection des réseaux et serveurs",
      "Sauvegarde & plan de reprise (PRA)",
      "Surveillance des risques",
    ],
  },
  {
    icon: <Server color={brand.red} size={40} />,
    title: "Administration & Supervision",
    items: [
      "Supervision 24/7",
      "Maintenance préventive et corrective",
      "Gestion des mises à jour",
      "Support technique dédié",
    ],
  },
];

const CloudInfrastructure = () => {
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
                Services Cloud & Infrastructure
              </h1>
              <p
                className="text-xl max-w-3xl mx-auto"
                style={{ color: brand.redLight }}
              >
                Une base technologique solide pour garantir la performance,
                la disponibilité et la sécurité de votre système d'information.
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
              Cloud & Infrastructure : une base technologique solide pour une performance durable
            </h2>
            <p className="text-lg mb-6" style={{ color: brand.gray }}>
              Dans un environnement économique en constante évolution, la fiabilité
              et la sécurité de l'infrastructure informatique sont des facteurs
              clés de compétitivité.
            </p>
            <p className="text-lg mb-6" style={{ color: brand.gray }}>
              Nous accompagnons les organisations dans la conception,
              la modernisation et la gestion de leurs environnements Cloud
              et infrastructures IT afin de garantir performance,
              disponibilité et sécurité.
            </p>
            <p className="text-lg" style={{ color: brand.gray }}>
              Nos solutions sont adaptées aux exigences métiers,
              aux contraintes réglementaires et aux objectifs stratégiques
              de nos clients.
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
            <p className="text-lg leading-relaxed" style={{ color: brand.gray }}>
              Nous mettons en œuvre des infrastructures fiables, évolutives
              et sécurisées capables de soutenir votre croissance et
              vos ambitions digitales.
            </p>
            <p className="mt-6 text-lg" style={{ color: brand.gray }}>
              Notre objectif est d'offrir un environnement technologique
              stable et performant permettant à votre organisation de
              se concentrer pleinement sur son cœur de métier.
            </p>
          </div>
        </section>

        {/* ── Expertises ─────────────────────────────────────────────────── */}
        <section className="py-24" style={{ backgroundColor: brand.grayMid }}>
          <div className="container mx-auto px-6">
            <h2
              className="text-3xl font-bold text-center mb-16"
              style={{ color: brand.textDark }}
            >
              Nos expertises
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
              {expertises.map(({ icon, title, items }) => (
                <div
                  key={title}
                  className="shadow-xl p-8 rounded-xl hover:shadow-2xl transition duration-300"
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

export default CloudInfrastructure;