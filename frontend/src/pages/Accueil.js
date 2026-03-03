import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, Shield, Cloud, Settings, Users, CheckCircle, ArrowRight, Activity, Award 
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import Header from "../components/Head";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import QuoteModal from "./QuoteModal";
export const Accueil = ({ currentPage, setCurrentPage, onOpenQuoteModal }) => {
 const expertises = [
  {
    title: "Intégration SAP",
    desc: "Déploiement et personnalisation de solutions SAP.",
    icon: <Settings className="text-red-600" size={32} />,
    link: "/services/integration-erp"
  },
  {
    title: "Cloud & Infrastructure",
    desc: "Migration et gestion de cloud hybride.",
    icon: <Cloud className="text-red-600" size={32} />,
    link: "/services/cloud"
  },
  {
    title: "Cybersécurité",
    desc: "Protection et conformité aux standards internationaux.",
    icon: <Shield className="text-red-600" size={32} />,
    link: "/services/cybersecurite"
  },
  {
    title: "Centre d'appel",
    desc: "Service client disponible 24/7 pour accompagner vos équipes et garantir une assistance continue.",
    icon: <Users className="text-red-600" size={32} />,
    link: "/services/centre-appel"
  }
];

  const [activeSection, setActiveSection] = React.useState("Accueil");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const stats = [
    { label: "Années d'expérience", value: "+10" },
    { label: "Projets réalisés", value: "+100" },
    { label: "Experts dédiés", value: "+50" },
    { label: "Satisfaction client", value: "99%" }
  ];

  const [showContactForm, setShowContactForm] = React.useState(false);

  return (
    <div className="overflow-x-hidden bg-white text-gray-900">

      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection} // 👈 on passe la fonction
      />
      
      {/* Modal formulaire rectangle */}
      <QuoteModal 
        isOpen={isQuoteModalOpen} 
        onClose={() => setIsQuoteModalOpen(false)} 
      />

      {/* Hero Section - Première image */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          {/* <ImageWithFallback
            src="https://images.unsplash.com/photo-1642775196125-38a9eb496568?q=80&w=1920"
            alt="Technology Background"
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-red-600/70" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-2xl md:text-3xl font-normal text-red-600 mt-4 block">
                  Transformer la complexité en avantage concurrentiel.
                  <br></br>
                  <br></br>
                  
                  
                </span>
              </h1>

              <p className="text-gray-800 text-lg mb-5 leading-relaxed">
                
                
                {/* Keep Contact Intégrateur de solutions ERP, Cloud & Sécurité pour la transformation digitale, accompagne les entreprises dans l'optimisation de leurs systèmes
                d'information avec des technologies de pointe et une expertise métier reconnue. */}
                Intégrateur de solutions ERP, Cloud & Sécurité pour la transformation digitale.
                Keep Contact accompagne les entreprises dans l'optimisation de leurs systèmes 
                d'information grâce à des technologies de pointe et à une expertise métier reconnue.
                <br></br>
                <br></br>
                Nous accompagnons les entreprises dans la mise en place de solutions métiers performantes, adaptées à 
                leurs enjeux stratégiques et opérationnels.
                <br></br>
                <br></br>
                De l'optimisation des processus à l'intégration SAP, nous concevons des systèmes fiables, 
                évolutifs et orientés résultats.
                <br></br>
                <br></br>
                <span className="text-xl font-bold text-gray-800 ">Prêt à transformer votre entreprise ?</span> 
              </p>

              <div className="flex flex-wrap gap-4 pb-7">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold flex items-center transition-all shadow-lg"
                >
                  Demander un devis
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => {
                    setCurrentPage("services"); // ⚡ mettre à jour l’état
                    const section = document.getElementById("services");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="bg-transparent border border-red-600 text-white px-8 py-3 rounded-full font-bold flex items-center transition-all"
                >
                  Nos services
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
      </section>

      {/* A PROPOS */}
      <div className="border-t border-gray-400  flex flex-col md:flex-row justify-between items-center"></div>
      <section id="apropos" className="py-24 bg-gray-200">
        <div className="container mx-auto px-6 ">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 tracking-wide text-center">
            QUI SOMMES-NOUS ?
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-red-600 mb-6 text-center">
            Keep Contact : Votre partenaire numérique
          </h3>

          {/* <p className="text-gray-700 text-lg max-w-3xl mx-auto"> */}
          <p className="text-gray-700 text-lg leading-relaxed">
            Spécialisés dans l'intégration SAP, cloud & infrastructure 
            , centre d'appel et la cybersécurité .
            <br></br>
            Notre mission est vous accompagnez dans votre transformation digitale 
            et l'optimisation de vos performances opérationnelles.
            <br></br>
            grâce a une expertise combinée en technologies de l'information et 
            en gestion de centres d'appel, nous vous proposons des solutions
            intégrées adaptées  qui répondent à vos enjeux stratégique et opérationnelles.
            <br></br>
            <br></br>
            <span className="text-xl font-bold text-gray-800 ">Historique </span>
            <br></br>
            Keep Contact, filiale du groupe Cevital fondé en 2011, fut le centre d'appel qui avait
            pour mission d'assurer différents services dédiés aux professionnels de différents secteur
            d'activités dans le strict respet des conditions et exigences de sa clientèle.
         
          </p>
        </div>
      </section>

      {/* SERVICES */}
      {/* <div className="border-t border-red-600  flex flex-col md:flex-row justify-between items-center"></div> */}
       <section  id="services" className="py-20 bg-white w-full">
        <div className="w-full px-8">

         <div className="text-center max-w-3xl mx-auto mb-16">
         <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Des solutions sur mesure
         </h2>
         <p className="text-gray-700 text-lg">
          Nous couvrons l'ensemble des besoins numériques critiques.
         </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {expertises.map((item, idx) => (
          <div 
          key={idx}
          className="bg-gray-200 hover:shadow-2xl transition-all p-8 rounded-2xl border border-gray-200 flex flex-col"
          >
           <div className="mb-4">{item.icon}</div>
           <h4 className="text-xl font-bold mb-4">{item.title}</h4>
           <p className="text-gray-600 mb-6">{item.desc}</p>
           <Link 
            to={item.link}
            className="mt-auto text-red-600 font-bold inline-flex items-center hover:text-red-500 transition-colors"
           >
            Détails du service
            <ChevronRight className="ml-1" size={18} />
           </Link>
          </div>
          ))}
         </div>

        </div>
       </section>



      {/* STATISTIQUES */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-gray-200 border-t border-gray-200">
        <div className="container mx-auto px-6 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Prêt à transformer votre entreprise ?
          </h2>

          <p className="text-gray-700 text-lg mb-10">
            Contactez nos experts pour une analyse gratuite.
          </p>

          <button 
            onClick={() => setCurrentPage("contact")}
            className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-md inline-flex items-center"
          >
            Parlons de votre projet
            <ArrowRight className="ml-3" />
          </button>
        </div>
      </section>

      <Footer />

    </div>
  );
};
