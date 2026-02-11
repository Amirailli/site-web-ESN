import React from "react";

const Header = ({ activeSection }) => {
  const menuItems = [
    { name: "Accueil", id: "Accueil" },
    { name: "À propos", id: "apropos" },
    { name: "Services", id: "services" },
    { name: "Projets", id: "projets" },
    { name: "Partenaires", id: "partenaires" },
    { name: "Blog", id: "blog" },
    { name: "Contact", id: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed w-full z-50 bg-gray-900 bg-opacity-95 backdrop-blur-sm py-4">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
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

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {menuItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => handleScroll(item.id)}
              className={`font-medium transition-colors ${
                activeSection === item.name
                  ? "text-blue-500"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
