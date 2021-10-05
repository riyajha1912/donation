import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/individual-forms/different_ways.css";
import { Row, Col } from "react-bootstrap";
import FoodDonate from "./foodDonate";
import MeetSched from "./meet-sched";
import EduDonate from "./donateEdu";
import FollowSocials from "./followSocials";

const DonateVolunteer = () => {
  const [foodDonationShow, setFoodDonationShow] = React.useState(false);
  const [eduDonationShow, setEduDonationShow] = React.useState(false);
  const [meetSchedShow, setMeetSchedShow] = React.useState(false);
  const [socialsShow, setSocialsShow] = React.useState(false);
  return (
    <>
      <Row className="donation-rows">
        <Col className="donation-box mb-4">
          <p>
            <i className="fas fa-donate fa-3x" style={{ color: "white" }}></i>
          </p>
          <h4>Donate Monthly</h4>
          <p>
            You can be a Helping Hand by donating monthly to NGO. Your donation
            can educate a child, feed a child and care for those who need it.
          </p>
        </Col>
        <Col
          className="donation-box mb-4"
          onClick={() => {
            setEduDonationShow(true);
          }}
        >
          <p>
            <i
              className="fas fa-book-reader fa-3x"
              style={{ color: "black" }}
            ></i>
          </p>
          <h4>Donate Education</h4>
          <p>
            You can sponsor a child's education for lifetime. You can donate
            books, computers, stationary and many more things.
          </p>
        </Col>
        <Col
          className="donation-box mb-4"
          onClick={() => setFoodDonationShow(true)}
        >
          <p>
            <i className="fas fa-utensils fa-3x" style={{ color: "white" }}></i>
          </p>
          <h4>Donate Food</h4>
          <p>
            You can sponsor food for a child to make healthier. You can donate
            food, clothes and many more things
          </p>
        </Col>
      </Row>
      <Row className="donation-rows">
        <Col
          className="donation-box mb-4"
          onClick={() => {
            setSocialsShow(true);
          }}
        >
          <p>
            <i
              className="fas fa-share-alt-square fa-3x"
              style={{ color: "black" }}
            ></i>
          </p>
          <h4>Promote NGO</h4>
          <p>
            You can act as a change maker for NGO on social media, promoting
            there activities and how we are changing the life of people.
          </p>
        </Col>
        <Col className="donation-box mb-4 mr-4">
          <p>
            <i className="fas fas fa-gift fa-3x" style={{ color: "white" }}></i>
          </p>
          <h4>Give A Hope</h4>
          <p>
            You are Saksham, the ones who have a decent source of income and are
            living with all happiness and prosperity, feels an urge to change
            the society, and come forward to help the society with all what you
            have.
          </p>
        </Col>
      </Row>
      <FollowSocials
        show={socialsShow}
        onHide={() => {
          setSocialsShow(false);
        }}
        backdrop="static"
        keyboard={false}
      />
      <FoodDonate
        show={foodDonationShow}
        onHide={() => {
          setFoodDonationShow(false);
          setMeetSchedShow(true);
        }}
        hideBoth={() => {
          setFoodDonationShow(false);
          setMeetSchedShow(false);
        }}
        backdrop="static"
        keyboard={false}
      />
      <MeetSched
        show={meetSchedShow}
        onHide={() => setMeetSchedShow(false)}
        backdrop="static"
        keyboard={false}
      />
      <EduDonate
        show={eduDonationShow}
        onHide={() => {
          setEduDonationShow(false);
          setMeetSchedShow(true);
        }}
        hideBoth={() => {
          setEduDonationShow(false);
          setMeetSchedShow(false);
        }}
        backdrop="static"
        keyboard={false}
      />
    </>
  );
};

export default DonateVolunteer;
