import React , { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Accueil } from "./pages/Accueil";
import IntegrationSAP from "./pages/Services/IntegrationSAP";
import CentreAppel from "./pages/Services/CentreAppel";
import Cloud from "./pages/Services/Cloud";
import Cybersecurite from "./pages/Services/Cybersecurite";

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
        <Route path="/Services/Cloud" element={<Cloud />} />
        <Route path="/Services/Cybersecurite" element={<Cybersecurite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;