import React from "react";

function Clase18() {
  return (
    <main>
      {/* ====================================== */}
      {/* PRESENTACIÓN */}
      {/* ====================================== */}

      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 18</span>

          <h1 className="fw-bold">Configuración de Firestore</h1>

          <p className="lead text-secondary mt-3">
            Ya decidimos trabajar con Firestore. Hoy lo configuramos en el
            proyecto, creamos nuestras primeras colecciones y leemos
            información real desde React.
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
            <li>Repasar colecciones y documentos en Firestore.</li>
            <li>Crear registros de ejemplo desde Firestore Console.</li>
            <li>
              Conectar Firestore al proyecto React mediante{" "}
              <code>servicios/firebase.js</code>.
            </li>
            <li>Leer información con el SDK modular de Firebase.</li>
            <li>Introducir las reglas de seguridad de Firestore.</li>
          </ul>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* COLECCIONES Y DOCUMENTOS */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Colecciones y documentos</h2>

        <p>
          Firestore organiza la información en <strong>colecciones</strong>{" "}
          (grupos de registros del mismo tipo) y <strong>documentos</strong>{" "}
          (cada registro individual, identificado con un ID). Cada documento
          guarda sus datos como pares <em>campo: valor</em>.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`productos (colección)
 ├── a1b2c3 (documento)
 │     ├── nombre: "Zapatillas Nike"
 │     ├── precio: 150000
 │     └── estado: "Activo"
 │
 └── d4e5f6 (documento)
       ├── nombre: "Zapatillas Adidas"
       ├── precio: 120000
       └── estado: "Activo"`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CREAR LA COLECCIÓN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">
          1. Crear registros de ejemplo en Firestore Console
        </h2>

        <ol>
          <li>
            En Firebase Console, ir a <strong>Firestore Database</strong>.
          </li>
          <li>
            Hacer clic en <strong>Iniciar colección</strong>.
          </li>
          <li>
            Ponerle el nombre a la colección (por ejemplo{" "}
            <code>productos</code>, o la entidad que eligieron en la Clase
            17).
          </li>
          <li>
            Crear el primer documento. Pueden dejar el ID{" "}
            <strong>autogenerado</strong>.
          </li>
          <li>
            Agregar los campos uno por uno, eligiendo el tipo correcto
            (string, number, boolean).
          </li>
          <li>Repetir para 2 o 3 documentos más, a modo de prueba.</li>
        </ol>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CONFIGURAR LA CONEXIÓN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">
          2. Conectar Firestore desde el proyecto
        </h2>

        <p>
          Ampliamos el archivo <code>src/servicios/firebase.js</code> que ya
          veníamos usando desde la Clase 13, agregando el servicio de
          Firestore:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
export const db = getFirestore(app);   // ← nuevo

export default app;`}</code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4 mb-0">
          No hace falta volver a configurar <code>firebaseConfig</code>: es
          el mismo proyecto de Firebase que ya usamos para Authentication.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* LEER CON EL SDK */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">3. Leer información con el SDK</h2>

        <p>
          Para traer todos los documentos de una colección usamos{" "}
          <code>getDocs()</code> junto con <code>collection()</code>:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import { collection, getDocs } from "firebase/firestore";
import { db } from "../servicios/firebase";

async function obtenerProductos() {
  const snapshot = await getDocs(collection(db, "productos"));

  const productos = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return productos;
}`}</code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4">
          <h5 className="fw-bold">¿Qué devuelve cada doc?</h5>
          <ul className="mb-0">
            <li>
              <code>doc.id</code>: el ID del documento (lo necesitamos para
              editar o eliminar después).
            </li>
            <li>
              <code>doc.data()</code>: un objeto con los campos que cargamos
              (nombre, precio, estado...).
            </li>
            <li>
              Como <code>doc.data()</code> no incluye el ID, lo agregamos
              nosotros con <code>{"{ id: doc.id, ...doc.data() }"}</code>.
            </li>
          </ul>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* MOSTRAR EN REACT */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">4. Mostrar los datos en un componente</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../servicios/firebase";

function ListaProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    async function cargarProductos() {
      const snapshot = await getDocs(collection(db, "productos"));

      setProductos(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );

      setCargando(false);
    }

    cargarProductos();
  }, []);

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  return (
    <ul>
      {productos.map((producto) => (
        <li key={producto.id}>
          {producto.nombre} — \${producto.precio}
        </li>
      ))}
    </ul>
  );
}`}</code>
          </pre>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">
                El componente se monta
              </div>
              <div>↓</div>
              <div className="border rounded p-3">
                useEffect ejecuta cargarProductos()
              </div>
              <div>↓</div>
              <div className="border rounded p-3">
                getDocs() trae los documentos de Firestore
              </div>
              <div>↓</div>
              <div className="bg-primary text-white rounded p-3">
                setProductos() actualiza el estado y React vuelve a
                renderizar
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* REGLAS DE SEGURIDAD (INTRO) */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Una introducción a las reglas de seguridad</h2>

        <p>
          Si crearon Firestore en modo de producción (Clase 16), por defecto{" "}
          <strong>todas</strong> las lecturas y escrituras están bloqueadas.
          Mientras desarrollan y hacen pruebas, pueden usar una regla
          temporal y abierta solo para usuarios autenticados:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}`}</code>
          </pre>
        </div>

        <div className="alert alert-warning mt-4 mb-0">
          Esta regla es temporal: permite cualquier operación a cualquier
          usuario autenticado, sin distinguir roles. En la Clase 20 vamos a
          reemplazarla por reglas específicas por colección y por rol.
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
                  No hay reglas que permitan la lectura, o el usuario no
                  está autenticado.
                </td>
                <td>
                  Revisar las reglas en Firestore Console y confirmar que
                  haya sesión iniciada.
                </td>
              </tr>
              <tr>
                <td>La lista aparece vacía</td>
                <td>
                  Se consultó el nombre de colección con un error de tipeo
                  (Firestore no avisa si una colección no existe).
                </td>
                <td>
                  Confirmar el nombre exacto de la colección en Firestore
                  Console.
                </td>
              </tr>
              <tr>
                <td>
                  <code>productos.map is not a function</code>
                </td>
                <td>
                  Se intentó mostrar los datos antes de que{" "}
                  <code>getDocs()</code> termine.
                </td>
                <td>
                  Inicializar el estado como arreglo vacío (
                  <code>useState([])</code>) y esperar a{" "}
                  <code>await getDocs()</code> dentro del{" "}
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
              Crear en Firestore la colección de la entidad principal del
              proyecto, con al menos 3 documentos de ejemplo.
            </li>
            <li>
              Agregar <code>getFirestore</code> a{" "}
              <code>servicios/firebase.js</code>.
            </li>
            <li>
              Crear un componente que traiga esos documentos con{" "}
              <code>getDocs()</code> y los muestre en pantalla.
            </li>
            <li>
              Configurar, al menos de forma temporal, una regla que permita
              lectura y escritura a usuarios autenticados.
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
              href="https://firebase.google.com/docs/firestore/query-data/get-data"
              target="_blank"
              rel="noreferrer"
            >
              Firestore — Obtener datos
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Clase18;
