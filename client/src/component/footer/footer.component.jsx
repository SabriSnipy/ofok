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
								So seed seed green that winged cattle in. Gathering thing made fly you're no 
								divided deep moved us lan Gathering thing us land years living.
							</p>
							<p>
								So seed seed green that winged cattle in. Gathering thing made fly you're no divided deep moved 
							</p>
						</div>
					</div>
					<div className="offset-lg-1 col-lg-2 col-md-6 col-sm-6">
						<div className="single-footer-widget tp_widgets">
							<h4 className="footer_title">Quick Links</h4>
							<ul className="list">
								<li><a href="/">Home</a></li>
								<li><a href="/">About</a></li>
								<li><a href="/">Causes</a></li>
								<li><a href="/">Event</a></li>
								<li><a href="/">News</a></li>
								<li><a href="/">Contact</a></li>
							</ul>
						</div>
					</div>
					<div className="col-lg-2 col-md-6 col-sm-6">
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
								<p>123, Main Street, Your City</p>
	
								<p className="sm-head">
									<span className="fa fa-phone"></span>
									Phone Number
								</p>
								<p>
									+123 456 7890 <br/>
									+123 456 7890
								</p>
	
								<p className="sm-head">
									<span className="fa fa-envelope"></span>
									Email
								</p>
								<p>
									free@infoexample.com <br/>
									www.infoexample.com
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

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