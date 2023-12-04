import { Option } from "./Barra";
import gradu from "../../../img/graduation.png";
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./estilos-navTutor.css";

const stilosA = {
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": {
    cursor: "pointer",
  },
};

const estiloActivo = {
  color: "green",
  fontWeight: "bold",
};

function TutorNav() {
  return (
    <Navbar className="navbarETutor " bg="dark" expand="md">
      <Navbar.Brand style={stilosA} href="#">
        <img src={gradu} alt="gradu" id="gradu" />
        <Option id="titleEscolar" className="itemsNavTutor">
          {" "}
          Mi Escolar{" "}
        </Option>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">
            <Option className="itemsNavTutor">
              Rocio Isabuela Ibarra Mendoza
            </Option>
          </Nav.Link>

          {/* <Nav.Link href="#" >
            <Option className="itemsNavTutor">CURP JS81KS0AKD2</Option>
          </Nav.Link> */}
          <Nav.Link href="#">
            <Option style={estiloActivo}>ACTIVO</Option>
          </Nav.Link>
          {/* <Nav.Link href="#">
            <Option className="itemsNavTutor">2-A</Option>
          </Nav.Link> */}

          <Nav.Link href="http://127.0.0.1:5500/index.html">
            <Option className="itemsNavTutor">Materias </Option>
          </Nav.Link>

          <Nav.Link>
            <a href="#" className="btn btn-danger" id="btnSalirLog">
              Salir
            </a>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TutorNav;
