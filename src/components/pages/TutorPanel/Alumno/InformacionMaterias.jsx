import React, { useState } from "react";
import InformacionEscolar from "./InformacionEscolar";
import "./../estilos-navTutor.css";

const datosGenerales = [
  {
    name: "B1",
    Asistencias: 30,
    Promedio: 80,
    materia: "General",
  },
  {
    name: "B2",
    Asistencias: 30,
    Promedio: 75,
    materia: "General",
  },
  {
    name: "B3",
    Asistencias: 27,
    Promedio: 92,
    materia: "General",
  },
  {
    name: "B5",
    Asistencias: 30,
    Promedio: 65,
    materia: "General",
  },
];


// const [seleccionad0, setSeleccionado] = useState("General");


const InformacionMaterias = () => {

  


  const [datos, setDatos] = useState(datosGenerales);

  const handleRadioChangeGeneral = () => {
    setDatos(datosGenerales);
  };

  const handleRadioChangeMatematicas = () => {
    setDatos([
      {
        name: "B1",
        Asistencias: 30,
        Promedio: 72,
        materia: "Matematicas",
      },
      {
        name: "B2",
        Asistencias: 30,
        Promedio: 99,
        materia: "Matematicas",
      },
      {
        name: "B3",
        Asistencias: 27,
        Promedio: 99,
        materia: "Matematicas",
      },
      {
        name: "B5",
        Asistencias: 30,
        Promedio: 65,
        materia: "Matematicas",
      },
    ]);
  };

  const handleRadioChangeEspañol = () => {
    setDatos([
      {
        name: "B1",
        Asistencias: 12,
        Promedio: 45,
        materia: "Español",
      },
      {
        name: "B2",
        Asistencias: 16,
        Promedio: 61,
        materia: "Español",
      },
      {
        name: "B3",

        Asistencias: 23,
        Promedio: 81,
        materia: "Español",
      },
      {
        name: "B5",
        Asistencias: 30,
        Promedio: 96,
        materia: "Español",
      },
    ]);
  };

  const handleRadioChangeCiencias = () => {
    setDatos([
      {
        name: "B1",
        Asistencias: 18,
        Promedio: 60,
        materia: "Ciencias",
      },
      {
        name: "B2",
        Asistencias: 18,
        Promedio: 32,
        materia: "Ciencias",
      },
      {
        name: "B3",
        Asistencias: 23,
        Promedio: 98,
        materia: "Ciencias",
      },
      {
        name: "B5",
        Asistencias: 22,
        Promedio: 85,
        materia: "Ciencias",
      },
    ]);
  };

  const handleRadioChangeHistoria = () => {
    setDatos([
      {
        name: "B1",
        Asistencias: 18,
        Promedio: 87,
        materia: "Historia",
      },
      {
        name: "B2",
        Asistencias: 31,
        Promedio: 87,
        materia: "Historia",
      },
      {
        name: "B3",
        Asistencias: 23,
        Promedio: 98,
        materia: "Historia",
      },
      {
        name: "B5",
        Asistencias: 22,
        Promedio: 98,
        materia: "Historia",
      },
    ]);
  };

  const handleRadioChangeGeografia = () => {
    setDatos([
      {
        name: "B1",
        Asistencias: 18,
        Promedio: 75,
        materia: "Geografia",
      },
      {
        name: "B2",
        Asistencias: 18,
        Promedio: 76,
        materia: "Geografia",
      },
      {
        name: "B3",
        Asistencias: 23,
        Promedio: 65,
        materia: "Geografia",
      },
      {
        name: "B5",
        Asistencias: 22,
        Promedio: 91,
        materia: "Geografia",
      },
    ]);
  };

  return (
    <div className="row">
      <div className="col-lg-6 col-md-12">
        <InformacionEscolar data={datos} />
      </div>
      <div className="col-lg-6 col-md-12">
        <label  className="cont" >
          <p style={labelS}> General </p>
          <input
            hidden
            name="seleccion"
            type="radio"
            onClick={handleRadioChangeGeneral}
          />
        </label>
        <label  className="cont" >
          <p style={labelS}>Matematicas </p>
          <input
            hidden
            name="seleccion"
            type="radio"
            onClick={handleRadioChangeMatematicas}
          />
        </label>
        <label  className="cont" >
          <p style={labelS}>Español </p>
          <input
            hidden
            name="seleccion"
            type="radio"
            onClick={handleRadioChangeEspañol}
          />
        </label>
        <label  className="cont" >
          <p style={labelS}>Ciencias</p>
          <input
            hidden
            name="seleccion"
            type="radio"
            onClick={handleRadioChangeCiencias}
          />
        </label>
        <label  className="cont" >
          <p style={labelS}>Historia</p>
          <input
            hidden
            name="seleccion"
            type="radio"
            onClick={handleRadioChangeHistoria}
            
          />
        </label>
        <label  className="cont" >
          <p style={labelS}>Geografia</p>
          <input
            hidden
            name="seleccion"
            type="radio"
            onClick={handleRadioChangeGeografia}
          />
        </label>
        {/* Resto del código para otras materias */}
      </div>
    </div>
  );
};

// Resto del código para estilos

const labelS = {
  marginLeft: "10px",
};

export default InformacionMaterias;
