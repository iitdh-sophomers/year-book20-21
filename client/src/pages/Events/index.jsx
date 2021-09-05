import React from 'react';
import Fade from 'react-reveal/Fade';
import EventComp from "../../components/Event";
import Header from '../../components/Header';
import './styles.css';
import EventData from '../../shared/events.json'

const Events = () => {
    return (
        <div>
            <Header active={2}/>
            <div className="content">
                {EventData.map((data, index) => (
                    <Fade right delay={100}>
                        <EventComp event={data} index={index}/>
                    </Fade>
                ))}
            </div>
        </div>
    )
}

export default Events;
