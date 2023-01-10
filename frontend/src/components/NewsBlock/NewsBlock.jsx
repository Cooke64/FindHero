import React from "react";
import { useParams, Link, useNavigate } from 'react-router-dom'

export default function NewsBlock({ item }) {
  console.log(item)
  return (
    <div className="news_column _shadow">
      <div className="news_item">
        <div className="news_content">
          <div className="news_item_title">
            <Link to={`/news/${item.pk}`} className="news_item_link">
              {item.title}
            </Link>
          </div>
          <div className="news_item_preview">
            <p>{item.preview}</p>
          </div>
        </div>
        <Link to={`/news/${item.pk}`} className="news_item_link">
          <img src={item.img || '"https://placehold.co/600x400"'} alt={item.title} />
        </Link>
      </div>
    </div>
  );
}
