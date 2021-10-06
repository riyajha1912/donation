import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import "../css/individual-forms/indiDonationDesc.css";
import tomoe from "../images/help-finger-touch.jpg";

const IndiDonationDesc = () => {
  return (
    <>
      <Row className="descRowIndi">
        <Col className="descColImg">
          <img src={tomoe} alt="descImage" />
        </Col>
        <Col className="descColIndi">
          <Col className="descColImg">
            <img src={tomoe} alt="descImage" />
          </Col>
          <h3 className="descTitle">
            You can be a helping hand to keep someone's dream alive!
          </h3>
          <div className="descContent">
            You can be helping hand for people who escape from the bonds of
            poverty through our donation online. It lets you gift life-changing
            benefits to those people for a low monthly and yearly contribution.
            Your donation online will ensure that someone receives education,
            food, healthcare as well as nutritional support through every phase
            of their life. Donate online to Saksham: A Helping Hand Foundation
            and help a deprived, realize their dream!
          </div>
        </Col>
      </Row>
      <Row className="descRowIndi">
        <Col className="descColIndi">
          <Col className="descColImg">
            <img src={tomoe} alt="descImage" />
          </Col>
          <h3 className="descTitle">Join the Helping hands Together!</h3>
          <div className="descContent">
            Our members are offered genuine support from the moment they join.
            Support functions are provided to the operation's team, to improve
            its capability and capacity. All individual supporters are supported
            by an experienced and knowledgeable team of Regional Operations
            Managers, who genuinely engage and listen!
          </div>
        </Col>
        <Col className="descColImg">
          <img src={tomoe} alt="descImage" />
        </Col>
      </Row>
    </>
  );
};

export default IndiDonationDesc;
