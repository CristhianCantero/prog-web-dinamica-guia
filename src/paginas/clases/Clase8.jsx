import React, { useState } from "react";

function Clase8() {
  const [cantidadEjemplo, setCantidadEjemplo] = useState(0);

  return (
    <main>
      {/* PRESENTACIÓN */}
      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 8</span>

          <h1 className="fw-bold">useState y eventos</h1>

          <p className="lead text-secondary mt-3">
            En esta clase vamos a comenzar a crear interfaces dinámicas capaces
            de cambiar y responder a las acciones del usuario.
          </p>
        </div>
      </section>

      <section className="container py-5">
        {/* INTRODUCCIÓN */}
        <h2 className="fw-bold mb-3">
          Hasta ahora nuestras páginas muestran información
        </h2>

        <p>
          Hasta este momento aprendimos a crear páginas, componentes, utilizar
          Bootstrap, navegar entre rutas y enviar información mediante Props.
        </p>

        <p>
          Pero nuestras interfaces todavía tienen poca interacción. Queremos que
          puedan reaccionar cuando el usuario realiza alguna acción.
        </p>

        <div className="alert alert-primary mt-4">
          <strong>Ejemplos:</strong> agregar un producto al carrito, mostrar
          información, seleccionar una opción, aumentar una cantidad o cambiar
          el contenido de la pantalla.
        </div>

        <hr className="my-5" />

        {/* EVENTOS */}
        <h2 className="fw-bold mb-3">¿Qué es un evento?</h2>

        <p>
          Un evento representa una acción que ocurre dentro de nuestra
          aplicación.
        </p>

        <p>
          Por ejemplo, cuando el usuario hace clic sobre un botón ocurre un
          evento.
        </p>

        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <div className="border rounded p-4 h-100 text-center">
              <code>onClick</code>

              <p className="text-secondary mt-2 mb-0">
                Cuando el usuario hace clic.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100 text-center">
              <code>onChange</code>

              <p className="text-secondary mt-2 mb-0">
                Cuando cambia el contenido de un campo.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100 text-center">
              <code>onSubmit</code>

              <p className="text-secondary mt-2 mb-0">
                Cuando se envía un formulario.
              </p>
            </div>
          </div>
        </div>

        <div className="alert alert-secondary mt-4">
          En esta clase vamos a trabajar principalmente con
          <code> onClick</code>. Los otros eventos aparecerán con mayor
          profundidad cuando trabajemos con formularios.
        </div>

        <hr className="my-5" />

        {/* PRIMER EVENTO */}
        <span className="badge text-bg-dark mb-2">Ejemplo 1</span>

        <h2 className="fw-bold">Nuestro primer evento</h2>

        <p className="mt-3">
          Podemos ejecutar una función cuando el usuario presiona un botón.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`function Ejemplo() {

  function saludar() {
    alert("Hola");
  }

  return (
    <button onClick={saludar}>
      Saludar
    </button>
  );
}`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          Cuando el usuario hace clic, React ejecuta la función
          <code> saludar</code>.
        </p>

        <div className="row g-3 mt-3">
          <div className="col-md-6">
            <div className="border rounded p-3 h-100">
              <strong>Evento</strong>

              <div className="mt-2">
                <code>onClick</code>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border rounded p-3 h-100">
              <strong>Función que se ejecuta</strong>

              <div className="mt-2">
                <code>saludar</code>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* ESTADO */}
        <h2 className="fw-bold mb-3">
          ¿Qué pasa si queremos modificar la pantalla?
        </h2>

        <p>
          Mostrar un <code>alert</code> es sencillo, pero normalmente
          necesitamos que la propia interfaz cambie.
        </p>

        <p>Por ejemplo:</p>

        <div className="bg-light border rounded p-4">
          <strong>Cantidad de productos:</strong>

          <span className="badge text-bg-primary ms-3">{cantidadEjemplo}</span>

          <button
            className="btn btn-primary ms-3"
            onClick={() => setCantidadEjemplo(cantidadEjemplo + 1)}
          >
            Agregar
          </button>
        </div>

        <p className="mt-4">
          Cada vez que el usuario presione <strong>Agregar</strong>, queremos
          que la cantidad aumente.
        </p>

        <p>
          Para guardar información que puede cambiar durante el uso de la
          aplicación utilizamos <strong>estado</strong>.
        </p>

        <hr className="my-5" />

        {/* USESTATE */}
        <h2 className="fw-bold mb-3">¿Qué es useState?</h2>

        <p>
          <code>useState</code> es un Hook de React que nos permite guardar un
          valor y modificarlo.
        </p>

        <div className="alert alert-primary">
          Cuando modificamos un estado, React actualiza automáticamente la parte
          de la interfaz que utiliza ese valor.
        </div>

        <p className="mt-4">Para utilizarlo primero debemos importarlo:</p>

        <div className="bg-dark text-light p-3 rounded">
          <code>{'import { useState } from "react";'}</code>
        </div>

        <hr className="my-5" />

        {/* CREAR ESTADO */}
        <span className="badge text-bg-dark mb-2">Paso 1</span>

        <h2 className="fw-bold">Crear nuestro primer estado</h2>

        <div className="bg-dark text-light p-3 rounded mt-4">
          <code>{"const [cantidad, setCantidad] = useState(0);"}</code>
        </div>

        <p className="mt-4">Esta línea contiene tres elementos importantes.</p>

        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5>
                <code>cantidad</code>
              </h5>

              <p className="text-secondary mb-0">Guarda el valor actual.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5>
                <code>setCantidad</code>
              </h5>

              <p className="text-secondary mb-0">Permite modificar el valor.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5>
                <code>useState(0)</code>
              </h5>

              <p className="text-secondary mb-0">
                Indica que el valor inicial será 0.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* MOSTRAR ESTADO */}
        <span className="badge text-bg-dark mb-2">Paso 2</span>

        <h2 className="fw-bold">Mostrar el estado</h2>

        <p className="mt-3">
          Podemos mostrar el valor de <code>cantidad</code> dentro del JSX
          utilizando llaves.
        </p>

        <div className="bg-dark text-light p-3 rounded">
          <code>{"<h2>{cantidad}</h2>"}</code>
        </div>

        <hr className="my-5" />

        {/* CAMBIAR ESTADO */}
        <span className="badge text-bg-dark mb-2">Paso 3</span>

        <h2 className="fw-bold">Modificar el estado</h2>

        <p className="mt-3">
          Cuando el usuario hace clic queremos aumentar la cantidad.
        </p>

        <div className="bg-dark text-light p-3 rounded">
          <code>{"setCantidad(cantidad + 1);"}</code>
        </div>

        <p className="mt-4">
          Podemos combinarlo con <code>onClick</code>:
        </p>

        <div className="bg-dark text-light p-3 rounded">
          <code>
            {
              "<button onClick={() => setCantidad(cantidad + 1)}>Agregar</button>"
            }
          </code>
        </div>

        <hr className="my-5" />

        {/* EJEMPLO COMPLETO */}
        <h2 className="fw-bold mb-3">Ejemplo completo</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`import { useState } from "react";

function Contador() {

  const [cantidad, setCantidad] = useState(0);

  return (
    <div>

      <h2>Cantidad: {cantidad}</h2>

      <button
        onClick={() => setCantidad(cantidad + 1)}
      >
        Agregar
      </button>

    </div>
  );
}

export default Contador;`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* EJEMPLO REAL */}
        <span className="badge text-bg-dark mb-2">Ejemplo 2</span>

        <h2 className="fw-bold">Agregar y quitar productos</h2>

        <p className="mt-3">
          Podemos agregar un segundo botón para disminuir la cantidad.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`import { useState } from "react";

function CantidadProducto() {

  const [cantidad, setCantidad] = useState(0);

  return (
    <div>

      <h3>Cantidad: {cantidad}</h3>

      <button
        onClick={() => setCantidad(cantidad + 1)}
      >
        +
      </button>

      <button
        onClick={() => setCantidad(cantidad - 1)}
      >
        -
      </button>

    </div>
  );
}

export default CantidadProducto;`}
            </code>
          </pre>
        </div>

        <div className="alert alert-warning mt-4">
          Este ejemplo tiene un problema: podríamos continuar restando y obtener
          cantidades negativas.
        </div>

        <hr className="my-5" />

        {/* CONDICIÓN */}
        <h2 className="fw-bold mb-3">Evitar valores negativos</h2>

        <p>
          Podemos ejecutar una función que primero verifique el valor de la
          cantidad.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`function disminuir() {

  if (cantidad > 0) {
    setCantidad(cantidad - 1);
  }

}`}
            </code>
          </pre>
        </div>

        <p className="mt-4">Después conectamos la función al botón:</p>

        <div className="bg-dark text-light p-3 rounded">
          <code>{"<button onClick={disminuir}>-</button>"}</code>
        </div>

        <div className="alert alert-success mt-4">
          De esta manera también reutilizamos conocimientos anteriores de
          programación: variables, funciones, condicionales y eventos.
        </div>

        <hr className="my-5" />

        {/* BOOLEAN */}
        <span className="badge text-bg-dark mb-2">Ejemplo 3</span>

        <h2 className="fw-bold">Mostrar y ocultar información</h2>

        <p className="mt-3">
          Los estados no solamente pueden guardar números. También pueden
          guardar valores booleanos.
        </p>

        <div className="bg-dark text-light p-3 rounded">
          <code>{"const [mostrar, setMostrar] = useState(false);"}</code>
        </div>

        <p className="mt-4">
          En este caso inicialmente <code>mostrar</code> vale
          <code> false</code>.
        </p>

        <p>
          Podemos cambiar entre <code>true</code> y <code>false</code>{" "}
          utilizando:
        </p>

        <div className="bg-dark text-light p-3 rounded">
          <code>{"setMostrar(!mostrar);"}</code>
        </div>

        <hr className="my-5" />

        {/* EJEMPLO MOSTRAR */}
        <h2 className="fw-bold mb-3">Ejemplo completo</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`import { useState } from "react";

function DetalleProducto() {

  const [mostrar, setMostrar] = useState(false);

  return (
    <div>

      <button
        onClick={() => setMostrar(!mostrar)}
      >
        Ver detalles
      </button>

      {mostrar && (
        <p>
          Información adicional del producto.
        </p>
      )}

    </div>
  );
}

export default DetalleProducto;`}
            </code>
          </pre>
        </div>

        <p className="mt-4">La expresión:</p>

        <div className="bg-dark text-light p-3 rounded">
          <code>{"{mostrar && (...) }"}</code>
        </div>

        <p className="mt-4">
          significa que ese contenido solamente se mostrará cuando
          <code> mostrar</code> sea verdadero.
        </p>

        <hr className="my-5" />

        {/* TIPOS ESTADO */}
        <h2 className="fw-bold mb-3">¿Qué puede guardar un estado?</h2>

        <p>Un estado puede guardar distintos tipos de información.</p>

        <div className="table-responsive mt-4">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th>Tipo</th>
                <th>Ejemplo</th>
                <th>Posible uso</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Número</td>
                <td>
                  <code>useState(0)</code>
                </td>
                <td>Cantidad, contador, stock.</td>
              </tr>

              <tr>
                <td>Texto</td>
                <td>
                  <code>{'useState("")'}</code>
                </td>
                <td>Nombre, búsqueda, email.</td>
              </tr>

              <tr>
                <td>Booleano</td>
                <td>
                  <code>useState(false)</code>
                </td>
                <td>Mostrar, ocultar, seleccionar.</td>
              </tr>

              <tr>
                <td>Array</td>
                <td>
                  <code>useState([])</code>
                </td>
                <td>Productos, usuarios, turnos.</td>
              </tr>

              <tr>
                <td>Objeto</td>
                <td>
                  <code>{"useState({})"}</code>
                </td>
                <td>Usuario, producto, formulario.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="alert alert-secondary">
          Más adelante vamos a trabajar especialmente con arrays y objetos. Por
          ahora nos concentraremos en números, texto y booleanos.
        </div>

        <hr className="my-5" />

        {/* APLICACIONES */}
        <h2 className="fw-bold mb-3">¿Cómo puedo utilizarlo en mi proyecto?</h2>

        <p>
          Cada proyecto puede utilizar estados y eventos de una manera
          diferente.
        </p>

        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Tienda</h5>

              <p className="text-secondary mb-0">
                Cantidad de productos, carrito, favoritos o detalles.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Cine</h5>

              <p className="text-secondary mb-0">
                Selección de película, horario o asiento.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Biblioteca</h5>

              <p className="text-secondary mb-0">
                Favoritos, disponibilidad o información de libros.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Sistema médico</h5>

              <p className="text-secondary mb-0">
                Selección de turnos, profesionales o especialidades.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Sistema escolar</h5>

              <p className="text-secondary mb-0">
                Seleccionar alumnos, cursos o mostrar información.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Comunidad</h5>

              <p className="text-secondary mb-0">
                Likes, favoritos, comentarios visibles o publicaciones.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* PROPS VS STATE */}
        <h2 className="fw-bold mb-3">Props y State no son lo mismo</h2>

        <p>
          Ahora tenemos dos conceptos diferentes que pueden aparecer dentro de
          un componente.
        </p>

        <div className="table-responsive mt-4">
          <table className="table table-bordered align-middle">
            <thead className="table-dark">
              <tr>
                <th></th>
                <th>Props</th>
                <th>State</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <strong>¿De dónde viene?</strong>
                </td>
                <td>Lo recibe el componente.</td>
                <td>Lo administra el propio componente.</td>
              </tr>

              <tr>
                <td>
                  <strong>¿Puede cambiar?</strong>
                </td>
                <td>El componente no modifica directamente sus Props.</td>
                <td>
                  Sí, mediante su función <code>set...</code>.
                </td>
              </tr>

              <tr>
                <td>
                  <strong>Ejemplo</strong>
                </td>
                <td>Nombre de un producto.</td>
                <td>Cantidad seleccionada.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* FLUJO */}
        <h2 className="fw-bold text-center mb-4">
          ¿Qué ocurre cuando cambia un estado?
        </h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">
                El usuario realiza una acción
              </div>

              <div>↓</div>

              <div className="border rounded p-3">Se produce un evento</div>

              <div className="small text-secondary">onClick</div>

              <div>↓</div>

              <div className="border rounded p-3">Ejecutamos una función</div>

              <div>↓</div>

              <div className="border rounded p-3">Modificamos el estado</div>

              <div className="small text-secondary">setCantidad(...)</div>

              <div>↓</div>

              <div className="bg-primary text-white rounded p-3">
                React actualiza la interfaz
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* REGLA */}
        <div className="card border-primary">
          <div className="card-header bg-primary text-white">
            <h4 className="mb-0">Idea que debemos recordar</h4>
          </div>

          <div className="card-body">
            <p className="fs-5 mb-0 text-center">
              Acción del usuario
              <strong> → Evento → Cambio de estado → Nueva interfaz</strong>
            </p>
          </div>
        </div>

        <hr className="my-5" />

        {/* ACTIVIDAD */}
        <div className="alert alert-primary">
          <h5 className="alert-heading fw-bold">
            Actividad aplicada al proyecto
          </h5>

          <p>
            Cada grupo deberá incorporar al menos una interacción utilizando
            estado y eventos dentro de su proyecto.
          </p>

          <ol className="mb-0">
            <li>
              Identificar una parte del proyecto que pueda reaccionar a una
              acción del usuario.
            </li>

            <li>
              Crear un estado utilizando <code>useState</code>.
            </li>

            <li>Mostrar el valor del estado dentro de la interfaz.</li>

            <li>Crear un botón u otro elemento que genere un evento.</li>

            <li>Modificar el estado como consecuencia del evento.</li>

            <li>Verificar que React actualice automáticamente la interfaz.</li>

            <li>Registrar la tarea en Trello.</li>

            <li>Crear una rama nueva para realizar el cambio.</li>

            <li>Subir la rama y crear el Pull Request correspondiente.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Clase8;
