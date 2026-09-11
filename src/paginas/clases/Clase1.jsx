import React from "react";

function Clase1() {
  return (
    <main>
      {/* PRESENTACIÓN */}
      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 1</span>

          <h1 className="fw-bold">
            Introducción a React y creación del proyecto
          </h1>

          <p className="lead text-secondary mt-3">
            En esta clase vamos a conocer React, crear nuestro primer proyecto y
            entender cómo está organizada una aplicación.
          </p>
        </div>
      </section>

      {/* CONTENIDO */}
      <section className="container py-5">
        <h2 className="fw-bold mb-3">¿Qué es React?</h2>

        <p>
          React es una biblioteca de JavaScript que nos permite construir
          interfaces de usuario utilizando componentes.
        </p>

        <p>
          En lugar de construir toda nuestra aplicación en un único archivo,
          podemos dividirla en pequeñas partes que después podemos organizar y
          reutilizar.
        </p>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">Creando nuestro primer proyecto</h2>

        <p>
          Para crear nuestro proyecto vamos a utilizar Vite. Desde la terminal
          ejecutamos:
        </p>

        <div className="bg-dark text-light p-3 rounded mb-3">
          <code>npm create vite@latest</code>
        </div>

        <p>Luego seleccionamos:</p>

        <div className="bg-light border rounded p-3">
          <p className="mb-2">
            <strong>Framework:</strong> React
          </p>

          <p className="mb-0">
            <strong>Variant:</strong> JavaScript
          </p>
        </div>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">Instalamos las dependencias</h2>

        <p>Entramos a la carpeta que acabamos de crear:</p>

        <div className="bg-dark text-light p-3 rounded mb-3">
          <code>cd nombre-del-proyecto</code>
        </div>

        <p>Instalamos las dependencias:</p>

        <div className="bg-dark text-light p-3 rounded mb-3">
          <code>npm install</code>
        </div>

        <p>Y finalmente iniciamos el proyecto:</p>

        <div className="bg-dark text-light p-3 rounded">
          <code>npm run dev</code>
        </div>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">Estructura básica del proyecto</h2>

        <p>
          Al crear el proyecto vamos a encontrarnos con diferentes carpetas y
          archivos:
        </p>

        <div className="bg-light border rounded p-4">
          <pre className="mb-0">
            {`mi-proyecto/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── package.json
└── vite.config.js`}
          </pre>
        </div>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">Nuestro primer componente</h2>

        <p>
          Uno de los archivos principales que encontramos es
          <strong> App.jsx</strong>.
        </p>

        <p>
          Podemos comenzar eliminando el contenido de ejemplo y dejando algo
          mucho más sencillo:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`function App() {
  return (
    <div>
      <h1>Mi primera aplicación React</h1>
      <p>Estamos aprendiendo React.</p>
    </div>
  );
}

export default App;`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        <h2 className="fw-bold mb-3">¿Qué estamos viendo?</h2>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="border rounded p-3 h-100">
              <h5>function App()</h5>

              <p className="text-secondary mb-0">
                Creamos una función que representa nuestro componente.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 h-100">
              <h5>return()</h5>

              <p className="text-secondary mb-0">
                Indica qué contenido queremos mostrar en pantalla.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-3 h-100">
              <h5>export default</h5>

              <p className="text-secondary mb-0">
                Permite utilizar el componente desde otros archivos.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        <div className="alert alert-primary">
          <h5 className="alert-heading">Actividad</h5>

          <p>Modificá el componente App para que muestre:</p>

          <ul className="mb-0">
            <li>El nombre de tu proyecto.</li>
            <li>Una breve descripción.</li>
            <li>Los integrantes del grupo.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Clase1;
