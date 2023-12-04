import React from "react";
import "../../../../Data/DataStudentExample.json";

function InformacionAlumno() {
  return (
    <>
      <div className="card d-flex" style={estiloCard}>
        <img
          src="https://us.123rf.com/450wm/yupiramos/yupiramos1705/yupiramos170514523/77978477-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-perfil-del-hombre-joven.jpg?ver=6"
          // className="card-img-top"
          alt="..."
          style={estiloImg}
        />
        <div className="card-body">
          <p>Grado Escolar: 2-A</p>
          <p>CURP: SDHKFSDxsds</p>
          <p>Promedio General: 82</p>
          <p>Promedio Total: </p>
          <p>Asistencias: 100%</p>
        </div>
      </div>
    </>
  );
}


// Styles definidos dentro del componente


const estiloCard = {
  
  display: "flex",
  width: "auto",
};
const estiloImg = {
  marginLeft: "25%",
  height: "50%",
  width: "50%",
};

export default InformacionAlumno;
