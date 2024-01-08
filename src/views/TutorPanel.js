import React from "react";
import TutorNav from "../components/pages/TutorPanel/TutorNav";
import DatosAlumnoComponent from "../components/pages/TutorPanel/Alumno/DatosAlumnoComponent";

function TutorPanel() {
  return (
    <>
      <div style={posicion}>
        <TutorNav />
      </div>

      <div>
        <div >
          <DatosAlumnoComponent />
        </div>
      </div>
    </>
  );
}

export default TutorPanel;
const posicion = {
  position: "fixed",

  zIndex: "100",

};
