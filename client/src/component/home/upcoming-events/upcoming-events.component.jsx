import React from 'react';
import UpcomingCart from './upcoming-cart.component';
import ReactComponent1 from "./img/e1.jpg";
import ReactComponent2 from "./img/e2.jpg";
import ReactComponent3 from "./img/e3.jpg";
import ReactComponent4 from "./img/e4.jpg";

const carts = [
    {
        image:ReactComponent1,
        title:"Working syrian childreen",
        text:"Be tree their face won't appear day to waters moved fourth in they're divide don't a you're were man.",
        days:229,
        hours:19,
        minutes:45,
        seconds:30
    },
    {
        image:ReactComponent2,
        title:"Help and homelesness",
        text:"Be tree their face won't appear day to waters moved fourth in they're divide don't a you're were man.",
        days:389,
        hours:19,
        minutes:45,
        seconds:30
    },
    {
        image:ReactComponent3,
        title:"Save the clean water",
        text:"Be tree their face won't appear day to waters moved fourth in they're divide don't a you're were man.",
        days:569,
        hours:19,
        minutes:45,
        seconds:30
    },
    {
        image:ReactComponent4,
        title:"Foods for poor childreen",
        text:"Be tree their face won't appear day to waters moved fourth in they're divide don't a you're were man.",
        days:399,
        hours:19,
        minutes:45,
        seconds:30
    },
]

const UpcomingEventsHome = () =>(
    <section class="event_area section_gap_custom">
		<div class="container">
			<div class="main_title">
				<h2>Upcoming events</h2>
				<p>Creepeth called face upon face yielding midst is after moveth </p>
			</div>
		
			<div class="row">
				{carts.map(({image, title, text, days, hours, minutes, seconds},i)=><UpcomingCart key={i} image={image} title={title} text={text} days={days} hours={hours} minutes={minutes} seconds={seconds} />)}
            </div>
		</div>
	</section>
)

export default UpcomingEventsHome;