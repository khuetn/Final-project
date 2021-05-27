import React, { Component } from "react";
import Slider from "react-slick";
import "./Slidenew.scss";
import "./Slide.css";
function Slidenew(props) {
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
    <>
      {props.product ? (
        <div>
          <h2>Custom Paging</h2>
          <Slider {...settings}>
            <div className="img__list col-6">
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
        </div>
      ) : (
        <>Loading</>
      )}
    </>
  );
}

export default Slidenew;
