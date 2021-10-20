import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { faCoffee, faLocationArrow, faInbox, faPhone } from '@fortawesome/free-solid-svg-icons'
const About = () => {
    return (
        <div>
            <div>

                <div className="container mt-5 App">

                    <h1> About US</h1>
                    <Row xs={1} md={2}>
                        <Col><p className="w-75 mt-5">Apollo Hospitals Enterprise Limited is an Indian multinational hospital chain headquartered in Chennai, Tamil Nadu, India. It was founded by Prathap C. Reddy in 1983 as the first corporate healthcare provider in India.
                        </p></Col>
                        <Col><img className="img-fluid h-40" src={'https://st3.depositphotos.com/35530942/37242/v/950/depositphotos_372421826-stock-illustration-health-care-insurance-service-concept.jpg'} alt="" /></Col>
                    </Row>
                </div>
                <h1 className="mt-4">Our Location</h1>
                <p><FontAwesomeIcon icon={faLocationArrow} /> Level-4, 34, Awal Centre, Banani, Dhaka</p>
                <p > <FontAwesomeIcon icon={faInbox} /> Official : Info@medicare.com</p>
                <p > <FontAwesomeIcon icon={faPhone} /> Office HotLine : 16247 Office : 01977430976</p>

            </div>

        </div>
    );
};

export default About;