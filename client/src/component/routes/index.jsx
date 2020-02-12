import React from 'react';

import {Switch, Route} from "react-router-dom";
import Home from '../home';
import Contact from '../contact/contact.component';
import AboutUs from '../about-us.page';
import DonatePage from '../donate-page/donate-page.component';
import Clubs from '../clubs-page/clubs.component';
import StoriesComponent from '../stories-page';

const Routes = () =>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about-us" component={AboutUs}/>
        <Route exact path="/clubs" component={Clubs}/>
        <Route exact path="/stories" component={StoriesComponent}/>
        <Route exact path="/donate" component={DonatePage}/>
    </Switch>
)

export default Routes;