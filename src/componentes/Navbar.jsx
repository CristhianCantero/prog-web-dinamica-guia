// El navbar es una pieza fundamental en nuestros sitios webs,
// tienen la libertad de agregar o quitar links según lo que necesiten,
// también pueden cambiar el estilo del mismo para que se adapte a la estética de su aplicación.
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/registro") {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Programación Web Dinámica
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-lg-center gap-lg-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Clases
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/clase-1" className="dropdown-item">
                    Clase 1 - Introducción a React
                  </Link>
                </li>
                <li>
                  <Link to="/clase-2" className="dropdown-item">
                    Clase 2 - Componentes
                  </Link>
                </li>
                <li>
                  <Link to="/clase-3" className="dropdown-item">
                    Clase 3 - Bootstrap
                  </Link>
                </li>
                <li>
                  <Link to="/clase-4" className="dropdown-item">
                    Clase 4 - React Router
                  </Link>
                </li>
                <li>
                  <Link to="/clase-5" className="dropdown-item">
                    Clase 5 - Git y GitHub
                  </Link>
                </li>
                <li>
                  <Link to="/clase-6" className="dropdown-item">
                    Clase 6 - SCRUM con Trello
                  </Link>
                </li>
                <li>
                  <Link to="/clase-7" className="dropdown-item">
                    Clase 7 - Componentes y Props
                  </Link>
                </li>
                <li>
                  <Link to="/clase-8" className="dropdown-item">
                    Clase 8 - useState y eventos
                  </Link>
                </li>
                <li>
                  <Link to="/clase-9" className="dropdown-item">
                    Clase 9 - Formularios y validaciones
                  </Link>
                </li>
                <li>
                  <Link to="/clase-10" className="dropdown-item">
                    Clase 10 - Arrays, objetos y .map()
                  </Link>
                </li>
                <li>
                  <Link to="/clase-11" className="dropdown-item">
                    Clase 11 - Búsqueda, filtros y tablas
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Iniciar sesión
              </Link>
            </li>

            <li className="nav-item">
              <Link className="btn btn-outline-light ms-lg-2" to="/registro">
                Registrarse
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
