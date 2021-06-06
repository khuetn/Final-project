import React from "react";
import "./Checkout.scss";
import { ROUTES } from "../../constants/routes";
import {
  Link,
  NavLink,
  useHistory,
  withRouter,
  useLocation,
} from "react-router-dom";
const CheckOut = () => {
  return (
    <div className="container mt-100 checkout__page">
      <div className="checkout__thankyou">Thank you for your buying</div>
      <span>Your order will be shipped soon.</span>
      <span>
        Click
        <NavLink to={ROUTES.HOME}> here </NavLink>
        to continue shopping
      </span>
    </div>
  );
};

export default CheckOut;
