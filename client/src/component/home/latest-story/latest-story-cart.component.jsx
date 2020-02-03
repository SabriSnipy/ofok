import React from 'react';

const LatestStoryCart = ({image}) =>(
    <div className="col-lg-4 col-md-6">
        <div className="single-story">
            <div className="story-thumb">
                <img className="img-fluid" src={image} alt=""/>
            </div>
            <div className="story-details">
                <div className="story-meta">
                    <a href="/">
                        <span className="lnr lnr-calendar-full"></span>
                        20th Sep, 2018
                    </a>
                    <a href="/">
                        <span className="lnr lnr-book"></span>
                        Company
                    </a>
                </div>
                <h5>
                    <a href="/">
                        Lime recalls electric scooters over 
                        battery fire.
                    </a>
                </h5>
            </div>
        </div>
    </div>
)

export default LatestStoryCart;