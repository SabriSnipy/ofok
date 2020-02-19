import React, {useEffect} from 'react';
import BannerArea from './banner-area.component';
import AboutUsHome from './home/aboutUs-home.component';
import BecomeAVolunteer from './home/becomeAVolunteer.component';

const AboutUs = () =>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return <React.Fragment>
        <BannerArea text="About Us"/>
        <div className=" mt-5"></div>
        <AboutUsHome/>
        <BecomeAVolunteer/>
        <section className="team_area section_gap">
		<div className="container">
			<div className="main_title">
				<h2><span style={{color:"red"}}>Strategy</span> Engage-Educate-Empower</h2>
			</div>
			<div className="row team_inner">
                <h3>Emotional</h3>
                <p>
                Because of the trauma of losing their fathers, many orphans put up emotional walls that cause reckless behavior or lack of trust in adults.
                OFOK create environments that help to breach these walls and empower students through the process of volunteering to be a big brother or big sister to needy orphans, giving them a cause to be passionate about and a way to facilitate life change. 
                </p>
                <h3>Education and Life Skills</h3>
                <p>
                Nearly half of orphans who age out of Kafala and do not go to a university will end up homeless, become involved in crime and drugs, and get lost in the corruption of human trafficking.
                OFOK aims to set orphans up for a successful future by teaching them to set goals, assisting with their education, preparing them for the university entrance exam, providing networking opportunities for orphans to gain employment, and equipping them with knowledge and skills to avoid human trafficking. 
                </p>
                <h3>Spiritual</h3>
                <p>
                Orphans have little hope, issues with trust, and receive little guidance in life decisions.
                OFOK desires for them to understand that making wise life choices that lead to success result from disciplined hard work and unswerving belief.
                Our desired goal, which encourages a relationship with God through the local church, enables them to find hope, contentment, and purpose
                </p>
                
            </div>
        </div>
    </section>

    <section className="section_gap">
		<div className="container">
			<div className="main_title">
				<h2><span style={{color:"red"}}>Organizational</span> and administrative structure</h2>
                <p>We are committed to serving orphans and widows with dedicated oversight and intentionality </p>
            </div>
			<div className="row team_inner">
                <ul>
                    <li>President</li>
                    <li>Vice president</li>
                    <li>General secretary</li>
                    <li>Secretariat assistant</li>
                    <li>Treasurer</li>
                    <li>Treasury assistant</li>
                    <li>Member in charge of Financial Resources</li>
                    <li>Member in charge of Design</li>
                    <li>Member in charge of activities</li>
                    <li>Member in charge of Information</li>
                    <li>Member in charge of Medias</li>
                </ul>
            </div>
        </div>
    </section>

    <section className="team_area section_gap">
		<div className="container">
			<div className="main_title">
				<h2><span style={{color:"red"}}>Executive</span> Leadership Team</h2>
                <p>We believe in leading by serving</p>
            </div>
			<div className="row team_inner">
                <ul>
                    <li>Chief executive officer </li>
                    <li>Financial Assistant</li>
                    <li>Public Relations Assistant</li>
                    <li>Trainees</li>
                </ul>
            </div>
        </div>
    </section>

    <section className="section_gap">
		<div className="container">
			<div className="main_title">
				<h2><span style={{color:"red"}}>Youth</span> Section</h2>
                <p>We are thankful to have a talented and passionate team</p>
            </div>
			<div className="row team_inner">
                <ul>
                    <li>50 young active members</li>
                </ul>
            </div>
        </div>
    </section>
    </React.Fragment>
}

export default AboutUs;