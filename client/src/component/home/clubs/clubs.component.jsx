import React from 'react';

import ReactComponent1 from "./img/v1.png";
import ReactComponent2 from "./img/v2.png";
import ReactComponent3 from "./img/v3.png";
import ReactComponent4 from "./img/v4.jpeg";
import ClubsCart from './clubs-card.component';

const volonteers = [
    {
        image:ReactComponent1,
        name:"Mental arithmetic",
        position:"Maths Club",
        description:"calculations that you do in your mind, without writing down any numbers",
    },
    {
        image:ReactComponent2,
        name:"Sciences",
        position:"Sciences Club",
        description:"Science Club is an afterschool, mentor-based science program for middle school youth.",
    },
    {
        image:ReactComponent3,
        name:"Agriculture",
        position:"Agriculture Club",
        description:"This club is for students interested in  Agriculture and Production Agriculture.",
    },
    {
        image:ReactComponent4,
        name:"Entrepreneurship",
        position:"Entrepreneurship Club",
        description:"This club is an environment where students can cultivate their entrepreneurship skills.",
    }
]

const Clubs = () =>(
    <section className="team_area section_gap">
		<div className="container">
			<div className="main_title">
				<h2>Our Clubs</h2>
				<p>OFOK association sponsors families through a group of clubs </p>
			</div>
			<div className="row team_inner">
                {volonteers.map(({name, image, position, description, facebook, twitter, instagram, mail},i)=>
                    <ClubsCart key={i} name={name} image={image} position={position} description={description} facebook={facebook} twitter={twitter} instagram={instagram} mail={mail} />
                )}
            </div>
        </div>
    </section>
)

export default Clubs;