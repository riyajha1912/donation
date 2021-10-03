import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Form, FloatingLabel, Row, Col, Button } from "react-bootstrap";
import "../css/individual-forms/donationIndi.css";

export const EduDonate = (props) => {
  const [isError, setIsError] = useState(false);
  const [dynamicDonationList, setDynamicDonationList] = useState([]);
  const [donationForm, setDonationForm] = useState({
    fName: "",
    lName: "",
    phoneNumber: "",
  });
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isNotDigits, setIsNotDigits] = useState(false);
  const showTextArea = (e) => {
    let value = e.target.value;
    if (dynamicDonationList.includes(value) || value === "--Select--") {
      console.log("value");
    } else {
      setDynamicDonationList([...dynamicDonationList, value]);
    }
  };
  const handleForm = (e) => {
    if (
      !donationForm.fName ||
      !donationForm.lName ||
      !donationForm.phoneNumber ||
      !dynamicDonationList?.length
    ) {
      setIsError(true);
    } else {
      setIsError(false);
      if (donationForm.phoneNumber.length < 10) {
        setIsIncorrect(true);
      } else {
        setIsIncorrect(false);
        if (!/^\d+$/.test(donationForm.phoneNumber)) {
          setIsNotDigits(true);
        } else {
          setIsNotDigits(false);
          props.onHide();
        }
      }
    }
  };

  return (
    <>
      <Modal
        {...props}
        className="eduDonateCard"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="food-header">
          <Modal.Title id="contained-modal-title-vcenter">
            <Row className="donateFoodHeader">
              <Col xs="auto">Donation Form</Col>
              <Col xs="auto">
                <Button
                  variant="transparent"
                  onClick={props.hideBoth}
                  className="hideFormButton"
                >
                  X
                </Button>
              </Col>
            </Row>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row className="g-2">
              <Col xs="auto">
                <Form.Group className="mb-3" controlId="userFName">
                  <Form.Label>First Name</Form.Label>
                  <FloatingLabel
                    controlId="floatingFirstName"
                    label="First Name"
                    className="mb-3 donationLabel"
                  >
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      onChange={(e) => {
                        setDonationForm({
                          ...donationForm,
                          fName: e.target.value,
                        });
                      }}
                    />
                    <Form.Text id="errorField" muted>
                      {isError && !donationForm.fName && "Field is Required"}
                    </Form.Text>
                  </FloatingLabel>
                </Form.Group>
              </Col>
              <Col xs="auto">
                <Form.Group className="mb-3" controlId="userLName">
                  <Form.Label>Last Name</Form.Label>
                  <FloatingLabel
                    controlId="floatingLName"
                    label="Last Name"
                    className="mb-3 donationLabel"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      onChange={(e) => {
                        setDonationForm({
                          ...donationForm,
                          lName: e.target.value,
                        });
                      }}
                    />
                    <Form.Text id="errorFieldName" muted>
                      {isError && !donationForm.lName && "Field is Required"}
                    </Form.Text>
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="userPhNo">
                  <Form.Label>Contact No.</Form.Label>
                  <FloatingLabel
                    controlId="floatingPhNo"
                    label="Phone Number"
                    className="mb-3 donationLabel"
                  >
                    <Form.Control
                      type="text"
                      placeholder="Phone Number"
                      onChange={(e) => {
                        setDonationForm({
                          ...donationForm,
                          phoneNumber: e.target.value,
                        });
                      }}
                    />
                    <Form.Text id="errorField" muted>
                      {isError &&
                        !donationForm.phoneNumber &&
                        "Field is Required"}
                      {isIncorrect && "Phone Number must be 10 digits"}
                      {isNotDigits && "Phone Number must be digits only"}
                    </Form.Text>
                  </FloatingLabel>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <FloatingLabel
                  controlId="floatingEdu"
                  label="Donation Materials"
                >
                  <Form.Select
                    aria-label="Donation For Education"
                    onClick={(e) => {
                      showTextArea(e);
                    }}
                  >
                    <option>--Select--</option>
                    <option value="Money">Money</option>
                    <option value="Books">Books</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Stationary">Stationary</option>
                    <option value="Other">Others</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="donationList" label="Donation List">
                  <Form.Control
                    as="textarea"
                    value={dynamicDonationList.join("\n")}
                    style={{ height: "140px", width: "200px" }}
                    readOnly
                  />
                  <Form.Text id="errorField" muted>
                    {isError &&
                      !dynamicDonationList?.length &&
                      "Field is Required"}
                  </Form.Text>
                </FloatingLabel>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={(e) => {
              handleForm(e);
            }}
          >
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EduDonate;
