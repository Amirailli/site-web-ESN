import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, Shield, Cloud, Settings, Users, CheckCircle, ArrowRight, Activity, Award 
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const Accueil = ({ setCurrentPage }) => {
  const expertises = [
    {
      title: "Intégration ERP",
      desc: "Déploiement et personnalisation de solutions SAP, Oracle et Odoo pour optimiser vos flux.",
      icon: <Settings className="text-blue-500" size={32} />,
      link: "#"
    },
    {
      title: "Cloud & Infrastructure",
      desc: "Migration, virtualisation et gestion de cloud hybride pour une agilité maximale.",
      icon: <Cloud className="text-blue-500" size={32} />,
      link: "#"
    },
    {
      title: "Cybersécurité",
      desc: "Protection de vos actifs numériques et mise en conformité avec les standards internationaux.",
      icon: <Shield className="text-blue-500" size={32} />,
      link: "#"
    }
  ];
  
  const [activeSection, setActiveSection] = React.useState("Accueil");

  const stats = [
    { label: "Années d'expérience", value: "+10", icon: <Award size={24} /> },
    { label: "Projets réalisés", value: "+100", icon: <Activity size={24} /> },
    { label: "Experts dédiés", value: "+50", icon: <Users size={24} /> },
    { label: "Satisfaction client", value: "99%", icon: <CheckCircle size={24} /> }
  ];
  React.useEffect(() => {
   const handleScroll = () => {
    const aproposSection = document.getElementById("apropos");

    if (!aproposSection) return;

    const sectionTop = aproposSection.offsetTop;
    const sectionHeight = aproposSection.offsetHeight;
    const scrollPosition = window.scrollY + 150;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      setActiveSection("À propos");
    } else {
      setActiveSection("Accueil");
    }
   };

   window.addEventListener("scroll", handleScroll);
   return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="overflow-x-hidden bg-gray-900 text-white">

      <Header activeSection={activeSection} />

      {/* Hero Section - Première image */}
      <section id="accueil" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1642775196125-38a9eb496568?q=80&w=1920"
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-gray-900/70" />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-2xl md:text-3xl font-normal text-blue-400 mt-4 block">
                  Intégrateur de solutions ERP, Cloud & Sécurité pour la transformation digitale
                </span>
              </h1>

              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Cevital ESN accompagne les entreprises dans l'optimisation de leurs systèmes
                d'information avec des technologies de pointe et une expertise métier reconnue.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => setCurrentPage("contact")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold flex items-center transition-all shadow-lg"
                >
                  Demander un devis
                </button>

                <button
                  onClick={() => setCurrentPage("services")}
                  className="bg-transparent border border-gray-600 hover:border-blue-500 text-white px-8 py-3 rounded-full font-bold flex items-center transition-all"
                >
                  Nos services
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Qui sommes-nous */}
      <section
        id="apropos"
        className="py-20 bg-gray-900"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            QUI SOMMES-NOUS ?
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-400 mb-6">
            Cevital ESN : Votre partenaire numérique
          </h3>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Cevital ESN est spécialisée dans l'intégration ERP, le cloud
            et la cybersécurité pour les entreprises industrielles.
          </p>

          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center text-blue-500 font-bold hover:text-blue-400"
            >
              Expertise ERP & Cloud
              <ChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </section>

   
 
      {/* Section avec liste - Troisième image */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Navigation latérale */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <div className="flex items-center space-x-2">
                 <img
                   src={require("../components/figma/logo.png")}
                   alt="Logo Cevital ESN"
                   className="w-8 h-8"
                 />
                 <span className="font-bold text-xl tracking-tight text-white">
                   CEVITAL ESN
                 </span>
                </div>
                <nav className="space-y-4">
                  <br></br>
                  {["Accueil", "À propos", "Services", "Projets", "Partenaires", "Blog", "Contact"].map((item, idx) => (
                    <a 
                      key={idx} 
                      href="#"
                      className="block text-gray-400 hover:text-white transition-colors py-1"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            
            {/* Contenu principal */}
            <div className="lg:w-3/4">
              <h2 className="text-2xl font-bold text-white mb-8">numérique de confiance</h2>
              
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Cevital ESN est spécialisée dans l'intégration de solutions ERP, l'infrastructure cloud et la cybersécurité pour les entreprises industrielles et de services. Nous transformons vos défis technologiques en opportunités de croissance durable.
              </p>
              
              <div className="space-y-6 mb-12">
                {[
                  "Expertise pluridisciplinaire ERP & Cloud",
                  "Approche orientée résultats métier",
                  "Solutions sécurisées et évolutives"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></div>
                    <span className="text-white text-lg">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-500 inline-flex items-center px-6 py-4 rounded-lg">
                <span className="text-3xl font-bold mr-3">+10</span>
                <div>
                  <div className="text-sm">Ans d'Expertise</div>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="#"
                  className="inline-flex items-center text-blue-500 font-bold hover:text-blue-400 transition-colors"
                >
                  En savoir plus sur notre histoire
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Services - Quatrième image */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          
          <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Des solutions sur mesure pour votre SI
            </h2>
            <p className="text-gray-300 text-lg">
              Nous couvrons l'ensemble des besoins numériques critiques pour assurer la continuité et la performance de votre activité.
            </p>
          </div>
  
          </div>
            {/* Services */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
              {expertises.map((item, idx) => (
                <div key={idx} className="bg-gray-800 p-8 rounded-xl">
                  <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                  <p className="text-gray-300 mb-6">{item.desc}</p>
                  <a 
                    href={item.link}
                    className="text-blue-500 font-bold inline-flex items-center hover:text-blue-400 transition-colors"
                  >
                    Détails du service
                    <ChevronRight className="ml-1" size={18} />
                  </a>
                </div>
              ))}
            </div>
          
        </div>
      </section>

      {/* Section Statistiques - Cinqième image */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
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

      {/* Section CTA - Sixième image */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              Contactez nos experts dès aujourd'hui pour une analyse gratuite de vos besoins et découvrez comment nous pouvons propulser votre croissance.
            </p>
            <button 
              onClick={() => setCurrentPage("contact")}
              className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg inline-flex items-center"
            >
              Parlons de votre projet digital
              <ArrowRight className="ml-3" />
            </button>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};