import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import img from './placeholder.jpg';
import './styles.css';

const CarouselComp = ({imgs}) => {
	return (
		<Carousel className="carousel">
			{imgs.map((data, index) => (
				<Carousel.Item>
					<div className="w-100 fade-out img-holder">
						<img
							className="d-block"
							src={data}
							alt={`Slide ${index+1}`}
						/>
					</div>
				</Carousel.Item>
			))}
		</Carousel>
	)
}

export default CarouselComp;