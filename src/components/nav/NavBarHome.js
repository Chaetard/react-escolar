import React from "react";
import "../../styles/navbar/NavBarHome.css";
import gradu from "../../img/graduation.png";
import 'animate.css';

function NavBarHome() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark  animate__animated animate__fadeInDown">
        <div className="container-fluid">
          <a className="navbar-brand d-flex anavI" href="#" >
          <img src={gradu} alt="gradu" id="gradu" />
            <span id="titleEscolar"> Mi Escolar </span>
            
          </a>
          <button
            className="navbar-toggler btnnavtog"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse bg-dark menucolap" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Acerca de
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contacto
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBarHome;
