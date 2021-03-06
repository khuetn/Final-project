// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
import { BsReverseBackspaceReverse } from "react-icons/bs";
import React, { useState } from "react";

import "antd/dist/antd.css";

import Modalpayment from "../../components/Modalpayment/Modalpayment.jsx";

//----------------------------------------------------------------
import FirebaseContext from "../../firebase/context";
import "./Cart.scss";
import { NavLink, useHistory } from "react-router-dom";

//----------------------------------------------------------------

const Cart = () => {
  const { firebase, user } = React.useContext(FirebaseContext);

  // React.useEffect(() => {
  //   getData();
  // }, []);

  // function getData() {
  //   firebase.db
  //     .collection("products")
  //     .get()
  //     .then((snapshot) => {
  //       const dataproducts = snapshot.docs.map((doc) => {
  //         return { id: doc.id, ...doc.data() };
  //       });

  //       console.log(dataproducts);
  //     });
  // }

  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.cart
  );
  console.log(products);
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
                        {currencyFormatter.format(product.discountPrice, {
                          code: "USD",
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
                        {currencyFormatter.format(
                          product.discountPrice * product.quantity,
                          { code: "USD" }
                        )}
                      </div>
                    </div>
                    <div className="col-2">
                      <div
                        className="cart__remove"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: product.id })
                        }
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
                        {currencyFormatter.format(totalPrice, { code: "USD" })}
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
                      <Modalpayment
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
