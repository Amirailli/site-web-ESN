import React, { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ChevronRight, Shield, Cloud, Settings, Users, ArrowRight 
} from "lucide-react";
import Header from "../components/Head";
import Footer from "../components/Footer";
import { Link, useLocation } from "react-router-dom";
import QuoteModal from "./QuoteModal";
import Brandt from "../components/figma/Brandt.png";
import Cevital from "../components/figma/Cevital.png";
import MFG from "../components/figma/MFG.png";
import numilog from "../components/figma/numilog.png";
import samha from "../components/figma/samha.png";
// import accueilimage from "../components/figma/imageaccueil.png";
import sap from "../components/figma/SAP.png";
import cloud from "../components/figma/cloud.png";
import security from "../components/figma/cyber.png";
import appel from "../components/figma/appel.png";
import a from "../components/figma/a.png";
import iris from "../components/figma/iris.png";

// ─── Brand tokens ────────────────────────────────────────────────────────────
const brand = {
  red:       "#C0392B",   // primary red  (from logo)
  redHover:  "#A93226",   // darkened red for hover states
  gray:      "#6D6E71",   // medium gray  (from logo)
  grayLight: "#F2F2F2",   // background / surface gray
  grayMid:   "#D1D1D1",   // borders
  white:     "#FFFFFF",
  textDark:  "#2C2C2C",
};
// ─────────────────────────────────────────────────────────────────────────────

export const Accueil = ({ currentPage, setCurrentPage, onOpenQuoteModal }) => {
  const expertises = [
    {
      title: "Intégration SAP",
      desc: "Déploiement et personnalisation de solutions SAP.",
      icon: <Settings color={brand.red} size={32} />,
      link: "/Services/IntegrationSAP",
      bg: sap
    },
    {
      title: "Cloud & Infrastructure",
      desc: "Migration et gestion de cloud hybride.",
      icon: <Cloud color={brand.red} size={32} />,
      link: "/Services/CloudInfrastructure",
      bg: cloud
    },
    {
      title: "Cybersécurité",
      desc: "Protection et conformité aux standards internationaux.",
      icon: <Shield color={brand.red} size={32} />,
      link: "/Services/CyberSecurity",
      bg: security
    },
    {
      title: "Centre d'appel",
      desc: "Service client disponible 24/7 pour accompagner vos équipes et garantir une assistance continue.",
      icon: <Users color={brand.red} size={32} />,
      link: "/Services/CentreAppel",
      bg: appel
    }
  ];

  const [activeSection, setActiveSection] = React.useState("Accueil");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const location = useLocation();

  const stats = [
    { label: "Années d'expérience", value: "+10" },
    { label: "Projets réalisés",     value: "+100" },
    { label: "Experts dédiés",       value: "+50" },
    { label: "Satisfaction client",  value: "99%" }
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Mettre à jour la section active lors du défilement
  useEffect(() => {
    const handleScroll = () => {
      // Récupérer toutes les sections avec leurs positions
      const sections = [
        { id: 'accueil', name: 'Accueil' },
        { id: 'apropos', name: 'À propos' },
        { id: 'services', name: 'Services' },
        { id: 'references', name: 'Références pro' },
        { id: 'contact', name: 'Contact' }
      ];
      
      let currentSection = "Accueil";
      
      // Parcourir toutes les sections pour trouver celle qui est active
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Une section est considérée comme active si son haut est au-dessus du milieu de l'écran
          // et son bas est en dessous du haut de l'écran
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section.name;
            break;
          }
        }
      }
      
      // Vérification spéciale pour le footer quand on est tout en bas
      const footer = document.getElementById('contact');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        // Si le footer est visible et qu'on est proche du bas de la page
        if (footerRect.top <= window.innerHeight && footerRect.bottom >= 0) {
          // Vérifier si on est vraiment en bas de page
          const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100;
          if (isAtBottom || footerRect.top <= window.innerHeight / 2) {
            currentSection = "Contact";
          }
        }
      }
      
      // Mettre à jour la section active si elle a changé
      if (activeSection !== currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Appel initial
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Mettre à jour la section active lors du changement de hash dans l'URL
  useEffect(() => {
    if (location.hash) {
      const section = location.hash.replace('#', '');
      const sectionMap = {
        'accueil': 'Accueil',
        'apropos': 'À propos',
        'services': 'Services',
        'references': 'Références pro',
        'contact': 'Contact'
      };
      
      if (sectionMap[section]) {
        setActiveSection(sectionMap[section]);
        // Faire défiler jusqu'à la section
        setTimeout(() => {
          const element = document.getElementById(section);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        setActiveSection("Accueil");
      }
    } else if (location.pathname === "/") {
      setActiveSection("Accueil");
    }
  }, [location]);

  return (
    <div className="overflow-x-hidden" style={{ backgroundColor: brand.white, color: brand.textDark }}>

      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section
        id="accueil"
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{ backgroundColor: brand.gray }}
      >
        <div className="absolute inset-0 z-0">
          <motion.img
            src={a}
            alt="Technology Background"
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, rgba(44,44,44,0.82), rgba(192,57,43,0.72))`
            }}
          />
        </div>

        <div className="w-full pl-12 md:pl-24 pr-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span
                  className="text-2xl md:text-3xl font-normal mt-4 block"
                  style={{ color: brand.red }}
                >
                  Transformer la complexité en avantage concurrentiel.
                  <br /><br />
                </span>
              </h1>

              <p className="text-lg mb-5 leading-relaxed" style={{ color: brand.white }}>
                Intégrateur de solutions ERP, Cloud & Sécurité pour la transformation digitale.
                Keep Contact accompagne les entreprises dans l'optimisation de leurs systèmes
                d'information grâce à des technologies de pointe et à une expertise métier reconnue.
                <br /><br />
                Nous accompagnons les entreprises dans la mise en place de solutions métiers performantes,
                adaptées à leurs enjeux stratégiques et opérationnels.
                <br /><br />
                De l'optimisation des processus à l'intégration SAP, nous concevons des systèmes fiables,
                évolutifs et orientés résultats.
                <br /><br />
                <span className="text-xl font-bold" style={{ color: brand.white }}>
                  Prêt à transformer votre entreprise ?
                </span>
              </p>

              <div className="flex flex-wrap gap-4 pb-7">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="px-8 py-3 rounded-full font-bold flex items-center transition-all shadow-lg"
                  style={{ backgroundColor: brand.red, color: brand.white }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = brand.redHover}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = brand.red}
                >
                  Contactez-nous
                  <ChevronRight className="ml-2" />
                </button>

                <button
                  onClick={() => {
                    setCurrentPage("services");
                    const section = document.getElementById("services");
                    if (section) section.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-3 rounded-full font-bold flex items-center transition-all"
                  style={{ background: "transparent", border: `1px solid ${brand.red}`, color: brand.white }}
                >
                  Nos services
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── À propos ─────────────────────────────────────────────────────── */}
      <div style={{ borderTop: `1px solid ${brand.grayMid}` }} />
      <section id="apropos" className="py-24 " style={{ backgroundColor: brand.grayMid }}>
        <div className="container mx-auto px-6">
          <h2
            className="text-2xl font-bold mb-4 tracking-wide text-center"
            style={{ color: brand.textDark }}
          >
            QUI SOMMES-NOUS ?
          </h2>

          <h3
            className="text-3xl md:text-4xl font-bold mb-7 text-center"
            style={{ color: brand.red }}
          >
            Keep Contact : Votre partenaire numérique
          </h3>

          <p className="text-lg leading-relaxed" style={{ color: brand.gray }}>
            Spécialisés dans l'intégration SAP, le cloud & l'infrastructure, les centres d'appel et
            la cybersécurité,<br />
            notre mission est de vous accompagner dans votre transformation digitale et l'optimisation
            de vos performances opérationnelles.<br />
            Grâce à une expertise combinée en technologies de l'information et en gestion de centres
            d'appel, nous vous proposons des solutions intégrées adaptées, qui répondent à vos enjeux
            stratégiques et opérationnels.
            </p>
            <br /><br />
            <span className="text-xl font-bold " style={{ color: brand.textDark }}>Historique </span>
            <br />
            <p className="text-lg leading-relaxed pt-2" style={{ color: brand.gray }}>
            Keep Contact, filiale du groupe Cevital fondé en 2011, était un centre d'appel ayant pour
            mission d'assurer divers services dédiés aux professionnels de différents secteurs d'activité,
            dans le strict respect des conditions et exigences de sa clientèle.
           </p>
           <br></br>
            <br></br>
            <span className="text-xl font-bold text-gray-800 mb-2 block text-center md:text-left">
  Nos valeurs
</span>

<div className="flex flex-col md:flex-row items-center gap-8 mt-6">

  {/* Image */}
  <div className="w-full md:w-1/3 flex justify-center">
    <img 
      src={iris} 
      alt="Nos valeurs IRIS" 
      className="w-56 sm:w-72 md:w-full object-contain"
    />
  </div>

  {/* Texte */}
  <div className="w-full md:w-2/3">
    <p 
      className="text-base md:text-lg leading-relaxed text-center md:text-left"
      style={{ color: brand.gray }}
    >
     Notre capacité à faire face aux défis présents et futurs dépend non seulement de notre efficacité, 
      voire maîtrise technique et économique, mais également de notre détermination à traduire nos valeurs
      en réalité apparente et effective, à travers le comportement individuel et collectif de nos ressources
      humaines, notamment dans l'exercice de nos métiers et nos relations avec nos collaborateurs, partenaires
      et clients.
    </p>
  </div>

</div>

<h3 className="text-lg text-gray-800 mt-10 mb-6 text-center md:text-left">
  Nos Quatre Règles d'or
</h3>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

  {/* Intégrité */}
  <div 
    className="bg-white p-6 rounded-xl shadow-md border-l-4 hover:shadow-lg transition"
    style={{ borderColor: brand.redHover }}
  >
    <h4 
      className="text-xl font-bold mb-3"
      style={{ color: brand.redHover }}
    >
      Intégrité
    </h4>
    <p className="text-gray-600">
      C'est le maître mot de nos valeurs. L’intégrité permet de construire une société sur du roc. 
        Notre éthique professionnelle est irréprochable : nous rejetons toute forme de corruption 
        et agissons avec une haute rigueur intellectuelle et morale.
    </p>
  </div>

  {/* Respect */}
  <div 
    className="bg-white p-6 rounded-xl shadow-md border-l-4 hover:shadow-lg transition"
    style={{ borderColor: brand.redHover }}
  >
    <h4 
      className="text-xl font-bold mb-3"
      style={{ color: brand.redHover }}
    >
      Respect
    </h4>
    <p className="text-gray-600">
      L’action efficace s’appuie sur le respect des personnes, des règles et de l’environnement. 
        Il se manifeste entre collaborateurs, indépendamment de la hiérarchie, ainsi qu’envers nos 
        clients et partenaires.
    </p>
  </div>

  {/* Initiative */}
  <div 
    className="bg-white p-6 rounded-xl shadow-md border-l-4 hover:shadow-lg transition"
    style={{ borderColor: brand.gray }}
  >
    <h4 
      className="text-xl font-bold mb-3"
      style={{ color: brand.gray }}
    >
      Initiative
    </h4>
    <p className="text-gray-600">
     Dans un environnement en constante évolution, nous favorisons la veille proactive, 
        l’innovation et l’initiative individuelle et collective pour améliorer en continu 
        notre fonctionnement.
    </p>
  </div>

  {/* Solidarité */}
  <div 
    className="bg-white p-6 rounded-xl shadow-md border-l-4 hover:shadow-lg transition"
    style={{ borderColor: brand.redHover }}
  >
    <h4 
      className="text-xl font-bold mb-3"
      style={{ color: brand.redHover }}
    >
      Solidarité
    </h4>
    <p className="text-gray-600">
      Nous valorisons l'esprit d'équipe, la réussite collective et la synergie. 
        Être solidaires entre nous et avec notre communauté est essentiel pour atteindre 
        nos objectifs communs.
    </p>
  </div>

</div>
         
        </div>
       
      </section>

      {/* ── Services ─────────────────────────────────────────────────────── */}
<section id="services" className="py-20 w-full" style={{ backgroundColor: brand.grayLight }}>
  <div className="w-full px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: brand.textDark }}>
        Des solutions sur mesure
      </h2>
      <p className="text-lg" style={{ color: brand.gray }}>
        Nous couvrons l'ensemble des besoins numériques critiques.
      </p>
    </div>

    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {expertises.map((item, idx) => (
        <motion.div key={idx} variants={cardVariants}>
          <Link to={item.link} className="block h-full no-underline">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="hover:shadow-2xl transition-all rounded-2xl flex flex-col overflow-hidden cursor-pointer h-full"
              style={{
                backgroundColor: brand.grayMid,
                border: `1px solid ${brand.grayMid}`
              }}
            >
              <div className="h-40 w-full flex-shrink-0">
                <img src={item.bg} alt={item.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-6 pl-2 flex flex-col flex-1">
                <div className="flex items-start space-x-2 pb-2">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold mb-4" style={{ color: brand.textDark }}>
                    {item.title}
                  </h4>
                </div>
                <p className="mb-3 ml-3" style={{ color: brand.gray }}>{item.desc}</p>
                <span
                  className="pl-3 mt-auto font-bold inline-flex items-center"
                  style={{ color: brand.red }}
                >
                  Détails du service
                  <ChevronRight className="ml-1" size={18} />
                </span>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

      {/* ── Statistiques ─────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: brand.red, color: brand.grayLight }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div style={{ color: "rgba(255,255,255,0.9)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ────────────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{ backgroundColor: brand.grayMid, borderTop: `1px solid ${brand.grayMid}` }}
      >
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: brand.textDark }}>
            Prêt à transformer votre entreprise ?
          </h2>

          <p className="text-lg mb-12" style={{ color: brand.gray }}>
            Contactez nos experts dès aujourd'hui pour une analyse gratuite de vos besoins et
            découvrez comment nous pouvons propulser votre croissance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "SAP",
                items: [
                  "Consultants certifiés et expérimentés",
                  "Approche orientée performance",
                  "Respect des délais et des budgets",
                  "Sécurité et confidentialité des données",
                  "Support réactif et personnalisé",
                ]
              },
              {
                title: "Cloud & Infrastructure",
                items: [
                  "Expertise technique confirmée",
                  "Approche orientée performance et sécurité",
                  "Solutions adaptées à vos besoins métiers",
                  "Respect des normes et standards internationaux",
                  "Accompagnement personnalisé",
                ]
              },
              {
                title: "CyberSecurity",
                items: [
                  "Plan d'action adapté et priorisé",
                  "Protection des applications métiers et des données critiques",
                  "Limitation de l'impact opérationnel et financier en cas d'attaque",
                  "Structuration de la politique de sécurité",
                ]
              },
              {
                title: "Centre d'Appel",
                items: [
                  "Traitement structuré des demandes avec respect des SLA",
                  "Intégration CRM pour traçabilité et vision unifiée",
                  "Pilotage via reporting et tableaux de bord analytiques",
                  "Supervision technique continue pour performance et sécurité",
                  "Externalisation optimisée pour réduire les coûts fixes",
                ]
              },
            ].map(({ title, items }) => (
              <div
                key={title}
                className="shadow-lg p-8 rounded-xl text-left"
                style={{
                  backgroundColor: brand.grayLight,
                  borderLeft: `4px solid ${brand.red}`
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: brand.red }}>{title}</h3>
                <ul className="list-disc list-inside space-y-2" style={{ color: brand.gray }}>
                  {items.map(item => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="mt-12 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-md inline-flex items-center"
            style={{ backgroundColor: brand.red, color: brand.white }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = brand.redHover}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = brand.red}
          >
            Parlons de votre projet
            <ArrowRight className="ml-3" />
          </button>
        </div>
      </section>

      {/* ── Références ───────────────────────────────────────────────────── */}
      <section id="references" className="py-24" style={{ backgroundColor: brand.grayLight }}>
        <div className="container mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: brand.textDark }}
          >
            Nos références professionnelles
          </h2>
          <p className="text-lg mb-10" style={{ color: brand.gray }}>
            Ils nous font confiance
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12">
            <img src={MFG}    alt="MFG Mediterranean Float Glass" className="w-32 h-20 object-contain" />
            <img src={Cevital} alt="Cevital"                      className="w-32 h-20 object-contain" />
            <img src={samha}  alt="Samha Home Appliance"          className="w-32 h-20 object-contain" />
            <img src={numilog} alt="Numilog"                      className="w-32 h-20 object-contain" />
            <img src={Brandt} alt="Brandt"                        className="w-32 h-20 object-contain" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};