import React, { useState } from "react";
import Model from "./Model";

const button_wrapper_styles = {
  position: "relative",
  zIndex: 1,
};

const other_content_styles = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div style={button_wrapper_styles}>
        <button onClick={() => setIsOpen(true)}>Open Model</button>
        <Model open={isOpen} onClose={onClose}>
          Fancy Model
        </Model>
      </div>
      <div style={other_content_styles}>Other Contents</div>
    </>
  );
};

export default App;
