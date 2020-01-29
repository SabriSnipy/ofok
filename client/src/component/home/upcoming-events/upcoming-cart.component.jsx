import React from 'react';

import "./upcoming-events.styles.scss";

const UpcomingCart = ({image,title,text,days,hours,minutes,seconds}) =>(
    <div class="col-lg-6">
        <div class="single_event">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-6">
                    <figure>
                        <img class="img-fluid w-100" src={image} alt=""/>
                        <div class="img-overlay"></div>
                    </figure>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="content_wrapper">
                        <h3 class="title">
                            <a href="event-details.html">{title}</a>
                        </h3>
                        <p>
                            {text}
                        </p>
                        <div class="d-flex count_time" id="clockdiv1">
                            <div class="mr-25">
                                <h4 class="days">{days}</h4>
                                <p>Days</p>
                            </div>
                            <div class="mr-25">
                                <h4 class="hours">{hours}</h4>
                                <p>Hours</p>
                            </div>
                            <div class="mr-25">
                                <h4 class="minutes">{minutes}</h4>
                                <p>Minutes</p>
                            </div>
                            <div>
                                <h4 class="seconds">{seconds}</h4>
                                <p>Seconds</p>
                            </div>
                        </div>
                        <a href="/" class="primary_btn">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default UpcomingCart;