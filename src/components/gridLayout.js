import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function GridLayout() {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={4} sm={12}>
          <div className="p-3 bg-primary text-white">Column 1</div>
        </Col>
        <Col md={4} sm={12}>
          <div className="p-3 bg-success text-white">Column 2</div>
        </Col>
        <Col md={4} sm={12}>
          <div className="p-3 bg-warning text-white">Column 3</div>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} sm={12}>
          <div className="p-3 bg-info text-white">Column 4</div>
        </Col>
        <Col md={6} sm={12}>
          <div className="p-3 bg-secondary text-white">Column 5</div>
        </Col>
      </Row>
    </Container>
  );
}

export default GridLayout;
