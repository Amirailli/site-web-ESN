import React from "react";
import { motion } from "framer-motion";
import { Cloud as CloudIcon, Server, Shield, Database, CheckCircle } from "lucide-react";
import Head from "../../components/Head";
import Footer from "../../components/Footer";

const CloudInfrastructure = () => {
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
                Services Cloud & Infrastructure
              </h1>

              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Une base technologique solide pour garantir la performance,
                la disponibilité et la sécurité de votre système d’information.
              </p>
            </motion.div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 bg-gray-200">
          <div className="container mx-auto px-6 max-w-5xl">

            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Cloud & Infrastructure : une base technologique solide pour une performance durable
            </h2>

            <p className="text-gray-700 text-lg mb-6">
              Dans un environnement économique en constante évolution, la fiabilité
              et la sécurité de l'infrastructure informatique sont des facteurs
              clés de compétitivité.
            </p>

            <p className="text-gray-700 text-lg mb-6">
              Nous accompagnons les organisations dans la conception,
              la modernisation et la gestion de leurs environnements Cloud
              et infrastructures IT afin de garantir performance,
              disponibilité et sécurité.
            </p>

            <p className="text-gray-700 text-lg">
              Nos solutions sont adaptées aux exigences métiers,
              aux contraintes réglementaires et aux objectifs stratégiques
              de nos clients.
            </p>

          </div>
        </section>

        {/* ENGAGEMENT */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">

            <h2 className="text-3xl font-bold mb-6">
               Notre engagement
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Nous mettons en œuvre des infrastructures fiables, évolutives
              et sécurisées capables de soutenir votre croissance et
              vos ambitions digitales.
            </p>

            <p className="text-gray-700 mt-6 text-lg">
              Notre objectif est d’offrir un environnement technologique
              stable et performant permettant à votre organisation de
              se concentrer pleinement sur son cœur de métier.
            </p>

          </div>
        </section>

        {/* EXPERTISES */}
        <section className="py-24 bg-gray-200">
          <div className="container mx-auto px-6">

            <h2 className="text-3xl font-bold text-center mb-16">
               Nos expertises
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              {/* Architecture */}
              <div className="bg-white shadow-xl p-8 rounded-xl border-l-4 border-red-600">
                <Server className="text-red-600 mb-4" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  Architecture & Conception d’Infrastructure
                </h3>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2"><CheckCircle size={18}/> Audit et diagnostic technique</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Conception d’architectures cloud ou hybrides</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Dimensionnement des ressources</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Optimisation des performances</li>
                </ul>
              </div>

              {/* Cloud */}
              <div className="bg-white shadow-xl p-8 rounded-xl border-l-4 border-red-600">
                <CloudIcon className="text-red-600 mb-4" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  Solutions Cloud
                </h3>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2"><CheckCircle size={18}/> Migration vers le Cloud</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Déploiement d’environnements virtualisés</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Gestion d’infrastructures hybrides</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Optimisation des coûts</li>
                </ul>
              </div>

              {/* Virtualisation */}
              <div className="bg-white shadow-xl p-8 rounded-xl border-l-4 border-red-600">
                <Database className="text-red-600 mb-4" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  Hébergement & Virtualisation
                </h3>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2"><CheckCircle size={18}/> Mise en place de serveurs virtualisés</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Gestion des environnements de production</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Haute disponibilité</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Continuité d’activité</li>
                </ul>
              </div>

              {/* Security */}
              <div className="bg-white shadow-xl p-8 rounded-xl border-l-4 border-red-600">
                <Shield className="text-red-600 mb-4" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  Sécurité & Protection des Données
                </h3>

                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-2"><CheckCircle size={18}/> Mise en place de politiques de sécurité</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Protection des réseaux et serveurs</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Sauvegarde & plan de reprise (PRA)</li>
                  <li className="flex gap-2"><CheckCircle size={18}/> Surveillance des risques</li>
                </ul>
              </div>
              
              {/* Administration */}
<div className="bg-white shadow-xl p-8 rounded-xl border-l-4 border-red-600">

  <Server className="text-red-600 mb-4" size={40} />

  <h3 className="text-xl font-bold mb-4">
    Administration & Supervision
  </h3>

  <ul className="space-y-3 text-gray-700">

    <li className="flex gap-2">
      <CheckCircle size={18}/>
      Supervision 24/7
    </li>

    <li className="flex gap-2">
      <CheckCircle size={18}/>
      Maintenance préventive et corrective
    </li>

    <li className="flex gap-2">
      <CheckCircle size={18}/>
      Gestion des mises à jour
    </li>

    <li className="flex gap-2">
      <CheckCircle size={18}/>
      Support technique dédié
    </li>

  </ul>

</div>
            </div>

          </div>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default CloudInfrastructure;