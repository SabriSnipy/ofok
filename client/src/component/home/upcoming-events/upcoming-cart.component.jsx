import React from 'react';

import "./upcoming-events.styles.scss";

const UpcomingCart = ({image,title,text,days,hours,minutes,seconds}) =>(
    <div className="col-lg-6">
        <div className="single_event">
            <div className="row align-items-center">
                <div className="col-lg-6 col-md-6">
                    <figure>
                        <img className="img-fluid w-100" src={image} alt=""/>
                        <div className="img-overlay"></div>
                    </figure>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="content_wrapper">
                        <h3 className="title">
                            <a href="event-details.html">{title}</a>
                        </h3>
                        <p>
                            {text}
                        </p>
                        <div className="d-flex count_time" id="clockdiv1">
                            <div className="mr-25">
                                <h4 className="days">{days}</h4>
                                <p>Days</p>
                            </div>
                            <div className="mr-25">
                                <h4 className="hours">{hours}</h4>
                                <p>Hours</p>
                            </div>
                            <div className="mr-25">
                                <h4 className="minutes">{minutes}</h4>
                                <p>Minutes</p>
                            </div>
                            <div>
                                <h4 className="seconds">{seconds}</h4>
                                <p>Seconds</p>
                            </div>
                        </div>
                        <a href="/" className="primary_btn">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default UpcomingCart;