import React from 'react';

import ReactComponent1 from "./img/s1.jpg";
import ReactComponent2 from "./img/s2.jpg";
import ReactComponent3 from "./img/s3.jpg";
import "./latest-story.styles.scss";
import LatestStoryCart from './latest-story-cart.component';

const images = [ReactComponent1, ReactComponent2, ReactComponent3]

const LatestStoryHome = () =>(
<section class="section_gap story_area">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-7">
					<div class="main_title">
						<h2>Our latest Story</h2>
						<p>
							Open lesser winged midst wherein may morning
						</p>
					</div>
				</div>
			</div>
			<div class="row">
                {images.map((el,i)=><LatestStoryCart key={i} image={el}/>)}
			</div>
		</div>
	</section>
)

export default LatestStoryHome;