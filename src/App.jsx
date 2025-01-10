import React, { useState } from "react";
import Toolbar from "./components/Toolbar";
import Spreadsheet from "./components/Spreadsheet/Spreadsheet";
import FormulaBar from "./components/FormulaBar";
import "./App.css";

const App = () => {
  const [data, setData] = useState(Array(10).fill(Array(10).fill("")));
  const [selectedCell, setSelectedCell] = useState({ row: 0, col: 0 });
  const [formula, setFormula] = useState("");

  const updateCellValue = (row, col, value) => {
    const updatedData = data.map((r, rowIndex) =>
      r.map((c, colIndex) => (rowIndex === row && colIndex === col ? value : c))
    );
    setData(updatedData);
  };

  const applyFormula = () => {
    const [func, range] = formula.split("(");
    if (!range) return;
    const cleanedRange = range.replace(")", "").split(",");

    const cells = cleanedRange.map((ref) => {
      const [r, c] = ref.split(":");
      return data[parseInt(r)][parseInt(c)];
    });

    const result = mathFunctions[func]?.(cells) || "Invalid Formula";
    updateCellValue(selectedCell.row, selectedCell.col, result);
    setFormula("");
  };

  return (
    <div className="App">
      <Toolbar />
      <FormulaBar
        formula={formula}
        setFormula={setFormula}
        applyFormula={applyFormula}
      />
      <Spreadsheet
        data={data}
        selectedCell={selectedCell}
        setSelectedCell={setSelectedCell}
        updateCellValue={updateCellValue}
      />
    </div>
  );
};

export default App;