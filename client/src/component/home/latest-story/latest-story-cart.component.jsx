import React from 'react';

const LatestStoryCart = ({story}) =>(
    <div className="col-lg-4 col-md-6">
        <div className="single-story">
            <div className="story-thumb">
                <img className="img-fluid" src={story.image} alt=""/>
            </div>
            <div className="story-details">
                <div className="story-meta">
                    <a href="/">
                        <span className="lnr lnr-calendar-full"></span>
                        {story.date}
                    </a>
                    <a href="/">
                        <span className="lnr lnr-book"></span>
                        Ofok
                    </a>
                </div>
                <h5>
                    <a href="/">
                        {story.description}
                    </a>
                </h5>
            </div>
        </div>
    </div>
)

export default LatestStoryCart;