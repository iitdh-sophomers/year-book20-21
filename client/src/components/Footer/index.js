import React from 'react';
import Slide from 'react-reveal/Slide';

import './styles.css';

const Footer = () => {
    return (
        <Slide>
            <div className="footer background-black">
                <h6 className="text white">If you want to contribute, do give a visit to our <a href="https://github.com/iitdh-sophomers/year-book20-21" rel="noreferrer" target="_blank" className="a">Github Page</a> and read the contribution guide <a href="https://github.com/iitdh-sophomers/year-book20-21/blob/master/CONTRIBUTION_GUIDE.MD" rel="noreferrer" target="_blank" className="a">here</a></h6>
            </div>
        </Slide>
    )
}

export default Footer;
