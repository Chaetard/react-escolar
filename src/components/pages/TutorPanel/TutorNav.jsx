import { Option } from "./Barra";
import gradu from "../../../img/graduation.png";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./estilos-navTutor.css";
import atom from "../../../img/atom-svgrepo-com.svg";
import math from "../../../img/blackboard-svgrepo-com.svg";
// import esp from "../../../img/calligraphy-abc-svgrepo-com.svg";
import icons from "../../../img/iconsmajor-svgrepo-com.svg";

const DataEjemplo = [
  {
    nombre: "Rocio Isabella",
    apellidoPaterno: "Ibarra",
    apellidoMaterno: "Mendoza",
    gradoEscolar: "2-A",
    CURP: "IBA34HS9K1SA",
  },
];

const estilos = {
  backgroundColor: "trasparent",
};

const stilosA = {
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    cursor: "pointer",
  },
};

// const estiloActivo = {
//   color: "green",
//   fontWeight: "bold",
// };

function TutorNav() {
  return (
    <div style={estilos}>
      <Navbar className="navbarETutor " bg="dark" expand="md">
        <Navbar.Brand style={stilosA} href="#">
          <img src={gradu} alt="gradu" id="gradu" />
          <Option id="titleEscolar" className="itemsNavTutor">
            Mi Escolar
          </Option>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">
              <Option className="itemsNavTutor">
                {DataEjemplo[0].nombre} {DataEjemplo[0].apellidoPaterno}{" "}
                {DataEjemplo[0].apellidoMaterno}
              </Option>
            </Nav.Link>

            {/* <Nav.Link className="imgOption" href="#">
              <Option>
                <img src={atom} className="imgOptionIn" alt="" />
              </Option>
            </Nav.Link>
            <Nav.Link className="imgOption" href="#">
              <Option>
                <img src={math} className="imgOptionIn" alt="" />
              </Option>
            </Nav.Link>
            <Nav.Link className="imgOption" href="#">
              <Option>
                <img src={icons} className="imgOptionIn" alt="" />
              </Option>
            </Nav.Link>
            <Nav.Link className="imgOption" href="#">
              <Option>
                <img src={icons} className="imgOptionIn" alt="" />
              </Option>
            </Nav.Link>
            <Nav.Link className="imgOption" href="#">
              <Option>
                <img src={icons} className="imgOptionIn" alt="" />
              </Option>
            </Nav.Link> */}

            {/* <Nav.Link href="#">
            <Option style={estiloActivo}>ACTIVO</Option>
          </Nav.Link>

          <Nav.Link href="http://127.0.0.1:5500/index.html">
            <Option className="itemsNavTutor">Materias </Option>
          </Nav.Link> */}

            {/* <Nav.Link>
            <a href="#" className="btn btn-danger" id="btnSalirLog">
              Salir
            </a>
          </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default TutorNav;
