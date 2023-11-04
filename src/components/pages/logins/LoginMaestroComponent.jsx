import React, { useRef, useEffect } from "react"; // Importa useEffect
import trans from "../../../img/translator.png";
import { Link } from "react-router-dom";
import gradu from "../../../img/graduation.png";

function LoginMaestroComponent() {
  const linkRef = useRef(null);

  const handleKeyPress = (event) => {
    // Verifica si la tecla presionada es la tecla "Enter" (código 13)
    if (event.key === "ArrowLeft" || event.key === "a" || event.key === "ArrowRight" || event.key === "d") {
      // Verifica si el objetivo (target) del evento es un campo de entrada
      if (
        event.target.tagName !== "INPUT" &&
        event.target.tagName !== "TEXTAREA"
      ) {
        // Simula un clic en el enlace cuando se presiona "Enter"
        linkRef.current.click();
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
  const estilo = {
    backgroundColor: "rgba(216, 5, 5, 0.5)",
  };

  const estilos2 = {
    marginBottom: "5px",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="ContNum1 col-md-6">
          <div id="prueba1234">
            <Link to={{ pathname: "/" }} className="titulosLog">
              <h1 className="titulosLog" id="MiEscolarTitulo">
                <img src={gradu} alt="" id="gradu" />
                Mi Escolar
              </h1>
            </Link>

            <form className="formularioLogTut">
              <input
                type="email"
                className="form-control"
                placeholder="Correo Electronico"
                style={estilos2}
              />
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
              />

              <button className="btn  btn-success">Iniciar Sesion</button>
            </form>
          </div>
        </div>
        <div
          className="ContenedorLoginTutor col-md-6 animate__animated animate__fadeInDown"
          id="ContenedorLoginTutor"
          style={estilo}
        >
          <div className="espacioSesionTut ">
            <img
              src={trans}
              alt="Img Reading Boy"
              id="readerImg"
              className=""
            />
          </div>
        </div>
      </div>
      <Link to="/Tutor" ref={linkRef}></Link>
    </div>
  );
}

export default LoginMaestroComponent;
