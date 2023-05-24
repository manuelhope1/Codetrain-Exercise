import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Serviceslist } from "../Serviceslist";

const ServicesInfo = (props) => {
  const { id } = useParams();
  return (
    <Container>
      <Row>
        <h3 style={{ margin: "10px 10px" }}>Service Details</h3>
        {Serviceslist.map((list) => {
          if (id === list.id)
            return (
              <Col md="12" className="infos">
                <h1 style={{ fontSize: "50px" }}>{list.name}</h1>

                <img
                  src={list.imageUrl}
                  className="img-fluid"
                  style={{ height: "300px" }}
                  alt="service"
                />
                <h2>Manager: {list.director} </h2>
                <h5>Location: {list.location} </h5>
                <h5>Open Hours: {list.openHours} </h5>
                <h5>Cost: {list.cost} </h5>
              </Col>
            );
        })}
      </Row>
    </Container>
  );
};

export default ServicesInfo;
