import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, Settings, Database, Server } from "lucide-react";
import Header from "../../components/Head";
import Footer from "../../components/Footer";

const IntegrationSAP = () => {

  const servicesSAP = [
    {
      title: "Implémentation SAP",
      details: [
        "Analyse des besoins et cadrage",
        "Conception et paramétrage",
        "Déploiement et mise en production",
        "Accompagnement au changement"
      ]
    },
    {
      title: "Migration & Conversion vers SAP S/4HANA",
      details: [
        "Audit de l'existant",
        "Plan de migration",
        "Conversion technique et fonctionnelle",
        "Tests et sécurisation des données"
      ]
    },
    {
      title: "Support & Maintenance SAP",
      details: [
        "Support fonctionnel et technique",
        "Correction des incidents",
        "Optimisation des performances",
        "Assistance évolutive"
      ]
    },
    {
      title: "Déploiement des modules SAP",
      details: [
        "Finance & Contrôle de gestion",
        "Achats & Approvisionnement",
        "Ventes & Distribution",
        "Gestion des stocks",
        "Ressources humaines",
        "Production & Logistique"
      ]
    },
    {
      title: "Développement spécifique & Interfaces",
      details: [
        "Développements sur mesure",
        "Intégration avec systèmes tiers",
        "Automatisation des processus",
        "Reporting & tableaux de bord"
      ]
    }
  ];

  return (
    <div>

      <Header />

      {/* HERO */}
      <section className="bg-red-700 py-24 pt-32">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Intégration SAP : structurer, optimiser, performer
            </h1>

            <p className=" text-white  max-w-3xl mx-auto text-lg opacity-90">
              En tant qu'intégrateur SAP, nous accompagnons les entreprises dans
              la mise en place, l'optimisation et l'évolution de leurs systèmes
              d'information afin d'améliorer leur performance opérationnelle et
              financière.
            </p>

            <p className="  text-white mt-4 text-lg opacity-90">
              Notre objectif est de transformer votre environnement SAP en un
              véritable levier stratégique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SAP */}
      <section className="py-24 bg-gray-200">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Nos services SAP
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">

            {servicesSAP.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 hover:shadow-xl transition"
              >
                <div className="mb-6 p-4 bg-red-50 inline-block rounded-xl">
                  <Settings className="text-red-600" size={32} />
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>

                <div className="space-y-3">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="text-red-600 mt-1" size={18} />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* METHODOLOGIE */}
      <section className="py-24 bg-white ">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Notre méthodologie
            </h2>

            <p className="text-gray-700 text-lg">
              Une approche structurée et orientée résultats.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 ">

            {[
              "Diagnostic & analyse des processus",
              "Conception adaptée à votre organisation",
              "Paramétrage & tests",
              "Formation des utilisateurs",
              "Accompagnement post-déploiement"
            ].map((step, i) => (
              <div
                key={i}
                className="bg-gray-200 shadow-lg p-6 rounded-xl border-l-4 border-red-700 hover:shadow-xl transition"
              >
                <p className="text-gray-700 font-bold">{step}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ENGAGEMENT */}
      <section className="py-24 bg-gray-200">
        <div className="container mx-auto px-6 text-center max-w-4xl">

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Notre engagement
          </h2>

          <p className="text-gray-600 text-lg">
            Nous ne nous contentons pas d’implémenter un système.
            Nous construisons une solution adaptée à votre métier,
            alignée avec votre stratégie et conçue pour évoluer avec
            votre croissance.
          </p>

        </div>
      </section>

      <Footer />

    </div>
  );
};

export default IntegrationSAP;