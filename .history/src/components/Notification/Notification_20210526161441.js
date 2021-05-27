import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./Notification.scss";
import { Button, notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";

const openNotification = () => {
  notification.open({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    icon: <SmileOutlined style={{ color: "#108ee9" }} />,
  });
};

export { openNotification };

// ReactDOM.render(
//   <Button type="primary" onClick={openNotification}>
//     Open the notification box
//   </Button>,
//   document.getElementById("container")
// );
