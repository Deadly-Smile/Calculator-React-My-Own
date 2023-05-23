import React, { useEffect, useRef, useState } from "react";
import { GoArrowDown } from "react-icons/go";
import Panel from "./Panel";

const Dropdown = ({ options, value, onChange }) => {
  const [isActive, setIsActive] = useState(true);
  const divEl = useRef();
  const handleOptionClick = (option) => {
    // console.log(option);
    // console.log(onChange);
    onChange(option);
    setIsActive(false);
  };

  useEffect(() => {
    const handler = (event) => {
      if (divEl.current) {
        if (!divEl.current.contains(event.target)) {
          setIsActive(false);
        }
      }
    };

    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  const handleSelectOptionClick = () => {
    setIsActive(!isActive);
  };

  const rendaredItems = options.map((option) => {
    return (
      <div
        key={option.value}
        className="hover:bg-sky-200 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
      >
        {option.content}
      </div>
    );
  });
  // let content = "Select...";
  // if (value) content = value.content;
  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleSelectOptionClick}
      >
        {value?.content || "Select..."}
        <GoArrowDown className="text-lg" />
      </Panel>
      {isActive && <Panel className="absolute top-full">{rendaredItems}</Panel>}
    </div>
  );
};

export default Dropdown;
