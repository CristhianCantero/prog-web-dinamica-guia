import React from "react";

function Clase21() {
  return (
    <main>
      {/* ====================================== */}
      {/* PRESENTACIÓN */}
      {/* ====================================== */}

      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 21</span>

          <h1 className="fw-bold">Integración y pruebas finales</h1>

          <p className="lead text-secondary mt-3">
            Llegamos a la última clase del recorrido de autenticación y
            datos. Hoy no hay contenido nuevo para programar: el objetivo es
            integrar todo lo visto desde la Clase 13, probarlo a fondo y
            dejar el proyecto publicado.
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
            <li>Verificar que todo el recorrido funcione de punta a punta.</li>
            <li>Probar el sistema con distintos usuarios y roles.</li>
            <li>Revisar la seguridad del proyecto antes de publicarlo.</li>
            <li>Publicar la versión final en Vercel.</li>
          </ul>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CHECKLIST */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Checklist de verificación</h2>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Punto a verificar</th>
                <th>Visto en</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Registro de un usuario real con Firebase Authentication</td>
                <td>Clase 13</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Inicio de sesión con email y contraseña</td>
                <td>Clase 13</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mensajes de error traducidos y comprensibles</td>
                <td>Clase 13</td>
              </tr>
              <tr>
                <td>4</td>
                <td>La sesión persiste al recargar la página</td>
                <td>Clase 14</td>
              </tr>
              <tr>
                <td>5</td>
                <td>El Navbar muestra el usuario autenticado y permite cerrar sesión</td>
                <td>Clase 14</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Las pantallas privadas redirigen al login si no hay sesión</td>
                <td>Clase 15</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Cada usuario nuevo recibe un rol por defecto</td>
                <td>Clase 16</td>
              </tr>
              <tr>
                <td>8</td>
                <td>La interfaz cambia según el rol del usuario</td>
                <td>Clase 16</td>
              </tr>
              <tr>
                <td>9</td>
                <td>El CRUD de la entidad principal funciona contra Firestore</td>
                <td>Clases 18 y 19</td>
              </tr>
              <tr>
                <td>10</td>
                <td>Las reglas de seguridad restringen lectura y escritura correctamente</td>
                <td>Clase 20</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Los formularios validan los campos obligatorios</td>
                <td>Clase 9 y 13</td>
              </tr>
              <tr>
                <td>12</td>
                <td>El proyecto está publicado y accesible desde un link</td>
                <td>Esta clase</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* PRUEBAS CON DISTINTOS USUARIOS */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">
          Probar con distintos usuarios
        </h2>

        <p>
          Un único usuario de prueba no alcanza para validar el sistema de
          roles. Conviene crear, como mínimo:
        </p>

        <div className="row g-4 mt-1">
          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Usuario normal</h5>
              <p className="text-secondary mb-0">
                Se registra desde la aplicación, queda con el rol por
                defecto. Debería poder ver, pero no crear ni eliminar.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Administrador</h5>
              <p className="text-secondary mb-0">
                Se registra igual que cualquier usuario y luego se asciende
                manualmente su rol desde Firestore Console (Clase 16).
                Debería poder hacer todo.
              </p>
            </div>
          </div>
        </div>

        <div className="alert alert-secondary mt-4 mb-0">
          Probar en dos navegadores distintos (o uno normal y una ventana de
          incógnito) para tener ambas sesiones activas al mismo tiempo y
          comparar lo que ve cada uno.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* REVISIÓN DE SEGURIDAD */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Revisión final de seguridad</h2>

        <ul>
          <li>
            El archivo <code>.env</code> no está subido al repositorio
            (verificar con <code>git status</code>, no debería aparecer).
          </li>
          <li>
            Las reglas de Firestore están <strong>publicadas</strong>, no
            solo guardadas como borrador.
          </li>
          <li>
            Ningún formulario permite que el propio usuario se asigne un rol
            distinto al rol por defecto.
          </li>
          <li>
            Las pantallas privadas usan <code>RutaProtegida</code>, no
            solamente se "ocultan" con un enlace que no aparece en el menú.
          </li>
        </ul>

        <div className="alert alert-warning mt-4 mb-0">
          Un dato importante: la <code>apiKey</code> de Firebase que
          configuramos en el <code>.env</code> es pública por diseño, queda
          visible en el código que corre en el navegador de cualquier
          visitante. Lo que realmente protege los datos son las{" "}
          <strong>reglas de seguridad de Firestore</strong>, no ocultar esa
          clave.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* PUBLICACIÓN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Publicar en Vercel</h2>

        <p>
          El proyecto ya se despliega en Vercel desde clases anteriores. Lo
          nuevo ahora es que necesita las variables de entorno de Firebase
          también configuradas <strong>ahí</strong>, no solo en la máquina
          de cada uno:
        </p>

        <ol>
          <li>
            Entrar al proyecto en{" "}
            <a href="https://vercel.com" target="_blank" rel="noreferrer">
              vercel.com
            </a>
            .
          </li>
          <li>
            Ir a <strong>Settings → Environment Variables</strong>.
          </li>
          <li>
            Cargar cada una de las variables <code>VITE_FIREBASE_*</code>{" "}
            del archivo <code>.env</code> local.
          </li>
          <li>
            Volver a desplegar (<strong>Redeploy</strong>) para que tome los
            cambios.
          </li>
        </ol>

        <div className="alert alert-danger mt-4 mb-0">
          Si se olvidan de cargar las variables de entorno en Vercel, el
          proyecto va a compilar sin errores pero fallar al intentar
          autenticar o leer datos en producción.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ERRORES FRECUENTES */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Errores frecuentes al integrar todo</h2>

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
                  Funciona en <code>npm run dev</code> pero no en Vercel
                </td>
                <td>
                  Faltan las variables de entorno en la configuración de
                  Vercel.
                </td>
                <td>Cargarlas en Settings → Environment Variables y redesplegar.</td>
              </tr>
              <tr>
                <td>Un usuario normal ve el botón de administrador</td>
                <td>
                  Se validó el rol solo en el frontend, sin reglas de
                  seguridad.
                </td>
                <td>
                  Revisar que las reglas de la Clase 20 estén publicadas y
                  probadas.
                </td>
              </tr>
              <tr>
                <td>
                  La aplicación tarda en mostrar contenido al recargar
                </td>
                <td>
                  No se verificó el estado "cargando" del contexto de
                  autenticación (Clase 14) antes de decidir qué mostrar.
                </td>
                <td>
                  Mostrar un loader mientras Firebase confirma la sesión.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ACTIVIDAD FINAL */}
        {/* ====================================== */}

        <div className="alert alert-primary">
          <h5 className="alert-heading fw-bold">
            Actividad final: demostración del sistema
          </h5>

          <p>Cada grupo debe presentar su proyecto cumpliendo:</p>

          <ol className="mb-0">
            <li>Registro e inicio de sesión reales, funcionando en vivo.</li>
            <li>Cierre de sesión y persistencia de la sesión al recargar.</li>
            <li>
              Al menos una pantalla privada, protegida con{" "}
              <code>RutaProtegida</code>.
            </li>
            <li>
              Al menos dos roles distintos con permisos diferentes,
              demostrados con dos usuarios reales.
            </li>
            <li>
              Un CRUD completo (crear, ver, modificar y eliminar o cambiar
              estado) conectado a Firestore.
            </li>
            <li>
              Reglas de seguridad publicadas y verificadas en el Rules Playground.
            </li>
            <li>El proyecto publicado y accesible mediante un link.</li>
          </ol>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CIERRE */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Para cerrar</h2>

        <p>
          En nueve clases pasamos de un formulario de login simulado a un
          sistema con autenticación real, sesiones persistentes, rutas
          protegidas, control de acceso por roles y una base de datos en la
          nube con reglas de seguridad propias. Es, en esencia, la misma
          arquitectura que usan muchas aplicaciones reales en producción.
        </p>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* RECURSOS */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Recursos</h2>

        <ul>
          <li>
            <a
              href="https://vercel.com/docs/environment-variables/managing-environment-variables"
              target="_blank"
              rel="noreferrer"
            >
              Vercel — Variables de entorno
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/docs/projects/api-keys"
              target="_blank"
              rel="noreferrer"
            >
              Firebase — Sobre las API keys y por qué son públicas
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Clase21;
