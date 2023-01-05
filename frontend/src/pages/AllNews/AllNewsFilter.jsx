import React from "react";
import Select from "components/UI/Select/Select";


export default function AllNewsFilter({filter, setFilter}) {
  
  const options = [
    { value: "created_at", text: "По дате" },
    { value: "title", text: "По заголовку" },
  ];
  
  return (
    <>
      <div className="news_search">
        <input
          type="text"
          placeholder="Поиск"
          value={filter.query}
          onChange={(e) => setFilter({...filter, query: e.target.value})}
        />
      </div>
      <div className="news_sort">
        <Select
          defaultValue={"Сортировать записи по.."}
          options={options}
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        />
      </div>
    </>
  );
}
