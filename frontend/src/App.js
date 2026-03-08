import React , { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Accueil } from "./pages/Accueil";
import IntegrationSAP from "./pages/Services/IntegrationSAP";
import CentreAppel from "./pages/Services/CentreAppel";
import CloudInfrastructure from "./pages/Services/CloudInfrastructure";
import CyberSecurity from "./pages/Services/CyberSecurity";

function App() {
  const [currentPage, setCurrentPage] = useState("accueil");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Accueil currentPage={currentPage} setCurrentPage={setCurrentPage} />}
        />
        <Route path="/Services/IntegrationSAP" element={<IntegrationSAP />} />
        <Route path="/Services/CentreAppel" element={<CentreAppel />} />
        <Route path="/Services/CloudInfrastructure" element={<CloudInfrastructure />} />
        <Route path="/Services/CyberSecurity" element={<CyberSecurity />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;