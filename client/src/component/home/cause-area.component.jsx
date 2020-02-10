import React from 'react';
import ReactComponent1 from "./img/c1.png";
import ReactComponent2 from "./img/c2.png";
import ReactComponent3 from "./img/c3.png";

import "./cause-area.styles.scss";

const CauseArea = () =>(
    <section className="causes_area">
		<div className="container">
			<div className="main_title">
				<h2>Our major causes</h2>
				<p>Why OFOK association exists </p>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="single_causes">
						<h4>Give Donation</h4>
						<img src={ReactComponent1} alt=""/>
						<p>
						We give donations to social cases, needy families and students who are unable to continue their education throughout the university years.
						</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single_causes">
						<h4>Give Inspiration</h4>
						<img src={ReactComponent2} alt=""/>
						<p>
						We give inspiration to children and orphans through a group of clubs that develop their ideas and develop their individual skills.
						</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single_causes">
						<h4>Become Volunteer</h4>
						<img src={ReactComponent3} alt=""/>
						<p>
						The association attracts every volunteer who wants to lend a hand to our children and the families we care for.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default CauseArea