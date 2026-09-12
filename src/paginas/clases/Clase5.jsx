import React from "react";
import "../../estilosPaginas/clase5.css";
import colaboradoresGithub from "../../assets/clase5/colaboradores-github.jpeg";
import pullRequest1 from "../../assets/clase5/pull-request-1.png";
import pullRequest2 from "../../assets/clase5/pull-request-2.png";

function Clase5() {
  return (
    <main>
      {/* PRESENTACIÓN */}
      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 5</span>

          <h1 className="fw-bold">Trabajo colaborativo con Git y GitHub</h1>

          <p className="lead text-secondary mt-3">
            En esta clase vamos a organizar el trabajo del equipo utilizando
            repositorios, colaboradores, ramas y Pull Requests.
          </p>
        </div>
      </section>

      <section className="container py-5">
        {/* INTRODUCCIÓN */}
        <h2 className="fw-bold mb-3">¿Cómo vamos a trabajar?</h2>

        <p>
          Los proyectos de la materia se desarrollan en equipos de cuatro
          integrantes. Todos van a trabajar sobre el mismo proyecto, pero cada
          integrante realizará sus cambios en una rama independiente.
        </p>

        <p>
          La rama <strong>main</strong> representará la versión principal y
          estable del proyecto.
        </p>

        <div className="alert alert-danger mt-4">
          <strong>Regla principal:</strong> no vamos a desarrollar nuevas
          funcionalidades directamente sobre la rama <code>main</code>.
        </div>

        {/* DIAGRAMA GENERAL */}
        <div className="border rounded p-4 my-5 bg-light text-center">
          <h5 className="fw-bold mb-4">Organización del repositorio</h5>

          <div className="row justify-content-center g-3">
            <div className="col-md-3">
              <div className="bg-dark text-white rounded p-3">main</div>
            </div>
          </div>

          <div className="fs-3 my-3">↓</div>

          <div className="row justify-content-center g-3">
            <div className="col-md-3">
              <div className="border bg-white rounded p-3">cambios/login</div>
            </div>

            <div className="col-md-3">
              <div className="border bg-white rounded p-3">cambios/navbar</div>
            </div>

            <div className="col-md-3">
              <div className="border bg-white rounded p-3">
                cambios/catalogo
              </div>
            </div>
          </div>

          <div className="fs-3 my-3">↓</div>

          <span className="badge text-bg-primary fs-6">
            Pull Request → Revisión → Merge → main
          </span>
        </div>

        <hr className="my-5" />

        {/* PASO 1 */}
        <span className="badge text-bg-dark mb-2">Paso 1</span>

        <h2 className="fw-bold">Crear el repositorio</h2>

        <p className="mt-3">
          Un integrante del equipo será el encargado de crear inicialmente el
          proyecto React y subirlo a GitHub.
        </p>

        <div className="alert alert-secondary">
          Este procedimiento se realiza <strong>una sola vez</strong> al
          comenzar el proyecto.
        </div>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`git init

git add .

git commit -m "Proyecto inicial"

git branch -M main

git remote add origin URL_DEL_REPOSITORIO

git push -u origin main`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* PASO 2 */}
        <span className="badge text-bg-dark mb-2">Paso 2</span>

        <h2 className="fw-bold">Agregar colaboradores</h2>

        <p className="mt-3">
          El creador del repositorio debe agregar a los otros tres integrantes
          del grupo como colaboradores.
        </p>

        <div className="bg-light border rounded p-4 my-4">
          <strong>En GitHub:</strong>

          <div className="mt-3">
            Repositorio
            <span className="mx-2">→</span>
            Settings
            <span className="mx-2">→</span>
            Collaborators
            <span className="mx-2">→</span>
            Add people
          </div>
        </div>

        <p className="text-secondary">
          Cada integrante deberá aceptar la invitación para poder trabajar sobre
          el repositorio.
        </p>

        {/* ESPACIO PARA IMAGEN */}
        <div className="border rounded bg-light p-3 text-center my-4">
          <img
            src={colaboradoresGithub}
            alt="Agregar colaboradores en GitHub"
            className="imagen-clase"
          />
        </div>

        <hr className="my-5" />

        {/* PASO 3 */}
        <span className="badge text-bg-dark mb-2">Paso 3</span>

        <h2 className="fw-bold">Clonar el proyecto</h2>

        <p className="mt-3">
          Los demás integrantes necesitan descargar una copia del repositorio en
          sus computadoras.
        </p>

        <p>Para hacerlo utilizamos:</p>

        <div className="bg-dark text-light p-3 rounded">
          <code>git clone URL_DEL_REPOSITORIO</code>
        </div>

        <div className="alert alert-primary mt-4">
          <strong>Importante:</strong> el repositorio se clona una sola vez. No
          necesitamos volver a clonarlo cada vez que queremos trabajar.
        </div>

        <hr className="my-5" />

        {/* PASO 4 */}
        <span className="badge text-bg-dark mb-2">Paso 4</span>

        <h2 className="fw-bold">Antes de comenzar una tarea</h2>

        <p className="mt-3">
          Antes de crear una nueva rama debemos asegurarnos de tener actualizada
          la versión principal del proyecto.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`git switch main

git pull origin main`}
            </code>
          </pre>
        </div>

        <div className="mt-4 border-start border-4 border-primary ps-3">
          <strong>¿Por qué hacemos esto?</strong>

          <p className="text-secondary mb-0 mt-2">
            Porque otro integrante puede haber incorporado cambios al proyecto
            desde la última vez que trabajamos.
          </p>
        </div>

        <hr className="my-5" />

        {/* PASO 5 */}
        <span className="badge text-bg-dark mb-2">Paso 5</span>

        <h2 className="fw-bold">Crear una rama nueva</h2>

        <p className="mt-3">
          Cada vez que comenzamos una nueva tarea debemos crear una rama.
        </p>

        <p>Por ejemplo, si tenemos que desarrollar el Login:</p>

        <div className="bg-dark text-light p-3 rounded">
          <code>git switch -c cambios/login</code>
        </div>

        <p className="mt-4">Si otro integrante está desarrollando el Navbar:</p>

        <div className="bg-dark text-light p-3 rounded">
          <code>git switch -c cambios/navbar</code>
        </div>

        <div className="alert alert-warning mt-4">
          <strong>Regla del equipo:</strong>
          <div className="fs-5 fw-bold mt-2">
            Una tarea nueva = una rama nueva
          </div>
        </div>

        <hr className="my-5" />

        {/* NOMBRES RAMAS */}
        <h2 className="fw-bold mb-3">¿Cómo nombramos las ramas?</h2>

        <p>
          Utilizaremos nombres que permitan identificar fácilmente qué
          funcionalidad se está desarrollando.
        </p>

        <div className="row g-3 mt-2">
          <div className="col-md-4">
            <div className="border rounded p-3 h-100">
              <code>cambios/login</code>
              <p className="small text-secondary mt-2 mb-0">
                Pantalla de inicio de sesión.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 h-100">
              <code>cambios/registro</code>
              <p className="small text-secondary mt-2 mb-0">
                Registro de usuarios.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 h-100">
              <code>cambios/navbar</code>
              <p className="small text-secondary mt-2 mb-0">
                Barra de navegación.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 h-100">
              <code>cambios/catalogo</code>
              <p className="small text-secondary mt-2 mb-0">
                Catálogo del sistema.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 h-100">
              <code>cambios/carrito</code>
              <p className="small text-secondary mt-2 mb-0">
                Carrito de compras.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 h-100">
              <code>cambios/usuarios</code>
              <p className="small text-secondary mt-2 mb-0">
                Administración de usuarios.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* PASO 6 */}
        <span className="badge text-bg-dark mb-2">Paso 6</span>

        <h2 className="fw-bold">Trabajar y guardar los cambios</h2>

        <p className="mt-3">
          Una vez creada nuestra rama podemos trabajar normalmente en el
          proyecto.
        </p>

        <p>Cuando tenemos cambios listos para guardar:</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`git add .

git commit -m "Crear pantalla de login"`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          El mensaje del commit debe explicar brevemente qué hicimos.
        </p>

        <div className="row g-3">
          <div className="col-md-6">
            <div className="alert alert-success h-100 mb-0">
              <strong>✓ Buen commit</strong>
              <div className="mt-2">Crear formulario de registro</div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="alert alert-danger h-100 mb-0">
              <strong>✗ Mal commit</strong>
              <div className="mt-2">cambios</div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* PASO 7 */}
        <span className="badge text-bg-dark mb-2">Paso 7</span>

        <h2 className="fw-bold">Subir nuestra rama a GitHub</h2>

        <p className="mt-3">
          Cuando queremos compartir nuestra rama con el equipo debemos subirla
          al repositorio.
        </p>

        <div className="bg-dark text-light p-3 rounded">
          <code>git push -u origin cambios/login</code>
        </div>

        <p className="mt-4">
          En este ejemplo estamos enviando la rama
          <code> cambios/login</code> a GitHub.
        </p>

        <hr className="my-5" />

        {/* PASO 8 */}
        <span className="badge text-bg-dark mb-2">Paso 8</span>

        <h2 className="fw-bold">Crear un Pull Request</h2>

        <p className="mt-3">
          Subir nuestra rama no significa que los cambios ya formen parte de{" "}
          <strong>main</strong>.
        </p>

        <p>
          Primero debemos solicitar que nuestros cambios sean incorporados. Para
          eso utilizamos un <strong>Pull Request</strong>.
        </p>

        <div className="bg-light border rounded p-4 my-4 text-center">
          <div className="row justify-content-center align-items-center g-3">
            <div className="col-md-3">
              <div className="border rounded bg-white p-3">cambios/login</div>
            </div>

            <div className="col-md-1 fs-4">→</div>

            <div className="col-md-3">
              <div className="bg-primary text-white rounded p-3">
                Pull Request
              </div>
            </div>

            <div className="col-md-1 fs-4">→</div>

            <div className="col-md-3">
              <div className="bg-dark text-white rounded p-3">main</div>
            </div>
          </div>
        </div>

        {/* ESPACIO IMAGEN */}
        <div className="border rounded bg-light p-3 text-center my-4">
          <img
            src={pullRequest1}
            alt="Agregar colaboradores en GitHub"
            className="imagen-clase"
          />
        </div>

        <div className="border rounded bg-light p-3 text-center my-4">
          <img
            src={pullRequest2}
            alt="Agregar colaboradores en GitHub"
            className="imagen-clase"
          />
        </div>

        <hr className="my-5" />

        {/* PASO 9 */}
        <span className="badge text-bg-dark mb-2">Paso 9</span>

        <h2 className="fw-bold">Revisar antes de hacer Merge</h2>

        <p className="mt-3">
          Otro integrante del equipo debe revisar los cambios antes de
          incorporarlos a la rama principal.
        </p>

        <div className="row g-3 mt-3">
          <div className="col-md-3">
            <div className="border rounded p-3 h-100 text-center">
              <strong>¿Funciona?</strong>
            </div>
          </div>

          <div className="col-md-3">
            <div className="border rounded p-3 h-100 text-center">
              <strong>¿Tiene errores?</strong>
            </div>
          </div>

          <div className="col-md-3">
            <div className="border rounded p-3 h-100 text-center">
              <strong>¿Respeta el diseño?</strong>
            </div>
          </div>

          <div className="col-md-3">
            <div className="border rounded p-3 h-100 text-center">
              <strong>¿Rompe otra parte?</strong>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* PASO 10 */}
        <span className="badge text-bg-dark mb-2">Paso 10</span>

        <h2 className="fw-bold">Merge a main</h2>

        <p className="mt-3">
          Si los cambios fueron revisados y funcionan correctamente, podemos
          realizar el <strong>Merge</strong>.
        </p>

        <div className="bg-light border rounded p-4 text-center my-4">
          <span className="badge text-bg-secondary fs-6 p-3">Rama</span>

          <span className="mx-3 fs-4">→</span>

          <span className="badge text-bg-primary fs-6 p-3">Pull Request</span>

          <span className="mx-3 fs-4">→</span>

          <span className="badge text-bg-success fs-6 p-3">Merge</span>

          <span className="mx-3 fs-4">→</span>

          <span className="badge text-bg-dark fs-6 p-3">main</span>
        </div>

        <div className="alert alert-success">
          Después del Merge, la funcionalidad ya forma parte de la versión
          principal del proyecto.
        </div>

        <hr className="my-5" />

        {/* SIGUIENTE TAREA */}
        <h2 className="fw-bold mb-3">¿Y ahora quiero comenzar otra tarea?</h2>

        <p>No continuamos utilizando la rama anterior.</p>

        <p>
          Volvemos a <strong>main</strong>, descargamos los últimos cambios y
          creamos una nueva rama.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`git switch main

git pull origin main

git switch -c cambios/nueva-tarea`}
            </code>
          </pre>
        </div>

        <div className="alert alert-warning mt-4">
          <strong>Recordá:</strong> cada funcionalidad o tarea nueva comienza
          desde un <code>main</code> actualizado y utiliza una rama nueva.
        </div>

        <hr className="my-5" />

        {/* FLUJO COMPLETO */}
        <h2 className="fw-bold text-center mb-4">Flujo completo de trabajo</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">1. Cambiar a main</div>

              <div>↓</div>

              <div className="border rounded p-3">
                2. Actualizar con git pull
              </div>

              <div>↓</div>

              <div className="border rounded p-3">3. Crear una rama nueva</div>

              <div>↓</div>

              <div className="border rounded p-3">
                4. Programar la funcionalidad
              </div>

              <div>↓</div>

              <div className="border rounded p-3">5. git add + git commit</div>

              <div>↓</div>

              <div className="border rounded p-3">6. git push</div>

              <div>↓</div>

              <div className="border rounded p-3">7. Crear Pull Request</div>

              <div>↓</div>

              <div className="border rounded p-3">8. Revisar</div>

              <div>↓</div>

              <div className="bg-success text-white rounded p-3">
                9. Merge a main
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* EJEMPLO EQUIPO */}
        <h2 className="fw-bold mb-3">Ejemplo: equipo de 4 integrantes</h2>

        <p>
          Los cuatro integrantes pueden trabajar al mismo tiempo sobre
          diferentes tareas.
        </p>

        <div className="table-responsive mt-4">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Integrante</th>
                <th>Tarea</th>
                <th>Rama</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Alumno 1</td>
                <td>Página de Inicio</td>
                <td>
                  <code>cambios/inicio</code>
                </td>
              </tr>

              <tr>
                <td>Alumno 2</td>
                <td>Login</td>
                <td>
                  <code>cambios/login</code>
                </td>
              </tr>

              <tr>
                <td>Alumno 3</td>
                <td>Registro</td>
                <td>
                  <code>cambios/registro</code>
                </td>
              </tr>

              <tr>
                <td>Alumno 4</td>
                <td>Navbar</td>
                <td>
                  <code>cambios/navbar</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* REGLAS */}
        <div className="card border-primary">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Reglas de trabajo del equipo</h4>
          </div>

          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6">
                ✓ No programar directamente sobre main.
              </div>

              <div className="col-md-6">
                ✓ Actualizar main antes de comenzar.
              </div>

              <div className="col-md-6">
                ✓ Una tarea nueva utiliza una rama nueva.
              </div>

              <div className="col-md-6">
                ✓ Utilizar nombres claros para las ramas.
              </div>

              <div className="col-md-6">
                ✓ Escribir mensajes de commit comprensibles.
              </div>

              <div className="col-md-6">
                ✓ Crear un Pull Request para incorporar cambios.
              </div>

              <div className="col-md-6">
                ✓ Revisar el trabajo de otro integrante.
              </div>

              <div className="col-md-6">
                ✓ Hacer Merge solamente cuando el cambio funciona.
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* RESUMEN COMANDOS */}
        <h2 className="fw-bold mb-3">Comandos que vamos a utilizar</h2>

        <p>
          Este bloque puede utilizarse como referencia rápida durante el
          desarrollo del proyecto.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`# Ir a la rama principal
git switch main

# Descargar los últimos cambios
git pull origin main

# Crear una rama nueva
git switch -c cambios/nombre-tarea

# Preparar los cambios
git add .

# Crear un commit
git commit -m "Descripción del cambio"

# Subir la rama
git push -u origin cambios/nombre-tarea`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ACTIVIDAD */}
        <div className="alert alert-primary">
          <h5 className="alert-heading fw-bold">Actividad del equipo</h5>

          <p>
            Cada grupo deberá preparar su repositorio para comenzar el trabajo
            colaborativo.
          </p>

          <ol className="mb-0">
            <li>
              Verificar que el proyecto esté correctamente subido a GitHub.
            </li>

            <li>Agregar como colaboradores a los cuatro integrantes.</li>

            <li>
              Cada integrante debe clonar el repositorio en su computadora.
            </li>

            <li>Cada integrante debe crear una rama diferente.</li>

            <li>Realizar un cambio pequeño dentro de esa rama.</li>

            <li>Crear un commit con un mensaje descriptivo.</li>

            <li>Subir la rama a GitHub.</li>

            <li>Crear un Pull Request hacia main.</li>

            <li>Otro integrante deberá revisar el Pull Request.</li>

            <li>Si el cambio funciona correctamente, realizar el Merge.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Clase5;
