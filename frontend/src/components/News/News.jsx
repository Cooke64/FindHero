import React from "react";
import NewsBlock from "components/NewsBlock/NewsBlock";

import "./News.css";

export default function News() {
  const [news, setNews] = React.useState([
    {
      title: "Lorem ipsum dolor sit",
      preview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, impedit.",
      img: "https://noblebuble.ru/image/cache/catalog/Photo_Articles/no-photo-350x200.png",
    },
    {
      title: "Lorem ipsum dolor sit",
      preview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, impedit.",
      img: "https://noblebuble.ru/image/cache/catalog/Photo_Articles/no-photo-350x200.png",
    },
    {
      title: "Lorem ipsum dolor sit",
      preview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, impedit.",
      img: "https://noblebuble.ru/image/cache/catalog/Photo_Articles/no-photo-350x200.png",
    },
    {
      title: "Lorem ipsum dolor sit",
      preview:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, impedit.",
      img: "https://noblebuble.ru/image/cache/catalog/Photo_Articles/no-photo-350x200.png",
    },
  ]);

  return (
    <div className="_container" id="news">
      <div className="title_block">
        <h2>Наши новости</h2>
      </div>
      <div className="news_body">
        {news.map((item) => (
          <NewsBlock item={item} />
        ))}
      </div>
    </div>
  );
}
