import React from 'react';

import ReactComponent1 from "./img/v1.jpg";
import ReactComponent2 from "./img/v2.jpg";
import ReactComponent3 from "./img/v3.jpg";
import ReactComponent4 from "./img/v4.jpg";
import VolonteerCart from './volonteer-card.component';

const volonteers = [
    {
        image:ReactComponent1,
        name:"Alea Mirslava",
        position:"Party Manager",
        description:"So seed seed green that winged cattle in kath moved us land years living.",
        facebook:"/",
        twitter:"/",
        instagram:"/",
        mail:"/"
    },
    {
        image:ReactComponent2,
        name:"Adam Virland",
        position:"Party Manager",
        description:"So seed seed green that winged cattle in kath moved us land years living.",
        facebook:"/",
        twitter:"/",
        instagram:"/",
        mail:"/"
    },
    {
        image:ReactComponent3,
        name:"Adam Virland",
        position:"Party Manager",
        description:"So seed seed green that winged cattle in kath moved us land years living.",
        facebook:"/",
        twitter:"/",
        instagram:"/",
        mail:"/"
    },
    {
        image:ReactComponent4,
        name:"Adam Virland",
        position:"Party Manager",
        description:"So seed seed green that winged cattle in kath moved us land years living.",
        facebook:"/",
        twitter:"/",
        instagram:"/",
        mail:"/"
    }
]

const Volonteers = () =>(
    <section class="team_area section_gap">
		<div class="container">
			<div class="main_title">
				<h2>Meet our voluteer</h2>
				<p>Creepeth called face upon face yielding midst is after moveth </p>
			</div>
			<div class="row team_inner">
                {volonteers.map(({name, image, position, description, facebook, twitter, instagram, mail},i)=>
                    <VolonteerCart key={i} name={name} image={image} position={position} description={description} facebook={facebook} twitter={twitter} instagram={instagram} mail={mail} />
                )}
            </div>
        </div>
    </section>
)

export default Volonteers;