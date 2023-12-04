import React from "react";
import InformacionAlumno from "./InformacionAlumno";
import InformacionEscolar from "./InformacionEscolar";
import InformacionMaterias from "./InformacionMaterias";

function DatosAlumnoComponent() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-12 col-md-6 col-lg-4">
            <InformacionAlumno />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <h6>Promedios del Alumno</h6>
              <InformacionEscolar />
           
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <InformacionMaterias />
          </div>
        </div>
      </div>
    </>
  );
}

export default DatosAlumnoComponent;
