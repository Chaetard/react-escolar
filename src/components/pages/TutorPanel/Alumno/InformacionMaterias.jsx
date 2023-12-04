import ContainerMateriasPreview from "./ContainerMateriasPreview";

import React, { useState } from "react";

const InformacionMaterias = () => {
  const [selectedView, setSelectedView] = useState(null);

  const renderSelectedView = () => {
    switch (selectedView) {
      case "subview1":
        return <ContainerMateriasPreview id="984032" materia="Matematicas" />;
      case "subview2":
        return <ContainerMateriasPreview id="23472" materia="Español" />;
        case "subview3":
        return <ContainerMateriasPreview id="9923" materia="Ciencias" />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2> Materias</h2>

      <div>
        <label style={cont}>
          <p style={labelS}>Matematicas </p>
          <input
            hidden
            type="radio"
            value="subview1"
            checked={selectedView === "subview1"}
            onChange={() => setSelectedView("subview1")}
          />
        </label>

        <label style={cont}>
          <p style={labelS}> Español </p>
          <input
            hidden
            type="radio"
            value="subview2"
            checked={selectedView === "subview2"}
            onChange={() => setSelectedView("subview2")}
          />
        </label>

        <label style={cont}>
          <p style={labelS}> Ciencias </p>
          <input
            hidden
            type="radio"
            value="subview3"
            checked={selectedView === "subview3"}
            onChange={() => setSelectedView("subview3")}
          />
        </label>
        
      </div>
      {renderSelectedView()}
    </div>
  );
};

//en este componente es necesario crear un estilo de spa para poder visualizar una materia, generar detro del spa un hipervinculo que acceda a otra vista, en este caso seria una vista mas detallada de cada materia, por el momento solo es necesario generar un modelo par una sola muestra, Utiisa Use Efect para hacer la peticion a la api y obtener los datos

// styles para el componente para que no genere conflictos en los demas componentes
const cont = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  paddingTop: "10px",
  backgroundColor: "green",
  margin: "10px",
  color: "white",
};
const labelS = {
  marginLeft: "10px",
};

export default InformacionMaterias;
