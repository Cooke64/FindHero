import React from "react";
import { Link } from "react-router-dom";

import "./News.css";


export default function News() {
  return (
    <div className="_container" id="news">
      <div className="title_block">
          <h2>Последние новости</h2>
        </div>
      <div className='news_body'>
        <div className='news_column _shadow'>
          <div className='news_item'>
            <div className='news_content'>
              <div className='news_item_title'>
              <Link to={`/news/1`} className='news_item_link'>Lorem ipsum dolor sit.</Link>
              </div>
              <div className='news_item_preview'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, impedit.</p>
              </div>
            </div>
            <a href="/" className="news_item_img _ibg">
              <img
                src="https://noblebuble.ru/image/cache/catalog/Photo_Articles/no-photo-350x200.png"
                alt="Заголовок"
              />
            </a>
          </div>
        </div>
        <div className='news_column _shadow'>
          <div className='news_item'>
            <div className='news_content'>
              <div className='news_item_title'>
              <Link to={`/news/1`} className='news_item_link'>Lorem ipsum dolor sit.</Link>
              </div>
              <div className='news_item_preview'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, impedit.</p>
              </div>
            </div>
            <a href="/" className="news_item_img _ibg">
              <img
                src="https://noblebuble.ru/image/cache/catalog/Photo_Articles/no-photo-350x200.png"
                alt="Заголовок"
              />
            </a>
          </div>
        </div>
        <div className='news_column _shadow'>
          <div className='news_item'>
            <div className='news_content'>
              <div className='news_item_title'>
              <Link to={`/news/1`} className='news_item_link'>Lorem ipsum dolor sit.</Link>
              </div>
              <div className='news_item_preview'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, impedit.</p>
              </div>
            </div>
            <a href="/" className="news_item_img _ibg">
              <img
                src="https://noblebuble.ru/image/cache/catalog/Photo_Articles/no-photo-350x200.png"
                alt="Заголовок"
              />
            </a>
          </div>
        </div>
        <div className='news_column _shadow'>
          <div className='news_item'>
            <div className='news_content'>
              <div className='news_item_title'>
              <Link to={`/news/1`} className='news_item_link'>Lorem ipsum dolor sit.</Link>
              </div>
              <div className='news_item_preview'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, impedit.</p>
              </div>
            </div>
            <a href="/" className="news_item_img _ibg">
              <img
                src="https://noblebuble.ru/image/cache/catalog/Photo_Articles/no-photo-350x200.png"
                alt="Заголовок"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
