import React, { useState } from "react";
import wait from "./../../../../../img/wait-panda.gif";

function MateriaDetalleComponent(props) {
  const [botonClickeado, setBotonClickeado] = useState(null);

  const handleClickBoton1 = () => {
    setBotonClickeado(1);
  };

  const handleClickBoton2 = () => {
    setBotonClickeado(2);
  };

  const handleClickBoton3 = () => {
    setBotonClickeado(3);
  };

  let contenidoRenderizado;
  switch (botonClickeado) {
    case 1:
      contenidoRenderizado = props.tareas.map((objeto, index) => {
        let colorFondo;

        if (objeto.nota < 6 && objeto.nota >= 0.1) {
          colorFondo = "red";
        } else if (objeto.nota >= 6.1 && objeto.nota <= 7.9) {
          colorFondo = "yellow";
        } else if (objeto.nota >= 8 && objeto.nota <= 10) {
          colorFondo = "green";
        } else if (objeto.nota === 0) {
          colorFondo = "gris";
        }

        const estiloTarjeta = {
          backgroundColor: colorFondo,
        };

        return (
          <div className="col-4" key={index}>
            <div className="card tarjetaMateria">
              <div className="card-header" style={estiloTarjeta}>
                <div className="row">
                  <div className="col-6 textoIzq">Fecha:{objeto.fecha}</div>
                  <div className="col-6 textoDer">
                    {" "}
                    <b>Tarea: </b> {objeto.id}
                  </div>
                </div>
              </div>
              <div className="card-body d-flex flex-column">
                <p>{objeto.tarea}</p>
                <div className="mt-auto">
                  <small className="text-muted">
                    <div className="row">
                      <div className="col-6 textoIzq"> {objeto.comentario}</div>
                      <div className="col-6 textoDer">
                        Calificacion: {objeto.nota}
                      </div>
                    </div>
                  </small>
                </div>
              </div>
            </div>
          </div>
        );
      });

      break;
    case 2:
      contenidoRenderizado = (
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Asistencia</th>
            </tr>
          </thead>
          <tbody>
            {props.asistencias.map((objeto, index) => {
              let colorFondo;

              if (objeto.asistencia === "Ausente") {
                colorFondo = "red";
              } else if (objeto.asistencia === "Justificado") {
                colorFondo = "yellow";
              } else if (objeto.asistencia === "Presente") {
                colorFondo = "green";
              } else {
                colorFondo = "gris";
              }

              const estiloTarjeta = {
                backgroundColor: colorFondo,
              };

              return (
                <tr key={index} style={estiloTarjeta}>
                  <td>{objeto.fecha}</td>
                  <td>{objeto.asistencia}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
      break;
    case 3:
      contenidoRenderizado = (
        <div className="row">
        {props.notas.map((objeto, index) => {
          const estiloNota = {
            backgroundColor: objeto.color,
          };
    
          return (
            <div className="col-4 " key={index}>
              <div className="card  mb-3 notaCard" style={estiloNota}>
                <div className="card-header"><h5 className="card-title">{objeto.titulo}</h5></div>
                <div className="card-body">
                  
                  <p className="card-text">{objeto.contenido}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
     
      );
      break;
    default:
      contenidoRenderizado = (
        <div className="espera">
          <h1 id="titleEscolar">
            Mi Escolar
        </h1>
        </div>

      );
  }
  return (
    <>
      <h1>{props.Materia}</h1>

      <div className="row">
        <div className="col-md-2 col-sm-12 contenedorMaterias">
          <div>
            <button
              type="button"
              className="btn btn-outline-success w-100 btnMaterias"
              onClick={handleClickBoton1}
            >
              Tareas
            </button>
            {/* <button
              type="button"
              className="btn btn-outline-success w-100 btnMaterias"
              onClick={handleClickBoton2}
            >
              Asistencias
            </button> */}
            <button
              type="button"
              className="btn btn-outline-success w-100 btnMaterias"
              onClick={handleClickBoton3}
            >
              Notas
            </button>
          </div>
        </div>

        <div className="col-md-10 col-sm-12 renderizado">
          <div className="row">{contenidoRenderizado}</div>
        </div>
      </div>
    </>
  );
}

export default MateriaDetalleComponent;
