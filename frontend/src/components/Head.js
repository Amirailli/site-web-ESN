import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo1 from "./figma/logo1.png";
import logo2 from "./figma/logo2.png";

// ─── Brand tokens (same as Accueil) ──────────────────────────────────────────
const brand = {
  red:       "#C0392B",
  redHover:  "#A93226",
  gray:      "#6D6E71",
  grayLight: "#F2F2F2",
  grayMid:   "#D1D1D1",
  white:     "#FFFFFF",
  textDark:  "#2C2C2C",
};
// ─────────────────────────────────────────────────────────────────────────────

const Head = ({ activeSection: externalActiveSection, setActiveSection: externalSetActiveSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [internalActiveSection, setInternalActiveSection] = useState("Accueil");
  
  // Utiliser la section active du parent si elle est fournie, sinon utiliser l'état interne
  const activeSection = externalActiveSection || internalActiveSection;
  const setActiveSection = externalSetActiveSection || setInternalActiveSection;

  const menuItems = [
    { name: "Accueil",        id: "accueil",    path: "/#accueil" },
    { name: "À propos",       id: "apropos",    path: "/#apropos" },
    { name: "Services",       id: "services",   path: "/#services" },
    { name: "Références pro", id: "references", path: "/#references" },
    { name: "Blog", path: "/blog" },
    { name: "Contact",        id: "contact",    path: "/#contact" },
  ];

  const handleClick = (item) => {
  navigate(item.path);

  setMobileMenuOpen(false);

  if (item.name === "Blog") {
    setActiveSection("Blog");
  } else {
    setActiveSection(item.name);
  }
};

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const section = location.hash.replace("#", "");
      const menuItem = menuItems.find(item => item.id === section);
      if (menuItem) {
        setActiveSection(menuItem.name);
      }
    } else if (location.pathname === "/") {
      setActiveSection("Accueil");
    }
  }, [location, setActiveSection]);

  useEffect(() => {
   const handleScroll = () => {
    if (location.pathname !== "/") return;

    const sections = [
     { id: 'accueil', name: 'Accueil' },
     { id: 'apropos', name: 'À propos' },
     { id: 'services', name: 'Services' },
     { id: 'references', name: 'Références pro' },
     { id: 'contact', name: 'Contact' } // ✅ ajouté
    ];

    const scrollPosition = window.scrollY + 150;

    let current = "Accueil";

    for (const section of sections) {
     const el = document.getElementById(section.id);
     if (el) {
      const { offsetTop, offsetHeight } = el;

      if (
        scrollPosition >= offsetTop &&
        scrollPosition < offsetTop + offsetHeight
      ) {
        current = section.name;
        break;
      }
     }
    }

    // ✅ Forcer Contact si on est en bas de page (footer)
    const isAtBottom =
     window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
 
    if (isAtBottom) {
     current = "Contact";
    }

    if (activeSection !== current) {
     setActiveSection(current);
    }
   };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname, activeSection, setActiveSection]);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const section = document.getElementById(location.hash.replace("#", ""));
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
  // ✅ Si on est dans une page service → activer "Services"
  if (location.pathname.startsWith("/Services")) {
    setActiveSection("Services");
    return;
  }

  // ✅ Sinon comportement normal (homepage)
  if (location.pathname === "/" && location.hash) {
    const section = location.hash.replace("#", "");
    const menuItem = menuItems.find(item => item.id === section);
    if (menuItem) {
      setActiveSection(menuItem.name);
    }
  } else if (location.pathname === "/") {
    setActiveSection("Accueil");
  }

}, [location]);
  return (
    <header
      className="fixed w-full z-50 h-16 shadow-lg flex items-center"
      style={{ backgroundColor: brand.red }}
    >
      <div className="w-full flex items-center justify-between">

        {/* Logo + nom */}
        <div className="flex items-center gap-3 pl-20">
          <img src={logo1} alt="Logo" className="h-10 w-auto" />
          <span
            className="font-bold text-2xl"
            style={{ color: brand.white }}
          >
            Keep Contact
          </span>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-8 ml-20">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(item)}
              className="text-sm uppercase tracking-wide font-semibold transition-all duration-300"
              style={
                activeSection === item.name
                  ? {
                      color: brand.white,
                      borderBottom: `2px solid ${brand.white}`,
                      paddingBottom: "4px",
                    }
                  : { color: brand.white }
              }
              onMouseEnter={e => {
                if (activeSection !== item.name)
                  e.currentTarget.style.color = brand.grayLight;
              }}
              onMouseLeave={e => {
                if (activeSection !== item.name)
                  e.currentTarget.style.color = brand.white;
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Hamburger + logo droit */}
        <div className="flex items-center gap-4 pr-7">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            style={{ color: brand.white }}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <img src={logo2} alt="Logo" className="h-12 w-auto" />
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div
          className="absolute top-16 right-4 w-45 rounded-xl shadow-xl flex flex-col items-start md:hidden space-y-4 py-4 px-5"
          style={{ backgroundColor: brand.redHover }}
        >
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(item)}
              className="inline-block text-sm uppercase tracking-wide font-semibold transition-all duration-300"
              style={
                activeSection === item.name
                  ? {
                      color: brand.white,
                      borderBottom: `2px solid ${brand.white}`,
                      paddingBottom: "4px",
                    }
                  : { color: brand.white }
              }
              onMouseEnter={e => {
                if (activeSection !== item.name)
                  e.currentTarget.style.color = brand.grayLight;
              }}
              onMouseLeave={e => {
                if (activeSection !== item.name)
                  e.currentTarget.style.color = brand.white;
              }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Head;