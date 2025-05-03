import React from 'react';
import { Container, Row, Col, Card, Accordion, Badge } from 'react-bootstrap';
import { motion } from 'framer-motion';
import teamMembers from '../data/team'; // You'll create this file

const About = () => {
  const features = [
    {
      title: "Music Discovery",
      description: "Find new music tailored to your taste with our advanced recommendation algorithms.",
      icon: "🎵"
    },
    {
      title: "High Quality Audio",
      description: "Stream your favorite songs in crystal clear quality with our premium audio codecs.",
      icon: "🔊"
    },
    {
      title: "Cross-Platform Sync",
      description: "Seamlessly switch between devices without missing a beat.",
      icon: "🔄"
    },
    {
      title: "Offline Listening",
      description: "Download your playlists and listen without an internet connection.",
      icon: "📱"
    }
  ];

  const faqs = [
    {
      question: "How does the music recommendation work?",
      answer: "Our system analyzes your listening habits and compares them with millions of other users to suggest music you'll love."
    },
    {
      question: "Is my payment information secure?",
      answer: "Absolutely! We use industry-standard encryption and never store your full payment details on our servers."
    },
    {
      question: "Can I share my account with family?",
      answer: "With our Family Premium plan, up to 6 people can enjoy separate accounts under one subscription."
    }
  ];

  return (
    <Container className="py-5 about-page">
      {/* Hero Section */}
      <Row className="justify-content-center mb-5">
        <Col md={10} className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white mb-3"
          >
            About Spotify Clone
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="lead text-muted"
          >
            Revolutionizing the way you experience music since 2023
          </motion.p>
        </Col>
      </Row>

      {/* Features Section */}
      <Row className="mb-5 g-4">
        <Col md={12}>
          <h3 className="text-white mb-4">Why Choose Us</h3>
        </Col>
        {features.map((feature, index) => (
          <Col key={index} md={3} sm={6}>
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card bg="dark" text="white" className="h-100 feature-card">
                <Card.Body className="text-center">
                  <div className="feature-icon mb-3" style={{ fontSize: '2rem' }}>
                    {feature.icon}
                  </div>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>

      {/* Stats Section */}
      <Row className="mb-5 py-4 stats-section">
        <Col md={3} className="text-center">
          <h2 className="text-success">10M+</h2>
          <p className="text-muted">Active Users</p>
        </Col>
        <Col md={3} className="text-center">
          <h2 className="text-success">50M+</h2>
          <p className="text-muted">Songs Available</p>
        </Col>
        <Col md={3} className="text-center">
          <h2 className="text-success">150+</h2>
          <p className="text-muted">Countries</p>
        </Col>
        <Col md={3} className="text-center">
          <h2 className="text-success">24/7</h2>
          <p className="text-muted">Support</p>
        </Col>
      </Row>

      {/* Team Section */}
      <Row className="mb-5">
        <Col md={12}>
          <h3 className="text-white mb-4">Meet The Team</h3>
        </Col>
        {teamMembers.map((member, index) => (
          <Col key={index} md={3} sm={6} className="mb-4">
            <Card bg="dark" text="white" className="team-card">
              <Card.Img variant="top" src={member.image} />
              <Card.Body>
                <Card.Title>{member.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                <div className="social-links mt-2">
                  {member.social.map((social, i) => (
                    <a key={i} href={social.url} className="text-white me-2">
                      <i className={`bi bi-${social.platform}`}></i>
                    </a>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* FAQ Section */}
      <Row>
        <Col md={12}>
          <h3 className="text-white mb-4">Frequently Asked Questions</h3>
          <Accordion flush className="faq-accordion">
            {faqs.map((faq, index) => (
              <Accordion.Item key={index} eventKey={index.toString()} className="bg-dark text-white">
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body className="bg-secondary">
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Col>
      </Row>

      {/* Call to Action */}
      <Row className="mt-5">
        <Col md={12} className="text-center">
          <Card bg="success" text="white" className="p-5 cta-card">
            <h2>Ready to experience music like never before?</h2>
            <p className="lead mb-4">Join millions of happy users today</p>
            <div>
              <button className="btn btn-dark btn-lg me-3">Sign Up Free</button>
              <button className="btn btn-outline-light btn-lg">Learn More</button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;