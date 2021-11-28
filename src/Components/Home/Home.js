import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Service from "../Service/Service";
import Slider from "../Slider/Slider";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <Slider></Slider>
      <br />
      <br />

      <section className="mt-5 mb-4">
        <h1 className="fw-bolder">Our Services</h1>

        <div className="container cards ">
          {
            <div className="container mt-4">
              <Row xs={1} md={3} className="g-4">
                {services.map((service, idx) => (
                  <Col>
                    <Service key={service.id} service={service}></Service>
                  </Col>
                ))}
              </Row>
            </div>
          }
        </div>
      </section>

      <div className="container mt-5 App">
        <h1> About US</h1>
        <Row xs={1} md={2}>
          <Col>
            <p className="w-75 mt-5">
              Apollo Hospital Enterprise Limited is an Indian multinational
              hospital chain headquartered in Chennai, Tamil Nadu, India. It was
              founded by Prathap C. Reddy in 1980 as the first corporate
              healthcare provider in India.
            </p>
          </Col>
          <Col>
            <img
              className="img-fluid h-40"
              src={
                "https://st3.depositphotos.com/35530942/37242/v/950/depositphotos_372421826-stock-illustration-health-care-insurance-service-concept.jpg"
              }
              alt=""
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
