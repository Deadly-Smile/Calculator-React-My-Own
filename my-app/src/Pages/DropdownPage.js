import React, { useState } from "react";
import Dropdown from "../Component/Dropdown";
import "../index.css";

const DropdownPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { content: "red", value: "red" },
    { content: "green", value: "green" },
    { content: "blue", value: "blue" },
    { content: "yollow", value: "yollow" },
    { content: "dark", value: "dark" },
  ];
  const onSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="flex">
      <Dropdown options={options} value={selectedOption} onChange={onSelect} />
      <Dropdown options={options} value={selectedOption} onChange={onSelect} />
    </div>
  );
};

export default DropdownPage;
