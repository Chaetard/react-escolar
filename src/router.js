import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./views/Inicio";
import Tutor from "./views/Tutor";
import Maestro from "./views/Maestro";
import TutorPanel from "./views/TutorPanel";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        {/* <Route path="/iniciar-sesion" element={<Session />}  /> */}
        <Route path="/Tutor" element={<Tutor />} />
        <Route path="/Maestro" element={<Maestro />} />
        <Route path="/tutor-panel" element={<TutorPanel />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
