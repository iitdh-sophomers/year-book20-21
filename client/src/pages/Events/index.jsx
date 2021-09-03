import React from 'react';
import Fade from 'react-reveal/Fade';

import EventComp from "../../components/Event";
import Header from '../../components/Header';
import './styles.css';

const Events = () => {
    return (
        <div>
            <Header active={2}/>
            <div className="content">
                <Fade right delay={100}>
                    <EventComp parity={0}/>
                </Fade>
                <Fade left delay={100}>
                    <EventComp parity={1}/>
                </Fade>
                <Fade right delay={100}>
                    <EventComp parity={0}/>
                </Fade>
            </div>
        </div>
    )
}

export default Events;
