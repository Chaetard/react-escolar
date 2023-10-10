import React from "react";
import "../../styles/loginStyles/loginTutor.css";
import "animate.css";

function LoginTutor(props) {
  const estilo = {
    backgroundColor: props.color,
  };

  const IMG = document.getElementsByClassName("cardText");
  const IMAGEN = document.getElementsByClassName("imgCard");
  const TAM_WIN = window.innerWidth;

  function handleClick() {
    if (TAM_WIN >= 768) {
      IMAGEN[0].style.height = "70%";
      IMAGEN[1].style.height = "70%";
      if (props.texto === "Tutor") {
        IMG[0].style.width = "55vw";
        IMG[1].style.width = "22vw";

        IMAGEN[1].style.height = "18vw";
      } else {
        IMG[1].style.width = "55vw";
        IMG[0].style.width = "22vw";

        IMAGEN[0].style.height = "18vw";
      }
    } else {
      IMAGEN[0].style.height = "60%";
      IMAGEN[1].style.height = "60%";

      IMG[0].style.height = "100vw";
      IMG[1].style.height = "100vw";
      if (props.texto === "Tutor") {
        IMG[0].style.height = "60vh";
        IMG[1].style.height = "80vw";
        IMAGEN[0].style.height = "60%";
      } else {
        IMG[1].style.height = "60vh";
        IMG[0].style.height = "80vw";
        IMAGEN[1].style.height = "60%";
      }
    }
  }

  return (
    <div
      className="cardText container text-center animate__animated animate__fadeInUp"
      style={estilo}
      onClick={handleClick}
    >
      <h1 className="tituloCard"> Iniciar Sesión como {props.texto} </h1>
      <img className="imgCard" src={props.imagen} alt="imagen" />

      <div className="row d-flex btncont">
        <button type="button" className="btn btn-outline-success btnlog">
          Inicar Sesion
        </button>
      </div>
    </div>
  );
}

export default LoginTutor;
