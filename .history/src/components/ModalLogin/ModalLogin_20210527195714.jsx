import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./ModalLogin.scss";
import { Modal, Button } from "antd";

export default function ModalLogin(props) {
  return (
    <>
      <Modal
        title="You aren't logging"
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <p>Please login to buy</p>
      </Modal>
    </>
  );
}
// ReactDOM.render(<App />, document.getElementById("container"));
