// import React, { Fragment } from "react";

const Table = ({ data, config, getKey }) => {
  const renderedRows = data.map((product, index) => {
    const renderedCells = config.map((column, index) => {
      return (
        <td key={`${index}`} className="p-2">
          {column.render(product)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={getKey(product, index)}>
        {renderedCells}
      </tr>
    );
  });
  // const tableHeaders = config.map((column) => {
  //   if (column.header) {
  //     return <Fragment key={column.title}>{column.header}</Fragment>;
  //   }
  //   return <th key={column.title}>{column.title}</th>;
  // });
  return (
    <table className="table-auto border-spacing-2">
      {/* <thead>
        <tr className="border-b-2">{tableHeaders}</tr>
      </thead> */}
      <tbody>{renderedRows}</tbody>
    </table>
  );
};

export default Table;
