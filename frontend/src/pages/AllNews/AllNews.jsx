import React from "react";
import "./AllNews.css";
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
  ]);
  React.useEffect(() => {
    // api.getPostList().then((res) => {
    //   setNewsItems([...newsItems, ...res]);
    // });
  }, newsItems);

  return (
    <>
      {newsItems.length ? (
        <AllNewsList newsItems={newsItems} />
      ) : (
        <h2 className="title_block" style={{textAlign:'center', marginTop:'30px'}}>Записей нет</h2>
      )}
    </>
  );
}
