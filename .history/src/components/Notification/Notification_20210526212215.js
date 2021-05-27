import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Notification.scss";
import { Button, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { AiOutlineNotification } from "react-icons/ai";

const openNotification = (text) => {
  notification.open({
    message: text.title,
    description: text.description,
    duration: 1.5,
    icon: <AiOutlineNotification />,
    // <SmileOutlined style={{ color: "#108ee9" }} />
  });
};

export { openNotification };

// ReactDOM.render(
//   <Button type="primary" onClick={openNotification}>
//     Open the notification box
//   </Button>,
//   document.getElementById("container")
// );
