import { Modal } from "antd";
import "antd/dist/antd.css";
import React from "react";
import "./ModalLogin.scss";

export default function ModalLogin(props) {
  return (
    <>
      <Modal
        // title="You aren't logging"
        visible={props.isModalVisible}
        onOk={props.handleOk}
        onCancel={props.handleCancel}
      >
        <p>You aren't logging. Please login to buy</p>
      </Modal>
    </>
  );
}
// ReactDOM.render(<App />, document.getElementById("container"));
