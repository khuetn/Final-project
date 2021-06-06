import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./ModalLogin.scss";
import { Modal, Button } from "antd";

export default function ModalLogin(props) {
  //   const [isModalVisible, setIsModalVisible] = React.useState(false);

  //   const showModal = () => {
  //     setIsModalVisible(true);
  //   };

  //   const handleOk = () => {
  //     alert("ok");
  //     setIsModalVisible(false);
  //   };

  //   const handleCancel = () => {
  //     setIsModalVisible(false);
  //   };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}
// ReactDOM.render(<App />, document.getElementById("container"));
