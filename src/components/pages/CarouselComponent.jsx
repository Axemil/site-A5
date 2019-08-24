import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselComponent = () => {
  return (
    <Carousel.Caption>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="data:image/jpeg;base64,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"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel.Caption>
  );
};

export default CarouselComponent;
