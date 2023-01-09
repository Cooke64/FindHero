import React from "react";
import AllNewsFilter from "./AllNewsFilter";
import AllNewsItem from "./AllNewsItem";

export default function AllNewsList({
  sortedSelectedPosts,
  filter,
  setFilter,
}) {
  return (
    <div className="items _container">
      <div className="title_block">
        <h2>Наши новости</h2>
      </div>
      <div className="filter_block">
        <AllNewsFilter filter={filter} setFilter={setFilter} />
      </div>

      {sortedSelectedPosts.length ? (
        <>
          {sortedSelectedPosts.map((item) => (
            <AllNewsItem key={item.id} item={item} />
          ))}
        </>
      ) : (
        <>
          <div className="title_block">
            <h4 style={{ marginTop: "50px" }}>
              К сожалению нет таких новостей:(
            </h4>
          </div>
        </>
      )}
    </div>
  );
}
