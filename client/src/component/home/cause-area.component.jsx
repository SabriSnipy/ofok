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
				<p>Creepeth called face upon face yielding midst is after moveth </p>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-6">
					<div className="single_causes">
						<h4>Give Donation</h4>
						<img src={ReactComponent1} alt=""/>
						<p>
							It you're. Was called you're fowl grass lesser land together waters beast darkness earth land whose male all moveth fruitful.
						</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single_causes">
						<h4>Give Inspiration</h4>
						<img src={ReactComponent2} alt=""/>
						<p>
							It you're. Was called you're fowl grass lesser land together waters beast darkness earth land whose male all moveth fruitful.
						</p>
					</div>
				</div>
				<div className="col-lg-4 col-md-6">
					<div className="single_causes">
						<h4>Become Bolunteer</h4>
						<img src={ReactComponent3} alt=""/>
						<p>
							It you're. Was called you're fowl grass lesser land together waters beast darkness earth land whose male all moveth fruitful.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
)

export default CauseArea