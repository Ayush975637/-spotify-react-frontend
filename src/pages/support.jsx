import React from 'react';
import { Container, Row, Col, Card, Button,Form } from 'react-bootstrap';
const Support = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card bg="dark" text="white" className="p-4">
            <h2 className="text-center mb-4">Support Center</h2>
            
            <Row className="g-4 mb-4">
              <Col md={6}>
                <Card bg="secondary" text="white" className="h-100 p-3">
                  <h4>FAQs</h4>
                  <ul>
                    <li>How to reset password</li>
                    <li>Subscription issues</li>
                    <li>Audio quality problems</li>
                  </ul>
                </Card>
              </Col>
              <Col md={6}>
                <Card bg="secondary" text="white" className="h-100 p-3">
                  <h4>Contact Us</h4>
                  <p>Email: support@sangeet.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                </Card>
              </Col>
            </Row>
            
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Issue Type</Form.Label>
                <Form.Select>
                  <option>Account</option>
                  <option>Payment</option>
                  <option>Technical</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>
              
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              
              <Button variant="success" type="submit">
                Submit Request
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Support;