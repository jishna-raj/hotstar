import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from './Header';
import Welcome from './Welcome';


function Navbar() {
    return (
      <>
         <Row>
          <Col md={1}>
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
  