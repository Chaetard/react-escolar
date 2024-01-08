import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tutor from "./views/Tutor";
import TutorPanel from "./views/TutorPanel";
import Maestro from "./views/Maestro";
import NotFound from "./views/NotFound";
import DocentePanel from "./views/DocentePanel";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "tutor-panel",
    element: <TutorPanel />,
  },
  {
    path: "tutor",
    element: <Tutor />,
  },
  {
    path: "maestro",
    element: <Maestro />,
  },
  {
    path: "*",
    element: <NotFound />,
  },{
    path: "panel-docente",
    element: <DocentePanel />,

  }
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
