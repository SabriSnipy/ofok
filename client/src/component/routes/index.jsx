import React from 'react';

import {Switch, Route} from "react-router-dom";
import Home from '../home';
import Contact from '../contact/contact.component';
import AboutUs from '../about-us.page';
import DonatePage from '../donate-page/donate-page.component';
import Clubs from '../clubs-page/clubs.component';
import StoriesComponent from '../stories-page';
import Entrepreneurship from '../clubs-page/entrepreneurship-club/entrepreneurship-club.component';
import MentalArithmetic from '../clubs-page/mental-arithmetic-club/mental-arithmetic-club.component';
import AgricultureClub from '../clubs-page/agriculture-club/agriculture-club.component';
import ScienceClub from '../clubs-page/science-club/science-club.component';
import Jerusalem from '../stories-page/pages/jerusalem.component';
import Sponsor from '../stories-page/pages/sponsor.component';
import Cleanliness from '../stories-page/pages/cleanliness.component';
import Ramadan from '../stories-page/pages/ramadan.component';
import Carthage from '../stories-page/pages/carthage.component';
import Camping from '../stories-page/pages/camping.component';
import Eid from '../stories-page/pages/eid.component';
import Sewing from '../stories-page/pages/sewing.component';

const Routes = () =>(
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about-us" component={AboutUs}/>
        <Route exact path="/clubs" component={Clubs}/>
        <Route exact path="/stories" component={StoriesComponent}/>
        <Route exact path="/donate" component={DonatePage}/>
        <Route exact path="/entrepreneurship" component={Entrepreneurship}/>
        <Route exact path="/mental-arithmetic" component={MentalArithmetic}/>
        <Route exact path="/agriculture" component={AgricultureClub}/>
        <Route exact path="/sciences" component={ScienceClub}/>
        <Route exact path="/stories/jerusalem-is-my-trust" component={Jerusalem}/>
        <Route exact path="/stories/cleanliness-campaign" component={Cleanliness}/>
        <Route exact path="/stories/Ramadan-basket" component={Ramadan}/>
        <Route exact path="/stories/carthage-land-excursion" component={Carthage}/>
        <Route exact path="/stories/Camping" component={Camping}/>
        <Route exact path="/stories/eid" component={Eid}/>
        <Route exact path="/stories/sewing" component={Sewing}/>
        <Route exact path="/stories/sponsor-my-studies-and-consider-me-as-your-daughter-or-son" component={Sponsor}/>
    </Switch>
)

export default Routes;