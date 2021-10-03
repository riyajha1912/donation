import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
import tomoe from "../images/help-finger-touch.jpg";
import DonateVolunteer from "./different_ways";
import "../css/individual-forms/indi_main.css";

const Main = () => {
  return (
    <>
      <Container fluid>
        <Card className=" text-white indi-card">
          <Card.Img src={`${tomoe}`} className="indi-image" />
          <Card.ImgOverlay className="indi-content">
            <Card.Title className="indi-header">
              A Better Place To Work for Someone Who Need You
            </Card.Title>
            <Card.Text className="indi-text">
              “We can’t help everyone, but everyone can help someone.” – Ronald
              Reagan
            </Card.Text>
            <Card.Text className="indi-text">
              “Encourage, lift and strengthen one another. For the positive
              energy spread to one will be felt by us all. For we are connected,
              one and all.” – Deborah Day
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <div className="indi-mini-text">
          <h3 className="text-header">
            An Organization That Helps People who is in need
          </h3>
          <p className="text-body">
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            Donec Sodales Sagittis Magna. Sed Consequat, Leo Eget Bibendum
            Sodales, Augue Velit Cursus Nunc, Quis Gravida Magna Mi A Libero.
            Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
        </div>
        <Container>
          <DonateVolunteer />
        </Container>
      </Container>
    </>
  );
};

export default Main;
