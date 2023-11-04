import React, { useRef, useEffect } from "react"; // Importa useEffect
import "./LoginTutorComponent.module..css";
import Tutor from "../../../img/reading.png";
import { Link } from "react-router-dom";
import gradu from "../../../img/graduation.png";

function LoginTutorComponent() {
  const linkRef2 = useRef(null);

  const handleKeyPress = (event) => {
    // Verifica si la tecla presionada es la tecla "Enter" (código 13)
    if (event.key === "ArrowLeft" || event.key === "a" || event.key === "ArrowRight" || event.key === "d") {
      // Verifica si el objetivo (target) del evento es un campo de entrada
      if (
        event.target.tagName !== "INPUT" &&
        event.target.tagName !== "TEXTAREA"
      ) {
        // Simula un clic en el enlace cuando se presiona "Enter"
        linkRef2.current.click();
      }
    }
  };

  useEffect(() => {
    // Agrega el controlador de eventos al documento
    document.addEventListener("keypress", handleKeyPress);

    // Limpia el controlador de eventos cuando el componente se desmonta
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  }, []); // El arreglo vacío [] asegura que este efecto se ejecute solo una vez

  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="ContenedorLoginTutor col-md-6 animate__animated animate__fadeInDown"
          id="ContenedorLoginTutor"
        >
          <div className="espacioSesionTut ">
            <img
              src={Tutor}
              alt="Img Reading Boy"
              id="readerImg"
              className=""
            />
          </div>
        </div>
        <div className="ContNum1 col-md-6 ">
          <div id="prueva1234">
            <Link to={{ pathname: "/" }} className="titulosLog">
              <h1 className="titulosLog" id="MiEscolarTitulo">
                <img src={gradu} alt="" id="gradu" />
                Mi Escolar
              </h1>
            </Link>

            <form className="formularioLogTut" action="/tutor-panel"   >
              <input
                type="password"
                className="form-control"
                placeholder="Ingresar Codigo"
              />

              <button className="btn  btn-success">Iniciar Sesion</button>
            </form>
            {/* <h1 className="titulosLog">Iniciar Sesion</h1> */}
          </div>
        </div>
      </div>
      <Link to="/Maestro" ref={linkRef2}></Link>
    </div>
  );
}

export default LoginTutorComponent;
