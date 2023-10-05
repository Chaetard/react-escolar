import logo from "./logo.svg";
import "./App.css";
import ContenedorLogins from "./components/login/ContenedorLogins";
import NavBarHome from "./components/nav/NavBarHome";

function App() {
  return (
    <div className="App">
      <NavBarHome />

      <div className="container-fluid">
        <div className="row">
          <div className="col-6 textoResumen">
            <div>
              
              <h1>Mi Escolar</h1>
              <p>
                Mi Escolar es una plataforma escolar innovadora diseñada para
                facilitar la gestión y el seguimiento de las actividades y
                asistencias de los alumnos. Con un enfoque centrado en la
                eficiencia y la organización, Mi Escolar ofrece a las
                instituciones educativas una solución integral y detallada para
                mantener un registro preciso de la información académica de los
                estudiantes.
              </p>{" "}
            </div>
          </div>
          <div className="col-6">
            <ContenedorLogins />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
