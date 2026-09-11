import React from "react";
import "../estilosPaginas/inicio.css";
import { Link } from "react-router-dom";
import odin from "../assets/odin.jpeg"

function Inicio() {
  return (
    <>
      {/* SECCIÓN PRINCIPAL */}
      <section className="hero-inicio">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">
                Bienvenidos a Programación Web Dinámica
              </h1>

              <p className="lead text-secondary mb-4">
                Esta plataforma está pensada para ir enseñandoles como avanzar
                en el desarrollo de aplicaciones web, desde lo más básico hasta
                lo más avanzado.
              </p>

              <div className="d-flex gap-3">
                <Link to="/login" className="btn btn-primary btn-lg px-4">
                  Iniciar sesión
                </Link>

                <Link
                  to="/registro"
                  className="btn btn-outline-primary btn-lg px-4"
                >
                  Registrarse
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contenedor-imagen-inicio">
                <img
                  src={odin}
                  alt="Plataforma educativa"
                  className="imagen-inicio"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLASES */}
      <section id="clases" className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Clases</h2>

          <p className="text-secondary">
            Accedé al material, ejemplos y actividades de cada clase.
          </p>
        </div>

        <div className="row g-4">
          {/* CLASE 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <span className="badge text-bg-primary mb-3">Clase 1</span>

                <h4 className="card-title fw-bold">Introducción a React</h4>

                <p className="card-text text-secondary">
                  Creación del proyecto, estructura básica y primeros pasos
                  utilizando React.
                </p>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <Link to="/clase-1" className="btn btn-outline-primary w-100">
                  Ver clase
                </Link>
              </div>
            </div>
          </div>

          {/* CLASE 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <span className="badge text-bg-primary mb-3">Clase 2</span>

                <h4 className="card-title fw-bold">Componentes en React</h4>

                <p className="card-text text-secondary">
                  Creación, exportación e importación de componentes.
                  Organización mediante Navbar y Footer.
                </p>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <Link to="/clase-2" className="btn btn-outline-primary w-100">
                  Ver clase
                </Link>
              </div>
            </div>
          </div>

          {/* CLASE 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <span className="badge text-bg-primary mb-3">Clase 3</span>

                <h4 className="card-title fw-bold">Bootstrap en React</h4>

                <p className="card-text text-secondary">
                  Instalación de Bootstrap, sistema de grillas, botones,
                  tarjetas y diseño adaptable.
                </p>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <Link to="/clase-3" className="btn btn-outline-primary w-100">
                  Ver clase
                </Link>
              </div>
            </div>
          </div>

          {/* CLASE 4 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <span className="badge text-bg-primary mb-3">Clase 4</span>

                <h4 className="card-title fw-bold">React Router</h4>

                <p className="card-text text-secondary">
                  Creación de páginas, configuración de rutas y navegación entre
                  diferentes secciones de la aplicación.
                </p>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <Link to="/clase-4" className="btn btn-outline-primary w-100">
                  Ver clase
                </Link>
              </div>
            </div>
          </div>

          {/* CLASE 5 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0 opacity-75">
              <div className="card-body p-4">
                <span className="badge text-bg-secondary mb-3">
                  Próximamente
                </span>

                <h4 className="card-title fw-bold">
                  Componentes reutilizables y Props
                </h4>

                <p className="card-text text-secondary">
                  Reutilización de componentes y envío de información mediante
                  propiedades.
                </p>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <button className="btn btn-outline-secondary w-100" disabled>
                  Próximamente
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Inicio;
