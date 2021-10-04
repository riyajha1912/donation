import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Modal, Container, Button } from "react-bootstrap";
import "../css/individual-forms/followSocials.css";
const FollowSocials = (props) => {
  return (
    <>
      <Container fluid>
        <Modal
          {...props}
          className="socialsCard"
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header className="socialHeader" closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Follow Us!{" "}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="socialBody">
            <Row xs={4} className="Socialrow">
              <Col md={{ offset: 5 }}>
                <Button
                  variant="transparent"
                  target="_blank"
                  href="https://www.instagram.com/saksham_a_helping_hand/?utm_medium=copy_link"
                >
                  <i className="fab fa-instagram instaFollow fa-5x"></i>
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={{ offset: 5 }}>
                <Button
                  variant="transparent"
                  target="_blank"
                  href="https://www.facebook.com/Our.Saksham/"
                >
                  <i class="fab fa-facebook-square fbFollow fa-5x"></i>
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={{ offset: 5 }}>
                <Button
                  variant="transparent"
                  target="_blank"
                  href="https://www.linkedin.com/company/74990312/admin/"
                >
                  <i class="fab fa-linkedin lIFollow fa-5x"></i>
                </Button>
              </Col>
            </Row>
            <br />
            <Row>
              <Col md={{ offset: 5 }}>
                <Button
                  variant="transparent"
                  target="_blank"
                  href="https://twitter.com/sakshamhand"
                >
                  <i class="fab fa-twitter twtFollow fa-5x"></i>
                </Button>
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      </Container>
    </>
  );
};

export default FollowSocials;
