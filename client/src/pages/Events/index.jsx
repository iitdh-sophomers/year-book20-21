import React from 'react';
import Fade from 'react-reveal/Fade';

import EventData from '../../shared/events.json'
import EventComp from "../../components/Event";
import Header from '../../components/Header';
import './styles.css';

const Events = () => {

    return (
        <div>
            <Header active={2}/>
            <div className="content">
                {EventData.map((data, index) => (
                    <Fade right={!index%2} left={index%2} delay={100}>
                        <EventComp event={data} title={data.id} index={index}/>
                    </Fade>
                ))}
            </div>
        </div>
    )
}

export default Events;
