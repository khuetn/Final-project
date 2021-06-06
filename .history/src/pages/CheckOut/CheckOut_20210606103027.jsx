import React from "react";
import "./Checkout.scss";
import { ROUTES } from "../../constants/routes";

const CheckOut = () => {
  return (
    <div className="container mt-100 checkout__page">
      <div className="checkout__thankyou">Thank you for your buying</div>
      <span>Your order will be shipped soon.</span>
      <span> Click here to continue shopping</span>
    </div>
  );
};

export default CheckOut;
