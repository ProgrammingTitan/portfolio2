import React from "react";
import "./WorkExperience.css";
import SkillCard from "./Card";
import MemoryIcon from '@material-ui/icons/Memory';
import { Container, Row, Col } from 'reactstrap';
import { Media } from 'reactstrap';
import CostcoLogo from '../data/paulvalenzuela/costco.jpg';

export default function WorkExperience({ title, subtitle, dark, id }) {
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
    className = "workexperience"
    >

        <h1 className="heading">{title}</h1>
        <Container>
        <Media>
      <Media left href="#">
        <Media object className="logo" src={CostcoLogo} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Cashier
        </Media>
        <Media className="subheading" heading>
          Costco Wholesale
        </Media>
        Well versed in Member Service and Sales. Effective at suggestive selling.
Other Departments: Sales, Administration, Membership, Merchandising, Gas Station
<p></p>
<h6><b>August 2016-Present</b></h6>
      </Media>
    </Media>
    </Container>
    </div>
  );
}