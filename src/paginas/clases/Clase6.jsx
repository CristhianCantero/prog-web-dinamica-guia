import React from "react";
import trelloEjemplo from "../../assets/clase6/trello-ejemplo.png";

function Clase6() {
  return (
    <main>
      {/* PRESENTACIÓN */}
      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 6</span>

          <h1 className="fw-bold">SCRUM con Trello</h1>

          <p className="lead text-secondary mt-3">
            En esta clase vamos a organizar el trabajo del proyecto utilizando
            un tablero Trello y una metodología basada en SCRUM.
          </p>
        </div>
      </section>

      <section className="container py-5">
        {/* INTRODUCCIÓN */}
        <h2 className="fw-bold mb-3">¿Por qué necesitamos organizarnos?</h2>

        <p>
          Cuando cuatro personas trabajan sobre un mismo proyecto, no alcanza
          con decidir qué tiene que programar cada integrante.
        </p>

        <p>
          Necesitamos saber qué tareas existen, cuáles vamos a realizar
          actualmente, quién está trabajando en cada una y cuáles ya fueron
          terminadas.
        </p>

        <div className="alert alert-secondary mt-4">
          <strong>Idea principal:</strong> Trello nos ayudará a organizar el
          trabajo del equipo y GitHub nos permitirá administrar los cambios
          realizados sobre el código.
        </div>

        <hr className="my-5" />

        {/* SCRUM */}
        <h2 className="fw-bold mb-3">¿Qué es SCRUM?</h2>

        <p>
          SCRUM es una forma de organizar proyectos dividiendo el trabajo en
          períodos cortos llamados <strong>Sprints</strong>.
        </p>

        <p>
          Durante cada Sprint el equipo selecciona un conjunto de tareas que
          intentará completar.
        </p>

        <div className="alert alert-primary">
          No vamos a estudiar SCRUM de manera teórica o completa. Vamos a
          utilizar algunos de sus conceptos para organizar nuestros proyectos.
        </div>

        <hr className="my-5" />

        {/* TRELLO */}
        <h2 className="fw-bold mb-3">¿Qué es Trello?</h2>

        <p>
          Trello es una herramienta que permite organizar tareas mediante
          tableros, columnas y tarjetas.
        </p>

        <p>
          Para nuestros proyectos vamos a utilizar un tablero con cinco columnas
          principales.
        </p>

        <div className="table-responsive mt-4">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Columna</th>
                <th>Función</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <strong>Backlog</strong>
                </td>
                <td>
                  Contiene todas las funcionalidades y tareas que el proyecto
                  podría necesitar.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Sprint actual</strong>
                </td>
                <td>
                  Contiene las tareas seleccionadas para desarrollar durante el
                  Sprint.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>En proceso</strong>
                </td>
                <td>
                  Tareas que actualmente están siendo desarrolladas por algún
                  integrante.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Pendiente de revisión</strong>
                </td>
                <td>
                  Tareas terminadas por el desarrollador que todavía deben ser
                  revisadas.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Terminado</strong>
                </td>
                <td>Tareas revisadas, aprobadas e incorporadas al proyecto.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* TABLERO */}
        <h2 className="fw-bold text-center mb-4">Nuestro tablero de trabajo</h2>

        <div className="row g-3">
          <div className="col-md">
            <div className="border rounded p-3 h-100 bg-light">
              <h5 className="fw-bold text-center">Backlog</h5>

              <div className="bg-white border rounded p-2 mt-3">Login</div>

              <div className="bg-white border rounded p-2 mt-2">Registro</div>

              <div className="bg-white border rounded p-2 mt-2">Perfil</div>

              <div className="bg-white border rounded p-2 mt-2">Carrito</div>
            </div>
          </div>

          <div className="col-md">
            <div className="border rounded p-3 h-100 bg-light">
              <h5 className="fw-bold text-center">Sprint actual</h5>

              <div className="bg-white border rounded p-2 mt-3">Navbar</div>

              <div className="bg-white border rounded p-2 mt-2">Inicio</div>
            </div>
          </div>

          <div className="col-md">
            <div className="border rounded p-3 h-100 bg-light">
              <h5 className="fw-bold text-center">En proceso</h5>

              <div className="bg-white border rounded p-2 mt-3">Registro</div>
            </div>
          </div>

          <div className="col-md">
            <div className="border rounded p-3 h-100 bg-light">
              <h5 className="fw-bold text-center">Pendiente de revisión</h5>

              <div className="bg-white border rounded p-2 mt-3">Inicio</div>
            </div>
          </div>

          <div className="col-md">
            <div className="border rounded p-3 h-100 bg-light">
              <h5 className="fw-bold text-center">Terminado</h5>

              <div className="bg-white border rounded p-2 mt-3">
                Crear repositorio
              </div>
            </div>
          </div>
        </div>

        {/* EJEMPLO DE TRELLO */}
        <div className="border rounded bg-light p-3 text-center my-4">
          <img
            src={trelloEjemplo}
            alt="Agregar colaboradores en GitHub"
            className="imagen-clase"
          />
        </div>

        <hr className="my-5" />

        {/* BACKLOG */}
        <span className="badge text-bg-dark mb-2">Etapa 1</span>

        <h2 className="fw-bold">Backlog</h2>

        <p className="mt-3">
          El Backlog contiene todas las funcionalidades, mejoras y tareas que
          pueden formar parte del proyecto.
        </p>

        <p>Por ejemplo, en una tienda online podríamos tener:</p>

        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <div className="border rounded p-3 h-100">Registro de usuarios</div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 h-100">Inicio de sesión</div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 h-100">Catálogo</div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 h-100">Buscador</div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 h-100">Carrito</div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 h-100">Administración</div>
          </div>
        </div>

        <div className="alert alert-warning mt-4">
          Que una tarea esté dentro del Backlog no significa que vaya a
          desarrollarse inmediatamente.
        </div>

        <hr className="my-5" />

        {/* SPRINT */}
        <span className="badge text-bg-dark mb-2">Etapa 2</span>

        <h2 className="fw-bold">Sprint actual</h2>

        <p className="mt-3">
          Antes de comenzar un Sprint, el equipo selecciona algunas tareas del
          Backlog que considera posible terminar.
        </p>

        <div className="bg-light border rounded p-4 mt-4">
          <h5 className="fw-bold">Ejemplo — Sprint 1</h5>

          <ul className="mb-0">
            <li>Crear Navbar</li>
            <li>Crear Footer</li>
            <li>Crear página de Inicio</li>
            <li>Crear Registro</li>
            <li>Crear Login</li>
          </ul>
        </div>

        <div className="alert alert-primary mt-4">
          El objetivo no es llenar el Sprint de tareas, sino seleccionar una
          cantidad que el equipo realmente pueda completar.
        </div>

        <hr className="my-5" />

        {/* EN PROCESO */}
        <span className="badge text-bg-dark mb-2">Etapa 3</span>

        <h2 className="fw-bold">En proceso</h2>

        <p className="mt-3">
          Cuando un integrante comienza a trabajar sobre una tarea, la tarjeta
          debe pasar a la columna <strong>En proceso</strong>.
        </p>

        <p>Además debemos identificar quién está realizando esa tarea.</p>

        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title fw-bold">Registro de usuarios</h5>

            <p className="mb-1">
              <strong>Responsable:</strong> Juan
            </p>

            <p className="mb-0">
              <strong>Rama:</strong>
              <code> cambios/registro</code>
            </p>
          </div>
        </div>

        <div className="alert alert-secondary mt-4">
          Cuando una tarea pasa a En proceso, el integrante debe crear la rama
          correspondiente en GitHub.
        </div>

        <hr className="my-5" />

        {/* GITHUB */}
        <h2 className="fw-bold mb-3">Relación con GitHub</h2>

        <p>
          A partir de este momento conectamos lo aprendido en la Clase 5 con
          nuestro tablero de Trello.
        </p>

        <div className="bg-light border rounded p-4 my-4">
          <div className="text-center fw-bold mb-3">Trello</div>

          <div className="text-center border rounded bg-white p-3">
            Registro de usuarios
          </div>

          <div className="text-center fs-3 my-2">↓</div>

          <div className="text-center fw-bold">GitHub</div>

          <div className="bg-dark text-light p-3 rounded mt-3 text-center">
            git switch -c cambios/registro
          </div>
        </div>

        <hr className="my-5" />

        {/* PENDIENTE REVISION */}
        <span className="badge text-bg-dark mb-2">Etapa 4</span>

        <h2 className="fw-bold">Pendiente de revisión</h2>

        <p className="mt-3">
          Cuando el integrante termina de programar la funcionalidad, realiza el
          commit, sube su rama y crea un Pull Request.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`git add .

git commit -m "Crear registro de usuarios"

git push -u origin cambios/registro`}
            </code>
          </pre>
        </div>

        <p className="mt-4">Después crea el Pull Request en GitHub.</p>

        <div className="text-center fs-4 my-4">
          En proceso → Pendiente de revisión
        </div>

        <div className="alert alert-warning">
          Una tarea todavía no está terminada simplemente porque el programador
          terminó de escribir el código.
        </div>

        <hr className="my-5" />

        {/* REVISION */}
        <h2 className="fw-bold mb-3">¿Qué revisamos?</h2>

        <p>Otro integrante del equipo deberá revisar la funcionalidad.</p>

        <div className="row g-3 mt-3">
          <div className="col-md-3">
            <div className="border rounded p-3 h-100 text-center">
              ¿Funciona?
            </div>
          </div>

          <div className="col-md-3">
            <div className="border rounded p-3 h-100 text-center">
              ¿Tiene errores?
            </div>
          </div>

          <div className="col-md-3">
            <div className="border rounded p-3 h-100 text-center">
              ¿Cumple la tarea?
            </div>
          </div>

          <div className="col-md-3">
            <div className="border rounded p-3 h-100 text-center">
              ¿Afecta otra parte?
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* TERMINADO */}
        <span className="badge text-bg-dark mb-2">Etapa 5</span>

        <h2 className="fw-bold">Terminado</h2>

        <p className="mt-3">
          Si el Pull Request fue revisado y aprobado, se realiza el Merge hacia
          la rama principal.
        </p>

        <div className="bg-light border rounded p-4 text-center mt-4">
          <span className="badge text-bg-warning fs-6 p-3">
            Pendiente de revisión
          </span>

          <span className="mx-3 fs-4">→</span>

          <span className="badge text-bg-primary fs-6 p-3">
            Pull Request aprobado
          </span>

          <span className="mx-3 fs-4">→</span>

          <span className="badge text-bg-success fs-6 p-3">Terminado</span>
        </div>

        <p className="mt-4">
          Recién en este momento movemos la tarjeta a<strong> Terminado</strong>
          .
        </p>

        <hr className="my-5" />

        {/* FLUJO COMPLETO */}
        <h2 className="fw-bold text-center mb-4">
          Flujo completo de una tarea
        </h2>

        {/* TABLERO DE EJEMPLO */}
        <h2 className="fw-bold text-center mb-3">
          Ejemplo real: desarrollo de este sitio
        </h2>

        <p className="text-secondary text-center mb-4">
          Podemos utilizar este mismo sitio de clases como ejemplo de cómo
          organizar un proyecto utilizando Trello.
        </p>

        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-5 g-3">
          {/* BACKLOG */}
          <div className="col">
            <div className="border rounded p-3 h-100 bg-light">
              <h5 className="fw-bold text-center mb-3">Backlog</h5>

              <div className="bg-white border rounded p-2 mb-2">
                Clase 9 - Formularios
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                Clase 10 - Validaciones
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                Clase 11 - Arrays y .map()
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                Clase 12 - Tablas
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                Clase 13 - CRUD
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                APIs y base de datos
              </div>

              <div className="bg-white border rounded p-2 mb-2">Login real</div>

              <div className="bg-white border rounded p-2 mb-2">
                Roles y permisos
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                Buscador de clases
              </div>

              <div className="bg-white border rounded p-2">Modo oscuro</div>
            </div>
          </div>

          {/* SPRINT ACTUAL */}
          <div className="col">
            <div className="border rounded p-3 h-100 bg-light">
              <h5 className="fw-bold text-center mb-3">Sprint actual</h5>

              <div className="bg-white border rounded p-2 mb-2">
                Clase 7 - Props
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                Clase 8 - useState y eventos
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                Mejorar responsive
              </div>

              <div className="bg-white border rounded p-2">
                Navegación entre clases
              </div>
            </div>
          </div>

          {/* EN PROCESO */}
          <div className="col">
            <div className="border rounded p-3 h-100 bg-light">
              <h5 className="fw-bold text-center mb-3">En proceso</h5>

              <div className="bg-white border rounded p-2 mb-2">
                Mejorar menú de clases
              </div>

              <div className="bg-white border rounded p-2">
                Agregar imágenes a Clase 6
              </div>
            </div>
          </div>

          {/* REVISIÓN */}
          <div className="col">
            <div className="border rounded p-3 h-100 bg-light">
              <h5 className="fw-bold text-center mb-3">
                Pendiente de revisión
              </h5>

              <div className="bg-white border rounded p-2 mb-2">
                Clase 6 - SCRUM con Trello
              </div>

              <div className="bg-white border rounded p-2">Mejorar Footer</div>
            </div>
          </div>

          {/* TERMINADO */}
          <div className="col">
            <div className="border rounded p-3 h-100 bg-light">
              <h5 className="fw-bold text-center mb-3">Terminado</h5>

              <div className="bg-white border rounded p-2 mb-2">
                Clase 1 - Introducción a React
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                Clase 2 - Componentes
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                Clase 3 - Bootstrap
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                Clase 4 - React Router
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                Clase 5 - Git y GitHub
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                Publicar sitio en Vercel
              </div>

              <div className="bg-white border rounded p-2 mb-2">
                Crear repositorio GitHub
              </div>

              <div className="bg-white border rounded p-2">
                Dropdown de clases
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* EJEMPLO 4 INTEGRANTES */}
        <h2 className="fw-bold mb-3">Ejemplo: grupo de cuatro integrantes</h2>

        <div className="table-responsive mt-4">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Integrante</th>
                <th>Tarea</th>
                <th>Estado</th>
                <th>Rama</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alumno 1</td>
                <td>Inicio</td>
                <td>Pendiente de revisión</td>
                <td>
                  <code>cambios/inicio</code>
                </td>
              </tr>

              <tr>
                <td>Alumno 2</td>
                <td>Login</td>
                <td>En proceso</td>
                <td>
                  <code>cambios/login</code>
                </td>
              </tr>

              <tr>
                <td>Alumno 3</td>
                <td>Registro</td>
                <td>En proceso</td>
                <td>
                  <code>cambios/registro</code>
                </td>
              </tr>

              <tr>
                <td>Alumno 4</td>
                <td>Navbar</td>
                <td>Terminado</td>
                <td>
                  <code>cambios/navbar</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* TARJETA TRELLO */}
        <h2 className="fw-bold mb-3">
          ¿Qué debería tener una tarjeta de Trello?
        </h2>

        <p>
          No queremos tarjetas que solamente digan
          <strong> "hacer login"</strong>.
        </p>

        <p>La tarjeta debe dejar claro qué trabajo hay que realizar.</p>

        <div className="card shadow-sm mt-4">
          <div className="card-body">
            <div className="d-flex gap-2 mb-3">
              <span className="badge text-bg-primary">Frontend</span>

              <span className="badge text-bg-warning">Mejora</span>
            </div>

            <h4 className="fw-bold">Crear pantalla de Login</h4>

            <p>
              Diseñar la pantalla que permita al usuario ingresar email y
              contraseña.
            </p>

            <hr />

            <p className="mb-1">
              <strong>Responsable:</strong> Alumno 2
            </p>

            <p className="mb-1">
              <strong>Rama:</strong>
              <code> feature/login</code>
            </p>

            <p className="mb-0">
              <strong>Estado:</strong> En proceso
            </p>
          </div>
        </div>

        <hr className="my-5" />

        {/* ETIQUETAS */}
        <h2 className="fw-bold mb-3">Uso de etiquetas</h2>

        <p>
          Trello permite agregar <strong>etiquetas</strong> a las tarjetas. Las
          utilizaremos para identificar rápidamente qué tipo de tarea estamos
          realizando.
        </p>

        <p>
          Cada etiqueta tendrá un color y un significado definido por el equipo.
          Es importante mantener el mismo criterio durante todo el proyecto.
        </p>

        <div className="table-responsive mt-4">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Etiqueta</th>
                <th>Tipo de tarea</th>
                <th>Ejemplo</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <span className="badge text-bg-primary">Frontend</span>
                </td>
                <td>Pantallas, componentes y diseño visual.</td>
                <td>Crear pantalla de Login.</td>
              </tr>

              <tr>
                <td>
                  <span className="badge text-bg-success">Backend / Datos</span>
                </td>
                <td>Base de datos, Firebase, APIs y manejo de información.</td>
                <td>Guardar usuarios registrados.</td>
              </tr>

              <tr>
                <td>
                  <span className="badge text-bg-warning">Mejora</span>
                </td>
                <td>Modificación o mejora de una funcionalidad existente.</td>
                <td>Mejorar diseño responsive.</td>
              </tr>

              <tr>
                <td>
                  <span className="badge text-bg-danger">Error / Bug</span>
                </td>
                <td>Corrección de algo que no funciona correctamente.</td>
                <td>Corregir error al iniciar sesión.</td>
              </tr>

              <tr>
                <td>
                  <span
                    className="badge"
                    style={{ backgroundColor: "#6f42c1" }}
                  >
                    Documentación
                  </span>
                </td>
                <td>Investigación, documentación o planificación.</td>
                <td>Documentar funcionalidades del sistema.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="alert alert-primary mt-4">
          <strong>Importante:</strong> las etiquetas indican el tipo de tarea,
          mientras que las columnas indican el estado de la tarea.
        </div>

        <hr className="my-5" />

        {/* REGLAS */}
        <div className="card border-primary">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Reglas de trabajo</h4>
          </div>

          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                ✓ Toda tarea debe existir en Trello.
              </div>

              <div className="col-md-6">
                ✓ Cada tarea debe tener un responsable.
              </div>

              <div className="col-md-6">
                ✓ Solo trabajamos tareas del Sprint actual.
              </div>

              <div className="col-md-6">
                ✓ Al comenzar una tarea se crea una rama.
              </div>

              <div className="col-md-6">
                ✓ Una tarea en revisión debe tener Pull Request.
              </div>

              <div className="col-md-6">
                ✓ Una tarea no pasa a Terminado sin revisión.
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* CHECKLIST */}
        <h2 className="fw-bold mb-3">Antes de comenzar a programar</h2>

        <div className="bg-light border rounded p-4">
          <div className="mb-2">☐ Existe una tarjeta en Trello.</div>

          <div className="mb-2">☐ La tarea pertenece al Sprint actual.</div>

          <div className="mb-2">☐ La tarjeta tiene un responsable.</div>

          <div className="mb-2">☐ La tarea tiene una descripción clara.</div>

          <div className="mb-2">
            ☐ La tarjeta tiene la etiqueta correspondiente.
          </div>

          <div>☐ Se creó una rama para esa tarea.</div>
        </div>

        <h2 className="fw-bold mt-5 mb-3">
          Antes de marcar una tarea como terminada
        </h2>

        <div className="bg-light border rounded p-4">
          <div className="mb-2">☐ La funcionalidad funciona.</div>

          <div className="mb-2">☐ Se realizó commit.</div>

          <div className="mb-2">☐ La rama fue subida a GitHub.</div>

          <div className="mb-2">☐ Existe un Pull Request.</div>

          <div className="mb-2">☐ Otro integrante revisó los cambios.</div>

          <div>☐ Se realizó el Merge hacia main.</div>
        </div>

        <hr className="my-5" />

        {/* ACTIVIDAD */}
        <div className="alert alert-primary">
          <h5 className="alert-heading fw-bold">Actividad del equipo</h5>

          <p>
            Cada grupo deberá crear y organizar el tablero Trello
            correspondiente a su proyecto.
          </p>

          <ol className="mb-0">
            <li>Crear un tablero para el proyecto.</li>

            <li>
              Crear las columnas Backlog, Sprint actual, En proceso, Pendiente
              de revisión y Terminado.
            </li>

            <li>
              Cargar en el Backlog las funcionalidades principales definidas
              para el proyecto.
            </li>

            <li>
              Seleccionar las tareas que formarán parte del primer Sprint.
            </li>

            <li>Asignar responsables a las tareas.</li>

            <li>
              Cada integrante debe seleccionar una tarea y moverla a En proceso.
            </li>

            <li>Crear una rama de GitHub relacionada con esa tarea.</li>

            <li>
              Mantener actualizado el estado de cada tarjeta durante el
              desarrollo.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Clase6;
