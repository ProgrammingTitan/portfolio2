import React from "react";
import {Container, Row, Col, Button, Jumbotron} from 'reactstrap';
import "./Section.css";
import frontpage from  "../data/paulvalenzuela/paulfrontpage.jpg";
import {Link} from "react-scroll";




export default function Intro({ title, subtitle, dark, id }) {

    var paulssadfsdfa ={
        backgroundImage: 'url(' +frontpage +')',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        // height: '1000px',
        width:'auto'
      }

      
  return (
    <div id={id} className={"section" + (dark ? " section-dark" : "")}>
          <div className="intro">
              <Row>
                  <Col xs="12">
      <Jumbotron className="jumber" style={paulssadfsdfa}>
        <h1 className="display-3">Paul V</h1>
        <p className="lead">Computer Engineer</p>
        <hr className="my-2" />
        <p>Hello! I am a Computer Engineering Student based out of Palm Springs, CA. Welcome to my page!</p>
        <p className="lead">
          <Link
                activeClass="active"
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              ><Button color="primary">
                Learn More 
                </Button> </Link>
        </p>
      </Jumbotron>
      </Col>
      </Row>
      </div>

    </div>
  );
}