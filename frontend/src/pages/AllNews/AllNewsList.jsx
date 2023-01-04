import React from "react";
import AllNewsItem from "./AllNewsItem";
import Select from "components/UI/Select/Select";

export default function AllNewsList({ newsItems }) {
  const [selectSortedPosts, setselectSortedPosts] = React.useState("");

  const options = [
    { value: "created_at", text: "По дате" },
    { value: "title", text: "По заголовку" },
  ];

  const getSortedPosts = (sort) => {
    setselectSortedPosts(sort)
    console.log(sort);
  };

  return (
    <div className="items _container">
      <div className="title_block">
        <h2>Наши новости</h2>
      </div>
      <Select
        defaultValue={"Сортировать записи по.."}
        options={options}
        value={selectSortedPosts}
        onChange={getSortedPosts}
      />
      {newsItems.map((item) => (
        <AllNewsItem key={item.id} item={item} />
      ))}
    </div>
  );
}
