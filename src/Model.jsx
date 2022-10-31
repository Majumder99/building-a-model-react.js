import React from "react";
import ReactDOM from "react-dom";

const model_styles = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const overlay_style = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

const Model = ({ open, children, onClose }) => {
  if (!open) return null;
  // we used createPortal becaues it allows us event delegation.This means if parent have an event then child will also have that event.
  // we can also use render but render method doesn't allow us to use event delegatoin
  return ReactDOM.createPortal(
    <>
      <div style={overlay_style} />
      <div style={model_styles}>
        <button onClick={onClose}>Close model</button>
        {children}
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Model;
