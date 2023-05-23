import UseNavigation from "../Hooks/UseNavigation";

const Route = ({ path, children }) => {
  const { currentPath } = UseNavigation();
  if (path === currentPath) return children;
  else return null;
};

export default Route;
