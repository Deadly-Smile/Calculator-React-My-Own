import React, { useState } from "react";
import Table from "./Table";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;
  const handleHeaderClick = (title) => {
    if (sortBy && title !== sortBy) {
      setSortBy(title);
      setSortOrder("asc");
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(title);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(title);
    } else {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  let sortedData = data;
  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.title === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valA = sortValue(a);
      const valB = sortValue(b);

      const decideOrder = sortOrder === "asc" ? 1 : -1;
      if (typeof valA === "string")
        return valA.localeCompare(valB) * decideOrder;
      return (valA - valB) * decideOrder;
    });
  }
  const getIcons = (title, sortBy, sortOrder) => {
    if (title === sortBy) {
      if (!sortOrder)
        return (
          <div>
            <GoChevronUp />
            <GoChevronDown />
          </div>
        );
      else if (sortOrder === "asc")
        return (
          <div>
            {" "}
            <GoChevronUp />
          </div>
        );
      else
        return (
          <div>
            <GoChevronDown />
          </div>
        );
    } else {
      return (
        <div>
          <GoChevronUp />
          <GoChevronDown />
        </div>
      );
    }
  };
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: (
        <th
          onClick={() => handleHeaderClick(column.title)}
          className="bg-blue-400 cursor-pointer hover:bg-slate-300"
        >
          <div className="flex items-center">
            {getIcons(column.title, sortBy, sortOrder)}
            {column.title}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} config={updatedConfig} data={sortedData} />;
};

export default SortableTable;
