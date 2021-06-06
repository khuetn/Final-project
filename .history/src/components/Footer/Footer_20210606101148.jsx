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
          <div className="container">
            <div className="top__item">
              <img src={freeShipIcon} alt="" />
              <span>Free delivery on all orders over £100*</span>
            </div>
            <div className="top__item">
              <img src={contactIcon} alt="" />
              <span>Customer Service : </span>
              <span className="orange"> (800) 000-2587 (freephone)</span>
            </div>
            <div className="top__item">
              <img src={stickIcon} alt="" />
              <span>Fast delivery & free returns</span>
            </div>
          </div>
        </div>
        <div className="footer__middle">
          <div className="container">
            <div className="middle__left"></div>
            <div className="middle__right">
              SIGN UP FOR EMAIL AND GET 15% OFF
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row footer__bottomWrapper">
              <div className="footer__left">left</div>
              <div className="footer__center">center</div>
              <div className="footer__right">right</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
