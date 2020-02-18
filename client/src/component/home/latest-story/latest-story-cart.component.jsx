import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {CHANGEHEADERLINK} from "../../../redux/actions/actions";

const LatestStoryCart = ({story, CHANGEHEADERLINK}) =>(
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
                <h5  onClick={()=>CHANGEHEADERLINK({home:false,contactUs:false,aboutUs:false,clubs:false, stories:true})}>
                <Link to={"/stories"+story.link}>
                        {story.description}
                 </Link>
                </h5>
            </div>
        </div>
    </div>
)

export default connect(null, {CHANGEHEADERLINK})(LatestStoryCart);