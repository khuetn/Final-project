import { Button, Drawer, Form, Input, InputNumber, Select } from "antd";
import React, { useState } from "react";

export default function Modal(props) {
  const { Option } = Select;
  const { TextArea } = Input;
  const [form] = Form.useForm();

  const dataCity = ["Hà Nội", "Đà Nẵng", "TP HCM"];
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const [city, setCity] = useState("");

  const [district, setDistrict] = useState("");
  const onFinish = (values) => {
    const { city, district, commune, incubation, numberPhome, payment } =
      values;
    alert(values);
  };
  const onClose = () => {
    setVisible(false);
  };
  const onChangeCity = (City) => {
    setCity(City);
  };
  const onChangeDistrict = (District) => {
    setDistrict(District);
  };
  return (
    <div>
      <Drawer
        title="Thông tin nhận hàng"
        width={600}
        placement="right"
        closable={false}
        onClose={props.checkclose}
        visible={props.checkvisible}
      >
        ok
      </Drawer>
    </div>
  );
}
