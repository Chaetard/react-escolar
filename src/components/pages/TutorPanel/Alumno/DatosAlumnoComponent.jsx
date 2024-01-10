import React from "react";
import InformacionAlumno from "./InformacionAlumno";
import InformacionMaterias from "./InformacionMaterias";
import "./../estilos-navTutor.css";
import MateriaDetalleComponent from "./utils/MateriaDetalleComponent";
import "./../Alumno/utils/Materias.css";

import AsistenciaEscolar from "./AsistenciaEscolar";

const notasEjemplo = [
  {
    titulo: "Nota Mala",
    contenido: "lorem ipsum",
    color: "red",
  },
  {
    titulo: "Nota Regular",
    contenido: "lorem ipsum",
    color: "yellow",
  },
  {
    titulo: "Nota Buena",
    contenido: "lorem ipsum",
    color: "green",
  },
];

const asistenciasEjemplo = [
  {
    fecha: "26/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "25/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "24/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "23/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "22/05/2020",
    asistencia: "Ausente",
  },
  {
    fecha: "19/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "18/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "17/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "16/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "15/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "12/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "11/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "10/05/2020",
    asistencia: "Justificado",
  },
  {
    fecha: "09/05/2020",
    asistencia: "Justificado",
  },
  {
    fecha: "08/05/2020",
    asistencia: "Justificado",
  },
  {
    fecha: "05/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "04/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "03/05/2020",
    asistencia: "Presente",
  },
  {
    fecha: "02/05/2020",
    asistencia: "Presente",
  },

];

const tareasMatematicas = [
  {
    id: 4,
    fecha: "28/12/2020",
    tarea: "Investigacion de Pitagoras",
    nota: "0",
    comentario: "Pendiente",
  },
  {
    id: 3,
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
    id: 1,
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
  {
    id: 3,
    fecha: "15/12/2020",
    tarea: "Monse",
    nota: "8",
    comentario: "pendiente",
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
  {
    id: 3,
    fecha: "15/12/2020",
    tarea: "Incestigacion",
    nota: "5",
    comentario: "Falto Informacion",
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
        <div>
          {" "}
          <AsistenciaEscolar asistencias={asistenciasEjemplo} />
        </div>
        <div className="row">
          <div className="col-12 materias">
            <MateriaDetalleComponent
              Materia="Matematicas"
              tareas={tareasMatematicas}
              notas={notasEjemplo}
            />
          </div>
          <div className="col-12  materias">
            <MateriaDetalleComponent
              Materia="Español"
              tareas={tareasEspañol}
              asistencias={asistenciasEjemplo}
              notas={notasEjemplo}
            />
          </div>
          <div className="col-12 materias">
            <MateriaDetalleComponent
              Materia="Ciencias"
              tareas={tareasCiencias}
              asistencias={asistenciasEjemplo}
              notas={notasEjemplo}
            />
          </div>
          <div className="col-12 materias">
            <MateriaDetalleComponent
              Materia="Historia"
              tareas={tareaHistoria}
              asistencias={asistenciasEjemplo}
              notas={notasEjemplo}
            />
          </div>
          <div className="col-12 materias">
            <MateriaDetalleComponent
              Materia="Geografia"
              tareas={tareaGeografia}
              asistencias={asistenciasEjemplo}
              notas={notasEjemplo}
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
