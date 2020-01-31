import React from 'react';

const BannerArea = ({text}) =>(
    <section className="banner_area">
    <div className="banner_inner d-flex align-items-center">
        <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
        <div className="container">
            <div className="banner_content text-center">
                <h2>{text}</h2>
            </div>
        </div>
    </div>
    </section>
)

export default BannerArea;