import React from "react";

function Clase20() {
  return (
    <main>
      {/* ====================================== */}
      {/* PRESENTACIÓN */}
      {/* ====================================== */}

      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 20</span>

          <h1 className="fw-bold">Seguridad y administración de datos</h1>

          <p className="lead text-secondary mt-3">
            Nuestro CRUD ya funciona, pero por ahora cualquier usuario
            autenticado puede hacer cualquier cosa. Hoy escribimos reglas de
            seguridad reales, basadas en autenticación y en el rol de cada
            usuario.
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
            <li>Repasar la estructura de las reglas de seguridad de Firestore.</li>
            <li>Restringir el acceso según autenticación.</li>
            <li>Restringir el acceso según el rol del usuario.</li>
            <li>
              Diferenciar permisos de alta, modificación y eliminación.
            </li>
            <li>Usar el Rules Playground para verificar permisos.</li>
          </ul>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* REPASO ESTRUCTURA */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Estructura de las reglas de seguridad</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    match /productos/{productoId} {
      allow read: if <condición>;
      allow write: if <condición>;
    }

  }
}`}</code>
          </pre>
        </div>

        <ul className="mt-3">
          <li>
            <code>match /productos/{"{productoId}"}</code> apunta a los
            documentos de la colección <code>productos</code>.
          </li>
          <li>
            <code>allow read</code> agrupa <code>get</code> (leer un
            documento) y <code>list</code> (leer una colección completa).
          </li>
          <li>
            <code>allow write</code> agrupa <code>create</code>,{" "}
            <code>update</code> y <code>delete</code>. Si queremos tratarlos
            distinto (como en esta clase), los separamos.
          </li>
        </ul>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ACCESO SEGÚN AUTENTICACIÓN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Acceso según autenticación</h2>

        <p>
          <code>request.auth</code> contiene la información del usuario que
          hace el pedido. Si no hay sesión iniciada,{" "}
          <code>request.auth</code> es <code>null</code>.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`match /productos/{productoId} {
  // Solo usuarios autenticados pueden leer
  allow read: if request.auth != null;
}`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* PERMISOS SEGÚN ROL */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Permisos según el rol</h2>

        <p>
          Recordemos que en la Clase 16 guardamos el rol de cada usuario en{" "}
          <code>usuarios/{"{uid}"}</code>. Las reglas pueden leer ese mismo
          documento con <code>get()</code> para decidir qué permitir:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`function obtenerRol() {
  return get(/databases/$(database)/documents/usuarios/$(request.auth.uid)).data.rol;
}

match /productos/{productoId} {
  allow read: if request.auth != null;

  allow create, update: if request.auth != null
    && (obtenerRol() == "administrador" || obtenerRol() == "empleado");

  allow delete: if request.auth != null
    && obtenerRol() == "administrador";
}`}</code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4 mb-0">
          Las funciones evitan repetir la misma condición en cada regla. Pueden
          usar <code>request</code>, <code>resource</code>, <code>get()</code>{" "}
          y <code>exists()</code>, y tienen un solo <code>return</code> (sin
          bucles). En este ejemplo las declaramos dentro de{" "}
          <code>match /databases/{"{database}"}/documents {"{"}</code> porque
          así pueden usar la variable <code>database</code>.
        </div>

        <div className="alert alert-warning mt-3 mb-0">
          Cada llamada a <code>get()</code> cuenta como una lectura en la
          facturación, y una sola operación admite hasta 10 accesos a otros
          documentos desde las reglas. Por eso conviene usar el rol una vez
          por regla y no encadenar consultas.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* REGLAS COMPLETAS */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Reglas completas de ejemplo</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    function estaAutenticado() {
      return request.auth != null;
    }

    function obtenerRol() {
      return get(/databases/$(database)/documents/usuarios/$(request.auth.uid)).data.rol;
    }

    // Perfiles de usuario
    match /usuarios/{uid} {
      allow read: if estaAutenticado() && request.auth.uid == uid;

      allow create: if estaAutenticado()
                    && request.auth.uid == uid
                    && request.resource.data.rol == "usuario";

      allow update, delete: if false;
    }

    // Entidad principal del proyecto (ej: productos)
    match /productos/{productoId} {
      allow read: if estaAutenticado();

      allow create, update: if estaAutenticado()
        && (obtenerRol() == "administrador" || obtenerRol() == "empleado");

      allow delete: if estaAutenticado() && obtenerRol() == "administrador";
    }

  }
}`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* SIMULADOR DE REGLAS */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Verificar con el Rules Playground</h2>

        <p>
          Firestore Console incluye el <strong>Rules Playground</strong>{" "}
          (simulador de reglas) para probar las reglas sin arriesgar datos
          reales:
        </p>

        <ol>
          <li>
            En Firestore Console, ir a la pestaña <strong>Reglas</strong>{" "}
            (<em>Rules</em>).
          </li>
          <li>
            Hacer clic en <strong>Rules Playground</strong>.
          </li>
          <li>
            Elegir el tipo de operación (get, list, create, update, delete),
            la ruta del documento y, con el interruptor de autenticación, si
            simula un usuario autenticado (con su UID). Para create y update
            se completa también el contenido del documento.
          </li>
          <li>
            Ejecutar y revisar si el resultado es{" "}
            <strong>permitido</strong> o <strong>denegado</strong>, y si
            coincide con lo esperado.
          </li>
        </ol>

        <div className="table-responsive mt-3">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Caso simulado</th>
                <th>Resultado esperado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Leer productos sin autenticar</td>
                <td>Denegado</td>
              </tr>
              <tr>
                <td>Leer productos autenticado con rol "usuario"</td>
                <td>Permitido</td>
              </tr>
              <tr>
                <td>Crear un producto con rol "usuario"</td>
                <td>Denegado</td>
              </tr>
              <tr>
                <td>Crear un producto con rol "empleado"</td>
                <td>Permitido</td>
              </tr>
              <tr>
                <td>Eliminar un producto con rol "empleado"</td>
                <td>Denegado</td>
              </tr>
              <tr>
                <td>Eliminar un producto con rol "administrador"</td>
                <td>Permitido</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ERRORES FRECUENTES */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Errores frecuentes</h2>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Síntoma</th>
                <th>Causa habitual</th>
                <th>Solución</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Las reglas quedan bloqueando todo, incluso al dueño
                </td>
                <td>
                  El documento <code>usuarios/{"{uid}"}</code> no existe (el
                  registro no lo creó) o no tiene el campo <code>rol</code>,
                  y <code>obtenerRol()</code> falla.
                </td>
                <td>
                  Revisar en Firestore Console que exista el documento con
                  el campo <code>rol</code>, y que la regla de{" "}
                  <code>usuarios/{"{uid}"}</code> permita que el propio
                  usuario lo cree y lo lea.
                </td>
              </tr>
              <tr>
                <td>
                  Las reglas "parecen correctas" pero igual rechazan todo
                </td>
                <td>Error de indentación o de paréntesis en la regla.</td>
                <td>
                  Usar el botón <strong>Publicar</strong> solo después de
                  que la consola no marque errores de sintaxis, y probar con
                  el Rules Playground antes de dar por terminado.
                </td>
              </tr>
              <tr>
                <td>Funciona en el Rules Playground pero no en la app</td>
                <td>
                  Las reglas no se publicaron, o la app sigue usando la
                  versión en caché.
                </td>
                <td>
                  Verificar que las reglas estén publicadas (no solo
                  guardadas) y recargar la app.
                </td>
              </tr>
            </tbody>
          </table>
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
              Escribir las reglas de seguridad completas para las
              colecciones del proyecto (usuarios y la entidad principal).
            </li>
            <li>
              Restringir lectura a usuarios autenticados y escritura según
              el rol definido en la Clase 16.
            </li>
            <li>
              Probar al menos 4 casos distintos en el Rules Playground
              (como los de la tabla de esta clase).
            </li>
            <li>Publicar las reglas y probar la aplicación real.</li>
            <li>Registrar las tareas en Trello y trabajar en ramas propias.</li>
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
              href="https://firebase.google.com/docs/firestore/security/rules-structure"
              target="_blank"
              rel="noreferrer"
            >
              Firestore — Estructura de las reglas de seguridad
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/docs/firestore/security/rules-conditions"
              target="_blank"
              rel="noreferrer"
            >
              Firestore — Condiciones en las reglas
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/docs/firestore/security/test-rules-emulator"
              target="_blank"
              rel="noreferrer"
            >
              Firestore — Probar reglas de seguridad
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Clase20;
