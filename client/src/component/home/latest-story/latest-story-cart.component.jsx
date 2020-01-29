import React from 'react';

const LatestStoryCart = ({image}) =>(
    <div class="col-lg-4 col-md-6">
        <div class="single-story">
            <div class="story-thumb">
                <img class="img-fluid" src={image} alt=""/>
            </div>
            <div class="story-details">
                <div class="story-meta">
                    <a href="/">
                        <span class="lnr lnr-calendar-full"></span>
                        20th Sep, 2018
                    </a>
                    <a href="/">
                        <span class="lnr lnr-book"></span>
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