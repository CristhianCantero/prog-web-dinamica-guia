import React from "react";

function Clase3() {
  return (
    <main>
      {/* PRESENTACIÓN */}
      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 3</span>

          <h1 className="fw-bold">Bootstrap en React</h1>

          <p className="lead text-secondary mt-3">
            En esta clase vamos a utilizar Bootstrap para diseñar interfaces de
            forma rápida, ordenada y adaptable a diferentes tamaños de pantalla.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="container py-5">
        {/* QUÉ ES BOOTSTRAP */}
        <h2 className="fw-bold mb-3">¿Qué es Bootstrap?</h2>

        <p>
          Bootstrap es un framework de diseño que contiene estilos y componentes
          preparados para utilizar en nuestros sitios web.
        </p>

        <p>
          En lugar de escribir todo el CSS desde cero, podemos utilizar clases
          que Bootstrap ya tiene preparadas.
        </p>

        <div className="alert alert-secondary mt-4">
          <strong>Idea principal:</strong> Bootstrap nos permite construir
          interfaces de manera más rápida utilizando clases ya diseñadas.
        </div>

        <hr className="my-5" />

        {/* INSTALACIÓN */}
        <h2 className="fw-bold mb-3">Instalamos Bootstrap</h2>

        <p>Abrimos la terminal dentro de nuestro proyecto y ejecutamos:</p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>npm install bootstrap</code>
        </div>

        <p>
          Una vez finalizada la instalación, debemos importar Bootstrap para
          poder utilizarlo.
        </p>

        <p>
          Abrimos <strong>main.jsx</strong> y agregamos:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";`}
            </code>
          </pre>
        </div>

        <div className="alert alert-primary mt-4">
          A partir de este momento podemos utilizar las clases de Bootstrap en
          todos los componentes de nuestra aplicación.
        </div>

        <hr className="my-5" />

        {/* CLASSNAME */}
        <h2 className="fw-bold mb-3">className en React</h2>

        <p>
          En HTML normalmente utilizamos el atributo <strong>class</strong>
          para asignar clases CSS.
        </p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>
            &lt;button class="btn btn-primary"&gt;Guardar&lt;/button&gt;
          </code>
        </div>

        <p>
          En JSX utilizamos <strong>className</strong>:
        </p>

        <div className="bg-dark text-light p-3 rounded">
          <code>
            &lt;button className="btn btn-primary"&gt;Guardar&lt;/button&gt;
          </code>
        </div>

        <div className="alert alert-warning mt-4">
          <strong>Recordá:</strong> trabajando con React utilizamos
          <code> className</code> en lugar de <code>class</code>.
        </div>

        <hr className="my-5" />

        {/* BOTONES */}
        <h2 className="fw-bold mb-3">Nuestro primer elemento con Bootstrap</h2>

        <p>
          Podemos crear diferentes botones simplemente modificando las clases:
        </p>

        <div className="bg-dark text-light p-4 rounded mb-4">
          <pre className="mb-0">
            <code>
              {`<button className="btn btn-primary">
  Guardar
</button>

<button className="btn btn-success">
  Confirmar
</button>

<button className="btn btn-danger">
  Eliminar
</button>`}
            </code>
          </pre>
        </div>

        <div className="d-flex gap-2 flex-wrap">
          <button className="btn btn-primary">Guardar</button>

          <button className="btn btn-success">Confirmar</button>

          <button className="btn btn-danger">Eliminar</button>
        </div>

        <hr className="my-5" />

        {/* UTILIDADES */}
        <h2 className="fw-bold mb-3">
          Clases que vamos a utilizar constantemente
        </h2>

        <p>
          Bootstrap tiene muchas clases. No necesitamos aprenderlas todas de
          memoria. Vamos a comenzar con algunas muy utilizadas.
        </p>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Clase</th>
                <th>Función</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <code>container</code>
                </td>
                <td>Organiza y centra el contenido.</td>
              </tr>

              <tr>
                <td>
                  <code>mt-3</code>
                </td>
                <td>Agrega margen superior.</td>
              </tr>

              <tr>
                <td>
                  <code>mb-3</code>
                </td>
                <td>Agrega margen inferior.</td>
              </tr>

              <tr>
                <td>
                  <code>p-3</code>
                </td>
                <td>Agrega espacio interno.</td>
              </tr>

              <tr>
                <td>
                  <code>text-center</code>
                </td>
                <td>Centra el texto.</td>
              </tr>

              <tr>
                <td>
                  <code>fw-bold</code>
                </td>
                <td>Coloca el texto en negrita.</td>
              </tr>

              <tr>
                <td>
                  <code>bg-dark</code>
                </td>
                <td>Aplica un fondo oscuro.</td>
              </tr>

              <tr>
                <td>
                  <code>text-light</code>
                </td>
                <td>Aplica texto claro.</td>
              </tr>

              <tr>
                <td>
                  <code>rounded</code>
                </td>
                <td>Redondea los bordes.</td>
              </tr>

              <tr>
                <td>
                  <code>shadow</code>
                </td>
                <td>Agrega una sombra.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* GRID */}
        <h2 className="fw-bold mb-3">Filas y columnas</h2>

        <p>
          Bootstrap utiliza un sistema de grilla dividido en
          <strong> 12 columnas</strong>.
        </p>

        <p>Para crear una fila utilizamos:</p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>&lt;div className="row"&gt;</code>
        </div>

        <p>Dentro de la fila podemos colocar columnas.</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`<div className="row">

  <div className="col-md-6">
    Columna 1
  </div>

  <div className="col-md-6">
    Columna 2
  </div>

</div>`}
            </code>
          </pre>
        </div>

        <div className="row mt-4 g-3">
          <div className="col-md-6">
            <div className="bg-primary text-white p-4 rounded text-center">
              Columna 1
            </div>
          </div>

          <div className="col-md-6">
            <div className="bg-secondary text-white p-4 rounded text-center">
              Columna 2
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* RESPONSIVE */}
        <h2 className="fw-bold mb-3">Diseño adaptable</h2>

        <p>
          Una de las ventajas del sistema de columnas es que podemos adaptar
          nuestro sitio a diferentes pantallas.
        </p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>className="col-md-6"</code>
        </div>

        <p>
          En pantallas medianas o grandes ocupará 6 de las 12 columnas. En
          pantallas pequeñas podrá ocupar todo el ancho.
        </p>

        <div className="alert alert-secondary">
          Esto nos permite crear sitios que se adapten a computadoras, tablets y
          teléfonos sin tener que diseñar una versión completamente diferente
          para cada dispositivo.
        </div>

        <hr className="my-5" />

        {/* CARD */}
        <h2 className="fw-bold mb-3">Creamos una tarjeta</h2>

        <p>
          Otro componente muy utilizado en nuestros proyectos será la{" "}
          <strong>Card</strong>.
        </p>

        <div className="bg-dark text-light p-4 rounded mb-4">
          <pre className="mb-0">
            <code>
              {`<div className="card">
  <div className="card-body">

    <h5 className="card-title">
      Producto
    </h5>

    <p className="card-text">
      Descripción del producto.
    </p>

    <button className="btn btn-primary">
      Ver más
    </button>

  </div>
</div>`}
            </code>
          </pre>
        </div>

        {/* EJEMPLO REAL */}
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">Producto</h5>

                <p className="card-text text-secondary">
                  Descripción del producto.
                </p>

                <button className="btn btn-primary">Ver más</button>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* NAVBAR */}
        <h2 className="fw-bold mb-3">Mejoramos nuestro Navbar</h2>

        <p>
          En la clase anterior creamos un Navbar muy sencillo. Ahora podemos
          utilizar Bootstrap para mejorar su diseño.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">

      <div className="container">

        <span className="navbar-brand">
          Mi Proyecto
        </span>

      </div>

    </nav>
  );
}

export default Navbar;`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* FOOTER */}
        <h2 className="fw-bold mb-3">Mejoramos nuestro Footer</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`function Footer() {
  return (
    <footer className="bg-dark text-light text-center p-4">

      <p className="mb-0">
        Proyecto Web Dinámica - 6° año
      </p>

    </footer>
  );
}

export default Footer;`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* APLICACIÓN */}
        <h2 className="fw-bold mb-3">¿Cómo lo aplico a mi proyecto?</h2>

        <p>
          A partir de ahora cada grupo puede comenzar a definir el aspecto
          visual básico de su aplicación utilizando Bootstrap.
        </p>

        <div className="row g-3 mt-2">
          <div className="col-md-3">
            <div className="border rounded p-3 text-center h-100">
              <strong>Navbar</strong>
              <p className="text-secondary small mt-2 mb-0">Menú principal</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="border rounded p-3 text-center h-100">
              <strong>Botones</strong>
              <p className="text-secondary small mt-2 mb-0">
                Acciones del usuario
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="border rounded p-3 text-center h-100">
              <strong>Cards</strong>
              <p className="text-secondary small mt-2 mb-0">
                Mostrar información
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="border rounded p-3 text-center h-100">
              <strong>Footer</strong>
              <p className="text-secondary small mt-2 mb-0">
                Información inferior
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* ACTIVIDAD */}
        <div className="alert alert-primary">
          <h5 className="alert-heading fw-bold">Actividad</h5>

          <p>Continuando con el proyecto de las clases anteriores:</p>

          <ol className="mb-0">
            <li>Instalar Bootstrap en el proyecto.</li>

            <li>
              Importar Bootstrap en <strong>main.jsx</strong>.
            </li>

            <li>
              Modificar <strong>Navbar.jsx</strong> utilizando Bootstrap.
            </li>

            <li>
              Modificar <strong>Footer.jsx</strong> utilizando Bootstrap.
            </li>

            <li>
              Crear en App.jsx una sección utilizando
              <strong> container, row y col</strong>.
            </li>

            <li>
              Crear al menos <strong>3 Cards</strong> relacionadas con el
              proyecto del grupo.
            </li>

            <li>
              Utilizar botones y clases de espaciado para mejorar el diseño.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Clase3;
