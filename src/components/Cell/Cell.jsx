import React from "react";
import "./Cell.css";

const Cell = ({ value, isSelected, onClick, onChange }) => {
  return (
    <td className={isSelected ? "selected" : ""} onClick={onClick}>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </td>
  );
};

export default Cell;