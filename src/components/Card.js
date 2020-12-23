import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import "./Card.css";

import { Container, Row, Col } from 'reactstrap';
import MemoryIcon from '@material-ui/icons/Memory';
import VerilogIcon from '../data/skillsicons/Verilog.png';
import VHDLIcon from '../data/skillsicons/VHDL.png';
import JavaIcon from '../data/skillsicons/java.png';
import CPlusPlusIcon from '../data/skillsicons/cplusplus.png';
import CIcon from '../data/skillsicons/C.svg';
import JavaScriptIcon from '../data/skillsicons/javascript.png';
import PythonIcon from '../data/skillsicons/python.png';
import ReactIcon from '../data/skillsicons/react.jfif';
import { makeStyles } from '@material-ui/core/styles';




const SkillCard = (props) => {

   


    const getLarger = (e) => {e.target.style.opacity=1}
    const getSmaller = (e) => {e.target.style.opacity=0.7}

  return (
    <div>
        <Container>
            <Row className="cardRow">
              <Col xs="6" md="3">
      <Card
      style={{backgroundColor: 'rgba(255, 255, 255, 0.0)' , border:'none'}}
      onMouseOver={getLarger} onMouseLeave={getSmaller}  >
            <CardImg height="auto" width="auto" className="icon" src={VerilogIcon} />
        <CardBody>
          <CardTitle tag="h5">Verilog</CardTitle>
        </CardBody>
      </Card>
      </Col>
      <Col xs="6" md="3">
      <Card 
      style={{backgroundColor: 'rgba(255, 255, 255, 0.0)' , border:'none'}}
      onMouseOver={getLarger} onMouseLeave={getSmaller}  >
            <CardImg height="auto" width="auto" className="icon" src={VHDLIcon} />
        <CardBody>
          <CardTitle tag="h5">VHDL</CardTitle>
        </CardBody>
      </Card>
      </Col>
      <Col xs="6" md="3">
      <Card 
      style={{backgroundColor: 'rgba(255, 255, 255, 0.0)' , border:'none'}}
      onMouseOver={getLarger} onMouseLeave={getSmaller}  >
            <CardImg height="auto" width="auto" className="icon" src={JavaIcon} />
        <CardBody>
          <CardTitle tag="h5">Java</CardTitle>
        </CardBody>
      </Card>
      </Col>
      <Col xs="6" md="3">
      <Card 
      style={{backgroundColor: 'rgba(255, 255, 255, 0.0)' , border:'none'}}
      onMouseOver={getLarger} onMouseLeave={getSmaller}  >
            <CardImg height="auto" width="auto" className="icon" src={CPlusPlusIcon} />
        <CardBody>
          <CardTitle tag="h5">C++</CardTitle>
        </CardBody>
      </Card>
      </Col>
      </Row>
      <Row className="cardRow">
              <Col xs="6" md="3">
        <Card
        style={{backgroundColor: 'rgba(255, 255, 255, 0.0)' , border:'none'}}
        onMouseOver={getLarger} onMouseLeave={getSmaller}  >
            <CardImg height="auto" width="auto" className="icon" src={CIcon} />
        <CardBody>
          <CardTitle tag="h5">C</CardTitle>
        </CardBody>
      </Card>
      </Col>
      <Col xs="6" md="3">
      <Card 
      style={{backgroundColor: 'rgba(255, 255, 255, 0.0)' , border:'none'}}
      onMouseOver={getLarger} onMouseLeave={getSmaller}  >
            <CardImg height="auto" width="auto" className="icon" src={JavaScriptIcon} />
        <CardBody>
          <CardTitle tag="h5">JavaScript</CardTitle>
        </CardBody>
      </Card>
      </Col>
      <Col xs="6" md="3">
      <Card 
      style={{backgroundColor: 'rgba(255, 255, 255, 0.0)' , border:'none'}}
      onMouseOver={getLarger} onMouseLeave={getSmaller}  >
            <CardImg height="auto" width="auto" className="icon" src={PythonIcon} />
        <CardBody>
          <CardTitle tag="h5">Python</CardTitle>
        </CardBody>
      </Card>
      </Col>
      <Col xs="6" md="3">
      <Card 
      style={{backgroundColor: 'rgba(255, 255, 255, 0.0)' , border:'none'}}
      onMouseOver={getLarger} onMouseLeave={getSmaller}  >
            <CardImg height="auto" width="auto" className="icon" src={ReactIcon} />
        <CardBody>
          <CardTitle tag="h5">ReactJS</CardTitle>
        </CardBody>
      </Card>
      </Col>
      </Row>
      </Container>
    </div>
  );
};

export default SkillCard;