import React from "react";
import cancelar from "./../../../../img/cancelar.png";
import marca from "./../../../../img/marca-de-verificacion.png";
import advertencia from "./../../../../img/advertencia.png";
function AsistenciaEscolar(props) {
  let asistencia = 0;
  let faltas = 0;
  let justificaciones = 0;
  return (
    <div style={altura}>
      <h1>Asistencias</h1>
      <div className="row">
        <div className="d-flex col-8">
          <div className="grid5">
            {props.asistencias.map((objeto, index) => {
              let colorFondo;
              let imgFondo;

              if (objeto.asistencia === "Ausente") {
                colorFondo = "red";
                imgFondo = cancelar;
                faltas++;
              } else if (objeto.asistencia === "Justificado") {
                colorFondo = "yellow";
                imgFondo = advertencia;
                justificaciones++;
              } else if (objeto.asistencia === "Presente") {
                colorFondo = "green";
                imgFondo = marca;
                asistencia++;
              } else {
                colorFondo = "gris";
              }

              const estiloTarjeta = {
                backgroundColor: colorFondo,

                borderRadius: "5px",
                margin: "5px",

                height: "100px",
                width: "150px",
              };

              return (
                <div key={index}>
                  <div style={estiloTarjeta} className="text-center">
                    <h6>{objeto.fecha}</h6>
                    <div style={imgst}>
                      <img src={imgFondo} alt="" height="50px" srcset="" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-4 text-center ">
          <div className="d-flex justify-content-center">
            {" "}
            <div className="contAsisGen contFaltas">
              <h2>Faltas</h2>
              <h1>{faltas}</h1>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            {" "}
            <div className="contAsisGen contJust">
              <h2>Justificaciones</h2>
              <h1>{justificaciones}</h1>
            </div>
          </div>

          <div className="d-flex justify-content-center ">
            <div className="contAsisGen contAsis">
              <h2>Asistencias</h2>
              <h1> {asistencia}</h1>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default AsistenciaEscolar;

const altura = {
  height: "90vh",
  overflow: "auto",
};
const imgst = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "70px",
  width: "150px !important",
};
