import React from "react";

function Clase14() {
  return (
    <main>
      {/* ====================================== */}
      {/* PRESENTACIÓN */}
      {/* ====================================== */}

      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 14</span>

          <h1 className="fw-bold">
            Firebase Authentication II: sesiones y Context API
          </h1>

          <p className="lead text-secondary mt-3">
            En la clase anterior logramos registrar e iniciar sesión. Pero,
            ¿cómo sabe el resto de la aplicación quién es el usuario
            autenticado? Hoy resolvemos eso con la sesión de Firebase y el
            Context API de React.
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
            <li>Entender qué es una sesión y cómo la persiste Firebase.</li>
            <li>
              Usar <code>onAuthStateChanged()</code> para detectar al usuario
              autenticado.
            </li>
            <li>Crear un contexto de autenticación con Context API.</li>
            <li>Compartir el usuario autenticado entre componentes.</li>
            <li>
              Mostrar el email del usuario en el Navbar y cerrar sesión.
            </li>
          </ul>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* QUÉ ES UNA SESIÓN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">¿Qué es una sesión?</h2>

        <p>
          Una sesión es el período en el que un usuario permanece
          identificado frente a la aplicación, sin tener que volver a
          ingresar su contraseña en cada pantalla.
        </p>

        <p>
          Firebase Authentication, por defecto, <strong>persiste la sesión</strong>{" "}
          en el navegador: si el usuario inicia sesión y cierra la pestaña,
          al volver a abrir la aplicación va a seguir autenticado.
        </p>

        <div className="alert alert-secondary mt-4 mb-0">
          Esto significa que nuestra aplicación necesita, al cargar, una
          forma de <strong>preguntarle a Firebase</strong> si hay un usuario
          con sesión activa.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* onAuthStateChanged */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">onAuthStateChanged()</h2>

        <p>
          Es una función de Firebase que se suscribe a los cambios de sesión:
          se ejecuta automáticamente cuando el usuario inicia sesión, cierra
          sesión, o cuando la aplicación carga por primera vez y Firebase
          termina de verificar si había una sesión guardada.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../servicios/firebase";

onAuthStateChanged(auth, (usuarioFirebase) => {
  if (usuarioFirebase) {
    console.log("Hay un usuario autenticado:", usuarioFirebase.email);
  } else {
    console.log("No hay ningún usuario autenticado.");
  }
});`}</code>
          </pre>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">
                La app carga
              </div>
              <div>↓</div>
              <div className="border rounded p-3">
                Firebase revisa si hay una sesión guardada
              </div>
              <div>↓</div>
              <div className="border rounded p-3">
                Se ejecuta onAuthStateChanged
              </div>
              <div>↓</div>
              <div className="bg-primary text-white rounded p-3">
                ¿Hay usuario? → actualizamos el estado global
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CONTEXT API */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">El problema: prop drilling</h2>

        <p>
          Podríamos guardar el usuario en un <code>useState</code> dentro de{" "}
          <code>App.jsx</code> y pasarlo como prop a cada componente que lo
          necesite. El problema es que muchos componentes están varios
          niveles por debajo de <code>App</code>, y tendríamos que pasar la
          prop componente por componente aunque los del medio no la usen.
          Esto se conoce como <strong>prop drilling</strong>.
        </p>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">App (tiene el usuario)</div>
              <div>↓ prop</div>
              <div className="border rounded p-3">Layout (no lo usa)</div>
              <div>↓ prop</div>
              <div className="border rounded p-3">Navbar (no lo usa)</div>
              <div>↓ prop</div>
              <div className="bg-primary text-white rounded p-3">
                MenuUsuario (acá sí lo necesita)
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4">
          <strong>Context API</strong> resuelve esto: permite definir un
          valor "global" que cualquier componente puede leer directamente,
          sin importar cuántos niveles de profundidad tenga.
        </p>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CREAR EL CONTEXTO */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Crear el contexto de autenticación</h2>

        <p>
          Creamos la carpeta <code>src/contexto/</code> con el archivo{" "}
          <code>AuthContext.jsx</code>:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../servicios/firebase";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const desuscribir = onAuthStateChanged(auth, (usuarioFirebase) => {
      setUsuario(usuarioFirebase);
      setCargando(false);
    });

    // Al desmontar, dejamos de escuchar los cambios
    return () => desuscribir();
  }, []);

  const cerrarSesion = () => {
    return signOut(auth);
  };

  const valor = {
    usuario,
    cargando,
    cerrarSesion,
  };

  return (
    <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}`}</code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4">
          <h5 className="fw-bold">Repaso de las piezas</h5>
          <ul className="mb-0">
            <li>
              <code>createContext()</code> crea el "canal" por donde va a
              viajar la información.
            </li>
            <li>
              <code>AuthProvider</code> es un componente que envuelve a toda
              la app y provee el valor del contexto.
            </li>
            <li>
              <code>useEffect</code> con array vacío <code>[]</code> ejecuta
              la suscripción una sola vez, cuando el componente se monta.
            </li>
            <li>
              La función que retorna <code>useEffect</code> se ejecuta
              cuando el componente se desmonta, y ahí cancelamos la
              suscripción para evitar fugas de memoria.
            </li>
            <li>
              <code>useAuth()</code> es un hook propio que simplifica el uso
              del contexto: en vez de importar <code>useContext</code> y{" "}
              <code>AuthContext</code> en cada componente, solo llamamos a{" "}
              <code>useAuth()</code>.
            </li>
          </ul>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ENVOLVER LA APP */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Envolver la aplicación con el Provider</h2>

        <p>
          En <code>App.jsx</code>, envolvemos todo el contenido con{" "}
          <code>AuthProvider</code> para que cualquier componente de la app
          pueda acceder al usuario autenticado:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import { AuthProvider } from "./contexto/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollArriba />
        <NavBar />
        <main>
          <Routes>
            {/* ... rutas ... */}
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* USO EN EL NAVBAR */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">
          Mostrar el email del usuario y cerrar sesión
        </h2>

        <p>
          Con el contexto ya armado, cualquier componente puede leer el
          usuario con una sola línea:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import { useAuth } from "../contexto/AuthContext";

function Navbar() {
  const { usuario, cerrarSesion } = useAuth();

  return (
    <nav className="navbar navbar-dark bg-dark">
      {/* ... resto del navbar ... */}

      {usuario ? (
        <div className="d-flex align-items-center gap-3">
          <span className="text-light">{usuario.email}</span>

          <button
            className="btn btn-outline-light btn-sm"
            onClick={cerrarSesion}
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        <Link to="/login" className="btn btn-outline-light btn-sm">
          Iniciar sesión
        </Link>
      )}
    </nav>
  );
}`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ESTADO DE CARGA */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">
          Manejar el estado de carga mientras Firebase verifica la sesión
        </h2>

        <p>
          Verificar si hay una sesión guardada no es instantáneo. Mientras
          eso ocurre, <code>cargando</code> vale <code>true</code>. Si no
          controlamos ese momento, la aplicación puede "parpadear" mostrando
          primero la pantalla de un usuario no autenticado y, un instante
          después, la del usuario autenticado.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`function App() {
  const { cargando } = useAuth();

  if (cargando) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );
  }

  return (
    // ... resto de la aplicación
  );
}`}</code>
          </pre>
        </div>

        <div className="alert alert-warning mt-4 mb-0">
          Este componente ya estaría <strong>dentro</strong> de{" "}
          <code>AuthProvider</code>, porque necesita leer{" "}
          <code>cargando</code> con <code>useAuth()</code>. En la práctica
          conviene crear un componente intermedio (por ejemplo{" "}
          <code>AppRouter</code>) que quede envuelto por el Provider y
          controle este estado.
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
                  <code>useAuth</code> devuelve <code>undefined</code>
                </td>
                <td>
                  El componente que lo usa está fuera de{" "}
                  <code>AuthProvider</code>.
                </td>
                <td>
                  Verificar que <code>AuthProvider</code> envuelva a todo lo
                  que necesite el contexto, en <code>App.jsx</code>.
                </td>
              </tr>
              <tr>
                <td>La pantalla parpadea al recargar</td>
                <td>No se controló el estado de carga inicial.</td>
                <td>
                  Mostrar un loader mientras <code>cargando === true</code>.
                </td>
              </tr>
              <tr>
                <td>
                  Warning sobre actualizar un componente desmontado
                </td>
                <td>
                  No se canceló la suscripción de{" "}
                  <code>onAuthStateChanged</code>.
                </td>
                <td>
                  Retornar la función que cancela la suscripción dentro del{" "}
                  <code>useEffect</code>.
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
              Crear <code>src/contexto/AuthContext.jsx</code> con{" "}
              <code>AuthProvider</code> y <code>useAuth</code>.
            </li>
            <li>
              Envolver <code>App.jsx</code> con <code>AuthProvider</code>.
            </li>
            <li>
              Mostrar en el Navbar el email del usuario autenticado y un
              botón para cerrar sesión.
            </li>
            <li>
              Mostrar un loader mientras Firebase verifica la sesión al
              recargar la página.
            </li>
            <li>
              Probar: iniciar sesión, recargar la página y confirmar que la
              sesión se mantiene.
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
              href="https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user"
              target="_blank"
              rel="noreferrer"
            >
              Firebase — Obtener el usuario autenticado actual
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/docs/auth/web/auth-state-persistence"
              target="_blank"
              rel="noreferrer"
            >
              Firebase — Persistencia del estado de autenticación
            </a>
          </li>
          <li>
            <a
              href="https://react.dev/learn/passing-data-deeply-with-context"
              target="_blank"
              rel="noreferrer"
            >
              React — Pasar datos en profundidad con Context
            </a>
          </li>
          <li>
            <a
              href="https://react.dev/reference/react/useContext"
              target="_blank"
              rel="noreferrer"
            >
              React — Referencia de useContext
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Clase14;
