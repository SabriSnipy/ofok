import React from 'react';

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
                    <a href={facebook}><i className="fa fa-facebook"></i></a>
                    <a href={twitter} className="active"><i className="fa fa-twitter"></i></a>
                    <a href={instagram}><i className="fa fa-instagram"></i></a>
                    <a href={mail}><i className="fa fa-envelope-o"></i></a>
                </div>
            </div>
        </div>
    </div>
)

export default VolonteerCart;