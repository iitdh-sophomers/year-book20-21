import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

import Carousel from "../../components/Carousel";
import './styles.css';

const EventComp = ({event, index, title}) => {
	const containerClass = index%2 ? "flex-row-reverse" : "";
	return (
		<Container fluid className="py-5">
			<Row className={"justify-content-center text-white align-items-center " + containerClass}>
				<Col lg="5" className="px-5 px-lg-0">
					<Carousel imgs={event.images} />
				</Col>
				<Col lg="5" className="px-5 text-center body">
					<h3 className="text">
						{title}
					</h3>
					<p className="body">
						{event.description}
					</p>
				</Col>
			</Row>
		</Container>
	)
}

export default EventComp;