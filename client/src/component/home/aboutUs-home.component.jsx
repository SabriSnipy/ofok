import React from 'react';
import ReactComponent1 from "./img/about-img.jpg";

import "./aboutUs-home.styles.scss";

const AboutUsHome = () =>(
    <section className="about_area section_gap_bottom">
		<div className="container">
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
								We are nonprofit team <br/>
									and work worldwide
							</h2>
							<p>
									Their multiply doesn't behold shall appear living heaven second 
									roo lights. Itself hath thing for won't herb forth gathered good 
									bear fowl kind give fly form winged for reason
							</p>
							<p>
									Land their given the seasons herb lights fowl beast whales it 
									after multiply fifth under to it waters waters created heaven 
									very fill agenc to. Dry creepeth subdue them kind night behold 
									rule stars him grass waters our without 
							</p>
							<a href="/" className="primary_btn">Learn more</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default AboutUsHome