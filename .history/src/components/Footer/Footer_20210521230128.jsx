import React from "react";
import "./Footer.scss";
function Footer(props) {
  return (
    <div className="row">
      <div className="footer">
        <div className="footer__top">
          <div className="top__item">
            <img src="" alt="" />
            <span>Free delivery on all orders over £100*</span>
          </div>
          <div className="top__item"></div>
          <div className="top__item"></div>
        </div>
        <div className="container">
          <div className="footer__middle">middle</div>
          <div className="footer__bottom">bottom</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
