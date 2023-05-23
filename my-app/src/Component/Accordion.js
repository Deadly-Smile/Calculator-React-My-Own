import React, { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) => {
  const [extandedIndex, setExtandedIndex] = useState(-1);
  const handleHeaderClick = (index) => {
    if (index === extandedIndex) {
      setExtandedIndex(-1);
    } else {
      setExtandedIndex(index);
    }
  };

  const renderedAccordionItems = items.map((item, index) => {
    const isExtanded = index === extandedIndex;
    const renderedContent = isExtanded && (
      <div className="border-b p-5">{item.content}</div>
    );
    const icon = isExtanded ? <GoChevronDown /> : <GoChevronLeft />;
    return (
      <div key={item.id}>
        <div
          onClick={() => {
            handleHeaderClick(index);
          }}
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
        >
          {item.header}
          <span className="text-2xl">{icon}</span>
        </div>
        {renderedContent}
      </div>
    );
  });
  return (
    <div className="border-x border-t rounded">{renderedAccordionItems}</div>
  );
};

export default Accordion;
