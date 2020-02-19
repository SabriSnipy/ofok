import React from 'react';
import {Link} from "react-router-dom";

import "./becomeAVolunteer.styles.scss"

const BecomeAVolunteer = () =>(
    <div className="cta-area section_gap overlay">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-7">
					<h1>Become a volunteer</h1>
					<p>
						You want to give a hand to our association and become a volunteer .
					</p>
					<Link to="/donate" className="primary_btn yellow_btn rounded">join with us</Link>
				</div>
			</div>
		</div>
	</div>
)

export default BecomeAVolunteer;