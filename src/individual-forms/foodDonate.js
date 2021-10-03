import React, { useState } from "react";
import { Row, Col, Modal, Form, FloatingLabel, Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/individual-forms/donationIndi.css";

const FoodDonate = (props) => {
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isNotDigits, setIsNotDigits] = useState(false);
  const [isError, setIsError] = useState(false);
  const [foodDonationList, setFoodDonationList] = useState([]);
  const [foodDonationForm, setFoodDonationForm] = useState({
    fName: "",
    lName: "",
    phoneNumber: "",
  });
  const showTextArea = (e) => {
    let value = e.target.value;
    if (foodDonationList.includes(value) || value === "--Select--") {
      console.log("value");
    } else {
      setFoodDonationList([...foodDonationList, value]);
    }
  };

  const handleFoodForm = (e) => {
    if (
      !foodDonationForm.fName ||
      !foodDonationForm.lName ||
      !foodDonationForm.phoneNumber ||
      !foodDonationList.length
    ) {
      setIsError(true);
    } else {
      setIsError(false);
      if (
        foodDonationForm.phoneNumber.length < 10 ||
        foodDonationForm.phoneNumber.length > 10
      ) {
        setIsIncorrect(true);
      } else {
        setIsIncorrect(false);
        if (!/^\d+$/.test(foodDonationForm.phoneNumber)) {
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
        className="foodDonateCard"
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
                        setFoodDonationForm({
                          ...foodDonationForm,
                          fName: e.target.value,
                        });
                      }}
                    />
                    <Form.Text id="errorField" muted>
                      {isError &&
                        !foodDonationForm.fName &&
                        "Field is Required"}
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
                        setFoodDonationForm({
                          ...foodDonationForm,
                          lName: e.target.value,
                        });
                      }}
                    />
                    <Form.Text id="errorFieldName" muted>
                      {isError &&
                        !foodDonationForm.lName &&
                        "Field is Required"}
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
                        setFoodDonationForm({
                          ...foodDonationForm,
                          phoneNumber: e.target.value,
                        });
                      }}
                    />
                    <Form.Text id="errorField" muted>
                      {isError &&
                        !foodDonationForm.phoneNumber &&
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
                  controlId="floatingFood"
                  label="Donation Materials"
                >
                  <Form.Select
                    aria-label="Food Donation"
                    onClick={(e) => {
                      showTextArea(e);
                    }}
                  >
                    <option>--Select--</option>
                    <option value="Money">Money</option>
                    <option value="Food">Food</option>
                    <option value="Clothes">Clothes</option>
                    <option value="Other">Others</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="donationList" label="Donation List">
                  <Form.Control
                    as="textarea"
                    value={foodDonationList.join("\n")}
                    style={{ height: "130px", width: "200px" }}
                    readOnly
                  />
                  <Form.Text id="errorField" muted>
                    {isError && !foodDonationList.length && "Field is Required"}
                  </Form.Text>
                </FloatingLabel>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={(e) => {
              handleFoodForm(e);
            }}
          >
            Next
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FoodDonate;
