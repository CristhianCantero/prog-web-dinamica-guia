import React, { useState } from "react";

function Clase11() {
  // Datos utilizados en los ejemplos interactivos
  const productos = [
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
    {
      id: 4,
      nombre: "Botines Nike",
      precio: 180000,
      categoria: "Deportivo",
      estado: "Inactivo",
    },
    {
      id: 5,
      nombre: "Zapatillas Vans",
      precio: 110000,
      categoria: "Urbano",
      estado: "Activo",
    },
    {
      id: 6,
      nombre: "Zapatillas Reebok",
      precio: 90000,
      categoria: "Entrenamiento",
      estado: "Inactivo",
    },
  ];

  // Estados de los filtros
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [estado, setEstado] = useState("Todos");

  // Aplicamos los filtros
  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todas" || producto.categoria === categoria;

    const coincideEstado = estado === "Todos" || producto.estado === estado;

    return coincideBusqueda && coincideCategoria && coincideEstado;
  });

  // Reiniciar filtros
  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("Todas");
    setEstado("Todos");
  };

  return (
    <main>
      {/* PRESENTACIÓN */}
      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 11</span>

          <h1 className="fw-bold">Búsqueda, filtros y tablas</h1>

          <p className="lead text-secondary mt-3">
            En esta clase vamos a aprender a buscar y filtrar información
            almacenada en arrays y mostrar los resultados de forma organizada
            utilizando tablas.
          </p>
        </div>
      </section>

      <section className="container py-5">
        {/* INTRODUCCIÓN */}
        <h2 className="fw-bold mb-3">
          Ya tenemos los datos, ¿ahora qué hacemos?
        </h2>

        <p>
          En la Clase 10 aprendimos a almacenar varios objetos dentro de un
          array y utilizar <code>.map()</code> para mostrarlos automáticamente.
        </p>

        <p>
          Pero cuando nuestra aplicación tiene muchos elementos, necesitamos
          herramientas que permitan encontrar rápidamente la información que
          buscamos.
        </p>

        <div className="alert alert-primary mt-4">
          <strong>Ejemplo:</strong> una tienda puede tener cientos de productos.
          El usuario debería poder buscar por nombre o filtrar los productos
          según su categoría.
        </div>

        <hr className="my-5" />

        {/* FILTER */}
        <h2 className="fw-bold mb-3">¿Qué es .filter()?</h2>

        <p>
          <code>.filter()</code> es un método de los arrays que permite crear un
          nuevo array solamente con los elementos que cumplen una determinada
          condición.
        </p>

        <div className="alert alert-success mt-4">
          <strong>Idea principal:</strong> <code>.map()</code> recorre elementos
          para generar contenido. <code>.filter()</code> selecciona qué
          elementos queremos conservar.
        </div>

        <hr className="my-5" />

        {/* FILTER EJEMPLO */}
        <span className="badge text-bg-dark mb-2">Ejemplo 1</span>

        <h2 className="fw-bold">Filtrar productos</h2>

        <p className="mt-3">
          Supongamos que tenemos productos activos e inactivos.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`const productosActivos = productos.filter(
  (producto) => producto.estado === "Activo"
);`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          React recorre todos los productos y solamente conserva aquellos cuyo
          estado sea <strong>Activo</strong>.
        </p>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">Array completo</div>

              <div>↓</div>

              <div className="border rounded p-3">.filter()</div>

              <div>↓</div>

              <div className="border rounded p-3">
                ¿producto.estado === "Activo"?
              </div>

              <div>↓</div>

              <div className="bg-primary text-white rounded p-3">
                Nuevo array solamente con productos activos
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* BUSCADOR */}
        <h2 className="fw-bold mb-3">Crear un buscador</h2>

        <p>
          Para crear un buscador necesitamos guardar lo que escribe el usuario.
        </p>

        <p>
          Para eso volvemos a utilizar <code>useState</code>.
        </p>

        <div className="bg-dark text-light p-3 rounded mt-4">
          <code>{'const [busqueda, setBusqueda] = useState("");'}</code>
        </div>

        <p className="mt-4">
          Después conectamos el estado con un campo de texto:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`<input
  type="text"
  value={busqueda}
  onChange={(e) => setBusqueda(e.target.value)}
  placeholder="Buscar producto..."
/>`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* INCLUDES */}
        <h2 className="fw-bold mb-3">Buscar coincidencias</h2>

        <p>
          Ahora necesitamos comparar el texto ingresado con el nombre de cada
          producto.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`const resultados = productos.filter((producto) =>
  producto.nombre
    .toLowerCase()
    .includes(busqueda.toLowerCase())
);`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* EXPLICACIÓN */}
        <h2 className="fw-bold mb-3">¿Qué significa este código?</h2>

        <div className="table-responsive mt-4">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Código</th>
                <th>Función</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <code>producto.nombre</code>
                </td>
                <td>Obtiene el nombre del producto.</td>
              </tr>

              <tr>
                <td>
                  <code>.toLowerCase()</code>
                </td>
                <td>Convierte el texto a minúsculas.</td>
              </tr>

              <tr>
                <td>
                  <code>.includes()</code>
                </td>
                <td>Comprueba si un texto contiene otro texto.</td>
              </tr>

              <tr>
                <td>
                  <code>.filter()</code>
                </td>
                <td>
                  Conserva solamente los elementos que cumplen la condición.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* LOWERCASE */}
        <h2 className="fw-bold mb-3">¿Por qué utilizamos toLowerCase()?</h2>

        <p>
          Queremos que la búsqueda funcione independientemente de si el usuario
          escribe utilizando mayúsculas o minúsculas.
        </p>

        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <div className="border rounded p-3 text-center">NIKE</div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 text-center">Nike</div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 text-center">nike</div>
          </div>
        </div>

        <div className="alert alert-secondary mt-4">
          Al convertir ambos textos a minúsculas podemos compararlos de una
          manera más sencilla.
        </div>

        <hr className="my-5" />

        {/* SELECT */}
        <span className="badge text-bg-dark mb-2">Ejemplo 2</span>

        <h2 className="fw-bold">Filtrar utilizando un select</h2>

        <p className="mt-3">
          También podemos permitir que el usuario seleccione una categoría.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`const [categoria, setCategoria] = useState("Todas");

<select
  value={categoria}
  onChange={(e) => setCategoria(e.target.value)}
>
  <option value="Todas">Todas</option>
  <option value="Deportivo">Deportivo</option>
  <option value="Urbano">Urbano</option>
  <option value="Entrenamiento">
    Entrenamiento
  </option>
</select>`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* FILTRO CATEGORIA */}
        <h2 className="fw-bold mb-3">Aplicar el filtro de categoría</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`const coincideCategoria =
  categoria === "Todas" ||
  producto.categoria === categoria;`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          Si el usuario seleccionó <strong>Todas</strong>, cualquier producto
          será válido.
        </p>

        <p>
          Si seleccionó una categoría específica, solamente serán válidos los
          productos de esa categoría.
        </p>

        <hr className="my-5" />

        {/* COMBINAR */}
        <h2 className="fw-bold mb-3">Combinar varios filtros</h2>

        <p>Podemos aplicar varias condiciones al mismo tiempo.</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`const productosFiltrados = productos.filter((producto) => {

  const coincideBusqueda = producto.nombre
    .toLowerCase()
    .includes(busqueda.toLowerCase());

  const coincideCategoria =
    categoria === "Todas" ||
    producto.categoria === categoria;

  const coincideEstado =
    estado === "Todos" ||
    producto.estado === estado;

  return (
    coincideBusqueda &&
    coincideCategoria &&
    coincideEstado
  );

});`}
            </code>
          </pre>
        </div>

        <div className="alert alert-primary mt-4">
          El operador <code>&&</code> significa que todas las condiciones deben
          cumplirse para que el producto aparezca en el resultado.
        </div>

        <hr className="my-5" />

        {/* EJEMPLO INTERACTIVO */}
        <h2 className="fw-bold mb-3">Probemos los filtros</h2>

        <p>
          El siguiente ejemplo funciona realmente. Podés escribir, seleccionar
          una categoría y cambiar el estado.
        </p>

        <div className="card shadow-sm mt-4">
          <div className="card-body p-4">
            <div className="row g-3">
              {/* BUSCADOR */}
              <div className="col-lg-5">
                <label className="form-label fw-bold">Buscar</label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Ej: Nike"
                  value={busqueda}
                  onChange={(e) => setBusqueda(e.target.value)}
                />
              </div>

              {/* CATEGORÍA */}
              <div className="col-md-6 col-lg-3">
                <label className="form-label fw-bold">Categoría</label>

                <select
                  className="form-select"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  <option value="Todas">Todas</option>

                  <option value="Deportivo">Deportivo</option>

                  <option value="Urbano">Urbano</option>

                  <option value="Entrenamiento">Entrenamiento</option>
                </select>
              </div>

              {/* ESTADO */}
              <div className="col-md-6 col-lg-2">
                <label className="form-label fw-bold">Estado</label>

                <select
                  className="form-select"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                >
                  <option value="Todos">Todos</option>

                  <option value="Activo">Activo</option>

                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>

              {/* LIMPIAR */}
              <div className="col-lg-2 d-flex align-items-end">
                <button
                  className="btn btn-outline-secondary w-100"
                  onClick={limpiarFiltros}
                >
                  Limpiar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RESULTADOS */}
        <div className="mt-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="fw-bold mb-0">Resultados</h4>

            <span className="badge text-bg-primary">
              {productosFiltrados.length} encontrados
            </span>
          </div>

          <div className="row g-4">
            {productosFiltrados.map((producto) => (
              <div className="col-md-6 col-lg-4" key={producto.id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex justify-content-between mb-3">
                      <span className="badge text-bg-secondary">
                        {producto.categoria}
                      </span>

                      <span
                        className={
                          producto.estado === "Activo"
                            ? "badge text-bg-success"
                            : "badge text-bg-danger"
                        }
                      >
                        {producto.estado}
                      </span>
                    </div>

                    <h5 className="fw-bold">{producto.nombre}</h5>

                    <p className="mb-0">${producto.precio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SIN RESULTADOS */}
          {productosFiltrados.length === 0 && (
            <div className="alert alert-warning mt-4 mb-0">
              No se encontraron productos que coincidan con los filtros.
            </div>
          )}
        </div>

        <hr className="my-5" />

        {/* FILTER + MAP */}
        <h2 className="fw-bold mb-3">Primero filtramos y después mostramos</h2>

        <p>
          En este ejemplo estamos combinando los dos métodos que ya conocemos.
        </p>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">Array productos</div>

              <div>↓</div>

              <div className="border rounded p-3">.filter()</div>

              <div className="small text-secondary">
                Selecciona qué productos queremos
              </div>

              <div>↓</div>

              <div className="border rounded p-3">productosFiltrados</div>

              <div>↓</div>

              <div className="border rounded p-3">.map()</div>

              <div className="small text-secondary">Recorre los resultados</div>

              <div>↓</div>

              <div className="bg-primary text-white rounded p-3">
                React muestra los elementos
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* TABLAS */}
        <h2 className="fw-bold mb-3">Mostrar información utilizando tablas</h2>

        <p>
          Las tarjetas son útiles para catálogos y contenido visual. Pero en un
          panel administrativo muchas veces es más conveniente utilizar una{" "}
          <strong>tabla</strong>.
        </p>

        <div className="alert alert-secondary mt-4">
          Por ejemplo: administrar productos, usuarios, alumnos, turnos, libros,
          películas o inspecciones.
        </div>

        <hr className="my-5" />

        {/* ESTRUCTURA TABLA */}
        <h2 className="fw-bold mb-3">Tabla con Bootstrap</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`<table className="table table-striped">

  <thead>
    <tr>
      <th>ID</th>
      <th>Nombre</th>
      <th>Precio</th>
    </tr>
  </thead>

  <tbody>

    ...

  </tbody>

</table>`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* MAP EN TABLA */}
        <h2 className="fw-bold mb-3">Utilizar .map() dentro de una tabla</h2>

        <p>No necesitamos escribir las filas manualmente.</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`<tbody>

  {productosFiltrados.map((producto) => (

    <tr key={producto.id}>

      <td>{producto.id}</td>

      <td>{producto.nombre}</td>

      <td>{producto.precio}</td>

      <td>{producto.categoria}</td>

      <td>{producto.estado}</td>

    </tr>

  ))}

</tbody>`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* TABLA INTERACTIVA */}
        <h2 className="fw-bold mb-3">Los mismos resultados en una tabla</h2>

        <p>
          Esta tabla utiliza exactamente los mismos filtros del ejemplo
          anterior.
        </p>

        <div className="table-responsive mt-4">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Producto</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>
              {productosFiltrados.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>

                  <td className="fw-bold">{producto.nombre}</td>

                  <td>${producto.precio}</td>

                  <td>{producto.categoria}</td>

                  <td>
                    <span
                      className={
                        producto.estado === "Activo"
                          ? "badge text-bg-success"
                          : "badge text-bg-danger"
                      }
                    >
                      {producto.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {productosFiltrados.length === 0 && (
          <div className="alert alert-warning">
            No hay datos para mostrar en la tabla.
          </div>
        )}

        <hr className="my-5" />

        {/* TARJETAS VS TABLAS */}
        <h2 className="fw-bold mb-3">¿Tarjetas o tablas?</h2>

        <div className="table-responsive mt-4">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Tarjetas</th>
                <th>Tablas</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Catálogos de productos.</td>
                <td>Administración de productos.</td>
              </tr>

              <tr>
                <td>Películas disponibles.</td>
                <td>Gestión de películas.</td>
              </tr>

              <tr>
                <td>Libros destacados.</td>
                <td>Listado administrativo de libros.</td>
              </tr>

              <tr>
                <td>Contenido visual.</td>
                <td>Grandes cantidades de información.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* DIFERENTES PROYECTOS */}
        <h2 className="fw-bold mb-3">¿Cómo lo aplicamos a cada proyecto?</h2>

        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Tienda</h5>
              <p className="text-secondary mb-0">
                Buscar productos y filtrar por categoría, precio o estado.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Biblioteca</h5>
              <p className="text-secondary mb-0">
                Buscar libros y filtrar por autor, categoría o disponibilidad.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Cine</h5>
              <p className="text-secondary mb-0">
                Buscar películas y filtrar por género o función.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Clínica</h5>
              <p className="text-secondary mb-0">
                Buscar pacientes, profesionales o turnos.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Escuela</h5>
              <p className="text-secondary mb-0">
                Buscar alumnos y filtrar por curso o estado.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Inspecciones</h5>
              <p className="text-secondary mb-0">
                Buscar propiedades y filtrar inspecciones por estado.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* RESUMEN */}
        <h2 className="fw-bold mb-3">Resumen</h2>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Concepto</th>
                <th>Función</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <code>.filter()</code>
                </td>
                <td>Selecciona elementos de un array según una condición.</td>
              </tr>

              <tr>
                <td>
                  <code>.includes()</code>
                </td>
                <td>Comprueba si un texto contiene otro texto.</td>
              </tr>

              <tr>
                <td>
                  <code>.toLowerCase()</code>
                </td>
                <td>Convierte un texto a minúsculas.</td>
              </tr>

              <tr>
                <td>
                  <code>&&</code>
                </td>
                <td>Exige que varias condiciones sean verdaderas.</td>
              </tr>

              <tr>
                <td>
                  <code>||</code>
                </td>
                <td>Permite que se cumpla una condición u otra.</td>
              </tr>

              <tr>
                <td>
                  <code>select</code>
                </td>
                <td>Permite seleccionar una opción de una lista.</td>
              </tr>

              <tr>
                <td>
                  <code>.map()</code>
                </td>
                <td>Recorre los resultados para mostrarlos.</td>
              </tr>

              <tr>
                <td>
                  <strong>Tabla</strong>
                </td>
                <td>Organiza grandes cantidades de información.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* ACTIVIDAD */}
        <div className="alert alert-primary">
          <h5 className="alert-heading fw-bold">
            Actividad aplicada al proyecto
          </h5>

          <p>
            Cada grupo deberá incorporar herramientas de búsqueda y filtrado
            sobre el listado desarrollado en la Clase 10.
          </p>

          <ol className="mb-0">
            <li>Utilizar el array de objetos creado en la clase anterior.</li>

            <li>
              Crear un buscador mediante <code>useState</code>.
            </li>

            <li>
              Filtrar los resultados utilizando <code>.filter()</code>.
            </li>

            <li>Hacer que la búsqueda ignore mayúsculas y minúsculas.</li>

            <li>
              Agregar al menos un filtro mediante un
              <code> select</code>.
            </li>

            <li>Mostrar la cantidad de resultados encontrados.</li>

            <li>Mostrar un mensaje cuando no existan coincidencias.</li>

            <li>
              Elegir si los resultados se mostrarán mediante tarjetas o una
              tabla según las necesidades del proyecto.
            </li>

            <li>Registrar la tarea en Trello.</li>

            <li>
              Realizar el cambio en una rama nueva y crear el Pull Request
              correspondiente.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Clase11;
