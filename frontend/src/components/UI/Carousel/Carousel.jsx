import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default function Carousel({images}) {


  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ],
    
  };

  return (
    <div className="_container">
      <div className="title_block title_carousel slider_about">
        <h2>Наша активность</h2>
      </div>
      <div className="slider_about _shadow">
        <Slider {...settings}>
        
          {images.map((img) => (
            <div className="slick-slide" key={img}>
              <img src={img} alt="" />
            </div>
          ))}
          
        </Slider>
      </div>
    </div>
  );
}
