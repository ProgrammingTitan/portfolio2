import React from "react";
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Row, Col, Container,
  } from 'reactstrap';
import "./Education.css";

import lbsu from "../data/paulvalenzuela/lbsu2.jpg";
import cod from "../data/paulvalenzuela/cod.png";
import { Link, animateScroll as scroll } from "react-scroll";
import downArrow from '../data/paulvalenzuela/down.png'


export default function Education({ title, subtitle, dark, id }) {

    const goAway = (e) => {e.target.style.opacity=0}

  return (
    <div
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
    id={id}
    className = "education"
    >

        <h1 className="heading">{title}</h1>
        <Container>
            <Row>
    <Col xs="12" md="6">
      <Card
      style={{backgroundColor: 'rgba(255, 255, 255, 0.0)' }}
      className="educationCard"> 
        <CardBody>
          <CardTitle tag="h5">California State University Long Beach</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">2018-2021</CardSubtitle>
        </CardBody>
        <img width="100%" src={lbsu} alt="Card image cap" />
        <CardBody>
          <CardText>Bachelor's of Science in Computer Engineering</CardText>
          <CardText>Minor: Computer Science</CardText>
        </CardBody>
      </Card>
      </Col>
      <Col xs="12" md="6">
      <Card 
       style={{backgroundColor: 'rgba(255, 255, 255, 0.0)' }}
      className="educationCard">
        <CardBody>
          <CardTitle tag="h5">College of The Desert</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">2016-2018</CardSubtitle>
        </CardBody>
        <img width="100%" src={cod} alt="Card image cap" />
        <CardBody>
          <CardText>Associate's of Science in Physics</CardText>
          <CardText>Magna Cum Laude</CardText>
        </CardBody>
      </Card>
      </Col>
    
    </Row>
    </Container>
    <div className="downLink">
            <Link
                activeClass="active"
                to="section6"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={goAway}
              >
            <img height="125px" className="down" width="auto" src={downArrow} />
            </Link>
            </div>
    </div>
  );
}