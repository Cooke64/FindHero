import React from "react";
import cls from "./Select.module.css";

export default function Select({ options, defaultValue, value, onChange }) {
  return (
    <div className="">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="" disabled>
          {defaultValue}
        </option>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.text}
          </option>
        ))}
      </select>
    </div>
  );
}
