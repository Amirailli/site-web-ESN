import React from "react";
import { motion } from "framer-motion";
import { Server, Settings, Database, Wrench, Layers, CheckCircle } from "lucide-react";

import Head from "../../components/Head";
import Footer from "../../components/Footer";

const IntegrationSAP = () => {
  return (
    <>
      <Head />

      <div className="pt-10">

        {/* HEADER */}
        <section className="bg-red-700 py-24">
          <div className="container mx-auto px-6 text-center text-white">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >

              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Intégration SAP
              </h1>

              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Structurer, optimiser et transformer votre système
                d'information avec des solutions SAP adaptées
                à votre organisation.
              </p>

            </motion.div>

          </div>
        </section>


        {/* INTRO */}
        <section className="py-20 bg-gray-200">
          <div className="container mx-auto px-6 max-w-5xl">

            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Intégration SAP : structurer, optimiser, performer
            </h2>

            <p className="text-gray-700 text-lg mb-6">
              En tant qu’intégrateur SAP, nous accompagnons les entreprises
              dans la mise en place, l’optimisation et l’évolution
              de leurs systèmes d’information afin d’améliorer
              leur performance opérationnelle et financière.
            </p>

            <p className="text-gray-700 text-lg">
              Notre objectif est de transformer votre environnement SAP
              en un véritable levier stratégique pour soutenir
              votre croissance et vos décisions métiers.
            </p>

          </div>
        </section>
        
        {/* ENGAGEMENT */}
        <section className="py-20 bg-white">

          <div className="container mx-auto px-6 max-w-4xl text-center">

            <h2 className="text-3xl font-bold mb-6">
              Notre engagement
            </h2>

            <p className="text-gray-700 text-lg">
              Nous ne nous contentons pas d’implémenter un système.
              Nous construisons une solution adaptée à votre métier,
              alignée avec votre stratégie et conçue pour évoluer
              avec votre croissance.
            </p>

          </div>

        </section>

        {/* SERVICES */}
        <section className="py-24 bg-gray-200">

          <div className="container mx-auto px-6">

            <h2 className="text-3xl font-bold text-center mb-16">
              Nos services SAP
            </h2>

            <div className="grid md:grid-cols-2  gap-10">

              {/* Implementation */}
              <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

                <Server className="text-red-600 mb-4" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  Implémentation SAP
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li className="flex gap-2"><CheckCircle size={18}/> Analyse des besoins et cadrage</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Conception et paramétrage</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Déploiement et mise en production</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Accompagnement au changement</li>

                </ul>

              </div>


              {/* Migration */}
              <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

                <Database className="text-red-600 mb-4" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  Migration vers SAP S/4HANA
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li className="flex gap-2"><CheckCircle size={18}/> Audit de l’existant</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Plan de migration</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Conversion technique et fonctionnelle</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Tests et sécurisation des données</li>

                </ul>

              </div>


              {/* Support */}
              <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

                <Wrench className="text-red-600 mb-4" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  Support & Maintenance SAP
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li className="flex gap-2"><CheckCircle size={18}/> Support fonctionnel et technique</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Correction des incidents</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Optimisation des performances</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Assistance évolutive</li>

                </ul>

              </div>


              {/* Modules */}
              <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

                <Layers className="text-red-600 mb-4" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  Déploiement des modules SAP
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li className="flex gap-2"><CheckCircle size={18}/> Finance & contrôle de gestion</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Achats & approvisionnement</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Ventes & distribution</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Ressources humaines</li>

                </ul>

              </div>


              {/* Developpement */}
              <div className="bg-white shadow-lg p-8 rounded-xl border-l-4 border-red-600 md:col-span-2 justify-self-center w-full md:w-1/2">

                <Settings className="text-red-600 mb-4" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  Développement spécifique
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li className="flex gap-2"><CheckCircle size={18}/> Développements sur mesure</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Intégration avec systèmes tiers</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Automatisation des processus</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Reporting & tableaux de bord</li>

                </ul>

              </div>

            </div>

          </div>

        </section>


        {/* METHODOLOGIE */}
        <section className="py-20 bg-white">

          <div className="container mx-auto px-6 max-w-4xl">

            <h2 className="text-3xl font-bold mb-10 text-center">
              Notre méthodologie
            </h2>

            <ul className=" grid md:grid-cols-2 gap-6 text-left text-lg">

              <li className="flex gap-3 bg-gray-200 shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition"><CheckCircle className="text-red-600 mt-1"/> Diagnostic & analyse des processus</li>
              <li className="flex gap-3 bg-gray-200 shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition"><CheckCircle className="text-red-600 mt-1"/> Conception adaptée à votre organisation</li>
              <li className="flex gap-3 bg-gray-200 shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition"><CheckCircle className="text-red-600 mt-1"/> Paramétrage & tests</li>
              <li className="flex gap-3 bg-gray-200 shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition"><CheckCircle className="text-red-600 mt-1"/> Formation des utilisateurs</li>
              <li className="flex gap-3 bg-gray-200 shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition"><CheckCircle className="text-red-600 mt-1"/> Accompagnement post-déploiement</li>

            </ul>

          </div>

        </section>

      </div>

      <Footer />
    </>
  );
};

export default IntegrationSAP;