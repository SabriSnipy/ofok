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
				<p>To know more about OFOK </p>
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
							we seek as far as possible to work with all the organizations that share with us the same objectives and we primarily aim to provide decent living standards for individuals and empower them to live with greater independence and freedom from poverty, disease, and hunger.
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