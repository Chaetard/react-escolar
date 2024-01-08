import React from "react";
// import certificate from "../../img/certificate.png";
import education from "../../img/education.png";
// import graduate from "../../img/graduate.png";
import "../../styles/index/Acerca.css";

function Acerca() {
  return (
    <div>
      <div className="container acercaMiescolar" id="acercaDe">
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

          <div className="col-md-4 d-flex contenedorTAc">
            <img src={education} className="d-block imgAcerca" alt="..." />
          </div>
        </div>
      </div>

      <section className="container" id="preguntas">
        <div className="preguntas">
          <div className="row">
            <h2 className="col preguTi">Preguntas Frecuentes</h2>

            <div>
              <div
                className="accordion accordion-flush"
                id="accordionFlushExample"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      ¿Qué es Mi Escolar?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Mi Escolar es una plataforma escolar innovadora diseñada
                      para facilitar la gestión y el seguimiento de las
                      actividades y asistencias de los alumnos. Proporciona una
                      solución integral y detallada para mantener un registro
                      preciso de la información académica de los estudiantes.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      ¿Cómo beneficia a los profesores el uso de Mi Escolar?
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">
                      Mi Escolar facilita a los profesores acceder a los
                      registros de actividades y asistencias de los alumnos, lo
                      que les permite evaluar su desempeño y brindar
                      retroalimentación personalizada. También les ayuda a
                      mantener un control actualizado de la información
                      académica de los estudiantes.
                    </div>
                  </div>
                </div>
                <div
                  className="accordion accordion-flush"
                  id="accordionFlushExample"
                >
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseFour"
                      >
                        ¿Qué beneficios tiene Mi Escolar para los padres y
                        tutores?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Mi Escolar permite a los padres y tutores acceder a la
                        plataforma y consultar el progreso académico de sus
                        hijos en tiempo real. Esto fomenta una mayor
                        comunicación entre la escuela y el hogar, permitiendo a
                        los padres estar al tanto del desempeño y las
                        actividades de sus hijos.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseFive"
                      >
                        ¿Cómo ayuda Mi Escolar a las instituciones educativas?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Mi Escolar ofrece una solución integral y detallada para
                        la gestión y seguimiento de actividades y asistencias de
                        los alumnos. Ayuda a las instituciones educativas a
                        mantener un registro preciso de la información
                        académica, facilita la evaluación del desempeño de los
                        estudiantes y promueve una mayor comunicación entre la
                        escuela y los padres/tutores.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseSix"
                      >
                        ¿Es fácil de usar Mi Escolar?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSix"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Sí, Mi Escolar está diseñado para ser fácil de usar
                        tanto para profesores como para administradores. La
                        plataforma ofrece una interfaz intuitiva y sencilla, lo
                        que facilita el registro de actividades, asignación de
                        calificaciones, seguimiento de asistencias y acceso a
                        los registros académicos.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSeven"
                        aria-expanded="false"
                        aria-controls="flush-collapseSeven"
                      >
                        ¿Es Mi Escolar seguro y protege la privacidad de los
                        datos?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSeven"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        ¿Es Mi Escolar seguro y protege la privacidad de los
                        datos? Sí, la seguridad y la privacidad de los datos son
                        una prioridad en Mi Escolar. Se implementan medidas de
                        seguridad para proteger la información de los
                        estudiantes y garantizar un acceso seguro a la
                        plataforma.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseEight"
                        aria-expanded="false"
                        aria-controls="flush-collapseEight"
                      >
                        ¿Se requiere alguna instalación adicional para utilizar
                        Mi Escolar?
                      </button>
                    </h2>
                    <div
                      id="flush-collapseEight"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div className="accordion-body">
                        Mi Escolar es una plataforma basada en la web, por lo
                        que no requiere instalaciones adicionales. Los usuarios
                        solo necesitan tener acceso a internet y un dispositivo
                        compatible, como una computadora o un teléfono
                        inteligente, para acceder a la plataforma.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container contacto d-flex" id="contactoRef">
        <div className="row d-flex contCon">
          <h1 className="text-center">Contacto</h1>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="correo@ejemplo.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Mensaje
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
          <button type="button" className="btn btn-success">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Acerca;
