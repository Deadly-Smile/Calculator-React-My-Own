import React from "react";
import Accordion from "../Component/Accordion";

const AccourdionPages = () => {
  const accordionArr = [
    {
      id: "10001",
      header: "Wow, this is first accordion header!!",
      content:
        "This is first accordion content to make this a long text I am going to copy and paste saveral time 😁.This is first accordion content to make this a long text I am going to copy and paste saveral time 😁.This is first accordion content to make this a long text I am going to copy and paste saveral time 😁.",
    },
    {
      id: "10002",
      header: "Wow, this is second accordion header!!",
      content:
        "This is second accordion content to make this a long text I am going to copy and paste saveral time 😁.This is second accordion content to make this a long text I am going to copy and paste saveral time 😁.This is second accordion content to make this a long text I am going to copy and paste saveral time 😁.",
    },
    {
      id: "10003",
      header: "Wow, this is third accordion header!!",
      content:
        "This is third accordion content to make this a long text I am going to copy and paste saveral time 😁.This is third accordion content to make this a long text I am going to copy and paste saveral time 😁.This is third accordion content to make this a long text I am going to copy and paste saveral time 😁.",
    },
  ];
  return (
    <div>
      <Accordion items={accordionArr} />
    </div>
  );
};

export default AccourdionPages;
