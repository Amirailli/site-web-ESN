import React, { useState } from "react";
import { Accueil } from "./pages/Accueil";

function App() {
  const [currentPage, setCurrentPage] = useState("accueil");

  return (
    <div>
      <Accueil setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;