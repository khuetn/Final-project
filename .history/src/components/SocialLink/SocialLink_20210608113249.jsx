import React from "react";
import "./SocialLink.scss";
import radiusIcon from "../../assets/images/radius.png";
// const socialLink = ["facebook", "twitter", "google", "dot"];
const socialLInk = {
  facebook: "http://facebook.com",
  twitter: "http://twitter.com",
  google: "http://google.com",
  dot: "#",
};

function SocialLink(props) {
  return (
    <div className="social-link">
      <div className="social-link__left">
        <p>Visit our fanpage on </p>
      </div>
      <div className="social-link__right">
        {Object.keys(socialLInk).map((item) => {
          console.log(item);

          return (
            <>
              <div className="social-link__item">
                <a href={socialLInk[item]}>
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
        })}
      </div>
    </div>
  );
}

export default SocialLink;