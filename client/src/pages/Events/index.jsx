import React from 'react';
import Fade from 'react-reveal/Fade';
import { Row, Col, Container } from 'react-bootstrap';

import fustoria from '../../shared/fustoria.json';
import EventData from '../../shared/events.json';
import Carousel from '../../components/Carousel';
import EventComp from "../../components/Event";
import imgs from '../../shared/sagniksir.json';
import Header from '../../components/Header';
import './styles.css';

const Events = () => {

    const SagnikSir = () => {
        return (
            <Container fluid className="py-5">
                <Row className={"justify-content-center text-white align-items-center flex-row-reverse"}>
                    <Col lg="5" className="px-5 px-lg-0">
                        <Carousel imgs={imgs} />
                    </Col>
                    <Col lg="5" className="px-5 text-center body">
                        <h3 className="text">
                            Sagnik Sir
                        </h3>
                        <p className="body">
                            As we all know, Sagnik sir was a professor who was pretty close and friendly to us, compared to other professors. He has shared with us many of his stories, and the journey he has been through. We have included few snippets containing his conversations with us 
                        </p>
                        <a href="https://drive.google.com/file/d/1DO947eCEzXT9fazninQU26i0rywZGz3I/view?usp=drivesdk" className="a">Stories of Sagnik Sir</a>
                    </Col>
                </Row>
            </Container>
        )
    }

    const Fustoria = () => {
        return (
            <Container fluid className="py-5">
                <Row className={"justify-content-center text-white align-items-center"}>
                    <Col lg="5" className="px-5 px-lg-0">
                        <Carousel imgs={fustoria} />
                    </Col>
                    <Col lg="5" className="px-5 text-center body">
                        <h3 className="text">
                            Fustoria
                        </h3>
                        <p className="body">
                            A literary event for first-year students, was conducted by the CSE CR, Harrittha, During the course of the event, every participant was given the number 1/2/3 and were asked to compose a part of the story in the sequence. The story was given to two others to complete and at the end, the merged stories were previewed for the best story to be determined. Complimentary to this, we got numerous beautiful poems in many languages. As judged by Sagnik sir and Taruni ma’am, “Life Goes On” was the best story.
                        </p>
                        <a href="https://drive.google.com/file/d/1x_hBvi8CdZTkuVCnx04taNlTLF9zXICd/view?usp=drivesdk" className="a rightSpace">Fustoria Stories</a>
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <div>
            <Header active={2}/>
            <div className="content">
                {EventData.map((data, index) => (
                    <Fade top delay={100}>
                        <EventComp event={data} title={data.id} index={index}/>
                    </Fade>
                ))}
                <SagnikSir/>
                <Fustoria/>
            </div>
        </div>
    )
}

export default Events;
