import React from "react";
import "./AllNews.css";
import { Link } from "react-router-dom";
import api from "api/api";


export default function AllNews() {
  const [newsItems, setNewsItems] = React.useState([]);

  React.useEffect(() => {
    api.getPostList().then((res) => {
      setNewsItems([...newsItems, ...res]);
    });
  }, newsItems.length);

  return (
    <div className="items _container">
      <div className="title_block">
        <h2>Наши новости</h2>
      </div>
      {newsItems.map((item) => (
        <div className="items_item _shadow" key={item.id}>
          <div className="item_img">
            <Link to={`/news/1`} className="news_item_link">
              <img src={item.image_to_show.image_b64} alt="" />
            </Link>
          </div>
          <div className="item_body">
            <div className="item_title">
              <Link to={`/news/1`} className="news_item_link">
                {item.title}
              </Link>
            </div>
            <div className="item_text">{item.preview}</div>

            <div className="item_date">{item.created_at}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
