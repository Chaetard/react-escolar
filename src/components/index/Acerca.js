import React from "react";
import certificate from "../../img/certificate.png";
import education from "../../img/education.png";
import graduate from "../../img/graduate.png";
import "../../styles/index/Acerca.css";

function Acerca() {
  return (
    <div>
      <div className="container-fluid acercaMiescolar">
        <div className="row">
          <div className="col-md-8 d-flex contenedorTAc">
            <div>
              <h2 id="tituloAcerca">Mi Escolar</h2>

              <p id="textoAcerca">
                Mi Escolar es una plataforma escolar innovadora diseñada para
                facilitar la gestión y el seguimiento de las actividades y
                asistencias de los alumnos. Con un enfoque centrado en la
                eficiencia y la organización, Mi Escolar ofrece a las
                instituciones educativas una solución integral y detallada para
                mantener un registro preciso de la información académica de los
                estudiantes.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex caroCont">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide carouselAcerca"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner  ">
                <div class="carousel-item active">
                  <img src={certificate} class="d-block imgAcerca" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={education} class="d-block imgAcerca" alt="..." />
                </div>
                <div class="carousel-item">
                  <img src={graduate} class="d-block imgAcerca" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acerca;
