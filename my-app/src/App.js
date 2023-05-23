import UseDisplayContent from "./Hooks/UseDisplayContent";
import TablePages from "./Pages/TablePages";

const App = () => {
  const [currentContent, handleDataInput] = UseDisplayContent();
  return (
    <div className="m-36">
      <div className="w-64">
        <input
          className="p-4 m-2 w-full border border-gray-300"
          type="string"
          value={currentContent}
          readOnly
        ></input>
      </div>
      <TablePages handleClick={handleDataInput} />
    </div>
  );
};

export default App;
