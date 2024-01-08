import NavBarHome from "../components/nav/NavBarHome";
import "../styles/Contenedor404.css"

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     height: "100vh",
//     backgroundColor: "red",
//     TextAling: "center",
//   },
// };

function NotFound() {
  return (
    <div>
      <NavBarHome />
      <div className="Contenedor404" >
        <h1>404</h1>
        <h2>Pagina No Encontrada</h2>
      </div>
    </div>
  );
}

export default NotFound;
