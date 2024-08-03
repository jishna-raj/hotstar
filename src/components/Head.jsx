import React from "react";
import { Row, Col } from "react-bootstrap";
import Header from "./Header";
import Welcome from "./Welcome";

function Navbar() {
  return (
    <>
      <Row>
        <Col
          md={1}
          style={{
            position: "absolute",
            padding: "25px",
            width: "50%",
            zIndex: 1000,
          }}
        >
          <Header />
        </Col>
        <Col md={11}>
          <Welcome />
        </Col>
      </Row>
    </>
  );
}

export default Navbar;
