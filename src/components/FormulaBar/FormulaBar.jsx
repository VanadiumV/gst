import React from "react";
import "./FormulaBar.css";

const FormulaBar = ({ formula, setFormula, applyFormula }) => {
  return (
    <div className="formula-bar">
      <input
        type="text"
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
        placeholder="Enter formula (e.g., SUM(1:1,1:2))"
      />
      <button onClick={applyFormula}>Apply</button>
    </div>
  );
};

export default FormulaBar;