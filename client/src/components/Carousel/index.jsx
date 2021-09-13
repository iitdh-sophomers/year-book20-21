import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import img from './placeholder.jpg';
import './styles.css';

const CarouselComp = ({imgs}) => {
	return (
		<Carousel className="carousel">
			{imgs.map((data, index) => (
				<Carousel.Item>
					<img
						className="d-block w-100 fade-out"
						src={data}
						alt={`Slide ${index+1}`}
					/>
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export default CarouselComp;