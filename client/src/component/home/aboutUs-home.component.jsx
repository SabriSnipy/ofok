import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {CHANGEHEADERLINK} from "../../redux/actions/actions";
import ReactComponent1 from "./img/about-img.jpg";

import "./aboutUs-home.styles.scss";

const AboutUsHome = ({CHANGEHEADERLINK, from}) =>(
    <section className="about_area section_gap_bottom">
		<div className="container">
		<div className="main_title">
				<h2>About Us</h2>
				<p>Know more about Ofok Association </p>
			</div>
			<div className="row">	
				<div className="single_about row">
					<div className="col-lg-6 col-md-12 text-center about_left">
						<div className="about_thumb">
							<img src={ReactComponent1} className="img-fluid" alt=""/>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 about_right">
						<div className="about_content">
							<h2>
								We are nonprofit team
							</h2>
							<p>
							We seek, as far as possible, the association to work with all 
							the organizations and associations that share our same goals, 
							mainly providing a decent living for the individual
							</p>
							<p>
							Over the past 9 years, full sponsorship of orphans has occupied 90% of 
							our interests and we follow the families of orphans at all stages of life 
							through their care at different levels:
							Physically, psychologically, healthily, educational and entertaining
							</p>
							{from==="home"?<Link to="/about-us" className="primary_btn" onClick={()=>CHANGEHEADERLINK({home:false,contactUs:false,aboutUs:true})}>Learn more</Link>:<div className="m-5"></div>}
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default connect(null, {CHANGEHEADERLINK})(AboutUsHome)