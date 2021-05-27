import React from "react";
import "./Contact.scss";
function Contact(props) {
  return (
    <div className="container mt-100">
      <div className="contact__header">
        <div className="contact__title">customer service</div>
        <p>
          We appreciate your time and strive to quickly and accurately provide
          answers to your questions.
        </p>
      </div>
      <div className="contact__body">
        <div className="contact__item">
          <div className="item__title">online shop support</div>
          <p>For information regarding online orders or our Online Shop:</p>
        </div>
      </div>
      Contact
    </div>
  );
}

export default Contact;
