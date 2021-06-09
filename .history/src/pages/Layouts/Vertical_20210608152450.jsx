import React, { Suspense } from "react";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Header/Header";
import "./Vertical.css";

const loading = () => <div className="text-center" />;

const VerticalLayout = (props) => {
  return (
    <div className="app">
      <div id="wrapper">
        <div className="content-page">
          <div className="content">
            <div>
              <Nav />
              <div>
                {/* <div className="box-container"> */}

                {/* <LeftSidebar /> */}
                <Suspense fallback={loading()}>{props.children}</Suspense>
                {/* </div> */}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalLayout;
