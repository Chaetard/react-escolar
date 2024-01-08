import React from "react";

const DataEjemplo = [
  {
    nombre: "Rocio Isabella",
    apellidoPaterno: "Ibarra",
    apellidoMaterno: "Mendoza",
    gradoEscolar: "2-A",
    CURP: "IBSAID23JD30S",
    sexo: "Femenino",
    edad: "14",
    fechaNacimiento: "12/12/2009",
    domicilio: "Av. 20 de Noviembre # 123",
    telefono: "1234567890",
    tutor: "Jose Francisco Robles Nuñes",
    tutorTelefono: "1234567890",
    tutorCorreo: " ejemplo123@gmail.com",
  },
];

function InformacionAlumno() {
  return (
    <>
      <div className="card d-flex" style={estiloCard}>
        <div style={pin}></div>
        <img
          src="https://us.123rf.com/450wm/yupiramos/yupiramos1705/yupiramos170514523/77978477-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-perfil-del-hombre-joven.jpg?ver=6"
          // className="card-img-top"
          alt="..."
          style={estiloImg}
        />
        <h3 className="text-center">{DataEjemplo[0].nombre}</h3>
        <div className="card-body">
          <p>Grado Escolar: {DataEjemplo[0].gradoEscolar}</p>
          <p>CURP: {DataEjemplo[0].CURP} </p>
          <p>Sexo: {DataEjemplo[0].sexo}</p>
          <p>Edad: {DataEjemplo[0].edad}</p>
          <p>Fecha de Nacimiento: {DataEjemplo[0].fechaNacimiento}</p>
        </div>
      </div>
    </>
  );
}

// Styles definidos dentro del componente

const pin = {
  // width: "50px",
  // height: "80px",
  // backgroundColor: "red",
  // top: "-10px",
  // left: "10px",
  // position: "absolute",
  // border: "1px solid white",
  // borderRadius: " 0 0 10px 10px"
};

const estiloCard = {
  overflow: "hidden",
  display: "flex",
  width: "auto",
  borderRadius: "15px",

  // borderRight: "7px solid",
};
const estiloImg = {
  marginLeft: "25%",
  height: "50%",
  width: "50%",
};

export default InformacionAlumno;
