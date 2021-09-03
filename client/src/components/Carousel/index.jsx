import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img from './placeholder.jpg';
import './styles.css';

const CarouselComp = () => {
	return (
		<Carousel className="carousel">
			<Carousel.Item>
				<img
				className="d-block w-100 fade-out"
				src={img}
				alt="First slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100 fade-out"
				src={img}
				alt="Second slide"
				/>
			</Carousel.Item>
			<Carousel.Item>
				<img
				className="d-block w-100 fade-out"
				src={img}
				alt="Third slide"
				/>
			</Carousel.Item>
		</Carousel>
	)
}

export default CarouselComp;