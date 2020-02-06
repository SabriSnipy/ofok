import React, { useState } from 'react';

import "./becomeVolunteer.styles.scss";
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
    const [city, setCity] = useState("")

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
            case "city":
            setCity(event.target.value)
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
            <input type="email" name="email" placeholder="Email" value={email} required className="single-input" onChange={handleChange}/>
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
        </form>
    </div>
    </section>
    
    </React.Fragment>
}

export default DonatePage;