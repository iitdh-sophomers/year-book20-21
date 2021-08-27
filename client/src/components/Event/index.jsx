import React from 'react';
import './styles.css';
import Carousel from "../../components/Carousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const EventComp = ({parity}) => {
	const containerClass = parity ? "flex-row-reverse" : "";
	return (
		<Container fluid className="py-5">
		  <Row className={"justify-content-center text-white align-items-center " + containerClass}>
		    <Col lg="5" className="px-5 px-lg-0">
		    	<Carousel />
		    </Col>
		    <Col lg="5" className="px-5 text-center">
		    	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
		    </Col>
		  </Row>
		</Container>
	)
}

export default EventComp;