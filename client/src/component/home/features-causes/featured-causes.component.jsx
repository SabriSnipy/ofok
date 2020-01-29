import React from 'react';

import ReactComponent1 from "./img/fc1.jpg";
import ReactComponent2 from "./img/fc2.jpg";
import ReactComponent3 from "./img/fc3.jpg";

import "./featured-causes.styles.scss";
import CauseCart from './cause-cart.component';

const carts = [
    {
        image:ReactComponent1, 
        title:"Education for every child", 
        text:"Be tree their face won't appear day waters moved fourth in they're divide don't a you were man face god.", 
        raised:1533, 
        goal:2500, 
        donors:90
    },
    {
        image:ReactComponent2, 
        title:"Feeding the hungry people", 
        text:"Be tree their face won't appear day waters moved fourth in they're divide don't a you were man face god.", 
        raised:1533, 
        goal:2500, 
        donors:90
    },
    {
        image:ReactComponent3, 
        title:"Providing cloth people", 
        text:"Be tree their face won't appear day waters moved fourth in they're divide don't a you were man face god.", 
        raised:1533, 
        goal:2500, 
        donors:90
    },
]

const FeaturedCausesHome = () =>(
    <section class="features_causes">
		<div class="container">
			<div class="main_title">
				<h2>Featured causes</h2>
				<p>Creepeth called face upon face yielding midst is after moveth </p>
			</div>

			<div class="row">
				{carts.map(({image, title, text, donors, raised, goal},i)=><CauseCart key={i} image={image} title={title} text={text} donors={donors} raised={raised} goal={goal}/>)}
			</div>
		</div>
	</section>
)

export default FeaturedCausesHome;