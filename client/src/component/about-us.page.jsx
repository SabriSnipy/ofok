import React, {useEffect} from 'react';
import BannerArea from './banner-area.component';
import AboutUsHome from './home/aboutUs-home.component';
import BecomeAVolunteer from './home/becomeAVolunteer.component';

const AboutUs = () =>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return <React.Fragment>
        <BannerArea text="About Us"/>
        <div className=" mt-5"></div>
        <AboutUsHome/>
        <BecomeAVolunteer/>
    </React.Fragment>
}

export default AboutUs;