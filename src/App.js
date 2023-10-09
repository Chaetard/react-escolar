import "./App.css";
import ContenedorLogins from "./components/login/ContenedorLogins";
import NavBarHome from "./components/nav/NavBarHome";
import Acerca from "./components/index/Acerca";
function App() {
  return (
    <div className="App">
      <NavBarHome />

      <div className="container-fluid logs">
        <div className="row ">
          <div className="col-md-12">
            <ContenedorLogins />
          </div>
        </div>
      </div>

      <Acerca />
    </div>
  );
}

export default App;
