import React from "react";

function Clase7() {
  return (
    <main>
      {/* PRESENTACIÓN */}
      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 7</span>

          <h1 className="fw-bold">Componentes reutilizables y Props</h1>

          <p className="lead text-secondary mt-3">
            En esta clase vamos a aprender a crear componentes que puedan
            utilizarse varias veces cambiando solamente la información que
            reciben.
          </p>
        </div>
      </section>

      <section className="container py-5">
        {/* INTRODUCCIÓN */}
        <h2 className="fw-bold mb-3">El problema: repetir código</h2>

        <p>
          A medida que nuestros proyectos crecen es común encontrar elementos
          que tienen prácticamente la misma estructura.
        </p>

        <p>
          Por ejemplo, imaginemos una página que muestra diferentes productos.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`<div className="card">
  <div className="card-body">
    <h5>Zapatillas Nike</h5>
    <p>$150000</p>
  </div>
</div>

<div className="card">
  <div className="card-body">
    <h5>Zapatillas Adidas</h5>
    <p>$120000</p>
  </div>
</div>

<div className="card">
  <div className="card-body">
    <h5>Zapatillas Puma</h5>
    <p>$95000</p>
  </div>
</div>`}
            </code>
          </pre>
        </div>

        <div className="alert alert-warning mt-4">
          <strong>Problema:</strong> estamos escribiendo tres veces
          prácticamente el mismo código. Lo único que cambia es la información
          de cada producto.
        </div>

        <hr className="my-5" />

        {/* COMPONENTE REUTILIZABLE */}
        <h2 className="fw-bold mb-3">
          La solución: un componente reutilizable
        </h2>

        <p>
          Podemos crear un único componente llamado
          <strong> Producto</strong> y utilizarlo todas las veces que
          necesitemos.
        </p>

        <p>
          Dentro de nuestra carpeta <code>componentes</code> creamos:
        </p>

        <div className="bg-light border rounded p-4 my-4">
          <code>src/componentes/Producto.jsx</code>
        </div>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`function Producto() {
  return (
    <div className="card">
      <div className="card-body">
        <h5>Producto</h5>
        <p>$0</p>
      </div>
    </div>
  );
}

export default Producto;`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          Hasta acá sabemos crear componentes. El problema es que si usamos este
          componente varias veces, todos mostrarían exactamente la misma
          información.
        </p>

        <hr className="my-5" />

        {/* PROPS */}
        <h2 className="fw-bold mb-3">¿Qué son las Props?</h2>

        <p>
          Las <strong>Props</strong> son datos que un componente puede recibir
          desde otro componente.
        </p>

        <p>
          Gracias a ellas podemos utilizar la misma estructura y cambiar la
          información que se muestra.
        </p>

        <div className="alert alert-primary mt-4">
          <strong>Idea principal:</strong> el componente define cómo se muestra
          la información y las Props indican qué información debe mostrar.
        </div>

        {/* DIAGRAMA */}
        <div className="row justify-content-center my-5">
          <div className="col-lg-9">
            <div className="border rounded bg-light p-4 text-center">
              <div className="fw-bold fs-5">Componente Producto</div>

              <div className="my-3 fs-3">↓</div>

              <div className="row g-3">
                <div className="col-md-4">
                  <div className="bg-white border rounded p-3">nombre</div>
                </div>

                <div className="col-md-4">
                  <div className="bg-white border rounded p-3">precio</div>
                </div>

                <div className="col-md-4">
                  <div className="bg-white border rounded p-3">descripción</div>
                </div>
              </div>

              <div className="mt-3 text-secondary">
                Props que recibe el componente
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* CREAR PROPS */}
        <span className="badge text-bg-dark mb-2">Paso 1</span>

        <h2 className="fw-bold">Hacer que el componente reciba información</h2>

        <p className="mt-3">
          Modificamos nuestro componente para que pueda recibir
          <code> nombre</code>, <code>precio</code> y<code> descripcion</code>.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`function Producto({ nombre, precio, descripcion }) {

  return (
    <div className="card h-100">

      <div className="card-body">

        <h5 className="card-title">
          {nombre}
        </h5>

        <p className="card-text">
          {descripcion}
        </p>

        <p className="fw-bold">
          \${precio}
        </p>

      </div>

    </div>
  );
}

export default Producto;`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* EXPLICACIÓN */}
        <h2 className="fw-bold mb-3">¿Qué significa esta parte?</h2>

        <div className="bg-dark text-light p-3 rounded">
          <code>{"function Producto({ nombre, precio, descripcion })"}</code>
        </div>

        <p className="mt-4">
          Estamos indicando que el componente <code>Producto</code> espera
          recibir tres datos:
        </p>

        <div className="row g-3 mt-2">
          <div className="col-md-4">
            <div className="border rounded p-4 h-100 text-center">
              <code>nombre</code>

              <p className="text-secondary mt-2 mb-0">Nombre del producto.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100 text-center">
              <code>precio</code>

              <p className="text-secondary mt-2 mb-0">Precio del producto.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100 text-center">
              <code>descripcion</code>

              <p className="text-secondary mt-2 mb-0">Información adicional.</p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* LLAVES JSX */}
        <h2 className="fw-bold mb-3">Las llaves {"{ }"} en JSX</h2>

        <p>
          Para mostrar el valor de una variable o una Prop dentro del JSX
          utilizamos llaves.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`<h5>{nombre}</h5>

<p>{descripcion}</p>

<p>\${precio}</p>`}
            </code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4">
          Todo lo que escribimos entre <code>{"{ }"}</code> es interpretado como
          JavaScript dentro del JSX.
        </div>

        <hr className="my-5" />

        {/* IMPORTAR */}
        <span className="badge text-bg-dark mb-2">Paso 2</span>

        <h2 className="fw-bold">Importar el componente</h2>

        <p className="mt-3">
          Para utilizar <code>Producto</code> en una página primero debemos
          importarlo.
        </p>

        <div className="bg-dark text-light p-3 rounded">
          <code>{'import Producto from "../componentes/Producto";'}</code>
        </div>

        <div className="alert alert-warning mt-4">
          La cantidad de <code>../</code> dependerá de la ubicación del archivo
          donde estemos utilizando el componente.
        </div>

        <hr className="my-5" />

        {/* UTILIZAR PROPS */}
        <span className="badge text-bg-dark mb-2">Paso 3</span>

        <h2 className="fw-bold">Enviar las Props</h2>

        <p className="mt-3">
          Ahora podemos utilizar el componente varias veces y enviar información
          diferente en cada caso.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`<div className="row g-4">

  <div className="col-md-4">

    <Producto
      nombre="Zapatillas Nike"
      precio="150000"
      descripcion="Zapatillas deportivas."
    />

  </div>

  <div className="col-md-4">

    <Producto
      nombre="Zapatillas Adidas"
      precio="120000"
      descripcion="Zapatillas urbanas."
    />

  </div>

  <div className="col-md-4">

    <Producto
      nombre="Zapatillas Puma"
      precio="95000"
      descripcion="Zapatillas para entrenamiento."
    />

  </div>

</div>`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* RESULTADO */}
        <h2 className="fw-bold mb-3">¿Qué conseguimos?</h2>

        <p>
          React utiliza el mismo componente tres veces, pero cada uno recibe
          información diferente.
        </p>

        <div className="row g-4 mt-2">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Zapatillas Nike</h5>

                <p className="card-text">Zapatillas deportivas.</p>

                <p className="fw-bold mb-0">$150000</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Zapatillas Adidas</h5>

                <p className="card-text">Zapatillas urbanas.</p>

                <p className="fw-bold mb-0">$120000</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Zapatillas Puma</h5>

                <p className="card-text">Zapatillas para entrenamiento.</p>

                <p className="fw-bold mb-0">$95000</p>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* FLUJO */}
        <h2 className="fw-bold text-center mb-4">¿Cómo funcionan las Props?</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">
                La página utiliza el componente
              </div>

              <div>↓</div>

              <div className="border rounded p-3">
                Envía información mediante Props
              </div>

              <div>↓</div>

              <div className="bg-light border rounded p-3">
                nombre="Zapatillas Nike"
                <br />
                precio="150000"
              </div>

              <div>↓</div>

              <div className="border rounded p-3">
                Producto recibe las Props
              </div>

              <div>↓</div>

              <div className="bg-primary text-white rounded p-3">
                El componente muestra la información
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* OTROS PROYECTOS */}
        <h2 className="fw-bold mb-3">No solamente sirve para productos</h2>

        <p>
          El nombre del componente y sus Props dependerán de las necesidades de
          cada proyecto.
        </p>

        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Biblioteca</h5>

              <div className="bg-dark text-light rounded p-3 mt-3">
                <code>
                  {'<Libro titulo="El Principito" autor="Saint-Exupéry" />'}
                </code>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Cine</h5>

              <div className="bg-dark text-light rounded p-3 mt-3">
                <code>
                  {'<Pelicula titulo="Avatar" genero="Ciencia ficción" />'}
                </code>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Sistema médico</h5>

              <div className="bg-dark text-light rounded p-3 mt-3">
                <code>{'<Turno paciente="Juan Pérez" horario="10:30" />'}</code>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Sistema escolar</h5>

              <div className="bg-dark text-light rounded p-3 mt-3">
                <code>{'<Alumno nombre="Martín" curso="6° 4°" />'}</code>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* EJEMPLO IMAGEN */}
        <h2 className="fw-bold mb-3">También podemos enviar imágenes</h2>

        <p>
          Una Prop no tiene que contener solamente texto. También podemos
          utilizarla para indicar qué imagen debe mostrar el componente.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`function Producto({ nombre, precio, imagen }) {

  return (
    <div className="card">

      <img
        src={imagen}
        className="card-img-top"
        alt={nombre}
      />

      <div className="card-body">

        <h5>{nombre}</h5>

        <p>\${precio}</p>

      </div>

    </div>
  );
}`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          Después podemos enviar una imagen diferente a cada producto.
        </p>

        <hr className="my-5" />

        {/* CUÁNDO CREAR COMPONENTE */}
        <h2 className="fw-bold mb-3">¿Cuándo conviene crear un componente?</h2>

        <p>
          No necesitamos convertir absolutamente todo en componentes.
          Principalmente nos interesa identificar estructuras que se repiten o
          que representan una parte independiente de nuestra aplicación.
        </p>

        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <div className="alert alert-success h-100 mb-0">
              <h5 className="fw-bold">✓ Conviene</h5>

              <p className="mb-1">Tarjetas de productos.</p>

              <p className="mb-1">Películas.</p>

              <p className="mb-1">Libros.</p>

              <p className="mb-1">Turnos.</p>

              <p className="mb-0">Usuarios.</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="alert alert-danger h-100 mb-0">
              <h5 className="fw-bold">✗ No necesariamente</h5>

              <p>Un título que aparece una sola vez.</p>

              <p>Un párrafo aislado.</p>

              <p className="mb-0">Cada pequeño elemento HTML de la página.</p>
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
                  <strong>Componente</strong>
                </td>

                <td>Define una estructura reutilizable de nuestra interfaz.</td>
              </tr>

              <tr>
                <td>
                  <strong>Props</strong>
                </td>

                <td>Permiten enviar información hacia un componente.</td>
              </tr>

              <tr>
                <td>
                  <strong>{"{ }"}</strong>
                </td>

                <td>Permiten utilizar JavaScript dentro del JSX.</td>
              </tr>

              <tr>
                <td>
                  <strong>Reutilización</strong>
                </td>

                <td>
                  Permite utilizar un mismo componente con datos diferentes.
                </td>
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
            Cada grupo deberá revisar el proyecto que está desarrollando e
            identificar algún elemento que pueda transformarse en un componente
            reutilizable.
          </p>

          <ol className="mb-0">
            <li>Buscar una estructura que se repita dentro del proyecto.</li>

            <li>
              Crear un componente dentro de la carpeta
              <code> componentes</code>.
            </li>

            <li>Identificar qué información cambia entre cada elemento.</li>

            <li>Convertir esa información en Props.</li>

            <li>
              Utilizar el componente al menos tres veces con datos diferentes.
            </li>

            <li>
              Verificar que modificar el componente cambie todas sus
              apariciones.
            </li>

            <li>
              Subir el cambio mediante una rama y crear el Pull Request
              correspondiente.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Clase7;
