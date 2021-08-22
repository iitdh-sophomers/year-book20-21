import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import './styles.css';

const DownloadAsPDF = () => {

    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };
    return (
        <Button className={`div ${hover?'faded-gradient':'gradient'} element`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <h3 className="text white text-element">Download as PDF</h3>
        </Button>
    )
}

export default DownloadAsPDF;
