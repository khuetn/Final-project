import { notification } from "antd";
import "antd/dist/antd.css";
import React from "react";
import { AiOutlineNotification } from "react-icons/ai";
import "./Notification.scss";
const openNotification = (text) => {
  notification.open({
    message: text.title,
    description: text.description,
    duration: 1.5,
    icon: <AiOutlineNotification />,
    // <SmileOutlined style={{ color: "#108ee9" }} />
    className: "notification",
  });
};

export { openNotification };
