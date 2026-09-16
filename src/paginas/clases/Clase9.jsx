import React, { useState } from "react";

function Clase9() {
  // Estados utilizados por el ejemplo interactivo de esta clase
  const [nombreEjemplo, setNombreEjemplo] = useState("");
  const [emailEjemplo, setEmailEjemplo] = useState("");
  const [passwordEjemplo, setPasswordEjemplo] = useState("");
  const [mensajeEjemplo, setMensajeEjemplo] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  // Función utilizada por el formulario interactivo
  const manejarEjemplo = (e) => {
    e.preventDefault();

    if (
      nombreEjemplo.trim() === "" ||
      emailEjemplo.trim() === "" ||
      passwordEjemplo.trim() === ""
    ) {
      setMensajeEjemplo("Todos los campos son obligatorios.");
      setTipoMensaje("danger");
      return;
    }

    if (!emailEjemplo.includes("@")) {
      setMensajeEjemplo("El correo electrónico no es válido.");
      setTipoMensaje("danger");
      return;
    }

    if (passwordEjemplo.length < 6) {
      setMensajeEjemplo("La contraseña debe tener al menos 6 caracteres.");
      setTipoMensaje("danger");
      return;
    }

    setMensajeEjemplo(`Registro correcto. Bienvenido/a ${nombreEjemplo}.`);
    setTipoMensaje("success");
  };

  return (
    <main>
      {/* PRESENTACIÓN */}
      <section className="bg-light py-5">
        <div className="container">
          <span className="badge text-bg-primary mb-3">Clase 9</span>

          <h1 className="fw-bold">Formularios y validaciones</h1>

          <p className="lead text-secondary mt-3">
            En esta clase vamos a aprender a capturar información ingresada por
            el usuario, almacenarla utilizando estados y validar los datos antes
            de utilizarlos.
          </p>
        </div>
      </section>

      <section className="container py-5">
        {/* INTRODUCCIÓN */}
        <h2 className="fw-bold mb-3">¿Para qué necesitamos formularios?</h2>

        <p>
          Hasta ahora nuestra aplicación podía mostrar información y reaccionar
          a diferentes eventos.
        </p>

        <p>
          Pero muchas aplicaciones también necesitan que el usuario pueda{" "}
          <strong>ingresar información</strong>.
        </p>

        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Registro</h5>
              <p className="text-secondary mb-0">
                Nombre, email, contraseña y otros datos personales.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Login</h5>
              <p className="text-secondary mb-0">
                Email y contraseña para iniciar sesión.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Carga de datos</h5>
              <p className="text-secondary mb-0">
                Productos, libros, turnos, películas, usuarios, etc.
              </p>
            </div>
          </div>
        </div>

        <div className="alert alert-primary mt-4">
          <strong>Idea principal:</strong> un formulario permite obtener
          información ingresada por el usuario. Antes de utilizar esa
          información debemos verificar que sea válida.
        </div>

        <hr className="my-5" />

        {/* FORMULARIO HTML */}
        <h2 className="fw-bold mb-3">Estructura básica de un formulario</h2>

        <p>
          Ya conocemos elementos HTML como <code>form</code>,<code> input</code>
          , <code>label</code> y<code> button</code>.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`<form>

  <label>Nombre</label>

  <input
    type="text"
  />

  <label>Email</label>

  <input
    type="email"
  />

  <button type="submit">
    Registrarse
  </button>

</form>`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          El problema es que todavía necesitamos obtener desde React aquello que
          el usuario está escribiendo.
        </p>

        <hr className="my-5" />

        {/* CONEXIÓN CLASE 8 */}
        <h2 className="fw-bold mb-3">Volvemos a utilizar useState</h2>

        <p>
          En la clase anterior utilizamos estados para guardar números y valores
          booleanos.
        </p>

        <p>Ahora podemos utilizar un estado para guardar texto.</p>

        <div className="bg-dark text-light p-3 rounded mt-4">
          <code>{'const [nombre, setNombre] = useState("");'}</code>
        </div>

        <p className="mt-4">El valor inicial es un texto vacío:</p>

        <div className="bg-light border rounded p-3">
          <code>""</code> → El usuario todavía no escribió nada.
        </div>

        <hr className="my-5" />

        {/* ONCHANGE */}
        <span className="badge text-bg-dark mb-2">Paso 1</span>

        <h2 className="fw-bold">Detectar cuando el usuario escribe</h2>

        <p className="mt-3">
          Para detectar cambios dentro de un campo utilizamos el evento
          <code> onChange</code>.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`<input
  type="text"
  onChange={(e) => setNombre(e.target.value)}
/>`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          Cada vez que el usuario escribe o modifica el campo,
          <code> onChange</code> se ejecuta.
        </p>

        <hr className="my-5" />

        {/* EVENT */}
        <h2 className="fw-bold mb-3">¿Qué significa la "e"?</h2>

        <p>
          La variable <code>e</code> representa el evento que acaba de ocurrir.
        </p>

        <div className="bg-dark text-light p-3 rounded mt-4">
          <code>{"e.target.value"}</code>
        </div>

        <p className="mt-4">
          En este caso podemos interpretarlo de la siguiente manera:
        </p>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">
                El usuario escribe "Juan"
              </div>

              <div>↓</div>

              <div className="border rounded p-3">Se ejecuta onChange</div>

              <div>↓</div>

              <div className="border rounded p-3">
                e.target.value contiene "Juan"
              </div>

              <div>↓</div>

              <div className="border rounded p-3">setNombre("Juan")</div>

              <div>↓</div>

              <div className="bg-primary text-white rounded p-3">
                El estado nombre ahora contiene "Juan"
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* VALUE */}
        <span className="badge text-bg-dark mb-2">Paso 2</span>

        <h2 className="fw-bold">Conectar el input con el estado</h2>

        <p className="mt-3">
          También indicamos que el valor del campo será el contenido del estado{" "}
          <code>nombre</code>.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`<input
  type="text"
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
/>`}
            </code>
          </pre>
        </div>

        <div className="alert alert-secondary mt-4">
          De esta manera el campo y el estado de React permanecen sincronizados.
        </div>

        <hr className="my-5" />

        {/* EJEMPLO INTERACTIVO */}
        <h2 className="fw-bold mb-3">Probemos cómo funciona</h2>

        <p>
          Escribí un nombre. Debajo del campo podemos mostrar inmediatamente el
          contenido del estado.
        </p>

        <div className="bg-light border rounded p-4 mt-4">
          <label className="form-label fw-bold">Nombre</label>

          <input
            type="text"
            className="form-control"
            placeholder="Escribí tu nombre"
            value={nombreEjemplo}
            onChange={(e) => setNombreEjemplo(e.target.value)}
          />

          <div className="mt-4">
            <strong>Valor almacenado en el estado:</strong>

            <div className="border bg-white rounded p-3 mt-2">
              {nombreEjemplo === ""
                ? "Todavía no se ingresó ningún valor."
                : nombreEjemplo}
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* VARIOS CAMPOS */}
        <h2 className="fw-bold mb-3">
          Un formulario normalmente tiene varios campos
        </h2>

        <p>Podemos crear un estado para cada dato que necesitamos almacenar.</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`const [nombre, setNombre] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          Luego conectamos cada campo con su estado correspondiente.
        </p>

        <hr className="my-5" />

        {/* FORMULARIO COMPLETO */}
        <h2 className="fw-bold mb-3">Formulario de registro</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`<form>

  <input
    type="text"
    value={nombre}
    onChange={(e) => setNombre(e.target.value)}
  />

  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />

  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <button type="submit">
    Registrarse
  </button>

</form>`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* SUBMIT */}
        <span className="badge text-bg-dark mb-2">Paso 3</span>

        <h2 className="fw-bold">Enviar el formulario</h2>

        <p className="mt-3">
          Cuando presionamos un botón de tipo <code>submit</code>, el formulario
          genera el evento <code>onSubmit</code>.
        </p>

        <div className="bg-dark text-light p-4 rounded mt-4">
          <pre className="mb-0">
            <code>
              {`<form onSubmit={manejarSubmit}>

  ...

  <button type="submit">
    Registrarse
  </button>

</form>`}
            </code>
          </pre>
        </div>

        <p className="mt-4">Después creamos la función que se ejecutará:</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`const manejarSubmit = (e) => {

  e.preventDefault();

  alert("Formulario enviado");

};`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* PREVENT DEFAULT */}
        <h2 className="fw-bold mb-3">¿Para qué sirve e.preventDefault()?</h2>

        <p>
          Normalmente, al enviar un formulario HTML, el navegador intenta
          recargar o enviar la página.
        </p>

        <p>
          En una aplicación React generalmente queremos controlar nosotros
          mismos qué sucede.
        </p>

        <div className="bg-dark text-light p-3 rounded mt-4">
          <code>{"e.preventDefault();"}</code>
        </div>

        <div className="alert alert-primary mt-4">
          <strong>preventDefault()</strong> evita el comportamiento
          predeterminado del formulario para que podamos procesar los datos
          utilizando JavaScript.
        </div>

        <hr className="my-5" />

        {/* VALIDACIÓN */}
        <h2 className="fw-bold mb-3">¿Qué significa validar?</h2>

        <p>
          Antes de guardar, enviar o utilizar los datos debemos comprobar que
          cumplan determinadas condiciones.
        </p>

        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Campo obligatorio</h5>
              <p className="text-secondary mb-0">No puede estar vacío.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Formato</h5>
              <p className="text-secondary mb-0">
                El dato debe tener una estructura válida.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Longitud</h5>
              <p className="text-secondary mb-0">
                Puede exigirse una cantidad mínima de caracteres.
              </p>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* VALIDAR VACÍOS */}
        <h2 className="fw-bold mb-3">Validar campos vacíos</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`if (
  nombre.trim() === "" ||
  email.trim() === "" ||
  password.trim() === ""
) {

  alert("Todos los campos son obligatorios");
  return;

}`}
            </code>
          </pre>
        </div>

        <p className="mt-4">
          El operador <code>||</code> significa <strong>OR</strong>. Si
          cualquiera de las condiciones es verdadera, mostramos el error.
        </p>

        <div className="alert alert-secondary">
          Utilizamos <code>trim()</code> para evitar aceptar como válido un
          campo que contenga solamente espacios.
        </div>

        <hr className="my-5" />

        {/* EMAIL */}
        <h2 className="fw-bold mb-3">Validar el email</h2>

        <p>
          Como primera aproximación podemos verificar que el texto contenga el
          símbolo <code>@</code>.
        </p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`if (!email.includes("@")) {

  alert("El correo electrónico no es válido");
  return;

}`}
            </code>
          </pre>
        </div>

        <div className="alert alert-warning mt-4">
          Esta es una validación sencilla para aprender el concepto. En
          aplicaciones reales pueden utilizarse validaciones más completas.
        </div>

        <hr className="my-5" />

        {/* PASSWORD */}
        <h2 className="fw-bold mb-3">Validar una contraseña</h2>

        <p>También podemos comprobar la cantidad de caracteres.</p>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`if (password.length < 6) {

  alert("La contraseña debe tener al menos 6 caracteres");
  return;

}`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* FUNCIÓN COMPLETA */}
        <h2 className="fw-bold mb-3">Función de validación completa</h2>

        <div className="bg-dark text-light p-4 rounded">
          <pre className="mb-0">
            <code>
              {`const manejarSubmit = (e) => {

  e.preventDefault();

  if (
    nombre.trim() === "" ||
    email.trim() === "" ||
    password.trim() === ""
  ) {
    alert("Todos los campos son obligatorios");
    return;
  }

  if (!email.includes("@")) {
    alert("El correo electrónico no es válido");
    return;
  }

  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres");
    return;
  }

  alert("Registro correcto");

};`}
            </code>
          </pre>
        </div>

        <hr className="my-5" />

        {/* FORMULARIO INTERACTIVO */}
        <h2 className="fw-bold mb-3">Probemos un formulario completo</h2>

        <p>
          Este formulario utiliza realmente estados, eventos y validaciones.
          Probá enviarlo con diferentes datos.
        </p>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-7">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h4 className="fw-bold mb-4">Registro de ejemplo</h4>

                <form onSubmit={manejarEjemplo}>
                  <div className="mb-3">
                    <label className="form-label">Nombre</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Juan Pérez"
                      value={nombreEjemplo}
                      onChange={(e) => setNombreEjemplo(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="usuario@email.com"
                      value={emailEjemplo}
                      onChange={(e) => setEmailEjemplo(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Mínimo 6 caracteres"
                      value={passwordEjemplo}
                      onChange={(e) => setPasswordEjemplo(e.target.value)}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary w-100">
                    Registrarse
                  </button>
                </form>

                {mensajeEjemplo !== "" && (
                  <div className={`alert alert-${tipoMensaje} mt-4 mb-0`}>
                    {mensajeEjemplo}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* FLUJO */}
        <h2 className="fw-bold text-center mb-4">¿Qué está ocurriendo?</h2>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-grid gap-2 text-center">
              <div className="border rounded p-3">
                El usuario escribe información
              </div>

              <div>↓</div>

              <div className="border rounded p-3">
                onChange detecta el cambio
              </div>

              <div>↓</div>

              <div className="border rounded p-3">Actualizamos los estados</div>

              <div className="small text-secondary">
                setNombre / setEmail / setPassword
              </div>

              <div>↓</div>

              <div className="border rounded p-3">
                El usuario envía el formulario
              </div>

              <div>↓</div>

              <div className="border rounded p-3">
                onSubmit ejecuta la función
              </div>

              <div>↓</div>

              <div className="border rounded p-3">Validamos la información</div>

              <div>↓</div>

              <div className="bg-primary text-white rounded p-3">
                Mostramos el resultado
              </div>
            </div>
          </div>
        </div>

        <hr className="my-5" />

        {/* IMPORTANTE */}
        <div className="card border-warning">
          <div className="card-header bg-warning">
            <h4 className="mb-0">¿Dónde se guardaron los datos?</h4>
          </div>

          <div className="card-body">
            <p>
              Por ahora los datos solamente existen dentro de los
              <strong> estados de React</strong>.
            </p>

            <p className="mb-0">
              Si recargamos la página, esos datos desaparecen. Más adelante
              aprenderemos a almacenarlos de forma permanente utilizando una
              base de datos.
            </p>
          </div>
        </div>

        <hr className="my-5" />

        {/* APLICACIONES */}
        <h2 className="fw-bold mb-3">¿Cómo puedo utilizarlo en mi proyecto?</h2>

        <div className="row g-3 mt-3">
          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Usuarios</h5>
              <p className="text-secondary mb-0">
                Login, registro y edición de perfil.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Tienda</h5>
              <p className="text-secondary mb-0">
                Alta o modificación de productos.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Biblioteca</h5>
              <p className="text-secondary mb-0">
                Registrar libros, autores o usuarios.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Sistema médico</h5>
              <p className="text-secondary mb-0">
                Solicitud de turnos o carga de pacientes.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Cine</h5>
              <p className="text-secondary mb-0">
                Registro de películas, funciones o reservas.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="border rounded p-4 h-100">
              <h5 className="fw-bold">Comunidad</h5>
              <p className="text-secondary mb-0">
                Crear publicaciones, comentarios o perfiles.
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
                  <code>useState</code>
                </td>
                <td>Guarda la información ingresada.</td>
              </tr>

              <tr>
                <td>
                  <code>value</code>
                </td>
                <td>Vincula el campo con un estado.</td>
              </tr>

              <tr>
                <td>
                  <code>onChange</code>
                </td>
                <td>Detecta cambios en un campo.</td>
              </tr>

              <tr>
                <td>
                  <code>e.target.value</code>
                </td>
                <td>Obtiene el valor actual del campo.</td>
              </tr>

              <tr>
                <td>
                  <code>onSubmit</code>
                </td>
                <td>Detecta el envío del formulario.</td>
              </tr>

              <tr>
                <td>
                  <code>preventDefault()</code>
                </td>
                <td>Evita el comportamiento normal del formulario.</td>
              </tr>

              <tr>
                <td>
                  <strong>Validación</strong>
                </td>
                <td>
                  Comprueba que los datos cumplan las condiciones necesarias.
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
            Cada grupo deberá crear o mejorar un formulario relacionado
            directamente con su proyecto.
          </p>

          <ol className="mb-0">
            <li>Elegir un formulario necesario para el sistema.</li>

            <li>Debe contener al menos tres campos.</li>

            <li>
              Crear los estados necesarios utilizando
              <code> useState</code>.
            </li>

            <li>
              Conectar los campos mediante
              <code> value</code> y <code>onChange</code>.
            </li>

            <li>
              Capturar el envío utilizando
              <code> onSubmit</code>.
            </li>

            <li>
              Evitar el comportamiento predeterminado con
              <code> preventDefault()</code>.
            </li>

            <li>Validar que los campos obligatorios no estén vacíos.</li>

            <li>
              Agregar al menos una validación específica: longitud, formato,
              valor mínimo, etc.
            </li>

            <li>
              Mostrar un mensaje indicando si existe un error o si los datos son
              correctos.
            </li>

            <li>
              Registrar la tarea en Trello con su etiqueta correspondiente.
            </li>

            <li>
              Trabajar el cambio en una rama nueva y realizar el Pull Request.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}

export default Clase9;
