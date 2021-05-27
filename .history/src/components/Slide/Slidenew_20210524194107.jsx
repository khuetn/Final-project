import React, { Component } from "react";
import Slider from "react-slick";

function Slidenew(props) {
  console.log(props.product.poster[0]);
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={props.product.poster[i + 1]} />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Custom Paging</h2>
      <Slider {...settings}>
        <div>
          <img src="http://res.cloudinary.com/phuockaito/image/upload/v1607345366/poster/oqekdynzrgpggrzvokgr.jpg" />
        </div>
        <div>
          <img src={props.product.poster[0]} />
        </div>
        <div>
          <img src={props.product.poster[1]} />
        </div>
        <div>
          <img src={props.product.poster[2]} />
        </div>
        <div>
          <img src={props.product.poster[3]} />
        </div>
      </Slider>
    </div>
  );
}

export default Slidenew;
