import React from "react";
import "../estilosPaginas/inicio.css";
import { Link } from "react-router-dom";
import odin from "../assets/odin.jpeg";

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
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <span className="badge text-bg-primary mb-3">Clase 5</span>

                <h4 className="card-title fw-bold">Git y GitHub</h4>

                <p className="card-text text-secondary">
                  Trabajo colaborativo utilizando ramas, commits, Pull Requests
                  y revisión de cambios en equipos de desarrollo.
                </p>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <Link to="/clase-5" className="btn btn-outline-primary w-100">
                  Ver clase
                </Link>
              </div>
            </div>
          </div>

          {/* CLASE 6 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <span className="badge text-bg-primary mb-3">Clase 6</span>

                <h4 className="card-title fw-bold">SCRUM con Trello</h4>

                <p className="card-text text-secondary">
                  Organización del proyecto mediante Backlog, Sprints,
                  seguimiento de tareas y conexión del trabajo con GitHub.
                </p>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <Link to="/clase-6" className="btn btn-outline-primary w-100">
                  Ver clase
                </Link>
              </div>
            </div>
          </div>

          {/* CLASE 7 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <span className="badge text-bg-primary mb-3">Clase 7</span>

                <h4 className="card-title fw-bold">
                  Componentes reutilizables y Props
                </h4>

                <p className="card-text text-secondary">
                  Creación de componentes reutilizables y utilización de Props
                  para mostrar información diferente sin repetir código.
                </p>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <Link to="/clase-7" className="btn btn-outline-primary w-100">
                  Ver clase
                </Link>
              </div>
            </div>
          </div>

          {/* CLASE 8 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <span className="badge text-bg-primary mb-3">Clase 8</span>

                <h4 className="card-title fw-bold">useState y eventos</h4>

                <p className="card-text text-secondary">
                  Uso de estados y eventos para crear interfaces dinámicas que
                  respondan a las acciones realizadas por el usuario.
                </p>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <Link to="/clase-8" className="btn btn-outline-primary w-100">
                  Ver clase
                </Link>
              </div>
            </div>
          </div>
          {/* CLASE 9 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <span className="badge text-bg-primary mb-3">Clase 9</span>

                <h4 className="card-title fw-bold">
                  Formularios y validaciones
                </h4>

                <p className="card-text text-secondary">
                  Captura de información ingresada por el usuario, manejo de
                  formularios, eventos y validación de datos.
                </p>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <Link to="/clase-9" className="btn btn-outline-primary w-100">
                  Ver clase
                </Link>
              </div>
            </div>
          </div>
          {/* CLASE 10 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <span className="badge text-bg-primary mb-3">Clase 10</span>

                <h4 className="card-title fw-bold">Arrays, objetos y .map()</h4>

                <p className="card-text text-secondary">
                  Organización de conjuntos de datos y generación automática de
                  componentes utilizando arrays, objetos y el método .map().
                </p>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <Link to="/clase-10" className="btn btn-outline-primary w-100">
                  Ver clase
                </Link>
              </div>
            </div>
          </div>
          {/* CLASE 11 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <span className="badge text-bg-primary mb-3">Clase 11</span>

                <h4 className="card-title fw-bold">
                  Búsqueda, filtros y tablas
                </h4>

                <p className="card-text text-secondary">
                  Búsqueda y filtrado de información utilizando .filter(),
                  estados y tablas para organizar los resultados.
                </p>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <Link to="/clase-11" className="btn btn-outline-primary w-100">
                  Ver clase
                </Link>
              </div>
            </div>
          </div>
          {/* CLASE 12 */}
          <div className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body p-4">
                <span className="badge text-bg-primary mb-3">Clase 12</span>

                <h4 className="card-title fw-bold">CRUD en React</h4>

                <p className="card-text text-secondary">
                  Creación de un panel administrativo para crear, visualizar,
                  modificar y cambiar el estado de los datos de una aplicación.
                </p>
              </div>

              <div className="card-footer bg-white border-0 p-4 pt-0">
                <Link to="/clase-12" className="btn btn-outline-primary w-100">
                  Ver clase
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Inicio;
