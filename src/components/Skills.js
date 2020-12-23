import React from "react";
import "./Skills.css";
import SkillCard from "./Card";
import MemoryIcon from '@material-ui/icons/Memory';
import { Container, Row, Col } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";
import downArrow from '../data/paulvalenzuela/down.png'

export default function Skills({ title, subtitle, dark, id }) {

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
    className = "skills"
    >
<Container>
    {/* <div className={"section" + (dark ? " section-dark" : "")}> */}
      {/* <div className="section-content" id={id}> */}
        <h1 className="heading">{title}</h1>

        <SkillCard />
      {/* </div> */}
    {/* </div> */}
    </Container>
    <div className="downLink">
            <Link
                activeClass="active"
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick = {goAway}
              >
            <img height="125px" className="down" width="auto" src={downArrow} />
            </Link>
            </div>
    </div>
  );
}