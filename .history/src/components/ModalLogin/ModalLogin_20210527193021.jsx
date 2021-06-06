import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./ModalLogin.scss";
import { Modal, Button } from "antd";

const ModalLogin = (props) => {
  //   const [isModalVisible, setIsModalVisible] = useState(false);

  //   const showModal = () => {
  //     setIsModalVisible(true);
  //   };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};
export default ModalLogin;
// ReactDOM.render(<App />, document.getElementById("container"));
