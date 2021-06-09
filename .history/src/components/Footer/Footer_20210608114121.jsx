import React from "react";
import "./Footer.scss";
import freeShipIcon from "../../assets/images/f_icon.png";
import contactIcon from "../../assets/images/f_icon1.png";
import stickIcon from "../../assets/images/f_icon2.png";
import { ROUTES } from "../../constants/routes";
import {
  Link,
  NavLink,
  useHistory,
  withRouter,
  useLocation,
} from "react-router-dom";
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
              <NavLink>SIGN UP FOR EMAIL AND GET 15% OFF</NavLink>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="container">
            <div className="row footer__bottomWrapper">
              <div className="footer__item">
                <div className="footer__title">for</div>
                <ul>
                  <li>men</li>
                  <li>women</li>
                  <li>kid</li>
                  <li>customise</li>
                </ul>
              </div>
              <div className="footer__item">
                <div className="footer__title">sport</div>
                <ul>
                  <li>football</li>
                  <li>basketball</li>
                  <li>Goft</li>
                  <li>Running</li>
                </ul>
              </div>
              <div className="footer__item">
                <div className="footer__title">producd types</div>
                <ul>
                  <li>football</li>
                  <li>basketball</li>
                  <li>Goft</li>
                  <li>Running</li>
                </ul>
              </div>
              <div className="footer__item">
                <div className="footer__title">support</div>
                <ul>
                  <li>ordering</li>
                  <li>shipping</li>
                  <li>returning</li>
                  <li>payment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
