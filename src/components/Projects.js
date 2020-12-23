import React from "react";
import "./Projects.css";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { CenterFocusStrong } from "@material-ui/icons";
import ObstacleCarVideo from "../data/car/video.MOV";
import {Container, Row, Col} from "reactstrap";
import PongVideo from "../data/ponggame/video.MOV";
import TechSiteScreenshot from "../data/techsite/Screenshot.PNG";
import relayGameVideo from "../data/relayracegame/video.MOV";
import dcCarVideo from "../data/DCcar/video.mov";
import { Link, animateScroll as scroll } from "react-scroll";
import downArrow from '../data/paulvalenzuela/down.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    // justifyContent: "center",
    textAlign: "center",
    display: "inline-block",
  },
}));

const goAway = (e) => {e.target.style.opacity=0}



export default function Projects({ title, subtitle, dark, id }) {
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
      };

      const projectArray=[
          {lead:
          
          <Container >
              <Row className="pRow">
                  <Col md="6" xs="12">
          <video width="320" height="240" controls>
          <source src={ObstacleCarVideo} type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        </Col>
        <Col md="6" xs="12">
            <h4>Obstacle Avoiding Car</h4>
            <p>For this project a robotic car was built that had infrared transmitters and sensors that stopped when it began to approach an obstacle. The robot was programmed in C using a 32-Bit ARM Cortex Processor in Keil ISE. A button was assigned to allow the car to go forward or backwards until the device reached an obstacle.</p>
        </Col>
        </Row>
        <Row className="pRow">
        <Col md="6" xs="12">
            <h4>Verilog Pong Game</h4>
            <p>This project recreated a 1-Player Pong Game using Verilog programming and an FPGA Board. 12 switches on the board coordinate the color of the paddle. Two buttons on the board function as an up and down button for the paddle.</p>
        </Col>
        <Col md="6" xs="12">
          <video width="320" height="240" controls>
          <source src={PongVideo} type="video/mp4"/>
        Your browser does not support the video tag.
        </video>
        </Col>
        </Row>
      
        </Container>
        },

          {lead:
            <div>
            <Container >
            <Row className="pRow">
        
        <Col md="6" xs="12">
            <h4>Tech News Website</h4>
            <p>Website built in ReactJS that uses News API to display the latest headlines in each category. Also includes search bar.</p>
        </Col>
        <Col md="6" xs="12">
          <img src={TechSiteScreenshot} height = "auto" width="100%"/>
        </Col>
        </Row>
            <Row className="pRow">
                <Col md="6" xs="12">
        <video width="320" height="240" controls>
        <source src={relayGameVideo} type="video/mp4"/>
      Your browser does not support the video tag.
      </video>
      </Col>
      <Col md="6" xs="12">
          <h4>Relay Race Game</h4>
          <p>This project created a Relay Race Game using two buttons and 8 LEDs on a breadboard. The game has two players hold down their button until the green lights indicate the race has started. After this occurs, whoever lets go of the button first wins. The green LED that remains on indicates which player won.</p>
      </Col>
      </Row>
     
      </Container>    
      </div>      
            
        
        
        
        },
          
          {lead:
            <Container>
            <Row className="pRow">
            <Col md="6" xs="12">
                <h4>DC Motor Car</h4>
                <p>This project had us implement pulse-width modulation to control the speed of DC motors on a car chassis. We also were able to control the direction that the wheels were rotating by choosing which way the current flows through the H-bridge for each wheel. The PWM alternated between a 0%, 30%, 60%, 80%, and 98% duty cycle. The duty cycle directly correlates with the speed of the DC motors.</p>
            </Col>
            <Col md="6" xs="12">
              <video width="320" height="240" controls>
              <source src={dcCarVideo} type="video/mp4"/>
            Your browser does not support the video tag.
            </video>
            </Col>
            </Row>
            <Row className="pRow">
            <Col md="6" xs="12">
              {/* <img src={TechSiteScreenshot} height = "400px" width="auto"/> */}
            </Col>
            <Col md="6" xs="12">
                <h4>Chip Specification</h4>
                <p>The Chip Specification document explains the Universal Asynchronous Receiver Transmitter (UART) data transmission module and Memory Interface Block (MIB) memory manager module as used in a terminal communication project. The transmit engine and receive engine work together to communicate the SOPC with the terminal. These engines combined form the UART engine. In addition, A Memory Interface Block gives the TramelBlaze the ability to access Micron Memory from the Nexys A7.</p>
            </Col>
            </Row>
            </Container>
            
            }];

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
    
    >
<div className = "projects">
    {/* <div className={"section" + (dark ? " section-dark" : "")}> */}
      {/* <div className="section-content" id={id}> */}
        <h1 className="heading">{title}</h1>
        <div className={classes.root}>
      <Pagination count={3} variant="outlined" onChange={handleChange}/>
      {/* <MappedHeadlines data = {props.data[`${page-1}`]}/> */}
      <div>
      {projectArray[`${page-1}`].lead}
      </div>
    </div>
    <p></p>
    <div className="downLink">
            <Link
                activeClass="active"
                to="section5"
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
    
      {/* </div> */}
    {/* </div> */}
    </div>
  );
}

