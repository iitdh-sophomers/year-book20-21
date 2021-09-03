import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Events from '../pages/Events';
import Students from '../pages/Students';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/events' component={Events}/>
                <Route path='/students' component={Students}/>
            </Switch>
        </div>
    )
}

export default Routes;
