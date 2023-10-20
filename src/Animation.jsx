import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Animation = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="travel1.jpeg" alt="Image 1" />
      </div>
      <div>
        <img src="travel2.jpeg" alt="Image 2" />
      </div>
      <div>
        <img src="travel3.jpeg" alt="Image 3" />
      </div>
    </Slider>
  );
};

export default Animation;
