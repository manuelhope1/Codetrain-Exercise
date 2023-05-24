import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Serviceslist } from "../Serviceslist";

const Services = () => {
  return (
    <Container>
      <Row>
        {Serviceslist.map((list) => {
          return (
            <Col md="3">
              <Card style={{ marginTop: "15px", height: "400px" }}>
                <Card.Img
                  variant="top"
                  src={list.imageUrl}
                  style={{ height: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{list.name}</Card.Title>
                  <Card.Text>{list.info}</Card.Text>
                  <Link to={`/services/${list.id}`}>
                    <Button variant="primary">Learn More</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Services;
