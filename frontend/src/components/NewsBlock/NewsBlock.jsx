import React from "react";
import { Link } from "react-router-dom";

export default function NewsBlock({item}) {


  return (
    <div className="news_column _shadow">
      <div className="news_item">
        <div className="news_content">
          <div className="news_item_title">
            <Link to={`/news/1`} className="news_item_link">
              {item.title}
            </Link>
          </div>
          <div className="news_item_preview">
            <p>{item.preview}</p>
          </div>
        </div>
        <a href="/" className="news_item_img _ibg">
          <img src={item.img} alt={item.title} />
        </a>
      </div>
    </div>
  );
}
