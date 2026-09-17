import React, { useState } from "react";

function Clase10() {
  // Datos utilizados por el ejemplo interactivo
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: "Zapatillas Nike",
      precio: 150000,
      categoria: "Deportivo",
    },
    {
      id: 2,
      nombre: "Zapatillas Adidas",
      precio: 120000,
      categoria: "Urbano",
    },
    {
      id: 3,
      nombre: "Zapatillas Puma",
      precio: 95000,
      categoria: "Entrenamiento",
    },
  ]);

  // Agrega un producto de ejemplo al array
  const agregarProducto = () => {
    const nuevoProducto = {
      id: productos.length + 1,
      nombre: "Nuevo producto",
      precio: 80000,
      categoria: "General",
    };

    setProductos([...productos, nuevoProducto]);
  };

  // Vuelve al listado original
  const reiniciarProductos = () => {
    setProductos([
      {
        id: 1,
        nombre: "Zapatillas Nike",
        precio: 150000,
        categoria: "Deportivo",
      },
      {
        id: 2,
        nombre: "Zapatillas Adidas",
        precio: 120000,
        categoria: "Urbano",
      },
      {
        id: 3,
        nombre: "Zapatillas Puma",
        precio: 95000,
        categoria: "Entrenamiento",
      },
    ]);
  };

  return (
    <main>
      {/* PRESENTACIÓN */}
      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 10</span>

          <h1 className="fw-bold">Arrays, objetos y .map()</h1>

          <p className="lead text-secondary mt-3">
            En esta clase vamos a aprender a organizar conjuntos de datos y
            generar automáticamente elementos de nuestra interfaz utilizando
            React.
          </p>
        </div>
      </section>

      <section className="container py-5">
        {/* INTRODUCCIÓN */}
        <h2 className="fw-bold mb-3">El problema: tenemos muchos datos</h2>

        <p>
          En la Clase 7 aprendimos a crear componentes reutilizables utilizando
          Props.
        </p>

        <p>
          Por ejemplo, podríamos utilizar varias veces un componente llamado{" "}
          <code>Producto</code>.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`<Producto
  nombre="Zapatillas Nike"
  precio={150000}
/>

<Producto
  nombre="Zapatillas Adidas"
  precio={120000}
/>

<Producto
  nombre="Zapatillas Puma"
  precio={95000}
/>`}
            </code>
          </pre>
        </div>

        <div className="alert alert-warning mt-4">
          Esto funciona, pero imaginemos una aplicación con
          <strong> 100 productos</strong>. Tendríamos que escribir manualmente
          el componente 100 veces.
        </div>

        <hr className="my-5" />

        {/* ARRAYS */}
        <h2 className="fw-bold mb-3">¿Qué es un array?</h2>

        <p>
          Un <strong>array</strong> nos permite guardar varios elementos dentro
          de una misma variable.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`const nombres = [
  "Nike",
  "Adidas",
  "Puma"
];`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          En este ejemplo tenemos un array que contiene tres textos.
        </p>

        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <div className="border rounded p-3 text-center">
              <strong>Posición 0</strong>
              <div className="mt-2">Nike</div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 text-center">
              <strong>Posición 1</strong>
              <div className="mt-2">Adidas</div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 text-center">
              <strong>Posición 2</strong>
              <div className="mt-2">Puma</div>
            </div>
          </div>
        </div>

        <div className="alert alert-secondary mt-4">
          Recordá que las posiciones de un array comienzan desde
          <strong> 0</strong>.
        </div>

        <hr className="my-5" />

        {/* OBJETOS */}
        <h2 className="fw-bold mb-3">¿Qué es un objeto?</h2>

        <p>
          Un producto necesita guardar más información que solamente su nombre.
        </p>

        <p>
          Para representar un elemento con diferentes características podemos
          utilizar un <strong>objeto</strong>.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`const producto = {

  id: 1,
  nombre: "Zapatillas Nike",
  precio: 150000,
  categoria: "Deportivo"

};`}
            </code>
          </pre>
        </div>

        <p className="mt-4">Cada dato tiene una propiedad y un valor.</p>

        <div className="table-responsive mt-4">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Propiedad</th>
                <th>Valor</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <code>id</code>
                </td>
                <td>1</td>
              </tr>

              <tr>
                <td>
                  <code>nombre</code>
                </td>
                <td>Zapatillas Nike</td>
              </tr>

              <tr>
                <td>
                  <code>precio</code>
                </td>
                <td>150000</td>
              </tr>

              <tr>
                <td>
                  <code>categoria</code>
                </td>
                <td>Deportivo</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* ARRAY DE OBJETOS */}
        <h2 className="fw-bold mb-3">Array de objetos</h2>

        <p>Ahora podemos combinar ambos conceptos.</p>

        <p>
          Creamos un array donde cada elemento es un objeto que representa un
          producto.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`const productos = [

  {
    id: 1,
    nombre: "Zapatillas Nike",
    precio: 150000
  },

  {
    id: 2,
    nombre: "Zapatillas Adidas",
    precio: 120000
  },

  {
    id: 3,
    nombre: "Zapatillas Puma",
    precio: 95000
  }

];`}
            </code>
          </pre>
        </div>

        <div className="alert alert-primary mt-4">
          <strong>Esta estructura será muy importante.</strong>
          <br />
          Gran parte de la información que recibamos posteriormente desde una
          base de datos tendrá una estructura similar.
        </div>

        <hr className="my-5" />

        {/* ACCEDER A LOS DATOS */}
        <h2 className="fw-bold mb-3">¿Cómo accedemos a los datos?</h2>

        <p>Podemos acceder a un elemento indicando su posición.</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`productos[0]

productos[1]

productos[2]`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          También podemos acceder a una propiedad específica:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`productos[0].nombre

productos[0].precio`}
            </code>
          </pre>
        </div>

        <div className="bg-light border rounded p-4 mt-4">
          <div>
            <code>productos[0].nombre</code>
          </div>

          <div className="my-2">↓</div>

          <strong>Zapatillas Nike</strong>
        </div>

        <hr className="my-5" />

        {/* MAP */}
        <h2 className="fw-bold mb-3">¿Qué es .map()?</h2>

        <p>
          React necesita recorrer el array para generar un elemento visual por
          cada dato.
        </p>

        <p>
          Para esto podemos utilizar <code>.map()</code>.
        </p>

        <div className="alert alert-primary mt-4">
          <strong>.map()</strong> recorre todos los elementos de un array y nos
          permite realizar una acción con cada uno de ellos.
        </div>

        <hr className="my-5" />

        {/* MAP SIMPLE */}
        <span className="badge text-bg-dark mb-2">Ejemplo 1</span>

        <h2 className="fw-bold">Recorrer un array</h2>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`const nombres = [
  "Nike",
  "Adidas",
  "Puma"
];

return (

  <div>

    {nombres.map((nombre) => (

      <p>{nombre}</p>

    ))}

  </div>

);`}
            </code>
          </pre>
        </div>

        <p className="mt-4">React realizará el recorrido tres veces.</p>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">Array nombres</div>

              <div>↓</div>

              <div className="border rounded p-3">.map()</div>

              <div>↓</div>

              <div className="row g-2">
                <div className="col-md-4">
                  <div className="bg-light border rounded p-3">Nike</div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light border rounded p-3">Adidas</div>
                </div>

                <div className="col-md-4">
                  <div className="bg-light border rounded p-3">Puma</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* MAP OBJETOS */}
        <span className="badge text-bg-dark mb-2">Ejemplo 2</span>

        <h2 className="fw-bold">Recorrer productos</h2>

        <p className="mt-3">
          Cuando recorremos un array de objetos podemos acceder a las
          propiedades de cada elemento.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`{productos.map((producto) => (

  <div>

    <h3>{producto.nombre}</h3>

    <p>{producto.precio}</p>

  </div>

))}`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          En cada recorrido, <code>producto</code> representa un objeto
          diferente del array.
        </p>

        <hr className="my-5" />

        {/* MAP + COMPONENTES */}
        <h2 className="fw-bold mb-3">
          Combinar .map() con componentes y Props
        </h2>

        <p>
          Acá podemos combinar lo aprendido en la
          <strong> Clase 7</strong> con lo que estamos viendo ahora.
        </p>

        <p>
          Supongamos que ya tenemos nuestro componente
          <code> Producto</code>.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`{productos.map((producto) => (

  <Producto
    nombre={producto.nombre}
    precio={producto.precio}
    categoria={producto.categoria}
  />

))}`}
            </code>
          </pre>
        </div>

        <div className="alert alert-success mt-4">
          Ya no necesitamos escribir manualmente
          <code> &lt;Producto /&gt;</code> una vez por cada elemento. React lo
          genera automáticamente a partir del array.
        </div>

        <hr className="my-5" />

        {/* KEY */}
        <h2 className="fw-bold mb-3">Falta algo importante: key</h2>

        <p>
          Cuando React genera varios elementos utilizando
          <code> .map()</code>, cada uno debe tener una identificación única.
        </p>

        <p>
          Para eso utilizamos <code>key</code>.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`{productos.map((producto) => (

  <Producto
    key={producto.id}
    nombre={producto.nombre}
    precio={producto.precio}
    categoria={producto.categoria}
  />

))}`}
            </code>
          </pre>
        </div>

        <div className="alert alert-warning mt-4">
          Si olvidamos <code>key</code>, React probablemente mostrará una
          advertencia en la consola:
          <br />
          <br />
          <code>Each child in a list should have a unique "key" prop.</code>
        </div>

        <hr className="my-5" />

        {/* EXPLICACIÓN KEY */}
        <h2 className="fw-bold mb-3">¿Por qué utilizamos el ID?</h2>

        <p>Cada producto tiene un identificador diferente.</p>

        <div className="table-responsive mt-4">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Producto</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Zapatillas Nike</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Zapatillas Adidas</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Zapatillas Puma</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Por eso podemos utilizar:</p>

        <div className="bg-dark text-light p-3 rounded">
          <code>{"key={producto.id}"}</code>
        </div>

        <hr className="my-5" />

        {/* EJEMPLO INTERACTIVO */}
        <h2 className="fw-bold mb-3">Veamos .map() funcionando</h2>

        <p>
          Las siguientes tarjetas no están escritas manualmente. React las
          genera recorriendo el array <code>productos</code>.
        </p>

        <div className="d-flex gap-2 flex-wrap my-4">
          <button className="btn btn-primary" onClick={agregarProducto}>
            Agregar producto de ejemplo
          </button>

          <button
            className="btn btn-outline-secondary"
            onClick={reiniciarProductos}
          >
            Reiniciar
          </button>
        </div>

        <div className="row g-4">
          {productos.map((producto) => (
            <div className="col-md-6 col-lg-4" key={producto.id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <span className="badge text-bg-secondary mb-3">
                    {producto.categoria}
                  </span>

                  <h5 className="card-title fw-bold">{producto.nombre}</h5>

                  <p className="card-text">Precio: ${producto.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="alert alert-secondary mt-4">
          Cantidad de elementos dentro del array:
          <strong> {productos.length}</strong>
        </div>

        <hr className="my-5" />

        {/* QUÉ ESTÁ PASANDO */}
        <h2 className="fw-bold text-center mb-4">¿Qué está ocurriendo?</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">
                Tenemos un array de productos
              </div>

              <div>↓</div>

              <div className="border rounded p-3">.map() recorre el array</div>

              <div>↓</div>

              <div className="border rounded p-3">Obtiene un producto</div>

              <div>↓</div>

              <div className="border rounded p-3">
                Accedemos a sus propiedades
              </div>

              <div className="small text-secondary">
                producto.nombre / producto.precio
              </div>

              <div>↓</div>

              <div className="bg-primary text-white rounded p-3">
                React genera un elemento visual
              </div>

              <div>↓</div>

              <div className="border rounded p-3">
                Repite el proceso con el siguiente producto
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* ARRAY + USESTATE */}
        <h2 className="fw-bold mb-3">Arrays y useState</h2>

        <p>También podemos guardar un array dentro de un estado.</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`const [productos, setProductos] = useState([
  {
    id: 1,
    nombre: "Nike",
    precio: 150000
  },
  {
    id: 2,
    nombre: "Adidas",
    precio: 120000
  }
]);`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          Esto significa que posteriormente podremos modificar el contenido del
          array y React actualizará automáticamente la interfaz.
        </p>

        <div className="alert alert-primary">
          Esto será fundamental cuando aprendamos a
          <strong> crear, modificar y eliminar datos</strong>.
        </div>

        <hr className="my-5" />

        {/* AGREGAR ELEMENTO */}
        <h2 className="fw-bold mb-3">Agregar un elemento al array</h2>

        <p>En el ejemplo interactivo anterior utilizamos:</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`const nuevoProducto = {

  id: productos.length + 1,
  nombre: "Nuevo producto",
  precio: 80000,
  categoria: "General"

};

setProductos([
  ...productos,
  nuevoProducto
]);`}
            </code>
          </pre>
        </div>

        <p className="mt-4">La expresión:</p>

        <div className="bg-dark text-light p-3 rounded">
          <code>{"...productos"}</code>
        </div>

        <p className="mt-4">
          permite conservar los productos existentes y agregar posteriormente el
          nuevo.
        </p>

        <div className="alert alert-secondary">
          Por ahora nos interesa comprender la idea general. Vamos a profundizar
          la modificación de arrays cuando trabajemos CRUD.
        </div>

        <hr className="my-5" />

        {/* DIFERENTES PROYECTOS */}
        <h2 className="fw-bold mb-3">Esto no solamente sirve para productos</h2>

        <p>
          Cada grupo deberá adaptar la estructura a la información utilizada por
          su sistema.
        </p>

        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Biblioteca</h5>

              <div className="bg-dark text-light rounded p-3 mt-3">
                <pre className="mb-0">
                  <code>
                    {`{
  id: 1,
  titulo: "El Principito",
  autor: "Saint-Exupéry"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Cine</h5>

              <div className="bg-dark text-light rounded p-3 mt-3">
                <pre className="mb-0">
                  <code>
                    {`{
  id: 1,
  titulo: "Avatar",
  genero: "Ciencia ficción"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Sistema médico</h5>

              <div className="bg-dark text-light rounded p-3 mt-3">
                <pre className="mb-0">
                  <code>
                    {`{
  id: 1,
  paciente: "Juan Pérez",
  horario: "10:30"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Sistema escolar</h5>

              <div className="bg-dark text-light rounded p-3 mt-3">
                <pre className="mb-0">
                  <code>
                    {`{
  id: 1,
  nombre: "Martín",
  curso: "6° 4°"
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* EJEMPLOS MAP */}
        <h2 className="fw-bold mb-3">
          El nombre también cambia según el proyecto
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Proyecto</th>
                <th>Array</th>
                <th>Recorrido</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Tienda</td>
                <td>
                  <code>productos</code>
                </td>
                <td>
                  <code>productos.map()</code>
                </td>
              </tr>

              <tr>
                <td>Biblioteca</td>
                <td>
                  <code>libros</code>
                </td>
                <td>
                  <code>libros.map()</code>
                </td>
              </tr>

              <tr>
                <td>Cine</td>
                <td>
                  <code>peliculas</code>
                </td>
                <td>
                  <code>peliculas.map()</code>
                </td>
              </tr>

              <tr>
                <td>Clínica</td>
                <td>
                  <code>turnos</code>
                </td>
                <td>
                  <code>turnos.map()</code>
                </td>
              </tr>

              <tr>
                <td>Escuela</td>
                <td>
                  <code>alumnos</code>
                </td>
                <td>
                  <code>alumnos.map()</code>
                </td>
              </tr>

              <tr>
                <td>Comunidad</td>
                <td>
                  <code>publicaciones</code>
                </td>
                <td>
                  <code>publicaciones.map()</code>
                </td>
              </tr>
            </tbody>
          </table>
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
                  <strong>Array</strong>
                </td>

                <td>Permite almacenar varios elementos.</td>
              </tr>

              <tr>
                <td>
                  <strong>Objeto</strong>
                </td>

                <td>
                  Permite representar un elemento con diferentes propiedades.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Array de objetos</strong>
                </td>

                <td>Permite almacenar conjuntos de elementos estructurados.</td>
              </tr>

              <tr>
                <td>
                  <code>.map()</code>
                </td>

                <td>
                  Recorre un array y permite generar contenido por cada
                  elemento.
                </td>
              </tr>

              <tr>
                <td>
                  <code>key</code>
                </td>

                <td>Permite que React identifique cada elemento generado.</td>
              </tr>

              <tr>
                <td>
                  <code>productos.length</code>
                </td>

                <td>Devuelve la cantidad de elementos del array.</td>
              </tr>

              <tr>
                <td>
                  <code>...productos</code>
                </td>

                <td>Permite copiar los elementos existentes de un array.</td>
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
            Cada grupo deberá implementar un listado dinámico relacionado
            directamente con su proyecto.
          </p>

          <ol className="mb-0">
            <li>
              Identificar qué conjunto de información necesita mostrar el
              proyecto.
            </li>

            <li>
              Crear un array con al menos
              <strong> 5 objetos</strong>.
            </li>

            <li>
              Cada objeto deberá contener un
              <strong> id</strong> y al menos otras tres propiedades.
            </li>

            <li>
              Recorrer el array utilizando
              <code> .map()</code>.
            </li>

            <li>
              Mostrar los datos utilizando tarjetas, filas de una tabla u otro
              elemento adecuado al proyecto.
            </li>

            <li>
              Utilizar <code>key</code> con el ID correspondiente.
            </li>

            <li>
              Si el grupo ya tiene un componente reutilizable de la Clase 7,
              utilizarlo dentro del <code>.map()</code>.
            </li>

            <li>
              Registrar la tarea en Trello y colocar la etiqueta
              correspondiente.
            </li>

            <li>Crear una rama nueva para realizar el cambio.</li>

            <li>Subir la rama y realizar el Pull Request.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Clase10;
