import React from 'react';
import BannerArea from '../banner-area.component';
import LatestStory from './latest-stories.component';

const StoriesComponent = () =>{
    React.useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <React.Fragment>
            <BannerArea text="Our Stories"/>
            <LatestStory/>
        </React.Fragment>
    )
}

export default StoriesComponent;