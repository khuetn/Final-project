import React from "react";
import "./Footer.scss";
import freeShipIcon from "../../assets/images/f_icon.png";
import contactIcon from "../../assets/images/f_icon1.png";
import stickIcon from "../../assets/images/f_icon2.png";
function Footer(props) {
  return (
    <div className="row">
      <div className="footer mt-100">
        <div className="footer__top">
          <div className="top__item">
            <img src={freeShipIcon} alt="" />
            <span>Free delivery on all orders over £100*</span>
          </div>
          <div className="top__item">
            <img src={contactIcon} alt="" />
            <span>Customer Service :</span>
            <span> (800) 000-2587 (freephone)</span>
          </div>
          <div className="top__item">
            <img src={stickIcon} alt="" />
            <span>Fast delivery & free returns</span>
          </div>
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
