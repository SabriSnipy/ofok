import React from 'react';
import { Link } from 'react-router-dom';

const VolonteerCart = ({name, image, position, description, facebook, twitter, instagram, mail}) =>(
    <div className="col-lg-3 col-md-6">
        <div className="team_item">
            <div className="team_img">
                <img className="img-fluid" src={image} alt=""/>
            </div>
            <div className="team_name">
                <h4>{name}</h4>
                <p>{position}</p>
                <p className="mt-20">
                    {description}
                </p>
                <div className="social">
                    <Link to="/">Learn more</Link>
                </div>
            </div>
        </div>
    </div>
)

export default VolonteerCart;