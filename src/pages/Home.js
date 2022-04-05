import React from "react";
import { Row, Image, Col, Divider, Button } from "antd";
import "../css/common.css";
import "../css/index.css";
import mainImg from "../img/main-home.jpg";
function Home(props) {
  document.title= `${props.title}`
  return (
    <>
    <section className="bannerSection pb-md-5 pb-3">
        <Row className="container-xl py-5 ">
          <Col sm={24} md={12} className="m-auto">
            <div className="w-90 m-auto border-radius-10 overflow-hidden">
              <Image src={mainImg} />
            </div>
          </Col>
          <Col sm={24} md={12} className="m-auto">
            <div className="d-flex justify-content-center py-md-3 pt-5 px-2 align-items-center flex-column">
              <h2 className="mb-3">Applocum</h2>
              <h5 className="mb-2">Healthcare Staffing Solutions</h5>
              <p className="text-center">
                Connecting the world of healthcare through technology, supported
                by people that care
              </p>
              <Button
                type="link"
                href="https://www.applocum.com/"
                className="customBtn mt-3 "
                shape="round"
              >
                Visit Applocum
              </Button>
            </div>
          </Col>
        </Row>
        <Divider />
    </section>
    </>
  );
}

export default Home;
