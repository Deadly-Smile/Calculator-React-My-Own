import { createContext, useState } from "react";

const DisplayContentContext = createContext();

const DisplayContentProvider = ({ children }) => {
  const [currentContent, setCurrentContent] = useState("");
  const changeDisplayContent = (content) => {
    setCurrentContent(content);
  };
  return (
    <DisplayContentContext.Provider
      value={{ currentContent, changeDisplayContent }}
    >
      {children}
    </DisplayContentContext.Provider>
  );
};

export { DisplayContentProvider };
export default DisplayContentContext;
