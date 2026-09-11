// Posible estilo de modal para mostrar validaciones de usuario
import React from "react";
import { useNavigate } from "react-router-dom";

const ModalValidacion = ({ mostrar }) => {
  const navigate = useNavigate();

  if (!mostrar) {
    return null;
  }

  const irAlInicio = () => {
    navigate("/");
  };

  return (
    <>
      <div
        className="modal show d-block"
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Inicio de sesión correcto</h5>
            </div>

            <div className="modal-body text-center">
              <h4>Usuario validado</h4>

              <p className="text-secondary">Bienvenido</p>
            </div>

            <div className="modal-footer justify-content-center">
              <button className="btn btn-primary" onClick={irAlInicio}>
                IR AL INICIO
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalValidacion;
