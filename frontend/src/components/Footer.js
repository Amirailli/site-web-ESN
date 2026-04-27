import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="contact" className="bg-red-700 py-16">
      <div className="container mx-auto px-6">

        {/* Colonnes */}
        <div className="grid md:grid-cols-3 gap-16 justify-items-center text-center md:text-left">

          {/* Colonne 1 */}
          <div className="max-w-sm">
            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <span className="font-bold text-xl tracking-tight text-white">
                Keep Contact
              </span>
            </div>

            <p className="text-white mt-4 opacity-90">
              Expert en transformation digitale, Keep Contact accompagne les entreprises
              dans l'intégration de solutions SAP, Cloud & Infrastructure, Cybersécurité
              et Centre d'Appel.
            </p>
          </div>

          {/* Colonne 2 */}
          <div className="max-w-sm">
            <h4 className="text-white font-bold mb-6 ">Nos Services</h4>
            <ul className="space-y-2 opacity-90">
              {[
                "Intégration SAP",
                "Cloud & Infrastructure",
                "Sécurité Informatique",
                "Support IT 24/7",
                "Audit & Conseil"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-white hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

         {/* Colonne 3 */}
<div className="max-w-md text-center md:text-left">
  <h4 className="text-white font-bold mb-6">Contact</h4>

  <ul className="space-y-5 opacity-90">

    <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 justify-center md:justify-start">
      <FaMapMarkerAlt className="text-white shrink-0" />
      <span className="text-white">Alger, Algérie</span>
    </li>

    <li className="flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center md:justify-start">
      <FaPhoneAlt className="text-white shrink-0" />
      <span className="text-white whitespace-nowrap">
        +213 555 12 34 56
      </span>
    </li>

    <li className="flex flex-col md:flex-row items-center gap-2 md:gap-4 justify-center md:justify-start">
      <FaEnvelope className="text-white shrink-0" />
      <span className="text-white whitespace-nowrap">
        contact@esn-company.com
      </span>
    </li>

  </ul>

  <h3 className="text-white font-bold mt-8 mb-4">Suivez-nous</h3>

  {/* Réseaux sociaux */}
  <div className="flex justify-center md:justify-start gap-4">

    <a 
      href="https://www.facebook.com/TON_PAGE"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-200 transition transform hover:scale-110"
    >
      <FaFacebook size={20} />
    </a>

    <a 
      href="https://www.instagram.com/TON_COMPTE"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-200 transition transform hover:scale-110"
    >
      <FaInstagram size={20} />
    </a>

    <a 
      href="https://www.linkedin.com/company/TON_COMPTE"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-200 transition transform hover:scale-110"
    >
      <FaLinkedin size={20} />
    </a>

  </div>
</div>

        </div>

        {/* Bas Footer */}
        <div className="border-t border-red-500 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-red-200   mb-4 md:mb-0">
            © Keep Contact. Tous droits réservés.
          </div>

          <div className="flex space-x-6">
            <Link to="/Mentionslegales" className="text-red-200 hover:text-white transition-colors">
  Mentions légales
</Link>

<Link to="/Confidentialite" className="text-red-200 hover:text-white transition-colors">
  Confidentialité
</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
