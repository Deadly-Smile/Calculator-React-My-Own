import React from "react";
import Button from "../Component/Button";
import Table from "../Component/Table";

const TablePages = ({ handleClick }) => {
  const data = [
    {
      title: "row-1",
      value: ["C", "DEL", "%", "SAVE"],
    },
    {
      title: "row-2",
      value: ["7", "8", "9", "/"],
    },
    {
      title: "row-3",
      value: ["4", "5", "6", "x"],
    },
    {
      title: "row-4",
      value: ["1", "2", "3", "-"],
    },
    {
      title: "row-5",
      value: [".", "0", "=", "+"],
    },
  ];

  const genarateKey = (row, index) => {
    return `${row.value[index]}-${row.title}`;
  };

  const handleButtonClick = (val) => {
    console.log(val);
    handleClick(val);
  };

  const buttonConfig = [
    {
      render: (row) => {
        return (
          <Button onClick={() => handleButtonClick(row.value[0])} outline>
            {row.value[0]}
          </Button>
        );
      },
    },
    {
      render: (row) => {
        return (
          <Button onClick={() => handleButtonClick(row.value[1])} outline>
            {row.value[1]}
          </Button>
        );
      },
    },
    {
      render: (row) => {
        return (
          <Button onClick={() => handleButtonClick(row.value[2])} outline>
            {row.value[2]}
          </Button>
        );
      },
    },
    {
      render: (row) => {
        return (
          <Button onClick={() => handleButtonClick(row.value[3])} outline>
            {row.value[3]}
          </Button>
        );
      },
    },
  ];
  return (
    <div>
      <Table data={data} config={buttonConfig} getKey={genarateKey} />
    </div>
  );
};

export default TablePages;
