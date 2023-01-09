import React from "react";
import "./AllNews.css";
import { useNewsItems } from "hooks/useNewsItems";
import AllNewsList from "./AllNewsList";
import api from "api/api";
import CustomSpinner from "components/UI/CustomSpinner/CustomSpinner";
import { Pagination } from "@mui/material";
import { useState, useEffect, useRef } from "react";

const getAmountPages = (totalItems, limit) => {
  return Math.ceil(totalItems / limit);
};

export default function AllNews() {
  const [newsItems, setNewsItems] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedSelectedPosts = useNewsItems(
    newsItems,
    filter.sort,
    filter.query
  );
  const [isLoading, setIsLoading] = useState(true);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);


  const fetchPost = () => {
    api.getPostList(limit, page).then((res) => {
      setNewsItems(res);
      setIsLoading(false);
    });
  };

  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };


  useEffect(() => {
    fetchPost();
  }, [page]);

  const handleChange = (event, value) => {
    setPage(value);
    handlerScrollUp();
  };

  return (
    <>
      {isLoading ? (
        <CustomSpinner />
      ) : (
        <>
          <AllNewsList
            sortedSelectedPosts={sortedSelectedPosts}
            filter={filter}
            setFilter={setFilter}
          />
          <div className="pagination_block">
            <Pagination
              count={getAmountPages(100, limit)}
              page={page}
              onChange={handleChange}
              size='large'
            />
          </div>
        </>
      )}
    </>
  );
}
