import React, { useState } from "react";

function Clase12() {
  // ==========================================
  // DATOS
  // ==========================================

  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Zapatillas Nike",
      precio: 150000,
      categoria: "Deportivo",
      estado: "Activo",
    },
    {
      id: 2,
      nombre: "Zapatillas Adidas",
      precio: 120000,
      categoria: "Urbano",
      estado: "Activo",
    },
    {
      id: 3,
      nombre: "Zapatillas Puma",
      precio: 95000,
      categoria: "Entrenamiento",
      estado: "Activo",
    },
  ]);

  // ==========================================
  // ESTADOS
  // ==========================================

  const [busqueda, setBusqueda] = useState("");

  const [modoEdicion, setModoEdicion] = useState(false);

  const [productoEditando, setProductoEditando] = useState(null);

  const [formulario, setFormulario] = useState({
    nombre: "",
    precio: "",
    categoria: "",
  });

  const [error, setError] = useState("");

  // ==========================================
  // BUSCADOR
  // ==========================================

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()),
  );

  // ==========================================
  // CAMBIOS DEL FORMULARIO
  // ==========================================

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  // ==========================================
  // PREPARAR NUEVO PRODUCTO
  // ==========================================

  const prepararNuevo = () => {
    setModoEdicion(false);

    setProductoEditando(null);

    setFormulario({
      nombre: "",
      precio: "",
      categoria: "",
    });

    setError("");
  };

  // ==========================================
  // PREPARAR EDICIÓN
  // ==========================================

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

  // ==========================================
  // GUARDAR PRODUCTO
  // ==========================================

  const guardarProducto = () => {
    // VALIDACIÓN

    if (
      formulario.nombre.trim() === "" ||
      formulario.precio === "" ||
      formulario.categoria === ""
    ) {
      setError("Todos los campos son obligatorios.");

      return;
    }

    // ========================================
    // UPDATE - MODIFICAR
    // ========================================

    if (modoEdicion) {
      const productosActualizados = productos.map((producto) => {
        if (producto.id === productoEditando.id) {
          return {
            ...producto,
            nombre: formulario.nombre,
            precio: Number(formulario.precio),
            categoria: formulario.categoria,
          };
        }

        return producto;
      });

      setProductos(productosActualizados);
    }

    // ========================================
    // CREATE - CREAR
    // ========================================
    else {
      const nuevoProducto = {
        id:
          productos.length > 0
            ? Math.max(...productos.map((producto) => producto.id)) + 1
            : 1,

        nombre: formulario.nombre,

        precio: Number(formulario.precio),

        categoria: formulario.categoria,

        estado: "Activo",
      };

      setProductos([...productos, nuevoProducto]);
    }

    // ========================================
    // LIMPIAR FORMULARIO
    // ========================================

    setFormulario({
      nombre: "",
      precio: "",
      categoria: "",
    });

    setModoEdicion(false);

    setProductoEditando(null);

    setError("");
  };

  // ==========================================
  // CAMBIAR ESTADO
  // ==========================================

  const cambiarEstado = (id) => {
    const productosActualizados = productos.map((producto) => {
      if (producto.id === id) {
        return {
          ...producto,
          estado: producto.estado === "Activo" ? "Inactivo" : "Activo",
        };
      }

      return producto;
    });

    setProductos(productosActualizados);
  };

  return (
    <main>
      {/* ====================================== */}
      {/* PRESENTACIÓN */}
      {/* ====================================== */}

      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 12</span>

          <h1 className="fw-bold">CRUD en React</h1>

          <p className="lead text-secondary mt-3">
            En esta clase vamos a aprender a crear, visualizar, modificar y
            cambiar el estado de los datos de nuestra aplicación.
          </p>
        </div>
      </section>

      <section className="container py-5">
        {/* ====================================== */}
        {/* INTRODUCCIÓN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Hasta ahora...</h2>

        <p>
          En las clases anteriores aprendimos a almacenar información utilizando
          arrays de objetos.
        </p>

        <p>
          También aprendimos a mostrar esa información utilizando
          <code> .map()</code> y buscar elementos mediante
          <code> .filter()</code>.
        </p>

        <p>
          Ahora queremos que el usuario pueda
          <strong> administrar esa información</strong>.
        </p>

        <div className="alert alert-primary mt-4">
          Por ejemplo, un administrador debería poder crear un producto,
          modificar su precio o desactivarlo cuando deja de estar disponible.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CRUD */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">¿Qué significa CRUD?</h2>

        <p>
          CRUD representa las cuatro operaciones básicas que podemos realizar
          sobre la información de un sistema.
        </p>

        <div className="row g-4 mt-3">
          <div className="col-md-6 col-lg-3">
            <div className="border rounded p-4 h-100 text-center">
              <div className="display-6 fw-bold text-primary">C</div>

              <h5 className="fw-bold">Create</h5>

              <p className="text-secondary mb-0">Crear información.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="border rounded p-4 h-100 text-center">
              <div className="display-6 fw-bold text-primary">R</div>

              <h5 className="fw-bold">Read</h5>

              <p className="text-secondary mb-0">Leer o mostrar información.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="border rounded p-4 h-100 text-center">
              <div className="display-6 fw-bold text-primary">U</div>

              <h5 className="fw-bold">Update</h5>

              <p className="text-secondary mb-0">Modificar información.</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="border rounded p-4 h-100 text-center">
              <div className="display-6 fw-bold text-primary">D</div>

              <h5 className="fw-bold">Delete</h5>

              <p className="text-secondary mb-0">Eliminar información.</p>
            </div>
          </div>
        </div>

        <div className="alert alert-warning mt-4">
          En nuestro ejemplo no vamos a eliminar definitivamente los productos.
          Vamos a utilizar <strong>Activo/Inactivo</strong>. En muchos sistemas
          es conveniente conservar el registro y modificar su estado.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* PANEL ADMINISTRATIVO */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Nuestro primer panel administrativo</h2>

        <p>
          Vamos a construir una pantalla desde donde podamos administrar
          nuestros productos.
        </p>

        <div className="card shadow-sm mt-4">
          <div className="card-body p-4">
            {/* CABECERA */}

            <div className="d-flex flex-column flex-lg-row justify-content-between gap-3 mb-4">
              <div>
                <h4 className="fw-bold mb-1">Productos</h4>

                <p className="text-secondary mb-0">
                  Administración de productos del sistema.
                </p>
              </div>

              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#modalProducto"
                onClick={prepararNuevo}
              >
                + Nuevo producto
              </button>
            </div>

            {/* BUSCADOR */}

            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar producto..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
              />
            </div>

            {/* TABLA */}

            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>

                    <th>Producto</th>

                    <th>Precio</th>

                    <th>Categoría</th>

                    <th>Estado</th>

                    <th>Acciones</th>
                  </tr>
                </thead>

                <tbody>
                  {productosFiltrados.map((producto) => (
                    <tr key={producto.id}>
                      <td>{producto.id}</td>

                      <td className="fw-bold">{producto.nombre}</td>

                      <td>${producto.precio.toLocaleString("es-AR")}</td>

                      <td>{producto.categoria}</td>

                      <td>
                        <span
                          className={
                            producto.estado === "Activo"
                              ? "badge text-bg-success"
                              : "badge text-bg-secondary"
                          }
                        >
                          {producto.estado}
                        </span>
                      </td>

                      <td>
                        <div className="d-flex gap-2 flex-wrap">
                          <button
                            className="btn btn-sm btn-outline-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modalProducto"
                            onClick={() => prepararEdicion(producto)}
                          >
                            Editar
                          </button>

                          <button
                            className={
                              producto.estado === "Activo"
                                ? "btn btn-sm btn-outline-danger"
                                : "btn btn-sm btn-outline-success"
                            }
                            onClick={() => cambiarEstado(producto.id)}
                          >
                            {producto.estado === "Activo"
                              ? "Desactivar"
                              : "Activar"}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {productosFiltrados.length === 0 && (
              <div className="alert alert-warning mb-0">
                No se encontraron productos.
              </div>
            )}
          </div>
        </div>

        {/* ====================================== */}
        {/* MODAL */}
        {/* ====================================== */}

        <div
          className="modal fade"
          id="modalProducto"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">
                  {modoEdicion ? "Editar producto" : "Nuevo producto"}
                </h5>

                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Cerrar"
                ></button>
              </div>

              <div className="modal-body">
                {error && <div className="alert alert-danger">{error}</div>}

                {/* NOMBRE */}

                <div className="mb-3">
                  <label className="form-label">Nombre</label>

                  <input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={formulario.nombre}
                    onChange={manejarCambio}
                  />
                </div>

                {/* PRECIO */}

                <div className="mb-3">
                  <label className="form-label">Precio</label>

                  <input
                    type="number"
                    className="form-control"
                    name="precio"
                    value={formulario.precio}
                    onChange={manejarCambio}
                  />
                </div>

                {/* CATEGORÍA */}

                <div className="mb-3">
                  <label className="form-label">Categoría</label>

                  <select
                    className="form-select"
                    name="categoria"
                    value={formulario.categoria}
                    onChange={manejarCambio}
                  >
                    <option value="">Seleccionar...</option>

                    <option value="Deportivo">Deportivo</option>

                    <option value="Urbano">Urbano</option>

                    <option value="Entrenamiento">Entrenamiento</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={guardarProducto}
                  data-bs-dismiss={
                    formulario.nombre.trim() !== "" &&
                    formulario.precio !== "" &&
                    formulario.categoria !== ""
                      ? "modal"
                      : undefined
                  }
                >
                  {modoEdicion ? "Guardar cambios" : "Crear producto"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CREATE */}
        {/* ====================================== */}

        <span className="badge text-bg-primary mb-2">CREATE</span>

        <h2 className="fw-bold">Crear un nuevo elemento</h2>

        <p className="mt-3">
          Cuando completamos el formulario necesitamos construir un nuevo objeto
          con la información ingresada por el usuario.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`const nuevoProducto = {

  id:
    productos.length > 0
      ? Math.max(
          ...productos.map((producto) => producto.id)
        ) + 1
      : 1,

  nombre: formulario.nombre,

  precio: Number(formulario.precio),

  categoria: formulario.categoria,

  estado: "Activo"

};`}
            </code>
          </pre>
        </div>

        {/* EXPLICACIÓN DEL ID */}

        <div className="alert alert-secondary mt-4">
          <h5 className="fw-bold">¿Cómo generamos el ID?</h5>

          <p>
            Buscamos cuál es el ID más alto que existe actualmente y le sumamos
            1.
          </p>

          <div className="bg-dark text-light rounded p-3 mb-3">
            <code>
              {"Math.max(...productos.map((producto) => producto.id)) + 1"}
            </code>
          </div>

          <p className="mb-0">
            Por ejemplo, si existen los ID
            <strong> 1, 2 y 3</strong>, el próximo producto recibirá
            automáticamente el ID <strong>4</strong>.
          </p>
        </div>

        {/* PROCESO DEL ID */}

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">productos</div>

              <div>↓</div>

              <div className="border rounded p-3">.map()</div>

              <div>↓</div>

              <div className="border rounded p-3">[1, 2, 3]</div>

              <div>↓</div>

              <div className="border rounded p-3">Math.max()</div>

              <div>↓</div>

              <div className="border rounded p-3">3</div>

              <div>↓</div>

              <div className="border rounded p-3">+ 1</div>

              <div>↓</div>

              <div className="bg-primary text-white rounded p-3">ID = 4</div>
            </div>
          </div>
        </div>

        <p className="mt-4">Después agregamos el nuevo objeto al array:</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`setProductos([
  ...productos,
  nuevoProducto
]);`}
            </code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4">
          <code>...productos</code> conserva todos los productos que ya estaban
          dentro del array y luego agregamos
          <code> nuevoProducto</code>.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* READ */}
        {/* ====================================== */}

        <span className="badge text-bg-primary mb-2">READ</span>

        <h2 className="fw-bold">Mostrar la información</h2>

        <p className="mt-3">
          Esta operación ya la conocemos de las clases anteriores.
        </p>

        <p>
          Utilizamos <code>.map()</code> para recorrer los productos y generar
          una fila de la tabla por cada uno.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`{productos.map((producto) => (

  <tr key={producto.id}>

    <td>{producto.id}</td>

    <td>{producto.nombre}</td>

    <td>{producto.precio}</td>

    <td>{producto.estado}</td>

  </tr>

))}`}
            </code>
          </pre>
        </div>

        <div className="alert alert-success mt-4">
          <strong>READ</strong> significa obtener y mostrar la información
          existente.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* UPDATE */}
        {/* ====================================== */}

        <span className="badge text-bg-primary mb-2">UPDATE</span>

        <h2 className="fw-bold">Modificar un elemento</h2>

        <p className="mt-3">
          Para modificar un producto primero necesitamos identificar cuál
          seleccionó el usuario.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`const prepararEdicion = (producto) => {

  setModoEdicion(true);

  setProductoEditando(producto);

  setFormulario({

    nombre: producto.nombre,

    precio: producto.precio,

    categoria: producto.categoria

  });

};`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          De esta manera, cuando abrimos el formulario aparecen automáticamente
          los datos actuales del producto.
        </p>

        <div className="alert alert-primary">
          <strong>Importante:</strong> no necesitamos crear otro formulario para
          editar. Reutilizamos el mismo formulario utilizado para crear.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* UPDATE CON MAP */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">
          ¿Cómo modificamos solamente un producto?
        </h2>

        <p>
          Nuevamente podemos utilizar <code>.map()</code>, pero ahora vamos
          comparando el ID de cada producto.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`const productosActualizados = productos.map(
  (producto) => {

    if (producto.id === productoEditando.id) {

      return {
        ...producto,
        nombre: formulario.nombre,
        precio: Number(formulario.precio),
        categoria: formulario.categoria
      };

    }

    return producto;

  }
);

setProductos(productosActualizados);`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* EXPLICACIÓN UPDATE */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">¿Qué está ocurriendo?</h2>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">
                Tenemos todos los productos
              </div>

              <div>↓</div>

              <div className="border rounded p-3">.map()</div>

              <div>↓</div>

              <div className="border rounded p-3">Comparamos los ID</div>

              <div>↓</div>

              <div className="border rounded p-3">
                ¿Es el producto que queremos modificar?
              </div>

              <div>↓</div>

              <div className="bg-primary text-white rounded p-3">
                Sí → modificamos sus datos
              </div>

              <div className="border rounded p-3">
                No → dejamos el producto como estaba
              </div>
            </div>
          </div>
        </div>

        <div className="alert alert-secondary mt-4">
          El <strong>ID</strong> es importante porque nos permite identificar
          exactamente qué registro queremos modificar.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* DELETE */}
        {/* ====================================== */}

        <span className="badge text-bg-primary mb-2">DELETE</span>

        <h2 className="fw-bold">Eliminar o desactivar</h2>

        <p className="mt-3">
          CRUD utiliza el término <strong>Delete</strong>, pero no siempre
          necesitamos borrar definitivamente la información.
        </p>

        <div className="alert alert-warning">
          En una aplicación administrativa puede ser importante conservar el
          historial. Por eso podemos utilizar un campo llamado
          <strong> estado</strong>.
        </div>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`{
  id: 1,
  nombre: "Zapatillas Nike",
  estado: "Activo"
}`}
            </code>
          </pre>
        </div>

        <p className="mt-4">En lugar de eliminar el objeto podemos cambiar:</p>

        <div className="bg-dark text-light p-3 rounded">
          <code>{'estado: "Inactivo"'}</code>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* CAMBIAR ESTADO */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Cambiar el estado</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`const cambiarEstado = (id) => {

  const productosActualizados =
    productos.map((producto) => {

      if (producto.id === id) {

        return {
          ...producto,
          estado:
            producto.estado === "Activo"
              ? "Inactivo"
              : "Activo"
        };

      }

      return producto;

    });

  setProductos(productosActualizados);

};`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          Si el producto está activo pasa a inactivo. Si está inactivo vuelve a
          activo.
        </p>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* ELIMINACIÓN REAL */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">¿Y si realmente queremos eliminar?</h2>

        <p>
          También podemos eliminar completamente un elemento del array
          utilizando <code>.filter()</code>.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`const eliminarProducto = (id) => {

  const productosActualizados =
    productos.filter(
      (producto) => producto.id !== id
    );

  setProductos(productosActualizados);

};`}
            </code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4">
          En este caso <code>.filter()</code> conserva todos los productos
          excepto aquel cuyo ID coincide con el ID que queremos eliminar.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* MODAL EXPLICACIÓN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">¿Qué es un Modal?</h2>

        <p>
          El formulario que utilizamos en nuestro ejemplo aparece dentro de un{" "}
          <strong>Modal de Bootstrap</strong>.
        </p>

        <p>
          Un modal es una ventana que aparece sobre el contenido actual sin
          necesidad de cambiar de página.
        </p>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-7">
            <div className="border rounded p-4 bg-light">
              <h5 className="fw-bold">Nuevo producto</h5>

              <hr />

              <div className="mb-3">
                Nombre
                <div className="form-control mt-1 text-secondary">
                  Zapatillas...
                </div>
              </div>

              <div className="mb-3">
                Precio
                <div className="form-control mt-1 text-secondary">150000</div>
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button className="btn btn-secondary" disabled>
                  Cancelar
                </button>

                <button className="btn btn-primary" disabled>
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* REUTILIZACIÓN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">
          Un mismo formulario para dos operaciones
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Nuevo</th>

                <th>Editar</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Formulario vacío.</td>

                <td>Formulario con datos existentes.</td>
              </tr>

              <tr>
                <td>Creamos un objeto.</td>

                <td>Modificamos un objeto.</td>
              </tr>

              <tr>
                <td>Agregamos el objeto al array.</td>

                <td>Actualizamos el objeto dentro del array.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="alert alert-success">
          Reutilizar código es una práctica importante. No necesitamos crear una
          pantalla diferente para cada operación.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* LIMPIAR ESTADOS */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Limpiar después de guardar</h2>

        <p>
          Una vez que terminamos de crear o editar un producto, limpiamos los
          estados utilizados por el formulario.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`setFormulario({
  nombre: "",
  precio: "",
  categoria: ""
});

setModoEdicion(false);

setProductoEditando(null);

setError("");`}
            </code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4">
          Esto permite que la próxima vez que abramos
          <strong> Nuevo producto</strong>, el formulario vuelva a comenzar
          limpio y sin conservar información de una edición anterior.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* LIMITACIÓN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Hay un problema importante</h2>

        <p>Probá crear o modificar productos en el panel administrativo.</p>

        <p>
          Mientras utilizamos la aplicación, los cambios funcionan
          correctamente.
        </p>

        <div className="alert alert-danger mt-4">
          <strong>
            Pero si actualizamos la página con F5, los cambios desaparecen.
          </strong>
        </div>

        <p>
          Esto sucede porque actualmente nuestros datos solamente están
          almacenados temporalmente en el estado de React.
        </p>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">
                Usuario crea o modifica un producto
              </div>

              <div>↓</div>

              <div className="border rounded p-3">setProductos()</div>

              <div>↓</div>

              <div className="bg-success text-white rounded p-3">
                React actualiza la interfaz
              </div>

              <div>↓</div>

              <div className="border rounded p-3">F5 / cerrar aplicación</div>

              <div>↓</div>

              <div className="bg-danger text-white rounded p-3">
                Los cambios desaparecen
              </div>
            </div>
          </div>
        </div>

        <div className="alert alert-primary mt-4">
          Para solucionar este problema necesitaremos guardar la información
          fuera del estado de React. Más adelante vamos a conectar nuestra
          aplicación con una <strong>base de datos</strong>.
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* APLICACIÓN A PROYECTOS */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">El CRUD cambia según el proyecto</h2>

        <div className="table-responsive mt-4">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Proyecto</th>

                <th>Información administrada</th>

                <th>Operaciones posibles</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Tienda</td>
                <td>Productos</td>
                <td>Crear, editar, activar/desactivar.</td>
              </tr>

              <tr>
                <td>Biblioteca</td>
                <td>Libros</td>
                <td>Agregar, modificar, dar de baja.</td>
              </tr>

              <tr>
                <td>Cine</td>
                <td>Películas</td>
                <td>Agregar, editar, retirar de cartelera.</td>
              </tr>

              <tr>
                <td>Clínica</td>
                <td>Turnos</td>
                <td>Crear, modificar, cancelar.</td>
              </tr>

              <tr>
                <td>Escuela</td>
                <td>Alumnos</td>
                <td>Registrar, modificar, cambiar estado.</td>
              </tr>

              <tr>
                <td>Inspecciones</td>
                <td>Solicitudes</td>
                <td>Registrar, modificar, cambiar estado.</td>
              </tr>

              <tr>
                <td>Comunidad</td>
                <td>Publicaciones</td>
                <td>Crear, editar, ocultar/eliminar.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* ====================================== */}
        {/* RESUMEN */}
        {/* ====================================== */}

        <h2 className="fw-bold mb-3">Resumen</h2>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Operación</th>

                <th>Qué hacemos</th>

                <th>Herramientas utilizadas</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <strong>Create</strong>
                </td>

                <td>Agregamos un elemento.</td>

                <td>useState, formulario y spread.</td>
              </tr>

              <tr>
                <td>
                  <strong>Read</strong>
                </td>

                <td>Mostramos los elementos.</td>

                <td>.map()</td>
              </tr>

              <tr>
                <td>
                  <strong>Update</strong>
                </td>

                <td>Modificamos un elemento.</td>

                <td>.map() + ID</td>
              </tr>

              <tr>
                <td>
                  <strong>Delete</strong>
                </td>

                <td>Eliminamos o desactivamos.</td>

                <td>.filter() o cambio de estado.</td>
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

          <p>
            Cada grupo deberá comenzar a desarrollar una pantalla administrativa
            relacionada con su propio sistema.
          </p>

          <ol className="mb-0">
            <li>
              Elegir una entidad principal del proyecto: producto, libro,
              película, alumno, turno, publicación, solicitud, etc.
            </li>

            <li>Crear un array con al menos 5 registros.</li>

            <li>Cada registro deberá tener un ID único.</li>

            <li>Mostrar los registros mediante una tabla.</li>

            <li>Agregar un buscador.</li>

            <li>Incorporar un botón para crear un nuevo registro.</li>

            <li>Crear un formulario o modal para ingresar los datos.</li>

            <li>Permitir modificar un registro existente.</li>

            <li>Incorporar una opción para eliminar o cambiar el estado.</li>

            <li>Validar que los campos obligatorios estén completos.</li>

            <li>Registrar las tareas correspondientes en Trello.</li>

            <li>Cada integrante deberá trabajar en su propia rama.</li>

            <li>Los cambios deberán incorporarse mediante Pull Request.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Clase12;
