import React from 'react';

const CauseCart = ({image, title, text, raised, goal, donors}) =>(
    <div class="col-lg-4 col-md-6">
		<div class="card">
            <div class="card-body">
                <figure>
                    <img class="card-img-top img-fluid" src={image} alt="Card cap"/>
                </figure>
                <div class="card_inner_body">
                    <h4 class="card-title">{title}</h4>
                    <p class="card-text">
                        {text}
                    </p>
                    <div class="d-flex justify-content-between raised_goal">
                        <p>Raised: ${raised}</p>
                        <p><span>Goal: ${goal}</span></p>
                    </div>
                    <div class="d-flex justify-content-between donation align-items-center">
                        <a href="/" class="primary_btn">donate</a>
                        <p><span class="lnr lnr-heart"></span> {donors} Donors</p>
                    </div>
                </div>
            </div>
		</div>
	</div>
)

export default CauseCart;