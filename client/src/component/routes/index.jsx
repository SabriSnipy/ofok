import React from 'react';

import {Switch, Route} from "react-router-dom";
import Home from '../home';
import Contact from '../contact/contact.component';

const Routes = () =>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact}/>
    </Switch>
)

export default Routes;