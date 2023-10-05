import React from "react";
import "../../styles/loginStyles/loginTutor.css";

function LoginTutor(props) {
    const estilo = {
       backgroundColor: props.color,
    };
  return (
    <div className="cardText container  text-center " style={estilo}>
      <h1 className="tituloCard">Iniciar Sesion como: {props.texto}</h1>
      <img className="imgCard" src={props.imagen} alt="imagen" />

      <div className="row d-flex btncont">
      <button type="button" className="btn btn-outline-success btnlog">Inicar Sesion</button>
      </div>
      
    </div>
  );
}
 
export default LoginTutor;
