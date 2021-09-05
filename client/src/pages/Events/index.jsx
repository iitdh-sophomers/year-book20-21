import React from 'react';
import Fade from 'react-reveal/Fade';

import EventData from '../../shared/events.json'
import EventComp from "../../components/Event";
import Header from '../../components/Header';
import './styles.css';

const Events = () => {

    const makeTitle = (value) => {
        let answer='';
        for(let i=0; i<value.length; i++) {
            if(i<value.length-2 && value[i]==='C' && value[i+1]==='D' && value[i+2]==='C') {
                answer += "CDC";
            } else if(i===0) {
                answer += value[i].toUpperCase();
            } else if(value[i]==='_') {
                answer += " ";
            } else {
                answer += value[i];
            }
        }

        return answer;
    }

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
