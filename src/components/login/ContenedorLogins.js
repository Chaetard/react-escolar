import React from "react";
import LoginTutor from "./LoginTutor";
import Tutor from "../../img/reading.png";
import Docente from "../../img/translator.png";

import "../../styles/loginStyles/contenedorLogins.css";

function ContenedorLogins() {
  return (
    <div className="contenedor">
      <div className="row conta">
        <LoginTutor
          texto="Tutor"
          id="tutor"
          imagen={Tutor}
          color="rgba(4, 217, 60, 0.5)"
        />
        <LoginTutor
          texto="Maestro"
          id="maestro"
          imagen={Docente}
          color="rgba(216, 5, 5, 0.5)"
        />
      </div>
    </div>
  );
}

export default ContenedorLogins;
