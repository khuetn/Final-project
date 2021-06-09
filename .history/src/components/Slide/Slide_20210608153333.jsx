import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../Slide/Slide.css";
import SpinLoading from "../Spin/SpinLoading";

//----------------------------------------------------------------
function Slide(props) {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={props.product.poster[i].url} />
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
    <div className="group-image-detail">
      {props.product ? (
        <Slider {...settings}>
          <div>
            <img src={props.product.poster[0].url} />
          </div>
          <div>
            <img src={props.product.poster[1].url} />
          </div>
          <div>
            <img src={props.product.poster[2].url} />
          </div>
          <div>
            <img src={props.product.poster[3].url} />
          </div>
        </Slider>
      ) : (
        <SpinLoading />
      )}
    </div>
  );
}

export default Slide;
