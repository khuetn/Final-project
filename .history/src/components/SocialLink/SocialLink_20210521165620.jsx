import React from "react";
import "./SocialLink.scss";
import radiusIcon from "../../assets/images/radius.png";
function SocialLink(props) {
  return (
    <div className="social-link">
      <div className="social-link__left">
        <p>Lorem ipsum dolor sit amet, consectet</p>
      </div>
      <div className="social-link__right">
        <div className="social-link__item">
          <a href="#">
            <span></span>
          </a>
          <div className="">
            <img src={radiusIcon} alt="radius" />
          </div>
          <div className="border-cross">
            <p className="subcribed-number">1.5K</p>
          </div>
        </div>
        <div className="social-link__item"></div>
        <div className="social-link__item"></div>
        <div className="social-link__item"></div>
      </div>
    </div>
  );
}

export default SocialLink;
