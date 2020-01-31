import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {CHANGEHEADERLINK} from "../../redux/actions/actions";

import "./header.styles.scss";


class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			theposition:0
		}
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
		let {CHANGEHEADERLINK, links} = this.props
		return(
			<header className={this.state.theposition<100?"header_area":"header_area navbar_fixed"}>
					<div className="main_menu">
						<div className="container">
							<nav className="navbar navbar-expand-lg navbar-light">
								<div className="container">
									<Link to="/" className="navbar-brand logo_h"><img src="img/logo.png" alt=""/></Link>
									<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
									<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
										<ul className="nav navbar-nav menu_nav ml-auto">
											<li className={links.home?"nav-item active":"nav-item"}><Link to="/" className="nav-link" onClick={()=>CHANGEHEADERLINK({home:true,contactUs:false,aboutUs:false})}>Home</Link></li> 
											<li className={links.aboutUs?"nav-item active":"nav-item"}><Link to="about-us" className="nav-link" onClick={()=>CHANGEHEADERLINK({home:false,contactUs:false,aboutUs:true})}>About</Link></li> 
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
											<li className={links.contactUs?"nav-item active":"nav-item"}><Link to="/contact" className="nav-link" onClick={()=>CHANGEHEADERLINK({home:false,contactUs:true,aboutUs:false})}>Contact</Link></li>
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
function mapStateToProps(state) {
	return{
		links : state.header.links
	}	
}

export default connect(mapStateToProps, {CHANGEHEADERLINK})(Header);