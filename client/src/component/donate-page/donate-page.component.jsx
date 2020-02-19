import React, { useState, useEffect } from 'react';
import axios from "axios";

import "./donate-page.styles.scss";
import BannerArea from '../banner-area.component';


const GOUVS = ["Ariana","Beja","Ben Arous","Bizerte","Gabes","Gafsa","Jendouba","Kairouan",
              "Kasserine","Kebili","Le Kef","Mahdia","Manouba","Medenine","Monastir","Nabeul",
              "Sfax","Sidi Bouzid","Siliana","Sousse","Tataouine","Tozeur","Tunis","Zaghouan"];

const COUNTRIES = ["Afghanistan" ,"Afrique Centrale" ,"Afrique du Sud","Albanie" ,"Algerie","Allemagne","Andorre",
                "Angola","Anguilla","Arabie Saoudite ","Argentine ","Armenie","Australie","Autriche","Azerbaidjan",
                "Bahamas","Bangladesh","Barbade","Bahrein","Belgique","Belize","Benin","Bermudes","Bielorussie","Bolivie",
                "Botswana","Bhoutan","Boznie Herzegovine","Bresil","Brunei","Bulgarie","Burkina Faso","Burundi","Caiman",
                "Cambodge","Cameroun","Canada","Canaries","Cap Vert","Chili","Chine","Chypre","Colombie","Colombie","Congo",
                "Congo democratique","Cook","Coree du Nord ","Coree du Sud","Costa Rica","Côte d Ivoire","Croatie",
                "Cuba","Danemark","Djibouti","Dominique","Egypte","Emirats Arabes Unis","Equateur","Erythree","Espagne",
                "Estonie","Etats Unis","Ethiopie","Falkland","Feroe","Fidji","Finlande","France","Gabon","Gambie","Georgie",
                "Ghana","Gibraltar","Grece","Grenade","Groenland","Guadeloupe","Guam","Guatemala","Guernesey","Guinee",
                "Guinee Bissau","Guinee Equatoriale","Guyana","Guyane Francaise","Haiti","Hawaii","Honduras","Hong Kong",
                "Hongrie","Inde","Indonesie","Iran","Iraq","Irlande","Islande","Italie","Jamaique","Jan Mayen","Japon","Jersey",
                "Jordanie","Kazakhstan","Kenya","Kirghizistan","Kiribati","Koweit","Laos","Lesotho","Lettonie","Liban","Liberia",
                "Liechtenstein","Lituanie","Luxembourg","Lybie","Macao","Macedoine","Madagascar","Madère","Malaisie","Malawi",
                "Maldives","Mali","Malte","Man","Mariannes du Nord","Maroc","Marshall","Martinique","Maurice","Mauritanie","Mayotte",
                "Mexique","Micronesie","Midway","Moldavie","Monaco","Mongolie","Montserrat","Mozambique","Namibie","Nauru",
                "Nepal","Nicaragua","Niger","Nigeria","Niue","Norfolk","Norvege","Nouvelle Caledonie","Nouvelle Zelande",
                "Oman","Ouganda","Ouzbekistan","Pakistan","Palau","Palestine","Panama","Papouasie Nouvelle Guinee","Paraguay",
                "Pays Bas","Perou","Philippines","Pologne","Polynesie","Porto Rico","Portugal","Qatar","Republique Dominicaine",
                "Republique Tcheque","Reunion","Roumanie","Royaume Uni","Russie","Rwanda","Sahara Occidental","Sainte Lucie",
                "Saint Marin","Salomon","Salvador","Samoa Occidentales","Samoa Americaine","Sao Tome et Principe",
                "Senegal","Seychelles","Sierra Leone","Singapour","Slovaquie","Slovenie","Somalie","Soudan","Sri Lanka",
                "Sued","Suisse","Surinam","Swaziland","Syrie","Adjikistan","Taiwan","Tonga","Tanzanie","Tchad","Thailande","Tibet",
                "Timor Oriental","Togo","Trinite et Tobago","Tristan de cuncha","Turmenistan", "Tunisie","Turquie","Ukraine",
                "Uruguay","Vanuatu","Vatican","Venezuela","Vierges Americaines","Vierges Britanniques","Vietnam","Wake",
                "Wallis et Futuma","Yemen","Yougoslavie","Zambie","Zimbabwe"]

const DonatePage = () =>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    const [open, setOpen] = useState(false)
    const [openCountry, setOpenCountry] = useState(false)
    const [openSubject, setOpenSubject] = useState(false)
    const [current, setCurrent] = useState("City")
    const [currentCountry, setCurrentCountry] = useState("Country")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [numTel, setNumTel] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [message, setMessage] = useState("")
    const [city, setCity] = useState("")
    const [subject, setSubject] = useState("Subject")
    const [errorMessage , setErrorMessage] = useState("")
    const [success , setSucces] = useState(false)

    const openSelect = () =>{
        setOpen(!open)
    }

    const openSubjectHandler = () =>{
        setOpenSubject(!openSubject)
    }

    const selectCity = (value) =>{
        setCurrent(value)
        setErrorMessage("")
    }

    const openSelectCountry = () =>{
        setOpenCountry(!openCountry)
    }

    const selectCountry = (value) =>{
        setCurrentCountry(value)
        setErrorMessage("")
    }

    const selectSubject = (value) =>{
        setSubject(value)
        setErrorMessage("")
    }
    const handleChange = (event) => {
        switch (event.target.name) {
            case "firstName":
            setFirstName(event.target.value)
            setErrorMessage("")
            break;
            case "lastName":
            setLastName(event.target.value)
            setErrorMessage("")
            break;
            case "numTel":
            setNumTel(event.target.value)
            setErrorMessage("")
            break;
            case "email":
            setEmail(event.target.value)
            setErrorMessage("")
            break;
            case "address":
            setAddress(event.target.value)
            setErrorMessage("")
            break;
            case "message":
            setMessage(event.target.value)
            setErrorMessage("")
            break;
            case "city":
            setCity(event.target.value)
            setErrorMessage("")
            break;
            default:
            break;
        }
    }
    const handleSubmit = async (event) =>{
        event.preventDefault()
        try {
            let res = await axios({
            url:"/user/become-a-volunteer",
            method:"post",
            data:{
                firstName, 
                lastName, 
                phoneNumber:numTel, 
                email, 
                subject, 
                address, 
                country:currentCountry, 
                city : currentCountry === "Tunisie"?current:city, 
                message
            }
        })
            setSucces(true)
            setErrorMessage(res.data.message)
            setFirstName("")
            setLastName("")
            setNumTel("")
            setEmail("")
            setAddress("")
            setCurrent("")
            setCurrentCountry("")
            setCity("")
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
       
    <BannerArea text="Donate Now / Become A Volunteer" />
    <section className="contact_area section_gap">
        <div className="container">
            <h2 className="text-center mb-5">
            Please fill in the fields and send us a message and we will contact you as soon as possible
            </h2>
    <form onSubmit={handleSubmit}>
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
            <input type="email" name="email" placeholder="Email" value={email} required className="single-input" onChange={handleChange}/>
        </div>

        <div className="input-group-icon mt-10">
            <div className="icon"><i className="fa fa-check" aria-hidden="true"></i></div>
            <div className="form-select" id="default-select2">
                <div className={openSubject?"nice-select open":"nice-select"} tabIndex="0" onClick={openSubjectHandler}>
                    <span className="current">{subject}</span>
                    <ul className="list">
                        <li className={subject === "Donate"?"option selected focus":"option"} onClick={()=>selectSubject("Donate")}>Donate</li>
                        <li className={subject === "Become a volunteer"?"option selected focus":"option"} onClick={()=>selectSubject("Become a volunteer")}>Become a volunteer</li>
                    </ul>
                </div>
            </div>
        </div>


        <div className="input-group-icon mt-10">
            <div className="icon"><i className="fa fa-thumb-tack" aria-hidden="true"></i></div>
            <input type="text" name="address" placeholder="Address" value={address} required className="single-input" onChange={handleChange}/>
        </div>

       

        <div className="input-group-icon mt-10">
            <div className="icon"><i className="fa fa-globe" aria-hidden="true"></i></div>
            <div className="form-select" id="default-select2">
                <div className={openCountry?"nice-select open":"nice-select"} tabIndex="0" onClick={openSelectCountry}>
                    <span className="current">{currentCountry}</span>
                    <ul className="list">
                        <li data-value="1" className={currentCountry === "Country"?"option selected focus":"option"} onClick={()=>selectCountry("Country")}>Country</li>
                        {COUNTRIES.map((el,i)=>
                            <li key={i} className={currentCountry === {el}?"option selected focus":"option"} onClick={()=>selectCountry(el)}>{el}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>

       {currentCountry === "Tunisie"? <div className="input-group-icon mt-10">
            <div className="icon"><i className="fa fa-plane" aria-hidden="true"></i></div>
            <div className="form-select" id="default-select">
                <div className={open?"nice-select open":"nice-select"} tabIndex="0" onClick={openSelect}>
                    <span className="current">{current}</span>
                    <ul className="list">
                        <li data-value="1" className={current === "City"?"option selected focus":"option"} onClick={()=>selectCity("City")}>City</li>
                        {GOUVS.map((el,i)=>
                        <li className={current === {el}?"option selected focus":"option"} onClick={()=>selectCity(el)}>{el}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>:
        <div className="input-group-icon mt-10">
            <div className="icon"><i className="fa fa-plane" aria-hidden="true"></i></div>
            <input type="text" name="city" placeholder="City" value={city} required className="single-input" onChange={handleChange}/>
        </div>
        }
        
        <div className="mt-10">
            <textarea className="single-textarea" name="message" placeholder="Message" value={message} required onChange={handleChange}></textarea>
        </div>
        <div className="mt-5 text-right">
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
    </section>
    
    </React.Fragment>
}

export default DonatePage;