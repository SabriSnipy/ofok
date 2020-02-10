import React, {useEffect} from 'react';
import HomeBanner from './home-banner-area.component';
import CauseArea from './cause-area.component';
import AboutUsHome from './aboutUs-home.component';
import FeaturedCausesHome from './features-causes/featured-causes.component';
import UpcomingEventsHome from './upcoming-events/upcoming-events.component';
import Volonteers from './volonteer/volonteer.component';
import BecomeAVolunteer from './becomeAVolunteer.component';
import LatestStoryHome from './latest-story/latest-story.component';

const Home = () =>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
    <React.Fragment>
        <HomeBanner/>
        <CauseArea/>
        <AboutUsHome from="home"/>
        <Volonteers/>
        <FeaturedCausesHome/>
        <UpcomingEventsHome/>
        <BecomeAVolunteer/>
        <LatestStoryHome/>
        
    </React.Fragment>
)}

export default Home;