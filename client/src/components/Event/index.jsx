import React from 'react';
import './styles.css';
import Carousel from "../../components/Carousel";
import { useMediaQuery } from 'react-responsive';

const EventComp = () => {
	return (
		<div className='flexbox'>
			<div className="half-width">
				<div className="carousel-container center">
					<Carousel />
				</div>
			</div>
			<div className="half-width event-description">
				<p className="center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
			</div>
		</div>
	)
}

export default EventComp;