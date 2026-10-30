import React from "react";

function Clase16() {
  return (
    <main>
      {/* ====================================== */}
      {/* PRESENTACIÓN */}
      {/* ====================================== */}

      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 16</span>

          <h1 className="fw-bold">
            Administración de roles y permisos con Firestore
          </h1>

          <p className="lead text-secondary mt-3">
            Saber quién es el usuario no alcanza para decidir qué puede
            hacer. Hoy vamos a asignarle un rol a cada usuario y usar ese
            rol para mostrar u ocultar funciones según corresponda.
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
            <li>Diferenciar usuario, rol y permiso.</li>
            <li>Conocer el modelo RBAC (control de acceso basado en roles).</li>
            <li>Crear una colección "usuarios" en Cloud Firestore.</li>
            <li>Asociar cada perfil con el UID de Firebase Authentication.</li>
            <li>Renderizar botones y pantallas según el rol del usuario.</li>
            <li>
              Entender por qué el rol nunca debe asignarse desde el cliente.
            </li>
          </ul>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* USUARIO ROL PERMISO */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Usuario, rol y permiso</h2>

        <div className="row g-4 mt-1">
          <div className="col-md-4">
            <div className="border rounded p-4 h-100 text-center">
              <h5 className="fw-bold">Usuario</h5>
              <p className="text-secondary mb-0">
                Una persona identificada en el sistema. Ej: Juan Pérez.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border rounded p-4 h-100 text-center">
              <h5 className="fw-bold">Rol</h5>
              <p className="text-secondary mb-0">
                Una categoría que agrupa usuarios. Ej: administrador,
                empleado.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border rounded p-4 h-100 text-center">
              <h5 className="fw-bold">Permiso</h5>
              <p className="text-secondary mb-0">
                Una acción concreta habilitada para un rol. Ej: eliminar un
                producto.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* RBAC */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">RBAC: control de acceso basado en roles</h2>

        <p>
          En vez de definir permisos usuario por usuario (algo imposible de
          mantener), los agrupamos en roles. Cada rol tiene un conjunto de
          permisos asociados.
        </p>

        <div className="table-responsive mt-3">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Rol</th>
                <th>Puede ver</th>
                <th>Puede crear/editar</th>
                <th>Puede eliminar</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Administrador</strong>
                </td>
                <td>Todo</td>
                <td>Sí</td>
                <td>Sí</td>
              </tr>
              <tr>
                <td>
                  <strong>Empleado</strong>
                </td>
                <td>Todo</td>
                <td>Sí</td>
                <td>No</td>
              </tr>
              <tr>
                <td>
                  <strong>Usuario</strong>
                </td>
                <td>Lo público</td>
                <td>No</td>
                <td>No</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="alert alert-secondary mt-3 mb-0">
          Estos roles son un ejemplo. Cada grupo debe definir los roles que
          tengan sentido para su propio proyecto.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CREAR FIRESTORE */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">1. Crear Cloud Firestore</h2>

        <ol>
          <li>
            En Firebase Console, ir a <strong>Firestore Database</strong>{" "}
            (en versiones nuevas: <strong>Bases de datos y almacenamiento →
            Firestore</strong>).
          </li>
          <li>
            Hacer clic en <strong>Crear base de datos</strong> (
            <em>Create database</em>).
          </li>
          <li>
            Elegir una ubicación (cualquiera cercana funciona bien, por
            ejemplo <code>southamerica-east1</code>).
          </li>
          <li>
            Empezar en <strong>modo de producción</strong> (
            <em>Production mode</em>): por defecto
            Firestore va a rechazar todas las lecturas y escrituras hasta que
            definamos reglas (lo vemos en la Clase 18 y en profundidad en la
            20).
          </li>
        </ol>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* COLECCIÓN USUARIOS */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">2. La colección "usuarios"</h2>

        <p>
          Vamos a crear una colección llamada <code>usuarios</code> donde
          cada documento representa el perfil de una persona, identificado
          con el mismo <strong>UID</strong> que le asignó Firebase
          Authentication:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`usuarios (colección)
 └── 8f3kd92j... (documento, id = UID de Auth)
      ├── email: "juan@mail.com"
      ├── rol: "usuario"
      └── creadoEn: Timestamp`}</code>
          </pre>
        </div>

        <p className="mt-3">
          Usar el mismo UID como ID del documento nos permite, dado un
          usuario autenticado, buscar su perfil directamente sin tener que
          hacer una búsqueda por campo.
        </p>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ASOCIAR PERFIL AL REGISTRARSE */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">
          3. Crear el perfil al registrarse
        </h2>

        <p>
          Modificamos el registro de la Clase 13 para que, además de crear
          el usuario en Authentication, cree su documento en Firestore:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../servicios/firebase";

const manejarRegistro = async (e) => {
  e.preventDefault();

  try {
    const credenciales = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Creamos el perfil en Firestore con el mismo UID
    await setDoc(doc(db, "usuarios", credenciales.user.uid), {
      email: credenciales.user.email,
      rol: "usuario", // rol por defecto, nunca administrador
      creadoEn: serverTimestamp(),
    });

    navigate("/");
  } catch (err) {
    setError(traducirErrorFirebase(err.code));
  }
};`}</code>
          </pre>
        </div>

        <div className="alert alert-danger mt-4 mb-0">
          Todo usuario nuevo se crea con rol <code>"usuario"</code>. Nunca
          debe permitirse que el propio formulario de registro le asigne a
          alguien el rol <code>"administrador"</code>.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CONSULTAR EL ROL */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">4. Consultar el rol del usuario autenticado</h2>

        <p>
          Extendemos el <code>AuthContext</code> de la Clase 14 para que,
          además del usuario de Authentication, también traiga su rol desde
          Firestore:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import { doc, getDoc } from "firebase/firestore";
import { db } from "../servicios/firebase";

useEffect(() => {
  const desuscribir = onAuthStateChanged(auth, async (usuarioFirebase) => {
    setUsuario(usuarioFirebase);

    if (usuarioFirebase) {
      const snapshot = await getDoc(doc(db, "usuarios", usuarioFirebase.uid));
      setRol(snapshot.exists() ? snapshot.data().rol : "usuario");
    } else {
      setRol(null);
    }

    setCargando(false);
  });

  return () => desuscribir();
}, []);`}</code>
          </pre>
        </div>

        <p className="mt-3">
          Ese nuevo <code>rol</code> se agrega al <code>valor</code> que
          provee el contexto, igual que hicimos con <code>usuario</code> y{" "}
          <code>cargando</code> en la Clase 14.
        </p>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* RENDERIZADO CONDICIONAL */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">5. Renderizado condicional según el rol</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`import { useAuth } from "../contexto/AuthContext";

function PanelProductos() {
  const { rol } = useAuth();

  return (
    <div>
      {/* Todos los roles pueden ver la tabla */}
      <TablaProductos />

      {/* Solo administrador y empleado pueden crear/editar */}
      {(rol === "administrador" || rol === "empleado") && (
        <button className="btn btn-primary">+ Nuevo producto</button>
      )}

      {/* Solo administrador puede eliminar */}
      {rol === "administrador" && (
        <button className="btn btn-danger">Eliminar</button>
      )}
    </div>
  );
}`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* REGLAS DE SEGURIDAD */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">
          6. Reglas de seguridad: la protección real
        </h2>

        <p>
          El renderizado condicional del paso anterior es solo visual.
          Cualquiera podría editar el código de la página en el navegador y
          ver el botón igual. La protección real se define en{" "}
          <strong>Firestore → Reglas</strong>:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    match /usuarios/{uid} {
      // Cualquier usuario autenticado puede leer su propio perfil
      allow read: if request.auth != null && request.auth.uid == uid;

      // Nadie puede crear o modificar su propio rol desde el cliente
      allow create: if request.auth != null
                    && request.auth.uid == uid
                    && request.resource.data.rol == "usuario";

      allow update: if false;
    }
  }
}`}</code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4 mb-0">
          Esta regla permite crear el propio perfil al registrarse, pero
          solo con rol <code>"usuario"</code>, y nunca modificarlo después
          desde el cliente. Vamos a profundizar en reglas de seguridad en la
          Clase 20.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ASIGNAR ADMIN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">
          ¿Y cómo se convierte alguien en administrador?
        </h2>

        <p>
          Si un usuario no puede cambiar su propio rol, alguien tiene que
          hacerlo "desde afuera". En proyectos chicos como el de la escuela,
          la forma más simple es:
        </p>

        <ol>
          <li>
            Registrar un usuario normalmente (va a quedar con rol{" "}
            <code>"usuario"</code>).
          </li>
          <li>
            Entrar a Firestore Console, buscar su documento en{" "}
            <code>usuarios</code> y cambiar manualmente el campo{" "}
            <code>rol</code> a <code>"administrador"</code>.
          </li>
        </ol>

        <div className="alert alert-secondary mb-0">
          En un sistema productivo esto se automatiza con{" "}
          <strong>Cloud Functions</strong>, pero eso excede el alcance de
          esta materia.
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
                  <code>Missing or insufficient permissions</code>
                </td>
                <td>
                  Las reglas de Firestore no permiten esa lectura o
                  escritura.
                </td>
                <td>
                  Revisar las reglas en Firestore Console y confirmar que el
                  UID coincida con el documento.
                </td>
              </tr>
              <tr>
                <td>El rol llega como <code>undefined</code></td>
                <td>
                  Se consultó el rol antes de que exista el documento en
                  Firestore (por ejemplo, justo después de un registro que
                  todavía no terminó).
                </td>
                <td>
                  Esperar (<code>await</code>) a que termine{" "}
                  <code>setDoc</code> antes de redirigir o consultar el rol.
                </td>
              </tr>
              <tr>
                <td>Un usuario logra verse como administrador</td>
                <td>
                  Se confió únicamente en el renderizado condicional del
                  frontend.
                </td>
                <td>
                  Siempre acompañar con reglas de seguridad del lado del
                  servidor.
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
            <li>Crear Cloud Firestore en modo de producción.</li>
            <li>
              Definir los roles que tengan sentido para el proyecto de cada
              grupo.
            </li>
            <li>
              Modificar el registro para crear el documento en{" "}
              <code>usuarios</code> con rol por defecto.
            </li>
            <li>Extender el AuthContext para traer el rol del usuario.</li>
            <li>
              Aplicar renderizado condicional en al menos una pantalla según
              el rol.
            </li>
            <li>
              Escribir las reglas de seguridad de la colección{" "}
              <code>usuarios</code>.
            </li>
            <li>
              Convertir manualmente a un usuario de prueba en administrador
              desde Firestore Console.
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
              href="https://firebase.google.com/docs/firestore/quickstart"
              target="_blank"
              rel="noreferrer"
            >
              Firestore — Guía de inicio rápido
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/docs/firestore/security/get-started"
              target="_blank"
              rel="noreferrer"
            >
              Firestore — Primeros pasos con reglas de seguridad
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/docs/firestore/security/rules-structure"
              target="_blank"
              rel="noreferrer"
            >
              Firestore — Estructura de las reglas de seguridad
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Clase16;
