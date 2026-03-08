import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo1 from "./figma/logo1.png";
import logo2 from "./figma/logo2.png";

const Head = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Accueil", id: "accueil", path: "/#accueil" },
    { name: "À propos", id: "apropos", path: "/#apropos" },
    { name: "Services", id: "services", path: "/#services" }, // id="services"
    { name: "Références pro", id: "references", path: "/#references" },
    { name: "Blog", id: "blog", path: "/#blog" },
    { name: "Contact", id: "contact", path: "/#contact" },
  ];

  const handleClick = (item) => {
    navigate(item.path);
    setMobileMenuOpen(false);
  };

  // 🔹 Calcul dynamique du bouton actif
  const activeSection = (() => {
    // Page service
    if (location.pathname.startsWith("/services")) return "services";

    // Page d'accueil
    if (location.pathname === "/") {
      return location.hash.replace("#", "") || "accueil";
    }

    // Autres pages
    return "";
  })();

  // 🔹 Scroll smooth si hash présent
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const section = document.getElementById(location.hash.replace("#", ""));
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <header className="fixed w-full z-50 bg-red-600 h-16 shadow-lg flex items-center">
      <div className="w-full flex items-center justify-between">
        {/* Logo gauche */}
        <div className="flex items-center gap-3 pl-20">
          <img src={logo1} alt="Logo" className="h-10 w-auto" />
          <span className="font-bold text-2xl text-white">Keep Contact</span>
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex items-center space-x-8 ml-20">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(item)}
              className={`text-sm uppercase tracking-wide font-semibold transition-all duration-300 ${
                activeSection === item.id
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-white hover:text-gray-200"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Hamburger + logo droit */}
        <div className="flex items-center gap-4 pr-7">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
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
        <div className="absolute top-16 right-4 w-45 bg-red-600 rounded-xl shadow-xl flex flex-col items-start md:hidden space-y-4 py-4 px-5">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(item)}
              className={`inline-block text-sm uppercase tracking-wide font-semibold transition-all duration-300 ${
                activeSection === item.id
                  ? "text-white border-b-2 border-white pb-1"
                  : "text-white hover:text-gray-200"
              }`}
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