import React from "react";
import "./SocialLink.scss";
import radiusIcon from "../../assets/images/radius.png";
const socialLink = ["facebook", "twitter", "google", "dot"];
function SocialLink(props) {
  return (
    <div className="social-link">
      <div className="social-link__left">
        <p>Lorem ipsum dolor sit amet, consectet</p>
      </div>
      <div className="social-link__right">
        <div className="social-link__item">
          <a href="#">
            <span className="facebook"></span>
          </a>
          <div className="radius">
            <img src={radiusIcon} alt="radius" />
          </div>
          <div className="border-cross">
            <p className="subcribed-number">1.5K</p>
          </div>
        </div>
        {/* {socialLink.map((item) => {
          return (
            <>
              <div className="social-link__item">
                <a href="#">
                  <span className={item}></span>
                </a>
                <div className="radius">
                  <img src={radiusIcon} alt="radius" />
                </div>
                <div className="border-cross">
                  <p className="subcribed-number">1.5K</p>
                </div>
              </div>
            </>
          );
        })} */}
      </div>
    </div>
  );
}

export default SocialLink;
