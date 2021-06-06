import { Button, Drawer, Form, Input, InputNumber, Select } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Modal(props) {
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.cart
  );
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
        <h2>Thông tin đơn hàng</h2>
        <div className="checkout__listItem">
          {products.map((product, index) => {
            return (
              <div className="checkout__item">
                <span>{product.name}</span>
                <span>{product.quantity}</span>
              </div>
            );
          })}
        </div>
      </Drawer>
    </div>
  );
}
