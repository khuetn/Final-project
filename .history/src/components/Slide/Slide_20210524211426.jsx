import React, { useEffect, useState, Component } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../redux/actions/Products";

import Slider from "react-slick";
import "../Slide/Slide.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpinLoading from "../Spin/SpinLoading";
import Loading from "../Loading/loading";

//----------------------------------------------------------------
import FirebaseContext from "../../firebase/context";

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
