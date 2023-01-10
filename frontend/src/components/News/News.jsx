import React from "react";
import NewsBlock from "components/NewsBlock/NewsBlock";
import api from "api/api";
import "./News.css";

export default function News() {
  const [news, setNews] = React.useState([]);


  const fetchLastFourItems = () => {
    api.getLastFourItems().then((res) => {
      setNews(res);
    });
  };


  React.useEffect(() => {
    fetchLastFourItems();
  }, []);
  
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
