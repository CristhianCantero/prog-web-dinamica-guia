// Este componente sirve como pie de pagina, en el mismo podrían agregar información de contacto,
// links a redes sociales, o cualquier otro detalle relevante para la aplicación.
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/registro") {
    return null;
  }

  return (
    <footer className="bg-dark text-light mt-auto">
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start">
            <h5 className="mb-1">Programación Web Dinámica</h5>

            <p className="text-secondary mb-0">
              Material práctico y ejemplos desarrollados durante las clases.
            </p>
          </div>

          <div className="col-md-6">
            <ul className="nav justify-content-center justify-content-md-end">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  Inicio
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-light"
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
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light" to="/login">
                  Iniciar sesión
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-secondary" />

        <p className="text-center text-secondary mb-0">
          © 2026 Profesor Cristhian Cantero - Programación Web Dinámica.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
