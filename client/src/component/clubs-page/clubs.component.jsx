import React from 'react';
import BannerArea from '../banner-area.component';
import Clubs from '../home/clubs/clubs.component';

const ClubsComponent = () =>{
    React.useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <React.Fragment>
            <BannerArea text="Our Clubs"/>
            <Clubs/>
        </React.Fragment>
    )
}

export default ClubsComponent;