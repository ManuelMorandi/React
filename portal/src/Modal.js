import React from "react";
import ReactDOM from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000, // Va a aparecer por encima de todo
  borderRadius: "10px",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)", // Oscurezco el fondo
  zIndex: 1000,
};

export function Modal({ open, children, onClose }) {
  if (!open) return null;

  // Creamos un portal para evitar que el modal se vea afectado por el z-index de otros elementos
  // El primer argumento es el contenido que queremos renderizar
  // El segundo argumento es el contenedor donde queremos renderizarlo
  // Entonces, en vez de renderizarlo en el div con id="root", lo renderizamos en el div con id="portal"
  return ReactDOM.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES}>
        {children}
        <br />
        <button onClick={onClose}>Close</button>
      </div>
    </>,
    document.getElementById("portal")
  );
}
