import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Row, Col, Card } from 'react-bootstrap';
import './styles.css';
import avatar from './avatar.png';

import info from './data.json';

const CardsComp = () => {
    const isTabletorMobile = useMediaQuery({
        query: '(max-width: 700px)'
    });

    const RenderCards = (info) => {
        return(
            <div >
        <Row className="col-lg-4 col-md-6 col-xs-12">
            <Card bg="light" width="33.33%" className = "cards" key={info.id}>
                    <Card.Img src={avatar} />
                    <Card.Body>
                    <Card.Title>{info.name}</Card.Title>
                    <Card.Text>
                        {info.place}
                    </Card.Text>
                    </Card.Body>
                </Card>
        </Row> 
        </div>

        )
      }
    return (
        <div className="grid">
             <Row>
                {Array.from({ length: 9 }).map((_, idx) => (
                    <Col xs={12} sm={6} md={6} lg={4}>
                    <Card className="cards">
                        <Card.Img variant="bottom" src={avatar} className="img" />
                        <Card.Body>
                        <Card.Title>Name</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                ))}
            </Row>
            
        </div>
    )
}

export default CardsComp
