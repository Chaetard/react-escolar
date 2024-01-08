import React from "react";
import NavBarHome from "../components/nav/NavBarHome";
import ContenedorLogins from "../components/login/ContenedorLogins";
import Acerca from "../components/index/Acerca";

function Inicio() {
  return (
    <div className="App">
      <NavBarHome estado="true" />
      <div className="container-fluid logs">
        <div className="row">
          <div className="col-md-12">
            <ContenedorLogins />
          </div>
        </div>
      </div>

      <Acerca />
    </div>
  );
}

export default Inicio;