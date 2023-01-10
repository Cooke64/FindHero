import React from "react";
import { Link } from "react-router-dom";

export default function AllNewsItem({ item }) {
  return (
    <div className="items_item _shadow">
      <div className="item_img">
        <Link to={`/news/1`} className="news_item_link">
          <img src={item?.image_to_show?.image_b64 || 'https://noblebuble.ru/image/cache/catalog/Photo_Articles/no-photo-350x200.png'} alt="" />
        </Link>
      </div>
      <div className="item_body">
        <div className="item_title">
          <Link to={`/news/1`} className="news_item_link">
            {item.title}
          </Link>
        </div>
        <div className="item_text">{item?.preview}</div>
        <div className="item_date">{item?.created_at}</div>
      </div>
    </div>
  );
}
