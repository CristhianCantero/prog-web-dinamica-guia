import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalValidacion from "../componentes/modalValidaciones";
import "../estilosPaginas/login.css";
import spiderman from "../assets/spiderman.jpg"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const [mostrarModal, setMostrarModal] = useState(false);

  const validarFormulario = (e) => {
    e.preventDefault();

    const emailVacio = email.trim() === "";
    const passwordVacio = password.trim() === "";

    setErrorEmail(emailVacio);
    setErrorPassword(passwordVacio);

    if (emailVacio || passwordVacio) {
      return;
    }

    setMostrarModal(true);
  };

  return (
    <div className="container-fluid vh-100 overflow-hidden">
      <div className="row h-100">
        {/* IMAGEN */}
        <div className="col-lg-6 d-none d-lg-block p-0 h-100">
          <img
            src={spiderman}
            alt="Inicio de sesión"
            className="w-100 h-100 object-fit-cover"
          />
        </div>

        {/* FORMULARIO */}
        <div className="col-lg-6 d-flex align-items-center justify-content-center h-100">
          <div className="login-formulario w-75">
            <div className="text-center mb-4">
              <h2 className="fw-bold">Iniciar sesión</h2>

              <p className="text-secondary">
                Ingresá a tu cuenta para acceder a los contenidos del sitio.
              </p>
            </div>

            <form onSubmit={validarFormulario}>
              {/* EMAIL */}
              <div className="mb-3">
                <div className="form-floating">
                  <input
                    type="email"
                    className={`form-control ${errorEmail ? "is-invalid" : ""}`}
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label htmlFor="email">Email</label>
                </div>

                {errorEmail && (
                  <div className="text-danger small mt-1">
                    Debes ingresar un email.
                  </div>
                )}
              </div>

              {/* CONTRASEÑA */}
              <div className="mb-3">
                <div className="form-floating">
                  <input
                    type="password"
                    className={`form-control ${
                      errorPassword ? "is-invalid" : ""
                    }`}
                    id="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <label htmlFor="password">Contraseña</label>
                </div>

                {errorPassword && (
                  <div className="text-danger small mt-1">
                    Debes ingresar una contraseña.
                  </div>
                )}
              </div>

              {/* OPCIONES */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="recordarme"
                  />

                  <label className="form-check-label" htmlFor="recordarme">
                    Recordarme
                  </label>
                </div>

                <a href="#" className="text-decoration-none">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>

              {/* BOTÓN */}
              <button type="submit" className="btn btn-primary w-100 py-3">
                INGRESAR
              </button>

              {/* LINK A REGISTRO */}
              <div className="text-center mt-4">
                <span className="text-secondary">¿No tenés una cuenta? </span>

                <Link
                  to="/registro"
                  className="text-decoration-none fw-semibold"
                >
                  Registrarse
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ModalValidacion mostrar={mostrarModal} />
    </div>
  );
}

export default Login;
