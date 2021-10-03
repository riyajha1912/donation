import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Form from "./individual-forms/different_ways";
import { Container } from "react-bootstrap";
import "./index.css";

const Index = () => {
  $(window).on("load", function () {
    $("body").removeClass("preload");
  });
  return (
    <>
      <Container className="indi-donation" fluid>
        <Form />
      </Container>
    </>
  );
};

ReactDOM.render(<Index />, document.querySelector("#root"));
