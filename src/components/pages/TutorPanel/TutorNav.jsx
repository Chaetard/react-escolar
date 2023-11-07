import { Barra, ContainerOption, Option } from "./Barra";
import gradu from "../../../img/graduation.png";
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./estilos-navTutor.css";

const stilosA = {
  textDecoration: "none",
  color: "black",
  fontSize: "1.5rem",
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
    <Navbar className="navbarETutor" expand="md">
      <Navbar.Brand style={stilosA} href="#">
        <img src={gradu} alt="gradu" id="gradu" />
        <Option id="titleEscolar"> Mi Escolar </Option>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" className="itemsNavTutor">
            <Option>Rocio Isabuela Ibarra Mendoza</Option>
          </Nav.Link>
          <Nav.Link href="#" className="itemsNavTutor">
            <Option>CURP JS81KS0AKD2</Option>
          </Nav.Link>
          <Nav.Link href="#" className="itemsNavTutor">
            <Option style={estiloActivo}>ACTIVO</Option>
          </Nav.Link>
          <Nav.Link href="#" className="itemsNavTutor">
            <Option>2-A</Option>
          </Nav.Link>

          <NavDropdown className="itemsNavTutor" title="Materias" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/1"> 
              <Option>Materias</Option>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/2">
              <Option>Materias</Option>
            </NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            <NavDropdown.Item href="#action/3">
              <Option>Materias</Option>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TutorNav;
