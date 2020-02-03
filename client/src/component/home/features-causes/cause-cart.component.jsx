import React from 'react';

const CauseCart = ({image, title, text, raised, goal, donors}) =>(
    <div className="col-lg-4 col-md-6">
		<div className="card">
            <div className="card-body">
                <figure>
                    <img className="card-img-top img-fluid" src={image} alt="Card cap"/>
                </figure>
                <div className="card_inner_body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">
                        {text}
                    </p>
                    <div className="d-flex justify-content-between raised_goal">
                        <p>Raised: ${raised}</p>
                        <p><span>Goal: ${goal}</span></p>
                    </div>
                    <div className="d-flex justify-content-between donation align-items-center">
                        <a href="/" className="primary_btn">donate</a>
                        <p><span className="lnr lnr-heart"></span> {donors} Donors</p>
                    </div>
                </div>
            </div>
		</div>
	</div>
)

export default CauseCart;