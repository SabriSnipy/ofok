import React, { useState } from 'react';

import "./donate-page.styles.scss";
import BannerArea from '../banner-area.component';

const DonatePage = () =>{
    const [open, setOpen] = useState(false)
    const [openCountry, setOpenCountry] = useState(false)
    const [current, setCurrent] = useState("City")
    const [currentCountry, setCurrentCountry] = useState("Country")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [numTel, setNumTel] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [message, setMessage] = useState("")

    const openSelect = () =>{
        setOpen(!open)
    }

    const selectCity = (value) =>{
        setCurrent(value)
    }

    const openSelectCountry = () =>{
        setOpenCountry(!openCountry)
    }

    const selectCountry = (value) =>{
        setCurrentCountry(value)
    }

    const handleChange = (event) => {
        switch (event.target.name) {
            case "firstName":
            setFirstName(event.target.value)
            break;
            case "lastName":
            setLastName(event.target.value)
            break;
            case "numTel":
            setNumTel(event.target.value)
            break;
            case "email":
            setEmail(event.target.value)
            break;
            case "address":
            setAddress(event.target.value)
            break;
            case "message":
            setMessage(event.target.value)
            break;
            default:
            break;
        }
    }

    return <React.Fragment>
       
    <BannerArea text="Donate Now" />
    <section className="contact_area section_gap">
        <div className="container">
            <h2 className="text-center mb-5">
            Please fill in the fields and send us a message and we will contact you as soon as possible
            </h2>
    <form action="#">
        <div className="mt-10">
            <input type="text" name="firstName" placeholder="First Name" value={firstName} required className="single-input" onChange={handleChange}/>
        </div>
        <div className="mt-10">
            <input type="text" name="lastName" placeholder="Last Name" value={lastName} required className="single-input" onChange={handleChange}/>
        </div>
        <div className="mt-10">
            <input type="text" name="numTel" placeholder="Telephone Number" value={numTel} required className="single-input" onChange={handleChange}/>
        </div>
        <div className="mt-10">
            <input type="email" name="email" value={email} required className="single-input" onChange={handleChange}/>
        </div>
        <div className="input-group-icon mt-10">
            <div className="icon"><i className="fa fa-thumb-tack" aria-hidden="true"></i></div>
            <input type="text" name="address" placeholder="Address" value={address} required className="single-input" onChange={handleChange}/>
        </div>
        <div className="input-group-icon mt-10">
            <div className="icon"><i className="fa fa-plane" aria-hidden="true"></i></div>
            <div className="form-select" id="default-select">
                <div className={open?"nice-select open":"nice-select"} tabIndex="0" onClick={openSelect}>
                    <span className="current">{current}</span>
                    <ul className="list">
                        <li data-value="1" className={current === "City"?"option selected focus":"option"} onClick={()=>selectCity("City")}>City</li>
                        <li data-value="1" className={current === "Dhaka"?"option selected focus":"option"} onClick={()=>selectCity("Dhaka")}>Dhaka</li>
                        <li data-value="1" className={current === "Dilli"?"option selected focus":"option"} onClick={()=>selectCity("Dilli")}>Dilli</li>
                        <li data-value="1" className={current === "NewYork"?"option selected focus":"option"} onClick={()=>selectCity("NewYork")}>NewYork</li>
                        <li data-value="1" className={current === "Islamabad"?"option selected focus":"option"} onClick={()=>selectCity("Islamabad")}>Islamabad</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="input-group-icon mt-10">
            <div className="icon"><i className="fa fa-globe" aria-hidden="true"></i></div>
            <div className="form-select" id="default-select2">
                <div className={openCountry?"nice-select open":"nice-select"} tabIndex="0" onClick={openSelectCountry}>
                    <span className="current">{currentCountry}</span>
                    <ul className="list">
                        <li data-value="1" className={currentCountry === "Country"?"option selected focus":"option"} onClick={()=>selectCountry("Country")}>Country</li>
                        <li data-value="1" className={currentCountry === "Bangladesh"?"option selected focus":"option"} onClick={()=>selectCountry("Bangladesh")}>Bangladesh</li>
                        <li data-value="1" className={currentCountry === "India"?"option selected focus":"option"} onClick={()=>selectCountry("India")}>India</li>
                        <li data-value="1" className={currentCountry === "England"?"option selected focus":"option"} onClick={()=>selectCountry("England")}>England</li>
                        <li data-value="1" className={currentCountry === "Srilanka"?"option selected focus":"option"} onClick={()=>selectCountry("Srilanka")}>Srilanka</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="mt-10">
            <textarea className="single-textarea" name="message" placeholder="Message" value={message} required onChange={handleChange}></textarea>
        </div>
        <div className="mt-5 text-right">
            <button type="submit" value="submit" className="btn primary_btn">Send Message</button>
        </div>    
        </form>
    </div>
    </section>
    
    </React.Fragment>
}

export default DonatePage;