import React from "react";
import "./About.css";
import { Container, Row, Col } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import linkedin from "../data/paulvalenzuela/linkedin.JPG";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import downArrow from '../data/paulvalenzuela/down.png'

export default function About({ title, subtitle, dark, id }) {

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
    className="About"
>   
<Container>
<h1 className="heading">{title}</h1>
        <Row>
            <Col md="6" xs="12">
                
                <p>Hello my name is Paul Valenzuela. I am 22 years old and I am currently studying at CSULB to become a computer engineer.</p>
                <p>I enjoy creating unique and innovative creations. My goal is to </p>
                  <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Checkout some things I have made
              </Link>
              
            
            </Col>
            
            <Col md="6" xs="12"><img height="auto" width="100%"src={linkedin} /> </Col>
    
        </Row>
        <Row>
        

        </Row>
</Container>
<div className="downLink">
            <Link
                activeClass="active"
                to="section3"
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