import React from 'react';

import ReactComponent1 from "./img/s1.jpg";
import ReactComponent2 from "./img/s2.jpg";
import ReactComponent3 from "./img/s3.jpg";
import ReactComponent4 from "./img/s4.jpg";
import ReactComponent5 from "./img/s5.jpg";
import ReactComponent6 from "./img/s6.jpg";
import ReactComponent7 from "./img/s7.jpg";
import ReactComponent8 from "./img/s8.jpg";
import "./latest-story.styles.scss";
import LatestStoryCart from './latest-story-cart.component';


const stories = [
	{
		image:ReactComponent1,
		date:"4th Aug, 2018",
        description:"Jerusalem is my trust",
        link:"/jerusalem-is-my-trust"
	},
	{
		image:ReactComponent2,
		date:"20th Sep, 2018",
		description:"Sponsor my studies and consider me as your daughter or son .",
        link:"/sponsor-my-studies-and-consider-me-as-your-daughter-or-son"
	},
	{
		image:ReactComponent3,
		date:"14th Oct, 2019",
		description:"Cleanliness campaign.",
        link:"/cleanliness-campaign"
    },
    {
		image:ReactComponent4,
		date:"14th Oct, 2019",
		description:"Ramadan basket.",
        link:"/Ramadan-basket"
    },
    {
		image:ReactComponent5,
		date:"14th Oct, 2019",
		description:"Carthage Land Excursion.",
        link:"/carthage-land-excursion"
    },
    {
		image:ReactComponent6,
		date:"14th Oct, 2019",
		description:"Camping.",
        link:"/Camping"
    },
    {
		image:ReactComponent7,
		date:"14th Oct, 2019",
		description:"Eid.",
        link:"/eid"
    },
    {
		image:ReactComponent8,
		date:"14th Oct, 2019",
		description:"Sewing.",
        link:"/sewing"
    },
]

const LatestStory = () =>(
<section className="section_gap story_area">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-7">
					<div className="main_title"> 
						<h2>Our Stories</h2>
						<p>
                          OFOK Association carries out many activities throughout the year
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

export default LatestStory;