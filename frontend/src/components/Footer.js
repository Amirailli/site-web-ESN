import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">

        {/* Colonnes */}
        <div className="grid md:grid-cols-3 gap-16 justify-items-center text-center md:text-left">

          {/* Colonne 1 */}
          <div className="max-w-sm">
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

            <p className="text-gray-400 mt-4">
              Expert en transformation digitale, Cevital ESN accompagne les entreprises
              dans l'intégration de solutions ERP, Cloud et Cybersécurité.
            </p>
          </div>

          {/* Colonne 2 */}
          <div className="max-w-sm">
            <h4 className="text-white font-bold mb-6">Nos Services</h4>
            <ul className="space-y-2">
              {[
                "Intégration ERP",
                "Cloud & Infrastructure",
                "Sécurité Informatique",
                "Support IT 24/7",
                "Audit & Conseil"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 */}
          <div className="max-w-md">
            <h4 className="text-white font-bold mb-6">Contact</h4>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-white mt-1 shrink-0" />
                <span className="text-gray-400">Alger, Algérie</span>
              </li>

              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-white shrink-0" />
                <span className="text-gray-400 whitespace-nowrap">
                  +213 555 12 34 56
                </span>
              </li>

              <li className="flex items-center gap-4">
                <FaEnvelope className="text-white shrink-0" />
                <span className="text-gray-400 whitespace-nowrap">
                  contact@esn-company.com
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bas Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2026 Cevital ESN. Tous droits réservés.
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
