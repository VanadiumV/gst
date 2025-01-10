import React from "react";
import Cell from "../Cell";
import "./Spreadsheet.css";

const Spreadsheet = ({ data, selectedCell, setSelectedCell, updateCellValue }) => {
  return (
    <table className="spreadsheet">
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                value={cell}
                isSelected={
                  selectedCell.row === rowIndex && selectedCell.col === colIndex
                }
                onClick={() => setSelectedCell({ row: rowIndex, col: colIndex })}
                onChange={(value) => updateCellValue(rowIndex, colIndex, value)}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Spreadsheet;