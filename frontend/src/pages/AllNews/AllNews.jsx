import React from "react";
import "./AllNews.css";
import CustomSpinner from "components/UI/CustomSpinner/CustomSpinner";
import { useNewsItems } from "hooks/useNewsItems";
import AllNewsList from "./AllNewsList";
import api from "api/api";

export default function AllNews() {
  const [newsItems, setNewsItems] = React.useState([
    {
      id: 1,
      title: "lorem",
      image_to_show: {
        image_b64:
          "https://noblebuble.ru/image/cache/catalog/Photo_Articles/no-photo-350x200.png",
      },
      preview: " lorem",
      created_at: "01.01.01",
    },
    {
      id: 2,
      title: "aaaaa",
      image_to_show: {
        image_b64:
          "https://noblebuble.ru/image/cache/catalog/Photo_Articles/no-photo-350x200.png",
      },
      preview: " lorem",
      created_at: "01.02.01",
    },
    {
      id: 3,
      title: "zzzzzzz",
      image_to_show: {
        image_b64:
          "https://noblebuble.ru/image/cache/catalog/Photo_Articles/no-photo-350x200.png",
      },
      preview: " lorem",
      created_at: "01.03.01",
    },
  ]);

  const [filter, setFilter] = React.useState({ sort: "", query: "" });
  const sortedSelectedPosts = useNewsItems(
    newsItems,
    filter.sort,
    filter.query
  );

  const [isItemLoading, setIsItemLoading] = React.useState(false);

  const fetchItems = () => {
    setIsItemLoading(true);
    api.getPostList().then((res) => {
      setNewsItems([...newsItems, ...res]);
    });
    setIsItemLoading(false);
  };

  
  React.useEffect(() => {
    fetchItems()
  }, []);

  if (isItemLoading) {
    return <CustomSpinner />
  }
  return (
    <AllNewsList
      sortedSelectedPosts={sortedSelectedPosts}
      filter={filter}
      setFilter={setFilter}
    />
  );
}
