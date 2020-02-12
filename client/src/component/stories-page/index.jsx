import React from 'react';
import BannerArea from '../banner-area.component';
import LatestStoryHome from '../home/latest-story/latest-story.component';

const StoriesComponent = () =>{
    React.useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <React.Fragment>
            <BannerArea text="Our Stories"/>
            <LatestStoryHome/>
        </React.Fragment>
    )
}

export default StoriesComponent;