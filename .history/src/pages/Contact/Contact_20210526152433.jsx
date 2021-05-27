import React from "react";
import "./Contact.scss";
import { FaFacebookF } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

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
        <div className="contact__item">
          <div className="item__title">how to place an order</div>
          <p>
            If you are looking to enquire on how to order, please click here
          </p>
        </div>
      </div>
      <div className="contact__link">
        <div className="link__group">
          <div className="link__img">
            <FaFacebookF style={{ fontSize: "25px" }} />
          </div>
          <div className="link__content">
            <div className="link__title">facebook</div>
            <p>
              Use the private message option to contact our support team. Mon to
              Friday (excluding Public Holidays): 9am to 6pm. Saturday: 9am to
              6pm.
            </p>
          </div>
        </div>
        <div className="link__group">
          <div className="link__img">
            <AiFillMessage style={{ fontSize: "25px", color: "blue" }} />
          </div>
          <div className="link__content">
            <div className="link__title">live chat</div>
            <p>
              Look out for this icon on the bottom right of your screen.
              <br />
              *Available when our customer service agents are not attending to
              other customers <br /> Mon to Friday (excluding Public Holidays):
              9am to 6pm Saturday: 9am to 6pm
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
