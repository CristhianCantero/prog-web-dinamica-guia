import React from "react";

function Clase15() {
  return (
    <main>
      {/* ====================================== */}
      {/* PRESENTACIÓN */}
      {/* ====================================== */}

      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 15</span>

          <h1 className="fw-bold">Rutas protegidas con React Router</h1>

          <p className="lead text-secondary mt-3">
            Ya sabemos quién es el usuario autenticado gracias al contexto de
            la clase anterior. Ahora vamos a impedir que alguien no
            autenticado acceda a pantallas que deberían ser privadas, como un
            panel administrativo.
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
            <li>Diferenciar rutas públicas de rutas privadas.</li>
            <li>
              Crear un componente <code>RutaProtegida</code> reutilizable.
            </li>
            <li>
              Redirigir con <code>Navigate</code> cuando no hay usuario
              autenticado.
            </li>
            <li>
              Entender que proteger rutas en el frontend no reemplaza la
              autorización en la base de datos.
            </li>
          </ul>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* PÚBLICAS VS PRIVADAS */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Rutas públicas y rutas privadas</h2>

        <div className="table-responsive mt-3">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Tipo</th>
                <th>¿Quién puede verla?</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Pública</strong>
                </td>
                <td>Cualquier persona, esté autenticada o no.</td>
                <td>
                  Inicio, Login, Registro, el listado de clases.
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Privada</strong>
                </td>
                <td>Solo usuarios autenticados.</td>
                <td>Panel administrativo, perfil del usuario.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* RUTAPROTEGIDA */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">
          Crear el componente RutaProtegida
        </h2>

        <p>
          La idea es construir un componente que{" "}
          <strong>envuelva</strong> a la pantalla que queremos proteger. Si
          hay un usuario autenticado, muestra la pantalla; si no, redirige al
          login.
        </p>

        <p>
          Creamos <code>src/componentes/RutaProtegida.jsx</code>:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexto/AuthContext";

function RutaProtegida({ children }) {
  const { usuario, cargando } = useAuth();
  const ubicacion = useLocation();

  if (cargando) {
    return (
      <div className="d-flex justify-content-center py-5">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  if (!usuario) {
    // Guardamos a dónde quería ir, para volver ahí después del login
    return <Navigate to="/login" state={{ desde: ubicacion }} replace />;
  }

  return children;
}

export default RutaProtegida;`}</code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4">
          <h5 className="fw-bold">¿Por qué esperamos a "cargando"?</h5>
          <p className="mb-0">
            Si no esperamos, al recargar la página <code>usuario</code>{" "}
            todavía va a estar en <code>null</code> (Firebase no terminó de
            verificar la sesión) y <code>RutaProtegida</code> redirigiría al
            login aunque el usuario sí esté autenticado.
          </p>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* USO EN APP.JSX */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Usar RutaProtegida en App.jsx</h2>

        <p>Envolvemos las rutas que necesitamos proteger:</p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import RutaProtegida from "./componentes/RutaProtegida";
import Admin from "./paginas/Admin";

<Routes>
  <Route path="/" element={<Inicio />} />
  <Route path="/login" element={<Login />} />

  {/* Ruta protegida */}
  <Route
    path="/admin"
    element={
      <RutaProtegida>
        <Admin />
      </RutaProtegida>
    }
  />
</Routes>`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* REDIRECCIÓN AL ORIGEN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">
          Volver a la página original después del login
        </h2>

        <p>
          Guardamos la ubicación de origen en <code>state</code> al
          redirigir. En el componente de <code>Login</code>, podemos leerla
          después de iniciar sesión correctamente:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const ubicacion = useLocation();

  const destino = ubicacion.state?.desde?.pathname || "/";

  const manejarLogin = async (e) => {
    e.preventDefault();
    // ... signInWithEmailAndPassword(auth, email, password) ...
    navigate(destino, { replace: true });
  };

  // ...
}`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ACLARACIÓN IMPORTANTE */}
        {/* ====================================== */}

        <div className="alert alert-warning">
          <h5 className="alert-heading fw-bold">
            Proteger rutas en React no alcanza
          </h5>
          <p className="mb-0">
            <code>RutaProtegida</code> solo oculta la pantalla en el
            navegador. Cualquiera con conocimientos técnicos podría seguir
            intentando leer o modificar datos directamente contra Firestore.
            La verdadera protección de los datos se define con{" "}
            <strong>reglas de seguridad en el backend</strong> (las vamos a
            ver en la Clase 20). <code>RutaProtegida</code> mejora la
            experiencia del usuario; las reglas de seguridad protegen los
            datos.
          </p>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* PRUEBAS */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Casos para probar</h2>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Caso</th>
                <th>Resultado esperado</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Entrar a <code>/admin</code> sin haber iniciado sesión
                </td>
                <td>Redirige a <code>/login</code>.</td>
              </tr>
              <tr>
                <td>
                  Iniciar sesión y luego entrar a <code>/admin</code>
                </td>
                <td>Muestra la pantalla de administración.</td>
              </tr>
              <tr>
                <td>Recargar la página estando en /admin autenticado</td>
                <td>
                  Muestra un loader brevemente y luego la pantalla (no
                  redirige al login).
                </td>
              </tr>
              <tr>
                <td>Cerrar sesión estando en /admin</td>
                <td>Redirige automáticamente a /login.</td>
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
                <td>Redirige al login aunque el usuario esté autenticado</td>
                <td>No se controló el estado "cargando".</td>
                <td>
                  Mostrar el loader mientras <code>cargando === true</code>{" "}
                  antes de evaluar <code>usuario</code>.
                </td>
              </tr>
              <tr>
                <td>
                  Warning "Each child in a list should have a unique key"
                  al usar <code>Route</code>
                </td>
                <td>No tiene relación con RutaProtegida.</td>
                <td>
                  Revisar que cada <code>Route</code> tenga su propio{" "}
                  <code>path</code> y no estén duplicados.
                </td>
              </tr>
              <tr>
                <td>Al cerrar sesión no redirige</td>
                <td>
                  <code>RutaProtegida</code> solo evalúa al montarse la
                  ruta actual, pero React Router vuelve a renderizar al
                  cambiar <code>usuario</code>.
                </td>
                <td>
                  Confirmar que <code>RutaProtegida</code> use{" "}
                  <code>useAuth()</code> y no una copia local del usuario.
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
              Crear <code>src/componentes/RutaProtegida.jsx</code>.
            </li>
            <li>
              Identificar qué pantallas del proyecto deberían ser privadas
              (por ejemplo, el panel administrativo de la Clase 12).
            </li>
            <li>Envolver esas rutas con RutaProtegida en App.jsx.</li>
            <li>
              Probar los cuatro casos de la tabla de pruebas de esta clase.
            </li>
            <li>
              Opcional: implementar la redirección al origen después del
              login.
            </li>
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
              href="https://reactrouter.com/api/components/Navigate"
              target="_blank"
              rel="noreferrer"
            >
              React Router — Componente Navigate
            </a>
          </li>
          <li>
            <a
              href="https://reactrouter.com/api/hooks/useNavigate"
              target="_blank"
              rel="noreferrer"
            >
              React Router — Navegación
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Clase15;
