import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';

import data from '../../shared/Students.json';
import avatar from './avatar.png';
import './styles.css';

const CardsComp = () => {
    return (
        <div className="grid">
             <Row style={row_style}>
                {data.map((data, idx) => (
                    <Col xs={12} md={4} style={col_style} key={idx}>
                        <Card className="cards">
                            <Card.Img variant="bottom" src={(data.image==='')?avatar:data.image} className="img" />
                            <Card.Body>
                            <Card.Title className="text">{ data.name }</Card.Title>
                            <Card.Title className="body">{ data.id }</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            
        </div>
    )
}

const row_style = {
    height: '100%',
    margin: 'auto',
    marginTop: '11vh',
    padding: '1%',
    maxWidth: '100%',
    flexGrow: '1'
}

const col_style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2%'
}

export default CardsComp
