// components/Premium.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
const Premium = () => {
  const plans = [
    {
      name: "Individual",
      price: "$9.99",
      features: [
        "Ad-free music listening",
        "Download to listen offline",
        "Play any track",
        "High quality audio"
      ]
    },
    {
      name: "Duo",
      price: "$12.99",
      features: [
        "2 Premium accounts",
        "Ad-free music listening",
        "Download to listen offline",
        "Duo Mix: a playlist for two"
      ]
    },
    {
      name: "Family",
      price: "$15.99",
      features: [
        "Up to 6 accounts",
        "Block explicit music",
        "Ad-free music listening",
        "Family Mix: a playlist for your family"
      ]
    }
  ];

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <h2 className="text-center text-white mb-5">Choose Your Premium</h2>
          
          <Row className="g-4">
            {plans.map((plan, index) => (
              <Col key={index} md={4}>
                <Card bg={index === 1 ? "success" : "dark"} text="white" className="h-100">
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="text-center">{plan.name}</Card.Title>
                    <Card.Subtitle className="mb-3 text-center fs-3">{plan.price}/month</Card.Subtitle>
                    
                    <ul className="mb-4">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    
                    <Button 
                      variant={index === 1 ? "dark" : "success"} 
                      className="mt-auto"
                      size="lg"
                    >
                      Get {plan.name}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Premium;