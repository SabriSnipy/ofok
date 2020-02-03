import React from 'react';
import {Link} from "react-router-dom";
import "./home-banner-area.styles.scss";

const HomeBanner = () =>(
    <section className="home_banner_area">
		<div className="banner_inner">
			<div className="container">
				<div className="banner_content">
					<p className="upper_text">Give a hand</p>
					<h2>to make the better world</h2>
					<p>
						We seek, as far as possible, the association to work with all the organizations and associations that share our same goals, mainly providing a decent living for the individual
					</p>
					<Link className="primary_btn mr-20" to="/donate">Donate Now</Link>
					<a className="primary_btn yellow_btn text-white" href="causes.html">See Causes</a>
				</div>
			</div>
		</div>
	</section>
)
export default HomeBanner;