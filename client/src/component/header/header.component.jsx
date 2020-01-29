import React from 'react';

import "./header.styles.scss";

class Header extends React.Component {
	state={
		theposition:0
	}
	componentDidMount() {
		window.addEventListener('scroll', this.listenToScroll)
	  }
	  
	  componentWillUnmount() {
		window.removeEventListener('scroll', this.listenToScroll)
	  }
	  
	  listenToScroll = () => {
		const winScroll =
		  document.body.scrollTop || document.documentElement.scrollTop	  
		this.setState({
		  theposition: winScroll,
		})
	  }
	render(){
		return(
			<header className={this.state.theposition<100?"header_area":"header_area navbar_fixed"}>
					<div className="main_menu">
						<div className="container">
							<nav className="navbar navbar-expand-lg navbar-light">
								<div className="container">
									<a className="navbar-brand logo_h" href="index.html"><img src="img/logo.png" alt=""/></a>
									<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
									<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
										<ul className="nav navbar-nav menu_nav ml-auto">
											<li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li> 
											<li className="nav-item"><a className="nav-link" href="about-us.html">About</a></li> 
											<li className="nav-item"><a className="nav-link" href="causes.html">Causes</a></li>
											<li className="nav-item submenu dropdown">
												<a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Pages</a>
												<ul className="dropdown-menu">
													<li className="nav-item"><a className="nav-link" href="events.html">Events</a></li>
													<li className="nav-item"><a className="nav-link" href="event-details.html">Event Details</a></li>
													<li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
												</ul>
											</li> 
											<li className="nav-item submenu dropdown">
												<a href="/" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Blog</a>
												<ul className="dropdown-menu">
													<li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
													<li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
													<li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details2</a></li>
												</ul>
											</li> 
											<li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
										</ul>
									</div> 
								</div>
							</nav>
						</div>
					</div>
				</header>
		)
	}
}


export default Header;