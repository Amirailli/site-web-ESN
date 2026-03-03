import React , { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Accueil } from "./pages/Accueil";
import IntegrationERP from "./pages/Services/IntegrationERP";
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
        <Route path="./pages/Services/Integration-erp" element={<IntegrationERP />} />
        <Route path="./pages/Services/Centre-appel" element={<CentreAppel />} />
        <Route path="./pages/Services/Cloud" element={<Cloud />} />
        <Route path="./pages/Services/Cybersecurite" element={<Cybersecurite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;