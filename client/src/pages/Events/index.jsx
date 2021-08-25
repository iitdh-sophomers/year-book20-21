import React from 'react';
import Header from '../../components/Header';
import EventComp from "../../components/Event";
import './styles.css';

const Events = () => {
    return (
        <div>
            <Header active={2}/>
            <div className="content">
                <EventComp />
                <EventComp />
                <EventComp />
            </div>
        </div>
    )
}

export default Events;
