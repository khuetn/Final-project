import { Button, Drawer, Form, Input, InputNumber, Select } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { ROUTES } from "../../constants/routes";
import { useHistory, useParams } from "react-router-dom";
import "./Modalpaymentnew.scss";
import FirebaseContext from "../../firebase/context";

export default function Modal(props) {
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.cart
  );
  const { firebase, user } = React.useContext(FirebaseContext);

  const history = useHistory();

  const onFinish = (values) => {
    // const { city, district, commune, incubation, numberPhome, payment } =
    //   values;
    history.push({
      pathname: ROUTES.CHECKOUT,
    });
  };
  return (
    <div>
      <Drawer
        // title="Thông tin nhận hàng"
        width={600}
        placement="right"
        closable={false}
        onClose={props.checkclose}
        visible={props.checkvisible}
      >
        <div className="checkout__container">
          <div className="checkout__title">Thông tin đơn hàng</div>

          <div className="checkout__listItem">
            <div className="checkout__listTitle">
              <span>STT</span>
              <span>Tên sản phẩm</span>
              <span>Số lượng</span>
              <span>Giá</span>
            </div>
            {products.map((product, index) => {
              return (
                <div className="checkout__item">
                  <span className="checkout__index">{index + 1}</span>
                  <span className="checkout__productName">{product.name}</span>
                  <span className="checkout__productQuantity">
                    {product.quantity}
                  </span>
                  <span className="checkout__productPrice">
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
                  </span>
                </div>
              );
            })}
            <div className="checkout__totalBill">
              <span>Tổng cộng</span>
              <span>
                {currencyFormatter.format(totalPrice, {
                  code: "VND",
                })}
              </span>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}