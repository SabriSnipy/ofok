import React from 'react';

import ReactComponent1 from "./img/s1.jpg";
import ReactComponent2 from "./img/s2.jpg";
import ReactComponent3 from "./img/s3.jpg";
import "./latest-story.styles.scss";
import LatestStoryCart from './latest-story-cart.component';

const images = [ReactComponent1, ReactComponent2, ReactComponent3]

const LatestStoryHome = () =>(
<section className="section_gap story_area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-7">
					<div className="main_title">
						<h2>Our latest Story</h2>
						<p>
							Open lesser winged midst wherein may morning
						</p>
					</div>
				</div>
			</div>
			<div className="row">
                {images.map((el,i)=><LatestStoryCart key={i} image={el}/>)}
			</div>
		</div>
	</section>
)

export default LatestStoryHome;