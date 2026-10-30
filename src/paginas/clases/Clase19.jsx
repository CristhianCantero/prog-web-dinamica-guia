import React from "react";

function Clase19() {
  return (
    <main>
      {/* ====================================== */}
      {/* PRESENTACIÓN */}
      {/* ====================================== */}

      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 19</span>

          <h1 className="fw-bold">CRUD con Firestore</h1>

          <p className="lead text-secondary mt-3">
            Ya sabemos leer datos de Firestore. Hoy completamos las cuatro
            operaciones: crear, leer, modificar y eliminar, evolucionando el
            panel administrativo que construimos en la Clase 12.
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
            <li>
              Crear documentos con <code>addDoc()</code>.
            </li>
            <li>
              Modificar documentos con <code>updateDoc()</code>.
            </li>
            <li>
              Eliminar documentos con <code>deleteDoc()</code>.
            </li>
            <li>
              Conectar formularios y estados de React con cada operación.
            </li>
            <li>Controlar errores y estados de carga.</li>
          </ul>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* DE LOCAL A FIRESTORE */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Qué cambia respecto a la Clase 12</h2>

        <p>
          La estructura del panel administrativo (búsqueda, modal, tabla) se
          mantiene igual. Lo que cambia es de dónde salen y a dónde van los
          datos:
        </p>

        <div className="table-responsive mt-3">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Operación</th>
                <th>Clase 12 (local)</th>
                <th>Clase 19 (Firestore)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Create</td>
                <td>
                  <code>setProductos([...productos, nuevo])</code>
                </td>
                <td>
                  <code>addDoc(collection(db, "productos"), nuevo)</code>
                </td>
              </tr>
              <tr>
                <td>Read</td>
                <td>Array ya en el estado</td>
                <td>
                  <code>getDocs(collection(db, "productos"))</code>
                </td>
              </tr>
              <tr>
                <td>Update</td>
                <td>
                  <code>productos.map(...)</code>
                </td>
                <td>
                  <code>updateDoc(doc(db, "productos", id), cambios)</code>
                </td>
              </tr>
              <tr>
                <td>Delete / estado</td>
                <td>
                  <code>productos.map(...)</code> cambiando estado
                </td>
                <td>
                  <code>updateDoc()</code> o{" "}
                  <code>deleteDoc(doc(db, "productos", id))</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CREATE */}
        {/* ====================================== */}

        <span className="badge text-bg-primary mb-2">CREATE</span>

        <h2 className="fw-bold">Crear documentos con addDoc()</h2>

        <p className="mt-3">
          A diferencia del array local (donde generábamos el ID
          manualmente), <code>addDoc()</code> crea el documento y Firestore
          le asigna un ID único automáticamente.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import { collection, addDoc } from "firebase/firestore";
import { db } from "../servicios/firebase";

const crearProducto = async () => {
  await addDoc(collection(db, "productos"), {
    nombre: formulario.nombre,
    precio: Number(formulario.precio),
    categoria: formulario.categoria,
    estado: "Activo",
  });
};`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* READ */}
        {/* ====================================== */}

        <span className="badge text-bg-primary mb-2">READ</span>

        <h2 className="fw-bold">Leer documentos con getDocs()</h2>

        <p className="mt-3">
          Ya lo implementamos en la Clase 18. Para que la tabla se actualice
          después de crear, modificar o eliminar, conviene extraer esa
          lógica en una función que podamos volver a llamar:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`const cargarProductos = async () => {
  const snapshot = await getDocs(collection(db, "productos"));

  setProductos(
    snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  );
};

useEffect(() => {
  cargarProductos();
}, []);`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* UPDATE */}
        {/* ====================================== */}

        <span className="badge text-bg-primary mb-2">UPDATE</span>

        <h2 className="fw-bold">Modificar documentos con updateDoc()</h2>

        <p className="mt-3">
          Necesitamos el <code>id</code> del documento (por eso lo
          guardamos al leer). <code>doc(db, "productos", id)</code>{" "}
          apunta al documento específico que queremos actualizar.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import { doc, updateDoc } from "firebase/firestore";

const actualizarProducto = async (id) => {
  await updateDoc(doc(db, "productos", id), {
    nombre: formulario.nombre,
    precio: Number(formulario.precio),
    categoria: formulario.categoria,
  });
};`}</code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4 mb-0">
          <code>updateDoc()</code> solo modifica los campos que le pasamos;
          el resto del documento queda igual. Es distinto a{" "}
          <code>setDoc()</code>, que reemplaza el documento entero.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* DELETE / ESTADO */}
        {/* ====================================== */}

        <span className="badge text-bg-primary mb-2">DELETE</span>

        <h2 className="fw-bold">
          Cambiar estado o eliminar con deleteDoc()
        </h2>

        <p className="mt-3">
          Siguiendo el mismo criterio de la Clase 12, para muchos proyectos
          conviene cambiar el estado en vez de borrar:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`const cambiarEstado = async (producto) => {
  await updateDoc(doc(db, "productos", producto.id), {
    estado: producto.estado === "Activo" ? "Inactivo" : "Activo",
  });
};`}</code>
          </pre>
        </div>

        <p className="mt-4">
          Cuando sí hace falta eliminar en forma definitiva:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`import { deleteDoc } from "firebase/firestore";

const eliminarProducto = async (id) => {
  await deleteDoc(doc(db, "productos", id));
};`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* COMPONENTE COMPLETO */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">
          El panel administrativo conectado a Firestore
        </h2>

        <p>
          Así queda la versión evolucionada del componente de la Clase 12,
          integrando las cuatro operaciones:
        </p>

        <div className="bg-dark text-light p-4 rounded mt-3">
          <pre className="mb-0">
            <code>{`import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";
import { db } from "../../servicios/firebase";

function PanelProductos() {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [productoEditando, setProductoEditando] = useState(null);
  const [formulario, setFormulario] = useState({
    nombre: "",
    precio: "",
    categoria: "",
  });
  const [error, setError] = useState("");

  const cargarProductos = async () => {
    const snapshot = await getDocs(collection(db, "productos"));
    setProductos(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
    setCargando(false);
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const manejarCambio = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const prepararNuevo = () => {
    setModoEdicion(false);
    setProductoEditando(null);
    setFormulario({ nombre: "", precio: "", categoria: "" });
    setError("");
  };

  const prepararEdicion = (producto) => {
    setModoEdicion(true);
    setProductoEditando(producto);
    setFormulario({
      nombre: producto.nombre,
      precio: producto.precio,
      categoria: producto.categoria,
    });
    setError("");
  };

  const guardarProducto = async () => {
    if (
      formulario.nombre.trim() === "" ||
      formulario.precio === "" ||
      formulario.categoria === ""
    ) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (modoEdicion) {
      await updateDoc(doc(db, "productos", productoEditando.id), {
        nombre: formulario.nombre,
        precio: Number(formulario.precio),
        categoria: formulario.categoria,
      });
    } else {
      await addDoc(collection(db, "productos"), {
        nombre: formulario.nombre,
        precio: Number(formulario.precio),
        categoria: formulario.categoria,
        estado: "Activo",
      });
    }

    await cargarProductos();
  };

  const cambiarEstado = async (producto) => {
    await updateDoc(doc(db, "productos", producto.id), {
      estado: producto.estado === "Activo" ? "Inactivo" : "Activo",
    });
    await cargarProductos();
  };

  if (cargando) {
    return <p>Cargando productos...</p>;
  }

  // El resto del JSX (tabla, buscador, modal) es igual al de la Clase 12,
  // solo cambian las funciones que llama cada botón.

  return <div>{/* ... */}</div>;
}`}</code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ESTADOS DE CARGA Y ERROR */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Controlar carga y errores</h2>

        <p>
          Cada llamada a Firestore puede tardar y puede fallar (sin
          internet, sin permisos). Conviene envolverlas en{" "}
          <code>try/catch</code> y mostrar feedback al usuario:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>{`const guardarProducto = async () => {
  setError("");

  try {
    await addDoc(collection(db, "productos"), nuevoProducto);
    await cargarProductos();
  } catch (err) {
    setError("No se pudo guardar el producto. Probá de nuevo.");
    console.error(err);
  }
};`}</code>
          </pre>
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
                <td>La tabla no se actualiza después de guardar</td>
                <td>
                  No se volvió a llamar a <code>cargarProductos()</code>{" "}
                  después de <code>addDoc</code>/<code>updateDoc</code>.
                </td>
                <td>
                  Llamar a <code>cargarProductos()</code> (o actualizar el
                  estado local) al terminar cada operación.
                </td>
              </tr>
              <tr>
                <td>
                  <code>updateDoc is not a function</code>
                </td>
                <td>Falta importarlo desde "firebase/firestore".</td>
                <td>
                  Revisar los imports al principio del archivo.
                </td>
              </tr>
              <tr>
                <td>Se crea un documento con el precio como texto</td>
                <td>
                  El valor del input viene siempre como string, aunque sea{" "}
                  <code>type="number"</code>.
                </td>
                <td>
                  Convertir con <code>Number(formulario.precio)</code> antes
                  de guardar.
                </td>
              </tr>
              <tr>
                <td>
                  <code>No document to update</code>
                </td>
                <td>
                  Se intentó modificar un documento con un ID que ya no
                  existe.
                </td>
                <td>
                  Volver a cargar la lista antes de permitir editar, o
                  validar que el documento siga existiendo.
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
              Reemplazar el <code>useState</code> con el array local del
              panel administrativo de la Clase 12 por llamadas reales a
              Firestore.
            </li>
            <li>
              Implementar <code>addDoc()</code> para crear nuevos registros.
            </li>
            <li>
              Implementar <code>updateDoc()</code> para modificar registros
              existentes.
            </li>
            <li>
              Implementar el cambio de estado (o <code>deleteDoc()</code> si
              corresponde a su proyecto).
            </li>
            <li>Agregar manejo de errores con try/catch en cada operación.</li>
            <li>
              Probar las cuatro operaciones y confirmar los cambios en
              Firestore Console.
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
              href="https://firebase.google.com/docs/firestore/manage-data/add-data"
              target="_blank"
              rel="noreferrer"
            >
              Firestore — Agregar datos
            </a>
          </li>
          <li>
            <a
              href="https://firebase.google.com/docs/firestore/manage-data/delete-data"
              target="_blank"
              rel="noreferrer"
            >
              Firestore — Eliminar datos
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Clase19;
