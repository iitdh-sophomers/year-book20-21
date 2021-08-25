import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

import { url } from '../../shared/pdfURL';
import './styles.css';

const DownloadAsPDF = () => {

    const [hover, setHover] = useState(false);

    const toggleHover = () => {
        setHover(!hover);
    };
    return (
        <Button href={url} className={`div ${hover?'faded-gradient':'gradient'} element`} onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
            <h5 className="text white text-element center">Download as PDF</h5>
        </Button>
    )
}

export default DownloadAsPDF;
