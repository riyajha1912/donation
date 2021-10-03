import React, { useState } from "react";
import { Row, Col, Modal, Form, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/individual-forms/donationIndi.css";

const MeetSched = (props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState("");
  const [isNotSelected, setIsNotSelected] = useState(false);
  const handleMeet = (e) => {
    if (!timeSlot) {
      setIsNotSelected(true);
    } else {
      setIsNotSelected(false);
      props.onHide();
    }
  };
  return (
    <>
      <Modal
        {...props}
        className="foodDonateCard"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="food-header" closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Donation Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Group className="mb-3" controlId="userFName">
                  <Form.Label>Schedule Date</Form.Label>
                  <DatePicker
                    selected={startDate}
                    minDate={new Date()}
                    onChange={(date) => setStartDate(date)}
                  />
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Button
                  variant="info"
                  onClick={() => {
                    setTimeSlot("9-11");
                  }}
                >
                  9:00 A.M - 11:00 A.M
                </Button>{" "}
                <Button
                  variant="info"
                  onClick={() => {
                    setTimeSlot("11-1");
                  }}
                >
                  11:00 A.M. - 1:00 P.M.
                </Button>
                <br />
                <br />
                <Button
                  variant="info"
                  onClick={() => {
                    setTimeSlot("1-3");
                  }}
                >
                  1:00 P.M. - 3:00 P.M.
                </Button>{" "}
                <Button
                  variant="info"
                  onClick={() => {
                    setTimeSlot("3-5");
                  }}
                >
                  3:00 P.M. - 5:00 P.M.
                </Button>{" "}
                <p id="error-field">{isNotSelected && "Time Not Selected"}</p>
              </Col>
            </Row>
          </Form>

          <Modal.Footer>
            <Button
              onClick={(e) => {
                handleMeet(e);
              }}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default MeetSched;
