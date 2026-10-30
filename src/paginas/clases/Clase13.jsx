import React from "react";

function Clase13() {
  return (
    <main>
      {/* ====================================== */}
      {/* PRESENTACIÓN */}
      {/* ====================================== */}

      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 13</span>

          <h1 className="fw-bold">Firebase Authentication I: registro e inicio de sesión</h1>

          <p className="lead text-secondary mt-3">
            Hasta ahora nuestros proyectos funcionaban con datos temporales,
            guardados únicamente en el estado de React. A partir de esta clase
            vamos a trabajar con usuarios reales: personas que se registran,
            inician sesión y cuya información persiste aunque cerremos el
            navegador.
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
            <li>Entender qué es Firebase y para qué sirve.</li>
            <li>Diferenciar autenticación de autorización.</li>
            <li>Crear un proyecto en Firebase Console y una app web.</li>
            <li>Instalar y configurar Firebase en un proyecto React + Vite.</li>
            <li>
              Implementar un formulario de registro y uno de inicio de sesión
              con Firebase Authentication.
            </li>
            <li>Manejar errores comunes de autenticación.</li>
          </ul>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* QUÉ ES FIREBASE */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">¿Qué es Firebase?</h2>

        <p>
          Firebase es una plataforma de Google que ofrece servicios ya
          construidos para aplicaciones web y móviles: autenticación de
          usuarios, una base de datos en tiempo real (Firestore), hosting,
          almacenamiento de archivos, entre otros.
        </p>

        <p>
          Lo importante para nosotros es que{" "}
          <strong>no tenemos que programar nuestro propio backend</strong>{" "}
          para manejar usuarios. Firebase se encarga de guardar las
          contraseñas de forma segura, validar los correos, generar tokens de
          sesión y mucho más.
        </p>

        <div className="alert alert-warning mt-4">
          <strong>Decisión importante:</strong> desde esta clase dejamos de
          simular el login con <code>useState</code> y empezamos a trabajar
          con <strong>Firebase Authentication real</strong>. Las pantallas de{" "}
          <code>Login</code> y <code>Registro</code> que ya conocen seguían
          una lógica simulada; en sus proyectos propios van a reemplazar esa
          lógica por la que vemos hoy.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* AUTENTICACIÓN VS AUTORIZACIÓN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Autenticación vs. autorización</h2>

        <p>Son dos conceptos que se suelen confundir pero son distintos:</p>

        <div className="table-responsive mt-3">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Concepto</th>
                <th>Pregunta que responde</th>
                <th>Ejemplo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Autenticación</strong>
                </td>
                <td>¿Quién sos?</td>
                <td>Iniciar sesión con email y contraseña.</td>
              </tr>
              <tr>
                <td>
                  <strong>Autorización</strong>
                </td>
                <td>¿Qué podés hacer?</td>
                <td>
                  Solo un administrador puede eliminar un producto.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-3">
          Hoy trabajamos la <strong>autenticación</strong>. La autorización
          (roles y permisos) la vamos a ver en la Clase 16.
        </p>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CREAR PROYECTO EN FIREBASE */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">1. Crear el proyecto en Firebase Console</h2>

        <ol>
          <li>
            Ingresar a{" "}
            <a
              href="https://console.firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              console.firebase.google.com
            </a>{" "}
            con una cuenta de Google.
          </li>
          <li>
            Hacer clic en <strong>Agregar proyecto</strong> y ponerle un
            nombre (por ejemplo, el nombre de su proyecto anual).
          </li>
          <li>
            Pueden desactivar Google Analytics si no lo van a usar; no es
            necesario para esta clase.
          </li>
          <li>Esperar a que Firebase termine de crear el proyecto.</li>
        </ol>

        <h2 className="fw-bold mb-3 mt-5">2. Registrar la aplicación web</h2>

        <ol>
          <li>
            Dentro del proyecto, hacer clic en el ícono{" "}
            <code>&lt;/&gt;</code> (Web) para agregar una app.
          </li>
          <li>
            Ponerle un apodo a la app (por ejemplo, el mismo nombre del
            proyecto).
          </li>
          <li>
            No hace falta configurar Firebase Hosting en este paso.
          </li>
          <li>
            Firebase va a mostrar un objeto <code>firebaseConfig</code> con
            las claves del proyecto.{" "}
            <strong>Copiarlo, lo vamos a necesitar enseguida.</strong>
          </li>
        </ol>

        <h2 className="fw-bold mb-3 mt-5">
          3. Activar el proveedor de correo y contraseña
        </h2>

        <ol>
          <li>
            En el menú lateral, ir a <strong>Authentication</strong> (puede
            estar dentro de la sección <strong>Compilación / Build</strong> o{" "}
            <strong>Seguridad / Security</strong>, según la versión de la
            consola).
          </li>
          <li>
            Hacer clic en <strong>Comenzar</strong> (o en la pestaña{" "}
            <strong>Sign-in method</strong>).
          </li>
          <li>
            Seleccionar <strong>Correo electrónico/contraseña</strong>.
          </li>
          <li>
            Activar el interruptor <strong>Habilitar</strong> y guardar.
          </li>
        </ol>

        <div className="alert alert-secondary mt-4 mb-0">
          Sin este paso, cualquier llamada a Firebase Authentication va a
          fallar con el error <code>auth/operation-not-allowed</code>.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* INSTALACIÓN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">4. Instalar Firebase en el proyecto</h2>

        <p>Desde la terminal, dentro de la carpeta del proyecto:</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`npm install firebase`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* VARIABLES DE ENTORNO */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">5. Variables de entorno con Vite</h2>

        <p>
          Las claves de <code>firebaseConfig</code> no deberían quedar
          escritas directamente en el código ni subirse a GitHub. Vite permite
          definir variables de entorno con el prefijo{" "}
          <code>VITE_</code>.
        </p>

        <p>
          Crear un archivo <code>.env</code> en la raíz del proyecto (al
          mismo nivel que <code>package.json</code>):
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_proyecto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_proyecto_id
VITE_FIREBASE_STORAGE_BUCKET=tu_proyecto.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id`}</code>
          </pre>
        </div>

        <div className="alert alert-info mt-4">
          Copien los valores exactos que muestra su <code>firebaseConfig</code>.
          En proyectos nuevos el <em>storageBucket</em> termina en{" "}
          <code>.firebasestorage.app</code>; en proyectos más viejos termina
          en <code>.appspot.com</code>. Ambos son válidos.
        </div>

        <div className="alert alert-danger mt-4">
          Agregar <code>.env</code> al archivo <code>.gitignore</code> antes
          de hacer el primer commit. Si ya lo subieron por error, cambien las
          claves desde Firebase Console.
        </div>

        <p className="mt-4">
          Dentro del código, estas variables se leen con{" "}
          <code>import.meta.env</code>:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`import.meta.env.VITE_FIREBASE_API_KEY`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CONFIGURACIÓN firebase.js */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">6. Configurar servicios/firebase.js</h2>

        <p>
          Dentro de <code>src/servicios/</code> creamos un archivo{" "}
          <code>firebase.js</code> que inicializa Firebase y exporta lo que
          vayamos a usar en el resto de la app:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;`}</code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4 mb-0">
          <code>getAuth(app)</code> crea el servicio de autenticación
          conectado a nuestro proyecto. Lo vamos a importar desde cualquier
          componente que necesite registrar o loguear usuarios.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ESTRUCTURA DE CARPETAS */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Estructura de carpetas</h2>

        <p>
          A partir de esta clase, el proyecto va sumando esta carpeta nueva:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`src/
├── componentes/
├── estilosPaginas/
├── paginas/
├── servicios/
│   └── firebase.js      ← nuevo
├── App.jsx
└── main.jsx`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* FORMULARIO DE REGISTRO */}
        {/* ====================================== */}

        <span className="badge text-bg-primary mb-2">REGISTRO</span>

        <h2 className="fw-bold text-break">
          Crear un usuario con createUserWithEmailAndPassword()
        </h2>

        <p className="mt-3">
          Esta función de Firebase crea el usuario en Authentication y, si
          todo sale bien, nos devuelve sus datos.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../servicios/firebase";

function Registro() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const navigate = useNavigate();

  const manejarRegistro = async (e) => {
    e.preventDefault();
    setError("");

    if (email.trim() === "" || password.trim() === "") {
      setError("Completá todos los campos.");
      return;
    }

    setCargando(true);

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setError(traducirErrorFirebase(err.code));
    } finally {
      setCargando(false);
    }
  };

  return (
    <form onSubmit={manejarRegistro}>
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="mb-3">
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Contraseña</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" disabled={cargando}>
        {cargando ? "Creando cuenta..." : "Registrarme"}
      </button>
    </form>
  );
}`}</code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4">
          <h5 className="fw-bold">Paso a paso de manejarRegistro</h5>
          <ol className="mb-0">
            <li>Prevenimos el comportamiento por defecto del formulario.</li>
            <li>Validamos que los campos no estén vacíos.</li>
            <li>
              Llamamos a <code>createUserWithEmailAndPassword(auth, email, password)</code>.
              Es una función <strong>asíncrona</strong>, por eso usamos{" "}
              <code>await</code> dentro de un <code>try/catch</code>.
            </li>
            <li>
              Si todo sale bien, redirigimos al usuario con{" "}
              <code>navigate("/")</code>.
            </li>
            <li>
              Si Firebase devuelve un error, lo mostramos de forma amigable
              (más abajo vemos cómo).
            </li>
          </ol>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* FORMULARIO DE LOGIN */}
        {/* ====================================== */}

        <span className="badge text-bg-primary mb-2">LOGIN</span>

        <h2 className="fw-bold text-break">
          Iniciar sesión con signInWithEmailAndPassword()
        </h2>

        <p className="mt-3">
          La lógica es muy parecida al registro, solo cambia la función de
          Firebase que llamamos:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../servicios/firebase";

const manejarLogin = async (e) => {
  e.preventDefault();
  setError("");
  setCargando(true);

  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/");
  } catch (err) {
    setError(traducirErrorFirebase(err.code));
  } finally {
    setCargando(false);
  }
};`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* MANEJO DE ERRORES */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Manejo de errores de Firebase</h2>

        <p>
          Cuando algo falla, Firebase lanza un error con un{" "}
          <code>code</code> específico. Conviene traducirlo a un mensaje
          entendible para el usuario en vez de mostrar el código tal cual:
        </p>

        <div className="table-responsive mt-3">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Código</th>
                <th>Cuándo ocurre</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>auth/email-already-in-use</code>
                </td>
                <td>Ya existe una cuenta con ese email.</td>
              </tr>
              <tr>
                <td>
                  <code>auth/invalid-email</code>
                </td>
                <td>El formato del email no es válido.</td>
              </tr>
              <tr>
                <td>
                  <code>auth/weak-password</code>
                </td>
                <td>La contraseña tiene menos de 6 caracteres.</td>
              </tr>
              <tr>
                <td>
                  <code>auth/invalid-credential</code>
                </td>
                <td>Email o contraseña incorrectos al iniciar sesión.</td>
              </tr>
              <tr>
                <td>
                  <code>auth/too-many-requests</code>
                </td>
                <td>Demasiados intentos fallidos seguidos.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`function traducirErrorFirebase(code) {
  switch (code) {
    case "auth/email-already-in-use":
      return "Ese email ya está registrado.";
    case "auth/invalid-email":
      return "El email no es válido.";
    case "auth/weak-password":
      return "La contraseña debe tener al menos 6 caracteres.";
    case "auth/invalid-credential":
    case "auth/wrong-password": // proyectos viejos
    case "auth/user-not-found": // proyectos viejos
      return "Email o contraseña incorrectos.";
    case "auth/too-many-requests":
      return "Demasiados intentos. Probá de nuevo en unos minutos.";
    default:
      return "Ocurrió un error. Intentá nuevamente.";
  }
}`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* VERIFICACIÓN EN CONSOLE */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Verificar los usuarios en Firebase Console</h2>

        <p>
          Después de probar el registro, vayan a{" "}
          <strong>Authentication → Users</strong> en Firebase Console. Ahí
          van a ver listado cada usuario creado, con su email y fecha de
          alta. Es la forma más rápida de confirmar que todo está
          funcionando.
        </p>

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
                  <code>auth/operation-not-allowed</code>
                </td>
                <td>El proveedor email/contraseña no está activado.</td>
                <td>
                  Activarlo en Authentication → Sign-in method.
                </td>
              </tr>
              <tr>
                <td>
                  <code>Firebase: Error (auth/invalid-api-key)</code>
                </td>
                <td>
                  Las variables de entorno no se cargaron o tienen un
                  error de tipeo.
                </td>
                <td>
                  Revisar el archivo <code>.env</code> y reiniciar{" "}
                  <code>npm run dev</code> (Vite no relee el .env en caliente).
                </td>
              </tr>
              <tr>
                <td>
                  Las variables de entorno llegan como{" "}
                  <code>undefined</code>
                </td>
                <td>No empiezan con el prefijo obligatorio.</td>
                <td>
                  En Vite, toda variable debe empezar con{" "}
                  <code>VITE_</code>.
                </td>
              </tr>
              <tr>
                <td>La página se queda en blanco al registrarse</td>
                <td>
                  No se envolvió la llamada a Firebase en un{" "}
                  <code>try/catch</code>.
                </td>
                <td>
                  Todo <code>await</code> a una función de Firebase va
                  dentro de un <code>try/catch</code>.
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
            <li>Crear un proyecto en Firebase Console para el grupo.</li>
            <li>Activar el proveedor de correo y contraseña.</li>
            <li>
              Instalar <code>firebase</code> en el proyecto y crear{" "}
              <code>src/servicios/firebase.js</code>.
            </li>
            <li>
              Configurar el archivo <code>.env</code> y confirmar que esté
              en <code>.gitignore</code>.
            </li>
            <li>
              Reemplazar la lógica simulada del formulario de registro por{" "}
              <code>createUserWithEmailAndPassword()</code>.
            </li>
            <li>
              Reemplazar la lógica simulada del formulario de login por{" "}
              <code>signInWithEmailAndPassword()</code>.
            </li>
            <li>Traducir al menos 3 códigos de error de Firebase.</li>
            <li>
              Registrar un usuario de prueba y verificarlo en Firebase
              Console.
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
              href="https://firebase.google.com/docs/auth/web/start"
              target="_blank"
              rel="noreferrer"
            >
              Firebase Authentication — Primeros pasos (web)
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/docs/auth/web/password-auth"
              target="_blank"
              rel="noreferrer"
            >
              Autenticación con email y contraseña
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/docs/reference/js/auth"
              target="_blank"
              rel="noreferrer"
            >
              Códigos de error de Firebase Authentication
            </a>
          </li>
          <li>
            <a
              href="https://vite.dev/guide/env-and-mode"
              target="_blank"
              rel="noreferrer"
            >
              Variables de entorno en Vite
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Clase13;
