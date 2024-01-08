import React from "react";
import InformacionAlumno from "./InformacionAlumno";
import InformacionMaterias from "./InformacionMaterias";
import "./../estilos-navTutor.css";
import MateriaDetalleComponent from "./utils/MateriaDetalleComponent";
import "./../Alumno/utils/Materias.css";

const asistenciasEjemplo = [
  {
    fecha: "12/12/2020",
    asistencia: "Presente",
  },
  {
    fecha: "15/12/2020",
    asistencia: "Ausente",
  },
  {
    fecha: "12/12/2020",
    asistencia: "Justificado",
  },
];

const tareasMatematicas = [
  {
    id: 1,
    fecha: "12/12/2020",
    tarea: "Hacer ejercicios de la pagina 12",
    nota: "9.2",
    comentario: "Muy bien",
  },
  {
    id: 2,
    fecha: "15/12/2020",
    tarea: "Hacer ejercicios de la pagina 20",
    nota: "7.2",
    comentario: "Puede Mejorar",
  },
  {
    id: 3,
    fecha: "12/12/2020",
    tarea: "Hacer ejercicios de multiplicacion",
    nota: "5",
    comentario: "Deficiente",
  },
];

const tareasEspañol = [
  {
    id: 1,
    fecha: "12/12/2020",
    tarea: "Hacer un resumen de la lectura",
    nota: "10",
    comentario: "Muy bien",
  },
  {
    id: 2,
    fecha: "15/12/2020",
    tarea: "Cuestionaropio de la lectura",
    nota: "10",
    comentario: "Muy bien",
  },
];

const tareasCiencias = [
  {
    id: 1,
    fecha: "12/12/2020",
    tarea: "Hacer ejercicios de la pagina 12",
    nota: "9.2",
    comentario: "Muy bien",
  },
  {
    id: 2,
    fecha: "15/12/2020",
    tarea: "Hacer ejercicios de la pagina 20",
    nota: "10",
    comentario: "Muy bien",
  },
];
const tareaHistoria = [
  {
    id: 1,
    fecha: "12/12/2020",
    tarea: "Hacer ejercicios de la pagina 12",
    nota: "9.2",
    comentario: "Muy bien",
  },
  {
    id: 2,
    fecha: "15/12/2020",
    tarea: "Hacer ejercicios de la pagina 20",
    nota: "10",
    comentario: "Muy bien",
  },
];

const tareaGeografia = [
  {
    id: 1,
    fecha: "12/12/2020",
    tarea: "Hacer ejercicios de la pagina 12",
    nota: "9.2",
    comentario: "Muy bien",
  },
  {
    id: 2,
    fecha: "15/12/2020",
    tarea: "Hacer ejercicios de la pagina 20",
    nota: "10",
    comentario: "Muy bien",
  },
];
function DatosAlumnoComponent() {
  return (
    <>
      <div className=" fixCont">
        <div className="row " style={estilo}>
          <div className="row" style={main}>
            {" "}
            <h2>Informacion del Alumno</h2>{" "}
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <InformacionAlumno />
          </div>
          <div className="col-12 col-md-6 col-lg-8 card mr-4">
            <br />

            <h6>Promedios del Alumno</h6>

            <InformacionMaterias />
          </div>
        </div>
        <div className="row">
          <div className="col-12 materias">
            <MateriaDetalleComponent
              Materia="Matematicas"
              tareas={tareasMatematicas}
              asistencias={asistenciasEjemplo}
            />
          </div>
          <div className="col-12  materias">
            <MateriaDetalleComponent
              Materia="Español"
              tareas={tareasEspañol}
              asistencias={asistenciasEjemplo}
            />
          </div>
          <div className="col-12 materias">
            <MateriaDetalleComponent
              Materia="Ciencias"
              tareas={tareasCiencias}
              asistencias={asistenciasEjemplo}
            />
          </div>
          <div className="col-12 materias">
            <MateriaDetalleComponent
              Materia="Historia"
              tareas={tareaHistoria}
              asistencias={asistenciasEjemplo}
            />
          </div>
          <div className="col-12 materias">
            <MateriaDetalleComponent
              Materia="Geografia"
              tareas={tareaGeografia}
              asistencias={asistenciasEjemplo}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default DatosAlumnoComponent;

const main = {
  marginTop: "85px",
};

const estilo = {};
