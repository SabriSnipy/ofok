import React from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to={"/stories"+story.link}>
                        {story.description}
                    </Link>
                </h5>
            </div>
        </div>
    </div>
)

export default LatestStoryCart;