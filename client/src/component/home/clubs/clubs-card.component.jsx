import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import {CHANGEHEADERLINK} from "../../../redux/actions/actions";

const ClubsCart = ({name, image, position, description, link, CHANGEHEADERLINK}) =>(
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
                <div className="social" onClick={()=>CHANGEHEADERLINK({home:false,contactUs:false,aboutUs:false,clubs:true, stories:false})}>
                    <Link to={link}>Learn more</Link>
                </div>
            </div>
        </div>
    </div>
)

export default connect(null, {CHANGEHEADERLINK})(ClubsCart);