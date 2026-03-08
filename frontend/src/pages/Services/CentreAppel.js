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

const CenterAppel = () => {
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
                Centre d'Appel & Services BPO
              </h1>

              <p className="text-xl text-red-100 max-w-3xl mx-auto">
                Une plateforme multicanale dédiée à l'externalisation
                de la relation client et à l'optimisation
                de la performance commerciale.
              </p>

            </motion.div>

          </div>
        </section>


        {/* INTRO */}
        <section className="py-20 bg-gray-200">
          <div className="container mx-auto px-6 max-w-5xl">

            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Une plateforme orientée performance et qualité de service
            </h2>

            <p className="text-gray-700 text-lg mb-6">
              Notre centre d'appel constitue une structure opérationnelle
              dédiée à la gestion externalisée de la relation client
              et des processus métiers à forte volumétrie.
            </p>

            <p className="text-gray-700 text-lg mb-6">
              Conçu selon des standards professionnels stricts,
              notre dispositif repose sur une infrastructure
              technologique sécurisée, des procédures qualité
              formalisées et des équipes formées aux meilleures
              pratiques de gestion de l'expérience client.
            </p>

            <p className="text-gray-700 text-lg">
              Nous accompagnons les entreprises dans l'optimisation
              de leurs interactions clients et l'amélioration continue
              de leurs indicateurs de performance.
            </p>

          </div>
        </section>


        {/* ENGAGEMENT */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl text-center">

            <h2 className="text-3xl font-bold mb-6">
              Notre Engagement
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Nous offrons un environnement professionnel structuré,
              sécurisé et évolutif garantissant :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-10 text-left">

              <div className="bg-gray-200 shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition">
                <CheckCircle className="text-red-600 mt-1"/>
                <span>Qualité de service élevée</span>
              </div>

              <div className="bg-gray-200 shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition">
                <CheckCircle className="text-red-600 mt-1"/>
                <span>Réduction des coûts opérationnels</span>
              </div>

              <div className="bg-gray-200 shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition">
                <CheckCircle className="text-red-600 mt-1"/>
                <span>Flexibilité et scalabilité</span>
              </div>

              <div className="bg-gray-200 shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition">
                <CheckCircle className="text-red-600 mt-1"/>
                <span>Amélioration de l'expérience client</span>
              </div>

            </div>

            <p className="text-gray-700 mt-10">
              Notre centre d'appel constitue un levier stratégique
              de performance commerciale et relationnelle actif
              dans le domaine depuis 2011.
            </p>

          </div>
        </section>


        {/* SERVICES */}
        <section className="py-24 bg-gray-200">

          <div className="container mx-auto px-6">

            <h2 className="text-3xl font-bold text-center mb-16">
               Nos Services
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              {/* Inbound */}
              <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

                <Phone className="text-red-600 mb-4" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  Services Inbound
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Service client & support technique
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Assistance commerciale
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Gestion des réclamations
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Prise de commandes et suivi
                  </li>

                </ul>

              </div>


              {/* Outbound */}
              <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

                <PhoneOutgoing className="text-red-600 mb-4" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  Services Outbound
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Téléprospection et génération de leads
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Enquêtes de satisfaction
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Relance commerciale
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Fidélisation client
                  </li>

                </ul>

              </div>


              {/* Multicanal */}
              <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

                <MessageCircle className="text-red-600 mb-4" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  Gestion Multicanale
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Téléphonie IP (VoIP)
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Emailing structuré
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Chat en ligne
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Réseaux sociaux
                  </li>

                </ul>

              </div>


              {/* Infrastructure */}
              <div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

                <Server className="text-red-600 mb-4" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  Infrastructure & Technologies
                </h3>

                <ul className="space-y-3 text-gray-700">

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Téléphonie IP haute disponibilité
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    CRM intégré
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Monitoring en temps réel
                  </li>

                  <li className="flex gap-2">
                    <CheckCircle size={18}/>
                    Archivage des appels
                  </li>

                </ul>

              </div>

              {/* Pilotage & Qualité */}
<div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

  <BarChart className="text-red-600 mb-4" size={40} />

  <h3 className="text-xl font-bold mb-4">
    Pilotage & Qualité
  </h3>

  <ul className="space-y-3 text-gray-700">

    <li className="flex gap-2">
      <CheckCircle size={18}/>
      Définition des SLA et indicateurs de performance (KPI)
    </li>

    <li className="flex gap-2">
      <CheckCircle size={18}/>
      Contrôle qualité et écoute des appels
    </li>

    <li className="flex gap-2">
      <CheckCircle size={18}/>
      Reporting périodique détaillé
    </li>

    <li className="flex gap-2">
      <CheckCircle size={18}/>
      Formation continue et évaluation des téléopérateurs
    </li>

  </ul>

</div>
            
            {/* BPO */}
<div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

  <Headphones className="text-red-600 mb-4" size={40} />

  <h3 className="text-xl font-bold mb-4">
    Externalisation Back-Office (BPO)
  </h3>

  <ul className="space-y-3 text-gray-700">

    <li className="flex gap-2">
      <CheckCircle size={18}/>
      Traitement et saisie de données
    </li>

    <li className="flex gap-2">
      <CheckCircle size={18}/>
      Gestion documentaire
    </li>

    <li className="flex gap-2">
      <CheckCircle size={18}/>
      Validation administrative
    </li>

    <li className="flex gap-2">
      <CheckCircle size={18}/>
      Support opérationnel
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

export default CenterAppel;