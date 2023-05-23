import { useState } from "react";
import { evaluate } from "mathjs";

const UseDisplayContent = () => {
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
  const handleDataInput = (val) => {
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
  return {
    currentContent,
    handleDataInput,
  };
};

export default UseDisplayContent;
