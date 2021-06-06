import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./ModalLogin.scss";
import { Modal, Button } from "antd";

export default function ModalLogin(props) {
  return (
    <>
      <Modal
        title="You need login to buy"
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      ></Modal>
    </>
  );
}
// ReactDOM.render(<App />, document.getElementById("container"));
