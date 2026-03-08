import React from "react";
import { motion } from "framer-motion";
import {
Shield,
Lock,
Server,
Eye,
AlertTriangle,
CheckCircle
} from "lucide-react";

import Head from "../../components/Head";
import Footer from "../../components/Footer";

const CyberSecurity = () => {
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
Cybersécurité & Protection des Systèmes
</h1>

<p className="text-xl text-red-100 max-w-3xl mx-auto">
Sécuriser vos systèmes. Protéger vos données.
Garantir votre continuité d'activité.
</p>

</motion.div>

</div>
</section>


{/* INTRO */}
<section className="py-20 bg-gray-200">
<div className="container mx-auto px-6 max-w-5xl">

<h2 className="text-3xl font-bold mb-6 ">
Cybersécurité : un enjeu stratégique majeur
</h2>

<p className="text-gray-700 text-lg  mb-6">
Dans un environnement numérique marqué par la sophistication
croissante des cybermenaces, la cybersécurité constitue un enjeu
stratégique majeur pour les organisations.
</p>

<p className="text-gray-700 text-lg  mb-6">
Notre entreprise accompagne ses clients dans la conception,
le déploiement et l'exploitation de dispositifs de sécurité robustes
visant à protéger leurs systèmes d'information,
leurs données sensibles et leurs infrastructures critiques.
</p>

<p className="text-gray-700 text-lg ">
Notre approche repose sur une stratégie globale intégrant
prévention, détection, réponse et amélioration continue.
</p>

</div>
</section>


{/* ENGAGEMENT */}
<section className="py-20 bg-white">
<div className="container mx-auto px-6 max-w-4xl text-center">

<h2 className="text-3xl font-bold mb-6">
 Notre Engagement
</h2>

<p className="text-gray-700 text-lg mb-10">
Notre démarche s'inscrit dans une logique de sécurité globale
et proactive. Nous combinons expertise technique,
méthodologie rigoureuse et outils avancés pour garantir :
</p>

<div className="grid md:grid-cols-2 gap-6 text-left ">

<div className="bg-gray-200 shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition">
<CheckCircle className="text-red-600 mt-1"/>
<span> Confidentialité des données</span>
</div>

<div className="bg-gray-200 shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition">
<CheckCircle className="text-red-600 mt-1"/>
<span>Intégrité des systèmes</span>
</div>

<div className="bg-gray-200 shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition">
<CheckCircle className="text-red-600 mt-1"/>
<span>Disponibilité des services</span>
</div>

<div className="bg-gray-200 shadow-lg p-6 rounded-xl flex items-start space-x-3 hover:shadow-xl transition">
<CheckCircle className="text-red-600 mt-1"/>
<span>Résilience face aux menaces</span>
</div>

</div>

</div>
</section>


{/* EXPERTISES */}
<section className="py-24 bg-gray-200">

<div className="container mx-auto px-6">

<h2 className="text-3xl font-bold text-center mb-16">
 Nos expertises en cybersécurité
</h2>

<div className="grid md:grid-cols-2 gap-10">

{/* Audit */}
<div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

<AlertTriangle className="text-red-600 mb-4" size={40} />

<h3 className="text-xl font-bold mb-4">
Audit & Évaluation de Sécurité
</h3>

<ul className="space-y-3 text-gray-700">

<li className="flex gap-2">
<CheckCircle size={18}/>
Audit de sécurité des systèmes
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Analyse de vulnérabilités
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Tests d'intrusion (Pentest)
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Audit de conformité réglementaire
</li>

</ul>

</div>


{/* Infrastructure */}
<div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

<Server className="text-red-600 mb-4" size={40} />

<h3 className="text-xl font-bold mb-4">
Sécurité des Infrastructures & Réseaux
</h3>

<ul className="space-y-3 text-gray-700">

<li className="flex gap-2">
<CheckCircle size={18}/>
Pare-feu nouvelle génération (NGFW)
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Segmentation réseau
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
IDS / IPS
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
VPN et MFA
</li>

</ul>

</div>


{/* Applications */}
<div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

<Lock className="text-red-600 mb-4" size={40} />

<h3 className="text-xl font-bold mb-4">
Sécurité des Applications & Données
</h3>

<ul className="space-y-3 text-gray-700">

<li className="flex gap-2">
<CheckCircle size={18}/>
Sécurisation ERP et Cloud
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Chiffrement des données
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Gestion des identités (IAM)
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Protection OWASP
</li>

</ul>

</div>


{/* Supervision */}
<div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

<Eye className="text-red-600 mb-4" size={40} />

<h3 className="text-xl font-bold mb-4">
Supervision & Détection des Menaces
</h3>

<ul className="space-y-3 text-gray-700">

<li className="flex gap-2">
<CheckCircle size={18}/>
Monitoring sécurité en temps réel
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Analyse SIEM
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Détection d'anomalies
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Alertes et reporting sécurité
</li>

</ul>

</div>
{/* Gestion des incidents */}
<div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

<AlertTriangle className="text-red-600 mb-4" size={40} />

<h3 className="text-xl font-bold mb-4">
Gestion des Incidents & Continuité d'Activité
</h3>

<ul className="space-y-3 text-gray-700">

<li className="flex gap-2">
<CheckCircle size={18}/>
Plan de Réponse aux Incidents (PRI)
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Plan de Continuité d'Activité (PCA)
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Plan de Reprise d'Activité (PRA)
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Sauvegarde sécurisée des données
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Procédures de restauration
</li>

</ul>

</div>

{/* Gouvernance */}
<div className="bg-white shadow-lg hover:shadow-2xl transition duration-300 p-8 rounded-xl border-l-4 border-red-600">

<Shield className="text-red-600 mb-4" size={40} />

<h3 className="text-xl font-bold mb-4">
Gouvernance & Conformité
</h3>

<ul className="space-y-3 text-gray-700">

<li className="flex gap-2">
<CheckCircle size={18}/>
Élaboration de politiques et procédures internes
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Sensibilisation et formation des collaborateurs
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Gestion des risques cyber
</li>

<li className="flex gap-2">
<CheckCircle size={18}/>
Accompagnement à la conformité réglementaire
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

export default CyberSecurity;