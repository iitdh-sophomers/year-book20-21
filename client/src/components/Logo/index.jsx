import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

const Logo = () => {

    const history = useHistory();

    return (
        <div className="container gradient-text">
            <h1 className="heading link" onClick={() => history.push('/')}>Year Book</h1>
        </div>
    )
}

export default Logo
