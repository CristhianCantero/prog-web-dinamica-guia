import React from "react";

function Clase17() {
  return (
    <main>
      {/* ====================================== */}
      {/* PRESENTACIÓN */}
      {/* ====================================== */}

      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 17</span>

          <h1 className="fw-bold">Introducción a la administración de datos</h1>

          <p className="lead text-secondary mt-3">
            Hasta ahora, los datos de nuestros proyectos (productos, libros,
            turnos, etc.) vivían únicamente en el estado de React: al
            recargar la página, desaparecían. Hoy vemos cómo guardarlos de
            forma permanente.
          </p>
        </div>
      </section>

      <section className="container py-5">
        {/* ====================================== */}
        {/* OBJETIVOS */}
        {/* ====================================== */}

        <div className="alert alert-primary">
          <h5 className="alert-heading fw-bold">Objetivos de la clase</h5>
          <ul className="mb-0">
            <li>Entender qué es la persistencia de datos.</li>
            <li>
              Diferenciar bases de datos relacionales de bases de datos
              NoSQL.
            </li>
            <li>Comprender la arquitectura frontend/backend.</li>
            <li>Saber qué es una API REST.</li>
            <li>
              Conocer las dos alternativas para administrar datos en este
              curso y por qué vamos a usar Firestore.
            </li>
          </ul>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* DATOS TEMPORALES VS PERMANENTES */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Datos temporales vs. datos permanentes</h2>

        <div className="table-responsive mt-3">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th></th>
                <th>Datos temporales</th>
                <th>Datos permanentes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>¿Dónde viven?</td>
                <td>En memoria del navegador (useState)</td>
                <td>En un servidor / base de datos</td>
              </tr>
              <tr>
                <td>¿Sobreviven a un F5?</td>
                <td>No</td>
                <td>Sí</td>
              </tr>
              <tr>
                <td>¿Las ve otro usuario?</td>
                <td>No</td>
                <td>Sí</td>
              </tr>
              <tr>
                <td>Lo vimos en...</td>
                <td>Clase 12 (CRUD con array de useState)</td>
                <td>A partir de la Clase 18</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* QUÉ ES UNA BASE DE DATOS */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">¿Qué es una base de datos?</h2>

        <p>
          Es un sistema diseñado para guardar información de forma
          organizada, poder buscarla rápidamente y mantenerla segura, aunque
          la aplicación se cierre o el servidor se reinicie.
        </p>

        <h3 className="fw-bold mt-4 mb-3">
          Bases de datos relacionales y NoSQL
        </h3>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th></th>
                <th>Relacional (ej: MySQL)</th>
                <th>NoSQL (ej: Firestore)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Organización</td>
                <td>Tablas con filas y columnas</td>
                <td>Colecciones con documentos</td>
              </tr>
              <tr>
                <td>Estructura</td>
                <td>Rígida, definida por un esquema</td>
                <td>Flexible, cada documento puede variar</td>
              </tr>
              <tr>
                <td>Relaciones</td>
                <td>Claves foráneas entre tablas</td>
                <td>Referencias o datos anidados</td>
              </tr>
              <tr>
                <td>Se consulta con</td>
                <td>SQL</td>
                <td>Métodos del SDK (query, where, etc.)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="fw-bold mt-4 mb-3">Analogía: tablas vs. colecciones</h3>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold text-center">Relacional</h5>
              <p className="text-center text-secondary mb-2">
                tabla → fila → columna
              </p>
              <p className="mb-0 text-center">
                productos <br /> → fila con id=1 <br /> → columna "nombre"
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold text-center">NoSQL (Firestore)</h5>
              <p className="text-center text-secondary mb-2">
                colección → documento → campo
              </p>
              <p className="mb-0 text-center">
                productos <br /> → documento con id="abc123" <br /> → campo
                "nombre"
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CRUD REPASO */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">CRUD: de local a remoto</h2>

        <p>
          En la Clase 12 ya implementamos Create, Read, Update y Delete,
          pero trabajando contra un array en memoria. La lógica de{" "}
          <em>qué</em> hace cada operación no cambia; lo que va a cambiar es{" "}
          <em>dónde</em> se guardan los datos y que ahora cada operación va
          a ser <strong>asíncrona</strong> (toma tiempo, porque viaja por
          internet).
        </p>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ARQUITECTURA FRONTEND/BACKEND */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Arquitectura frontend / backend</h2>

        <div className="row justify-content-center mt-3">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">
                Frontend (React, en el navegador)
              </div>
              <div>↕ pedido / respuesta</div>
              <div className="border rounded p-3">
                Backend (servidor que procesa y valida)
              </div>
              <div>↕ lectura / escritura</div>
              <div className="bg-primary text-white rounded p-3">
                Base de datos
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4">
          El frontend nunca accede a la base de datos directamente: siempre
          hay un backend en el medio que valida, autoriza y responde. Con
          Firestore, Firebase actúa como ese backend, y las reglas de
          seguridad (Clase 20) cumplen el rol de validación.
        </p>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* API REST */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">¿Qué es una API REST?</h2>

        <p>
          Una API REST es una forma estandarizada en la que un frontend le
          pide cosas a un backend, usando el protocolo HTTP. Cada operación
          se asocia típicamente con un método:
        </p>

        <div className="table-responsive mt-3">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Método HTTP</th>
                <th>Operación CRUD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>GET</code>
                </td>
                <td>Read (leer)</td>
              </tr>
              <tr>
                <td>
                  <code>POST</code>
                </td>
                <td>Create (crear)</td>
              </tr>
              <tr>
                <td>
                  <code>PUT</code>
                </td>
                <td>Update (modificar)</td>
              </tr>
              <tr>
                <td>
                  <code>DELETE</code>
                </td>
                <td>Delete (eliminar)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* FIRESTORE VS MYSQL */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Firestore vs. MySQL</h2>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Criterio</th>
                <th>Firestore</th>
                <th>MySQL + Node/Express</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Backend propio</td>
                <td>No hace falta, lo provee Firebase</td>
                <td>Hay que programarlo (API REST)</td>
              </tr>
              <tr>
                <td>Conexión desde React</td>
                <td>Directa, con el SDK de Firebase</td>
                <td>A través de <code>fetch()</code> a la API</td>
              </tr>
              <tr>
                <td>Validaciones y permisos</td>
                <td>Reglas de seguridad de Firestore</td>
                <td>Código del backend + middlewares</td>
              </tr>
              <tr>
                <td>Curva de aprendizaje</td>
                <td>Más rápida para este curso</td>
                <td>Más completa, más cercana a un backend tradicional</td>
              </tr>
              <tr>
                <td>Tiempo de implementación</td>
                <td>Menor</td>
                <td>Mayor</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="alert alert-primary mt-4">
          <h5 className="alert-heading fw-bold">Decisión del curso</h5>
          <p className="mb-0">
            Dado el tiempo que resta en el cuatrimestre, vamos a avanzar con{" "}
            <strong>Firestore</strong> para todos los grupos. Mantiene la
            misma autenticación con Firebase que ya implementamos, reduce la
            cantidad de piezas nuevas a aprender y permite llegar con un
            sistema completo y funcionando a la entrega final.
          </p>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ACTIVIDAD */}
        {/* ====================================== */}

        <div className="alert alert-primary">
          <h5 className="alert-heading fw-bold">
            Actividad aplicada al proyecto
          </h5>
          <ol className="mb-0">
            <li>
              Identificar qué entidad principal del proyecto se va a guardar
              en Firestore (productos, libros, turnos, publicaciones, etc.).
            </li>
            <li>
              Dibujar en papel o en un documento cómo quedaría esa colección
              y sus campos, siguiendo el ejemplo de "colección → documento →
              campo" visto en esta clase.
            </li>
            <li>
              Repasar el código del CRUD de la Clase 12: va a ser la base
              para conectar con Firestore en la Clase 19.
            </li>
          </ol>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* RECURSOS */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Recursos</h2>

        <ul>
          <li>
            <a
              href="https://firebase.google.com/docs/firestore/data-model"
              target="_blank"
              rel="noreferrer"
            >
              Firestore — Modelo de datos
            </a>
          </li>
          <li>
            <a
              href="https://cloud.google.com/learn/what-is-a-relational-database"
              target="_blank"
              rel="noreferrer"
            >
              ¿Qué es una base de datos relacional?
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/es/docs/Glossary/REST"
              target="_blank"
              rel="noreferrer"
            >
              MDN — ¿Qué es REST?
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Clase17;
