import React from "react";


function ContainerMateriasPreview(props) {
  //   const state = () => {
  //     //Solo Muestra
  //     switch (props.materia) {
  //       case "español":
  //         return "español";
  //       case" matematicas":
  //         return "matematicas";
  //     }
  //   };

  return (
    <>
      <div>
        <h1>{props.materia} </h1>
        <h3>{props.id}</h3>
        
       <a className="btn btn-success" href="">Panel General</a>
      </div>
    </>
  );
}

// en este componente en base al id de la materia y del alumno se procesara la informacion para poder mostrar los datos de la materia, como el nombre, el id, el promedio, las tareas, etc. este generara un hipervinculo el cual nos llevara a un panel donde mostrara de manera detallada la materia

export default ContainerMateriasPreview;
