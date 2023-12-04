import React from "react";
import "../../styles/loginStyles/loginTutor.css";
import "animate.css";
import { Link } from "react-router-dom";

function LoginTutor(props) {
  // let TAM_WIN = window.innerWidth;
  //
  const estilo = {
    backgroundColor: props.color,
  };

  //   const IMG = document.getElementsByClassName("cardText");
  //   const IMAGEN = document.getElementsByClassName("imgCard");

  //   console.log(TAM_WIN);

  //   function handleClick() {
  //     setTimeout(() => {
  //       if (TAM_WIN >= 1000) {
  //         IMAGEN[0].style.height = "50vh";
  //         IMAGEN[1].style.height = "50vh";
  //         if (props.texto === "Tutor") {
  //           IMG[0].style.width = "55vw";
  //           IMG[1].style.width = "22vw";

  //           IMAGEN[1].style.height = "22vw";
  //         } else {
  //           IMG[1].style.width = "55vw";
  //           IMG[0].style.width = "22vw";

  //           IMAGEN[0].style.height = "22vw";
  //         }
  //       }
  //     }, 150);
  //   }

  //   function leavePointer() {
  //     setTimeout(() => {
  //       if (TAM_WIN >= 1000) {
  //         IMAGEN[0].style.height = "50vh";
  //         IMAGEN[1].style.height = "50vh";
  //         IMG[0].style.width = "40vw";
  //         IMG[1].style.width = "40vw";
  //         IMG[0].style.height = "auto";
  //         IMG[1].style.height = "auto";
  //       }
  //     }, 151);
  //   }

  const ruta = props.texto;
  return (
    <Link
      to={{ pathname: ruta }}
      className="cardText container text-center animate__animated animate__fadeInUp"
      style={estilo}
      // onPointerEnter={handleClick}
      // onPointerLeave={leavePointer}
    >
      <h1 className="tituloCard">Iniciar Sesión como {props.texto}</h1>
      <div className="imgJust">
        <img className="imgCard" src={props.imagen} alt="imagen" />
      </div>
    </Link>
  );
}

export default LoginTutor;
