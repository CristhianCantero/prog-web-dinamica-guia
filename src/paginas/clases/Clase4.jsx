import React from "react";

function Clase4() {
  return (
    <main>
      {/* PRESENTACIÓN */}
      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 4</span>

          <h1 className="fw-bold">React Router: páginas, rutas y navegación</h1>

          <p className="lead text-secondary mt-3">
            En esta clase vamos a crear diferentes páginas dentro de nuestra
            aplicación y aprenderemos a navegar entre ellas utilizando URLs.
          </p>
        </div>
      </section>

      <section className="container py-5">
        {/* INTRODUCCIÓN */}
        <h2 className="fw-bold mb-3">
          ¿Por qué necesitamos diferentes páginas?
        </h2>

        <p>
          Hasta ahora nuestra aplicación muestra principalmente el contenido que
          escribimos dentro de App.jsx.
        </p>

        <p>Pero un proyecto real normalmente necesita diferentes secciones.</p>

        <div className="bg-light border rounded p-4">
          <pre className="mb-0">
            {`Inicio
Productos
Contacto
Iniciar sesión
Administración`}
          </pre>
        </div>

        <p className="mt-3">
          Cada una de estas páginas puede tener su propia dirección.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            {`/
 /productos
 /contacto
 /login
 /administracion`}
          </pre>
        </div>

        <hr className="my-5" />

        {/* REACT ROUTER */}
        <h2 className="fw-bold mb-3">¿Qué es React Router?</h2>

        <p>
          React Router es una biblioteca que nos permite manejar diferentes
          rutas dentro de una aplicación React.
        </p>

        <p>
          Gracias a React Router podemos cambiar de página sin tener que
          recargar completamente nuestro sitio.
        </p>

        <div className="alert alert-secondary">
          <strong>Idea principal:</strong> una ruta relaciona una URL con el
          componente que queremos mostrar.
        </div>

        <hr className="my-5" />

        {/* INSTALAR */}
        <h2 className="fw-bold mb-3">Instalamos React Router</h2>

        <p>Abrimos la terminal dentro de nuestro proyecto y ejecutamos:</p>

        <div className="bg-dark text-light p-3 rounded">
          <code>npm install react-router-dom</code>
        </div>

        <hr className="my-5" />

        {/* PÁGINAS */}
        <h2 className="fw-bold mb-3">Creamos nuestras páginas</h2>

        <p>
          Dentro de <strong>src</strong> creamos una carpeta llamada:
        </p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>paginas</code>
        </div>

        <p>Dentro de ella vamos a crear tres páginas de ejemplo:</p>

        <div className="bg-light border rounded p-4">
          <pre className="mb-0">
            {`src/
│
├── componentes/
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── paginas/
│   ├── Inicio.jsx
│   ├── Productos.jsx
│   └── Contacto.jsx
│
├── App.jsx
├── main.jsx
└── index.css`}
          </pre>
        </div>

        <hr className="my-5" />

        {/* INICIO */}
        <h2 className="fw-bold mb-3">Página Inicio</h2>

        <p>
          Dentro de <strong>Inicio.jsx</strong> escribimos:
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`function Inicio() {
  return (
    <main className="container py-5">

      <h1>Inicio</h1>

      <p>
        Bienvenidos a nuestro proyecto.
      </p>

    </main>
  );
}

export default Inicio;`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* PRODUCTOS */}
        <h2 className="fw-bold mb-3">Página Productos</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`function Productos() {
  return (
    <main className="container py-5">

      <h1>Productos</h1>

      <p>
        Aquí mostraremos nuestros productos.
      </p>

    </main>
  );
}

export default Productos;`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* CONTACTO */}
        <h2 className="fw-bold mb-3">Página Contacto</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`function Contacto() {
  return (
    <main className="container py-5">

      <h1>Contacto</h1>

      <p>
        Información de contacto.
      </p>

    </main>
  );
}

export default Contacto;`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* APP */}
        <h2 className="fw-bold mb-3">Configuramos las rutas</h2>

        <p>
          Ahora debemos indicarle a React qué componente debe mostrar para cada
          URL.
        </p>

        <p>
          Abrimos <strong>App.jsx</strong> e importamos:
        </p>

        <div className="bg-dark text-light p-4 rounded mb-4">
          <pre className="mb-0">
            <code>
              {`import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";`}
            </code>
          </pre>
        </div>

        <p>También importamos nuestras páginas:</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`import Inicio from "./paginas/Inicio";
import Productos from "./paginas/Productos";
import Contacto from "./paginas/Contacto";`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* ROUTES */}
        <h2 className="fw-bold mb-3">BrowserRouter, Routes y Route</h2>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">BrowserRouter</h5>

              <p className="text-secondary mb-0">
                Habilita el sistema de navegación dentro de nuestra aplicación.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Routes</h5>

              <p className="text-secondary mb-0">
                Contiene las diferentes rutas disponibles.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Route</h5>

              <p className="text-secondary mb-0">
                Relaciona una dirección con el componente que queremos mostrar.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* APP COMPLETO */}
        <h2 className="fw-bold mb-3">Nuestro App.jsx</h2>

        <p>Podemos configurar nuestra aplicación de la siguiente manera:</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

import Inicio from "./paginas/Inicio";
import Productos from "./paginas/Productos";
import Contacto from "./paginas/Contacto";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Inicio />}
        />

        <Route
          path="/productos"
          element={<Productos />}
        />

        <Route
          path="/contacto"
          element={<Contacto />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* PATH */}
        <h2 className="fw-bold mb-3">Entendiendo una Route</h2>

        <p>Observemos esta línea:</p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>{'<Route path="/productos" element={<Productos />} />'}</code>
        </div>

        <p>Tiene dos partes fundamentales:</p>

        <div className="row g-3">
          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">path="/productos"</h5>

              <p className="text-secondary mb-0">
                Es la dirección que escribimos en el navegador.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">element={"{<Productos />}"}</h5>

              <p className="text-secondary mb-0">
                Es el componente que React mostrará cuando ingresemos a esa
                dirección.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* PROBAR URL */}
        <h2 className="fw-bold mb-3">Probamos nuestras URLs</h2>

        <p>Con el proyecto ejecutándose podemos ingresar directamente a:</p>

        <div className="bg-light border rounded p-4">
          <pre className="mb-0">
            {`localhost:5173/

localhost:5173/productos

localhost:5173/contacto`}
          </pre>
        </div>

        <p className="mt-3">
          Dependiendo de la URL, React Router mostrará una página diferente.
        </p>

        <hr className="my-5" />

        {/* LINK */}
        <h2 className="fw-bold mb-3">Navegamos utilizando Link</h2>

        <p>
          No queremos que el usuario tenga que escribir las direcciones
          manualmente.
        </p>

        <p>
          React Router nos proporciona el componente
          <strong> Link</strong>.
        </p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>{'import { Link } from "react-router-dom";'}</code>
        </div>

        <p>Por ejemplo:</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`<Link to="/">
  Inicio
</Link>

<Link to="/productos">
  Productos
</Link>

<Link to="/contacto">
  Contacto
</Link>`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* NAVBAR */}
        <h2 className="fw-bold mb-3">Agregamos las páginas al Navbar</h2>

        <p>
          Podemos modificar nuestro <strong>Navbar.jsx</strong> para navegar
          entre las diferentes páginas.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          Mi Proyecto
        </Link>

        <div className="navbar-nav">

          <Link
            className="nav-link"
            to="/"
          >
            Inicio
          </Link>

          <Link
            className="nav-link"
            to="/productos"
          >
            Productos
          </Link>

          <Link
            className="nav-link"
            to="/contacto"
          >
            Contacto
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* LINK VS A */}
        <h2 className="fw-bold mb-3">¿Por qué usamos Link?</h2>

        <p>En una página HTML tradicional podemos utilizar:</p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>{'<a href="/productos">Productos</a>'}</code>
        </div>

        <p>Pero dentro de nuestra aplicación React utilizaremos:</p>

        <div className="bg-dark text-light p-3 rounded mb-4">
          <code>{'<Link to="/productos">Productos</Link>'}</code>
        </div>

        <div className="alert alert-primary">
          <strong>Link</strong> permite navegar dentro de nuestra aplicación
          utilizando React Router sin realizar una recarga completa de la
          página.
        </div>

        <hr className="my-5" />

        {/* RESULTADO */}
        <h2 className="fw-bold mb-3">¿Qué conseguimos?</h2>

        <div className="bg-light border rounded p-4">
          <pre className="mb-0">
            {`App
│
├── Navbar
│
├── /
│     └── Inicio
│
├── /productos
│     └── Productos
│
├── /contacto
│     └── Contacto
│
└── Footer`}
          </pre>
        </div>

        <hr className="my-5" />

        {/* PROYECTOS */}
        <h2 className="fw-bold mb-3">¿Cómo lo aplico a mi proyecto?</h2>

        <p>
          No todos los proyectos necesitan las mismas páginas. Cada grupo debe
          identificar las pantallas principales de su propio sistema.
        </p>

        <div className="table-responsive mt-4">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>Proyecto</th>
                <th>Posibles rutas</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Tienda</td>
                <td>/productos — /carrito — /login</td>
              </tr>

              <tr>
                <td>Biblioteca</td>
                <td>/libros — /reservas — /login</td>
              </tr>

              <tr>
                <td>Clínica</td>
                <td>/turnos — /pacientes — /login</td>
              </tr>

              <tr>
                <td>Cine</td>
                <td>/peliculas — /funciones — /reservas</td>
              </tr>

              <tr>
                <td>Sistema escolar</td>
                <td>/alumnos — /notificaciones — /login</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-5" />

        {/* ACTIVIDAD */}
        <div className="alert alert-primary">
          <h5 className="alert-heading fw-bold">Actividad</h5>

          <p>
            Continuando con el proyecto desarrollado en las clases anteriores:
          </p>

          <ol className="mb-0">
            <li>
              Instalar <strong>react-router-dom</strong>.
            </li>

            <li>
              Crear dentro de src la carpeta
              <strong> paginas</strong>.
            </li>

            <li>
              Identificar al menos <strong>3 páginas principales</strong>
              que necesite el proyecto.
            </li>

            <li>Crear un archivo JSX para cada página.</li>

            <li>
              Configurar una ruta para cada página en
              <strong> App.jsx</strong>.
            </li>

            <li>
              Modificar <strong>Navbar.jsx</strong> agregando los
              correspondientes <strong>Link</strong>.
            </li>

            <li>Comprobar que se pueda navegar entre todas las páginas.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Clase4;
