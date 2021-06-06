import { Button, Drawer, Form, Input, InputNumber, Select } from "antd";
import React, { useState } from "react";

export default function Modal(props) {
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
        <h2>Thông tin đơn hàng</h2>
      </Drawer>
    </div>
  );
}
