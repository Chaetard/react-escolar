import React from "react";
import { Barra, ContainerOption , Option } from "./Barra";
// import "./panel-usuarios.module.css"

function TutorNav() {
  return (
    <>
      {/* <Barra>
        <ContainerOption>

          
          <Option><h1>Mi Escolar</h1></Option>
          <Option><p>Nombre de Ejemplo</p></Option>
          <Option> <p>CURP EJEMPLO324242</p> </Option>
          <Option> <p>ACTIVO</p> </Option>
          <Option> <p>2-A</p> </Option>
          <Option> <p>Materias</p> </Option>
        </ContainerOption>
      </Barra> */}

<div className="container-fluid text-center fixed-top" id="navbartop">

        <div className="navbar navbar-expand-sm navbar-light bg-light">
            <div className="container-fluid">


                <button id="miescolar" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Mi
                    Escolar</button>


                <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" aria-current="page">DAVID ALEJANDRO FONSECA HERNANDEZ
                                <span className="visually-hidden">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="curptop">CURP NJFS78DSD8F283</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" id="activo">ACTIVO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">2-A</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Materias</a>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <a className="dropdown-item" href="#espanol">Español </a>
                                <a className="dropdown-item" href="#matematicas">Matematicas </a>
                                <a className="dropdown-item" href="#force">Formacion Civica y Etica</a>
                                <a className="dropdown-item" href="#ciencias">Ciencias</a>
                                <a className="dropdown-item" href="#geografia">Geografia</a>
                                <a className="dropdown-item" href="#historia">Historia</a>

                            </div>
                        </li>
                    </ul>

                    <a href="../index.html" className="btn btn-danger"> Salir</a>
                </div>
            </div>
        </div>
    </div>

    </>
  );
}

export default TutorNav;
