import { Button, Drawer, Form, Input, InputNumber, Select } from "antd";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";

export default function Modal(props) {
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.cart
  );
  const [form] = Form.useForm();
  const { Option } = Select;

  const onFinish = (values) => {
    const { city, district, commune, incubation, numberPhome, payment } =
      values;
    alert(values);
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
        <h2>Thông tin đơn hàng</h2>
        <div className="checkout__listItem">
          {products.map((product, index) => {
            return (
              <div className="checkout__item">
                <span className="checkout__index">{index + 1}</span>
                <span>{product.name}</span>
                <span>{product.quantity}</span>
                <span>
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
        </div>
        <div className="checkout__totalBill">Tổng cộng : {totalPrice}</div>
        <Form form={form} onFinish={onFinish}>
          <Form.Item
            name="incubation"
            label="Ấp/Số Nhà/Tên Đường"
            rules={[
              {
                required: true,
                message: "Địa chỉ cụ thể !",
              },
            ]}
          >
            <TextArea
              placeholder="địa chỉ cụ thể: ấp, số nhà, tên đường..."
              rows={4}
            />
          </Form.Item>
          <Form.Item
            name="payment"
            label="Thanh toán"
            hasFeedback
            rules={[
              {
                required: true,
                message: "Vui lòng chọn phuong thức thanh toán",
              },
            ]}
          >
            <Select placeholder="Thanh toán khi nhận hàng">
              <Option value="Thanh toán khi nhận hàng">
                Thanh toán khi nhận hàng
              </Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="btn-register">
              Hoàn tất
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}
