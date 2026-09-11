import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../estilosPaginas/registro.css";
import { useNavigate } from "react-router-dom";
import snoopy from "../assets/snoopy.jpg";

function Registro() {
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setRepetirPassword] = useState("");

  const [errores, setErrores] = useState({});

  const validarFormulario = (e) => {
    e.preventDefault();

    const nuevosErrores = {};

    if (nombre.trim() === "") {
      nuevosErrores.nombre = "Ingresá tu nombre.";
    }

    if (apellido.trim() === "") {
      nuevosErrores.apellido = "Ingresá tu apellido.";
    }

    if (email.trim() === "") {
      nuevosErrores.email = "Ingresá un correo electrónico.";
    }

    if (password.trim() === "") {
      nuevosErrores.password = "Ingresá una contraseña.";
    }

    if (repetirPassword.trim() === "") {
      nuevosErrores.repetirPassword = "Repetí la contraseña.";
    }

    if (
      password !== "" &&
      repetirPassword !== "" &&
      password !== repetirPassword
    ) {
      nuevosErrores.repetirPassword = "Las contraseñas no coinciden.";
    }

    setErrores(nuevosErrores);

    if (Object.keys(nuevosErrores).length === 0) {
      alert("Registro completado correctamente");
      navigate("/");
    }
  };

  return (
    <div className="container-fluid vh-100 overflow-hidden">
      <div className="row h-100">
        {/* IMAGEN */}
        <div className="col-lg-6 d-none d-lg-block p-0 h-100">
          <img
            src={snoopy}
            alt="Registro"
            className="w-100 h-100 object-fit-cover"
          />
        </div>

        {/* FORMULARIO */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center h-100">
          <div className="registro-formulario w-75">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Crear una cuenta</h2>

              <p className="text-secondary">
                Registrate para acceder a las actividades y contenidos del
                sitio.
              </p>
            </div>

            <form onSubmit={validarFormulario}>
              {/* NOMBRE Y APELLIDO */}
              <div className="row g-3 mb-3">
                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className={`form-control ${
                        errores.nombre ? "is-invalid" : ""
                      }`}
                      id="nombre"
                      placeholder="Nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />

                    <label htmlFor="nombre">Nombre</label>
                  </div>

                  {errores.nombre && (
                    <div className="text-danger small mt-1">
                      {errores.nombre}
                    </div>
                  )}
                </div>

                <div className="col-md-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className={`form-control ${
                        errores.apellido ? "is-invalid" : ""
                      }`}
                      id="apellido"
                      placeholder="Apellido"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                    />

                    <label htmlFor="apellido">Apellido</label>
                  </div>

                  {errores.apellido && (
                    <div className="text-danger small mt-1">
                      {errores.apellido}
                    </div>
                  )}
                </div>
              </div>

              {/* EMAIL */}
              <div className="mb-3">
                <div className="form-floating">
                  <input
                    type="email"
                    className={`form-control ${
                      errores.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label htmlFor="email">Email</label>
                </div>

                {errores.email && (
                  <div className="text-danger small mt-1">{errores.email}</div>
                )}
              </div>

              {/* CONTRASEÑA */}
              <div className="mb-3">
                <div className="form-floating">
                  <input
                    type="password"
                    className={`form-control ${
                      errores.password ? "is-invalid" : ""
                    }`}
                    id="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <label htmlFor="password">Contraseña</label>
                </div>

                {errores.password && (
                  <div className="text-danger small mt-1">
                    {errores.password}
                  </div>
                )}
              </div>

              {/* REPETIR CONTRASEÑA */}
              <div className="mb-4">
                <div className="form-floating">
                  <input
                    type="password"
                    className={`form-control ${
                      errores.repetirPassword ? "is-invalid" : ""
                    }`}
                    id="repetirPassword"
                    placeholder="Repetir contraseña"
                    value={repetirPassword}
                    onChange={(e) => setRepetirPassword(e.target.value)}
                  />

                  <label htmlFor="repetirPassword">Repetir contraseña</label>
                </div>

                {errores.repetirPassword && (
                  <div className="text-danger small mt-1">
                    {errores.repetirPassword}
                  </div>
                )}
              </div>

              {/* BOTÓN */}
              <button type="submit" className="btn btn-primary w-100 py-3">
                REGISTRARSE
              </button>

              {/* LINK LOGIN */}
              <div className="text-center mt-4">
                <span className="text-secondary">¿Ya tenés una cuenta? </span>

                <Link to="/login" className="text-decoration-none fw-semibold">
                  Iniciar sesión
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
