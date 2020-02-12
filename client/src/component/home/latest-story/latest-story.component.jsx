import React from 'react';

import ReactComponent1 from "./img/s1.jpg";
import ReactComponent2 from "./img/s2.jpg";
import ReactComponent3 from "./img/s3.jpg";
import "./latest-story.styles.scss";
import LatestStoryCart from './latest-story-cart.component';


const stories = [
	{
		image:ReactComponent1,
		date:"4th Aug, 2018",
		description:"Jerusalem is my trust"
	},
	{
		image:ReactComponent2,
		date:"20th Sep, 2018",
		description:"Sponsor my studies and consider me as your daughter or son ."
	},
	{
		image:ReactComponent3,
		date:"14th Oct, 2019",
		description:"Cleanliness campaign."
	},
]

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
                {stories.map((el,i)=><LatestStoryCart key={i} story={el}/>)}
			</div>
		</div>
	</section>
)

export default LatestStoryHome;