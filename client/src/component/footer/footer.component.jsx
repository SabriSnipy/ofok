import React from 'react';
import "./footer.styles.scss";

const Footer = () =>(
    <footer>
		<div className="footer-area">
			<div className="container">
				<div className="row section_gap">
					<div className="col-lg-3 col-md-6 col-sm-6">
						<div className="single-footer-widget tp_widgets">
							<h4 className="footer_title large_title">Our Mission</h4>
							<p>
							• Providing wholistic care to orphaned and vulnerable children.<br/>
							• Granting scholarships to low-income students and families.<br/>
							• We coordinate with Ibn Khaldun clinic to receive cancer patients in OFOK’s guesthouse for the duration of their treatment.<br/>
							• Running Aid Convoys to empower others to live with greater independence and freedom from poverty, disease, and hunger.<br/>
							</p>
							
						</div>
					</div>
					
					<div className="col-lg-4 col-md-12 col-sm-12 offset-lg-1">
						<div className="single-footer-widget instafeed">
							<h4 className="footer_title">Gallery</h4>
							<ul className="list instafeed d-flex flex-wrap">
								<li><img src="img/gallery/g1.jpg" alt=""/></li>
								<li><img src="img/gallery/g2.jpg" alt=""/></li>
								<li><img src="img/gallery/g3.jpg" alt=""/></li>
								<li><img src="img/gallery/g4.jpg" alt=""/></li>
								<li><img src="img/gallery/g5.jpg" alt=""/></li>
								<li><img src="img/gallery/g6.jpg" alt=""/></li>
							</ul>
						</div>
					</div>
					<div className="offset-lg-1 col-lg-3 col-md-6 col-sm-6">
						<div className="single-footer-widget tp_widgets">
							<h4 className="footer_title">Contact Us</h4>
							<div className="ml-40">
								<p className="sm-head">
									<span className="fa fa-location-arrow"></span>
									Head Office
								</p>
								<p>Charles De Gaul Street, Hammem Sousse</p>
	
								<p className="sm-head">
									<span className="fa fa-phone"></span>
									Phone Number
								</p>
								<p>
								00 (216) 73 364 929 <br/>
								00 (216) 55 452 272
								</p>
	
								<p className="sm-head">
									<span className="fa fa-envelope"></span>
									Email
								</p>
								<p>
								associationofok2011@gmail.com
 								<br/>
 								info@ofok-association.com

								</p>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<p className="text-center m-4" >
									<strong>RIB  Albaraka Sahloul: 32021788101079121184</strong>
		</p>
		<div className="footer-bottom">
			<div className="container">
				<div className="row d-flex">
					<p className="col-lg-12 footer-text text-center">
                        Ofok Association
					</p>
				</div>
			</div>
		</div>
	</footer>
)
export default Footer;