import React from "react";

function Clase2() {
  return (
    <main>
      {/* PRESENTACIÓN */}
      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 2</span>

          <h1 className="fw-bold">Componentes en React</h1>

          <p className="lead text-secondary mt-3">
            En esta clase vamos a aprender a dividir nuestra aplicación en
            componentes para organizar mejor el código y reutilizar distintas
            partes del sitio.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="container py-5">
        <h2 className="fw-bold mb-3">¿Qué es un componente?</h2>

        <p>
          Un componente es una parte independiente de una aplicación. Puede
          representar una barra de navegación, un botón, una tarjeta, un
          formulario o incluso una página completa.
        </p>

        <p>
          React nos permite dividir una aplicación grande en partes más pequeñas
          para que el código sea más fácil de entender, modificar y reutilizar.
        </p>

        <div className="alert alert-secondary mt-4">
          <strong>Idea principal:</strong> en lugar de escribir toda nuestra
          aplicación dentro de App.jsx, podemos dividirla en componentes.
        </div>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">Antes de utilizar componentes</h2>

        <p>
          Imaginemos que toda nuestra aplicación está escrita dentro de
          <strong> App.jsx</strong>:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`function App() {
  return (
    <div>

      <nav>
        <h2>Mi Proyecto</h2>
      </nav>

      <main>
        <h1>Bienvenidos</h1>
        <p>Esta es nuestra aplicación.</p>
      </main>

      <footer>
        <p>Proyecto Web Dinámica - 6° año</p>
      </footer>

    </div>
  );
}

export default App;`}
            </code>
          </pre>
        </div>

        <p className="mt-3">
          El código funciona, pero si seguimos agregando contenido, App.jsx va a
          crecer y cada vez será más difícil de organizar.
        </p>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">Creamos la carpeta de componentes</h2>

        <p>
          Dentro de la carpeta <strong>src</strong> vamos a crear una nueva
          carpeta llamada:
        </p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>componentes</code>
        </div>

        <p>Dentro de esa carpeta vamos a crear nuestro primer componente:</p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>Navbar.jsx</code>
        </div>

        <p>Nuestra estructura va a comenzar a verse de esta manera:</p>

        <div className="bg-light border rounded p-4">
          <pre className="mb-0">
            {`src/
│
├── componentes/
│   └── Navbar.jsx
│
├── App.jsx
├── main.jsx
└── index.css`}
          </pre>
        </div>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">Nuestro primer componente</h2>

        <p>
          Dentro de <strong>Navbar.jsx</strong> escribimos:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`function Navbar() {
  return (
    <nav>
      <h2>Mi Proyecto</h2>
    </nav>
  );
}

export default Navbar;`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        <h2 className="fw-bold mb-4">¿Qué significa cada parte?</h2>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">function Navbar()</h5>

              <p className="text-secondary mb-0">
                Creamos una función llamada Navbar que representa nuestro
                componente.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">return()</h5>

              <p className="text-secondary mb-0">
                Indica qué contenido va a mostrar el componente en la pantalla.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">export default</h5>

              <p className="text-secondary mb-0">
                Permite utilizar este componente desde otros archivos de nuestra
                aplicación.
              </p>
            </div>
          </div>
        </div>

        <div className="alert alert-primary mt-4">
          <strong>Importante:</strong> los componentes de React deben comenzar
          con una letra mayúscula. Por ejemplo: <code>Navbar</code>,
          <code> Footer</code>, <code> Producto</code> o{" "}
          <code> Formulario</code>.
        </div>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">Utilizamos el componente en App.jsx</h2>

        <p>Para utilizar el componente primero debemos importarlo.</p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>import Navbar from "./componentes/Navbar";</code>
        </div>

        <p>
          Después podemos utilizarlo dentro de App.jsx como si fuera una
          etiqueta:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`import Navbar from "./componentes/Navbar";

function App() {
  return (
    <div>

      <Navbar />

      <main>
        <h1>Bienvenidos</h1>
        <p>Esta es nuestra aplicación.</p>
      </main>

    </div>
  );
}

export default App;`}
            </code>
          </pre>
        </div>

        <p className="mt-3">La etiqueta:</p>

        <div className="bg-dark text-light p-3 rounded">
          <code>&lt;Navbar /&gt;</code>
        </div>

        <p className="mt-3">
          representa todo el contenido que escribimos dentro del componente
          Navbar.
        </p>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">Creamos el Footer</h2>

        <p>
          Ahora vamos a repetir el mismo procedimiento para crear el pie de
          página.
        </p>

        <p>
          Dentro de la carpeta <strong>componentes</strong> creamos:
        </p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>Footer.jsx</code>
        </div>

        <p>Y escribimos:</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`function Footer() {
  return (
    <footer>
      <p>Proyecto Web Dinámica - 6° año</p>
    </footer>
  );
}

export default Footer;`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">Importamos el Footer</h2>

        <p>Dentro de App.jsx agregamos:</p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>import Footer from "./componentes/Footer";</code>
        </div>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">Resultado final</h2>

        <p>Nuestro archivo App.jsx queda ahora mucho más organizado:</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div>

      <Navbar />

      <main>
        <h1>Bienvenidos</h1>
        <p>Esta es nuestra aplicación.</p>
      </main>

      <Footer />

    </div>
  );
}

export default App;`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">Nuestra nueva estructura</h2>

        <div className="bg-light border rounded p-4">
          <pre className="mb-0">
            {`src/
│
├── componentes/
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── App.jsx
├── main.jsx
└── index.css`}
          </pre>
        </div>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">¿Por qué utilizar componentes?</h2>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Organización</h5>

              <p className="text-secondary mb-0">
                Cada parte de nuestra aplicación puede estar separada en su
                propio archivo.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Reutilización</h5>

              <p className="text-secondary mb-0">
                Podemos utilizar un mismo componente en diferentes partes de
                nuestra aplicación.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Mantenimiento</h5>

              <p className="text-secondary mb-0">
                Podemos modificar una parte de la aplicación sin tener que
                buscarla dentro de un archivo enorme.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">¿Cómo lo aplico a mi proyecto?</h2>

        <p>
          Cada proyecto puede tener componentes diferentes según el problema que
          esté resolviendo.
        </p>

        <div className="row g-3 mt-2">
          <div className="col-md-3">
            <div className="border rounded p-3 h-100 text-center">
              <strong>Navbar</strong>

              <p className="text-secondary small mt-2 mb-0">
                Navegación principal
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="border rounded p-3 h-100 text-center">
              <strong>Footer</strong>

              <p className="text-secondary small mt-2 mb-0">Pie de página</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="border rounded p-3 h-100 text-center">
              <strong>Producto</strong>

              <p className="text-secondary small mt-2 mb-0">
                Información de un producto
              </p>
            </div>
          </div>

          <div className="col-md-3">
            <div className="border rounded p-3 h-100 text-center">
              <strong>Formulario</strong>

              <p className="text-secondary small mt-2 mb-0">
                Ingreso de información
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* ACTIVIDAD */}
        <div className="alert alert-primary">
          <h5 className="alert-heading fw-bold">Actividad</h5>

          <p>Continuando con el proyecto iniciado en la clase anterior:</p>

          <ol className="mb-0">
            <li>
              Crear dentro de src una carpeta llamada
              <strong> componentes</strong>.
            </li>

            <li>
              Crear el archivo <strong>Navbar.jsx</strong>.
            </li>

            <li>
              Crear el archivo <strong>Footer.jsx</strong>.
            </li>

            <li>Crear ambos componentes utilizando funciones.</li>

            <li>
              Exportarlos utilizando <strong>export default</strong>.
            </li>

            <li>
              Importarlos dentro de <strong>App.jsx</strong>.
            </li>

            <li>Mostrar ambos componentes dentro de la aplicación.</li>

            <li>
              Modificar el contenido para que corresponda al proyecto de cada
              grupo.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Clase2;
