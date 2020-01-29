import React from 'react';

const VolonteerCart = ({name, image, position, description, facebook, twitter, instagram, mail}) =>(
    <div class="col-lg-3 col-md-6">
        <div class="team_item">
            <div class="team_img">
                <img class="img-fluid" src={image} alt=""/>
            </div>
            <div class="team_name">
                <h4>{name}</h4>
                <p>{position}</p>
                <p class="mt-20">
                    {description}
                </p>
                <div class="social">
                    <a href={facebook}><i class="fa fa-facebook"></i></a>
                    <a href={twitter} class="active"><i class="fa fa-twitter"></i></a>
                    <a href={instagram}><i class="fa fa-instagram"></i></a>
                    <a href={mail}><i class="fa fa-envelope-o"></i></a>
                </div>
            </div>
        </div>
    </div>
)

export default VolonteerCart;