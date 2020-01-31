import React,{useEffect, useState } from 'react';
import axios from "axios";

import "./contact.styles.scss";
import BannerArea from '../banner-area.component';

const Contact = () =>{
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [subject , setSubject] = useState("")
    const [message , setMessage] = useState("")
    const [errorMessage , setErrorMessage] = useState("")
    const [success , setSucces] = useState(false)

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  
    const handleNameChange= (event) =>{
        setName(event.target.value)
        setErrorMessage("")
    }
    const handleEmailChange= (event) =>{
        setEmail(event.target.value)
        setErrorMessage("")
    }
    const handleSubjectChange= (event) =>{
        setSubject(event.target.value)
        setErrorMessage("")
    }
    const handleMessageChange= (event) =>{
        setMessage(event.target.value)
        setErrorMessage("")
    }

    const handleSubmit = async (event) =>{
        event.preventDefault()
        try {
            let res = await axios({
            url:"/user/contact-us",
            method:"post",
            data:{
                name, 
                email, 
                subject, 
                message
            }
        })
            setSucces(true)
            setErrorMessage(res.data.message)
            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
            setTimeout(() => {
                setErrorMessage("")
                setSucces(false)
            }, 3000);
        } catch (error) {
            setSucces(false)
            setErrorMessage(error.response.data.message)
            setTimeout(() => {
                setErrorMessage("")
                setSucces(false)
            }, 3000);
        }
        
    }
    
    return <React.Fragment>
       
    <BannerArea text="Contact Us"/>
    <section className="contact_area section_gap">
        <div className="container">
            <div id="mapBox" className="mapBox" 
                data-lat="40.701083" 
                data-lon="-74.1522848" 
                data-zoom="13" 
                data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
                data-mlat="40.701083"
                data-mlon="-74.1522848">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3233.9479667452592!2d10.593774907087566!3d35.85027941122083!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stn!4v1580397326025!5m2!1sfr!2stn" width="100%" height="450" frameBorder="0" title="Ofok" allowFullScreen={true}></iframe>
            </div>
            <div className="row">
                <div className="col-lg-3">
                    <div className="contact_info">
                        <div className="info_item">
                            <i className="lnr lnr-home"></i>
                            <h6>Sousse, Tunisia</h6>
                            <p>Charles De Gaul Street, Hammem Sousse</p>
                        </div>
                        <div className="info_item">
                            <i className="lnr lnr-phone-handset"></i>
                            <h6>00 (216) 73 364 929</h6>
                            <h6>00 (216) 55 452 272</h6>
                            <p>Mon to Fri 9am to 6 pm</p>
                        </div>
                        <div className="info_item">
                            <i className="lnr lnr-envelope"></i>
                            <h6>associationofok2011@gmail.com</h6>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <form className="row contact_form" onSubmit={handleSubmit} method="post" id="contactForm" noValidate="novalidate">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" value={name} onChange={handleNameChange}/>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" value={email} onChange={handleEmailChange} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" value={subject} onChange={handleSubjectChange} />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message" value={message} onChange={handleMessageChange} ></textarea>
                            </div>
                        </div>
                        <div className="col-md-12 text-right">
                            <button type="submit" value="submit" className="btn primary_btn">Send Message</button>
                        </div>
                        {
                            success && errorMessage ? 
                            <div className="alert alert-success col-md-12 text-center mt-5">
                                {
                                    errorMessage
                                }
                            </div>:
                            null
                        }
                        {
                            !success && errorMessage ? 
                            <div className="alert alert alert-danger col-md-12 text-center mt-5">
                                {
                                    errorMessage
                                }
                            </div>:
                            null
                        }
                    </form>
                </div>
            </div>
        </div>
    </section>
    </React.Fragment>
}

export default Contact;