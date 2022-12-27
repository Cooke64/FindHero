import React from "react";
import "./Accordion.css";

export default function Accordion({title, content}) {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <>
      <div className="accordion-item _shadow">
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div>{title}</div>
          <div className="open_close_item">{isActive ? "-" : "+"}</div>
        </div>
        {isActive && <div className="accordion-content">{content}</div>}
      </div>
    </>
  );
}
