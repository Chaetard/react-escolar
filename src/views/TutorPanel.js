import React from "react";
import TutorNav from "../components/pages/TutorPanel/TutorNav";
import DatosAlumnoComponent from "../components/pages/TutorPanel/Alumno/DatosAlumnoComponent";

function TutorPanel() {
  return (
    <>
      <TutorNav />
      <br />
      <DatosAlumnoComponent />
    </>
  );
}

export default TutorPanel;
