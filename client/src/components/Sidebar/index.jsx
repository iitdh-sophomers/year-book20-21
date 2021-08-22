import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import Logo from '../Logo';

const Sidebar = ({ show, handleClose, active }) => {

    const isTabletorMobile = useMediaQuery({
        query: '(max-width: 700px)'
    });

    const history = useHistory();

    return (
        <div className="background-black" style={{ left:show?'0':'-80%', position: 'absolute', height: '100vh', width: '80%', margin: '0', padding: '0', transition: 'left 1s', zIndex: 100, top: '0px' }}>
            <div className="children">
                {isTabletorMobile && (
                    <Button className="gradient-text no-border elements" onClick={handleClose}>
                        Open
                    </Button>
                )}
                <Logo/>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <p className={`elements text link ${(active===1)?'violet':'white'}`} onClick={() => history.push('/')}>Home</p>
                <p className={`elements text link ${(active===2)?'yellow':'white'}`} onClick={() => history.push('/events')}>Events</p>
                <p className={`elements text link ${(active===3)?'green':'white'}`} onClick={() => history.push('/students')}>Students</p>
                <p className="elements text a gradient-text">Download as PDF</p>
            </div>
        </div>
    )
}

export default Sidebar;
