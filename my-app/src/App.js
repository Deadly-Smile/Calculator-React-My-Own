import React, { useState } from "react";
import TablePages from "./Pages/TablePages";
import { evaluate } from "mathjs";

const App = () => {
  const [currentContent, setCurrentContent] = useState("");
  const addContent = (val) => {
    if (currentContent === "Invalid syntex") {
      setCurrentContent("");
    }
    if (val === "x") val = "*";

    setCurrentContent(`${currentContent}${val}`);
  };
  const calculatedValue = () => {
    let result = NaN;
    try {
      result = evaluate(currentContent);
    } catch (error) {
      result = "Invalid syntex";
    }

    return result;
  };
  const handleClick = (val) => {
    const check = /(^[0-9])/;
    if (val === "C") {
      setCurrentContent("");
    } else if (val === "DEL") {
      let temp = currentContent;
      try {
        temp = temp.substring(0, temp.length - 1);
      } catch (error) {
        temp = "";
      }
      setCurrentContent(temp);
    } else if (
      val === "%" ||
      val === "+" ||
      val === "-" ||
      val === "x" ||
      val === "/" ||
      val === "."
    ) {
      if (currentContent.length === 0) {
        addContent(val);
        return;
      }
      if (
        currentContent[currentContent.length - 1] !== "%" &&
        currentContent[currentContent.length - 1] !== "+" &&
        currentContent[currentContent.length - 1] !== "-" &&
        currentContent[currentContent.length - 1] !== "/" &&
        currentContent[currentContent.length - 1] !== "x" &&
        currentContent[currentContent.length - 1] !== "."
      ) {
        addContent(val);
      }
    } else if (val === "=") {
      setCurrentContent(calculatedValue());
    } else if (val === "SAVE") {
      console.log("Saved");
    } else if (check.test(val)) {
      addContent(val);
    }
  };
  return (
    <div className="pl-96">
      <div className="w-64">
        <input
          className="p-4 m-2 w-full border border-gray-300"
          type="string"
          value={currentContent}
          readOnly
        ></input>
      </div>
      <TablePages handleClick={handleClick} />
    </div>
  );
};

export default App;
