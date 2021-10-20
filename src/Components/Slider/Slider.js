import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <div >

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://previews.123rf.com/images/pitinan/pitinan1908/pitinan190800170/128880167-medical-healthcare-concept-doctor-in-hospital-with-digital-medical-icons-graphic-banner-showing-symb.jpg"
                       
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>



                    <img
                        className="d-block w-100"
                        src="https://previews.123rf.com/images/pitinan/pitinan1908/pitinan190800919/128878603-medical-healthcare-concept-doctor-in-hospital-with-digital-medical-icons-graphic-banner-showing-symb.jpg"
                        alt="Second slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://previews.123rf.com/images/lenetssergey/lenetssergey2002/lenetssergey200200101/139256476-smiling-medical-doctor-woman-with-stethoscope-in-hospital-.jpg"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>

        </div>
    );
};

export default Slider;