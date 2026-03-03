import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo1 from "./figma/logo1.png";
import logo2 from "./figma/logo2.png";

const Head = () => {
  const [activeSection, setActiveSection] = useState("accueil");
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Accueil", id: "accueil", path: "/" },
    { name: "À propos", id: "apropos", path: "/" },
    { name: "Services", id: "services", path: "/" },
    { name: "Réferences pro", id: "Réferences pro", path: "/" },
    // { name: "Partenaires", id: "partenaires", path: "/" },
    { name: "Blog", id: "blog", path: "/" },
    { name: "Contact", id: "contact", path: "/" },
  ];

  const handleClick = (item) => {
   setActiveSection(item.id); // ⚡ mettre à jour le soulignement
   if (item.path !== location.pathname) {
    navigate(item.path);
   } else {
    // Si on est déjà sur la page, scroller vers la section
    const section = document.getElementById(item.id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
   }
  };


  useEffect(() => {
   const path = location.pathname;

   const foundItem = menuItems.find((item) =>
    path === "/" ? item.id === "accueil" : path.includes(item.id)
   );

   if (foundItem) {
    setActiveSection(foundItem.id);
   }
  }, [location.pathname]);

  return (
    <header className="fixed w-full z-50 bg-red-600 h-16 shadow-lg flex items-center">
      {/* quand j'enleve le logo a droite alors je corrige ca ::::::::::::::::::::::::::::::::::::::: */}
      {/* <div className="container mx-auto flex items-center justify-between px-8"> */}
      <div className="w-full flex items-center justify-between">
         <div className="flex items-center gap-3 pl-20">
           <img 
              src={logo1} 
              alt="Keep Contact Logo" 
              className="h-10 w-auto"
           />
           <span className="font-bold text-2xl tracking-wide text-white">Keep Contact</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8  ml-20">
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
        <div className="flex items-center gap-3 pr-7">
           <img 
              src={logo2} 
              alt="Keep Contact Logo" 
              className="h-12 w-auto"
           /> 
        </div> 
 
      </div>
    </header>
  );
};

export default Head;