// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";
import React, { useState } from "react";

import "antd/dist/antd.css";

import Modalpaymentnew from "../../components/Modalpayment/Modalpaymentnew.jsx";

//----------------------------------------------------------------
import FirebaseContext from "../../firebase/context";
import "./Cart.scss";
import { NavLink, useHistory } from "react-router-dom";
import { openNotification } from "../../components/Notification/Notification";

//----------------------------------------------------------------

const Cart = () => {
  const { firebase, user } = React.useContext(FirebaseContext);

  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.cart
  );
  console.log(products);
  console.log(totalQuantities);
  console.log(totalPrice);
  const dispatch = useDispatch();
  //drawer

  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  //-----------------------------
  return (
    <div className="cart">
      <div className="container">
        <h3>{products.length > 0 ? "Your cart" : "Shopping cart is empty"}</h3>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-9">
                <div className="cart__heading">
                  <div className="row">
                    <div className="col-2">Picture</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">Total Price</div>
                    <div className="col-2">Remove</div>
                  </div>
                </div>
                {products.map((product) => (
                  <div className="row verticalAlign" key={product.id}>
                    <div className="col-2">
                      <div className="cart__image">
                        <img src={product.poster[0].url} alt="" />
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__name">{product.name}</div>
                    </div>
                    <div className="col-2">
                      <div className="cart__price">
                        {product.discount
                          ? currencyFormatter.format(
                              (product.price * (100 - product.discount)) / 100,
                              {
                                code: "VND",
                              }
                            )
                          : currencyFormatter.format(product.price, {
                              code: "VND",
                            })}
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="details__info cart__incDec">
                        <div className="details__incDec">
                          <span
                            className="dec"
                            onClick={() =>
                              dispatch({ type: "DEC", payload: product.id })
                            }
                          >
                            <BsDash />
                          </span>
                          <span className="quantity">{product.quantity}</span>
                          <span
                            className="inc"
                            onClick={() =>
                              console.log(product.id)
                              dispatch({ type: "INC", payload: product.id })
                            }
                          >
                            <BsPlus />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__total text-center">
                        {product.discount
                          ? currencyFormatter.format(
                              ((product.price * (100 - product.discount)) /
                                100) *
                                product.quantity,
                              { code: "VND" }
                            )
                          : currencyFormatter.format(
                              product.price * product.quantity,
                              { code: "VND" }
                            )}
                      </div>
                    </div>
                    <div className="col-2">
                      <div
                        className="cart__remove"
                        onClick={() => {
                          dispatch({ type: "REMOVE", payload: product.id });
                          openNotification({
                            title: "Your item was deleted",
                          });
                        }}
                      >
                        <BsReverseBackspaceReverse />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-3 summary-col">
                <div className="summary">
                  <div className="summary__heading">Summary</div>
                  <div className="summary__details">
                    <div className="row mb-10">
                      <div className="col-6">Total Items:</div>
                      <div className="col-6">{totalQuantities}</div>
                    </div>
                    <div className="row mb-10">
                      <div className="col-6">Total Price</div>
                      <div className="col-6">
                        {currencyFormatter.format(totalPrice, { code: "VND" })}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="checkout"
                      onClick={showDrawer}
                    >
                      check out
                      <div></div>
                    </button>
                    <div className="group-check-out">
                      <Modalpaymentnew
                        checkclose={onClose}
                        checkvisible={visible}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <p>You have no items in your shopping cart.</p>
            <p>
              Click
              <NavLink to="/"> here </NavLink>
              to continue shopping
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
