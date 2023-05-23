import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Accordion", path: "/accordion" },
    { label: "Dropdown", path: "/dropdown" },
    { label: "Buttons", path: "/buttons" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
  ];
  const renderedLinks = links.map((link) => {
    return (
      <Link
        to={link.path}
        key={link.label}
        className={"mb-3"}
        activeModeClasses={"font-bold border-l-4 border-blue-500 pl-2"}
      >
        {link.label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 flex flex-col items-start">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
