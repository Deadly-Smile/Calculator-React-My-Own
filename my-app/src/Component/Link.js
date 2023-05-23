import React from "react";
import classNames from "classnames";
import UseNavigation from "../Hooks/UseNavigation";

const Link = ({ to, children, className, activeModeClasses }) => {
  const { navigate, currentPath } = UseNavigation();
  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;
    event.preventDefault();
    navigate(to);
  };
  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeModeClasses
  );
  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
