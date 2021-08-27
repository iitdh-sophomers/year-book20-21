import React from 'react';
import Header from '../../components/Header';
import EventComp from "../../components/Event";
import './styles.css';

const Events = () => {
    return (
        <div>
            <Header active={2}/>
            <div className="content">
                <EventComp parity={0}/>
                <EventComp parity={1}/>
                <EventComp parity={0}/>
            </div>
        </div>
    )
}

export default Events;
