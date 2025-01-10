import React from "react";
import "./Toolbar.css";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <button>Bold</button>
      <button>Italic</button>
      <button>Font Size</button>
      <button>Add Row</button>
      <button>Add Column</button>
    </div>
  );
};

export default Toolbar;