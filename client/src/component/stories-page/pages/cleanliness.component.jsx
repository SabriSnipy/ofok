import React,{useEffect} from 'react';
import ImageGallery from 'react-image-gallery';
import "./entrepreneurship.styles.scss";

import ReactComponent1 from "./cleanliness/e1.jpg";
import ReactComponent2 from "./cleanliness/e2.jpg";
import ReactComponent3 from "./cleanliness/e3.jpg";
import ReactComponent4 from "./cleanliness/e4.jpg";
import ReactComponent5 from "./cleanliness/e5.jpg";
import ReactComponent6 from "./cleanliness/e6.jpg";
import ReactComponent7 from "./cleanliness/e7.jpg";
import ReactComponent8 from "./cleanliness/e8.jpg";
import ReactComponent9 from "./cleanliness/e9.jpg";
import ReactComponent10 from "./cleanliness/e10.jpg";
import ReactComponent11 from "./cleanliness/e11.jpg";
import ReactComponent12 from "./cleanliness/e12.jpg";
import ReactComponent13 from "./cleanliness/e13.jpg";
import ReactComponent14 from "./cleanliness/e14.jpg";
import ReactComponent15 from "./cleanliness/e15.jpg";
import ReactComponent16 from "./cleanliness/e16.jpg";
import ReactComponent17 from "./cleanliness/e17.jpg";
import ReactComponent18 from "./cleanliness/e18.jpg";
import ReactComponent19 from "./cleanliness/e19.jpg";
import ReactComponent20 from "./cleanliness/e20.jpg";
import ReactComponent21 from "./cleanliness/e21.jpg";
import ReactComponent22 from "./cleanliness/e22.jpg";
import ReactComponent23 from "./cleanliness/e23.jpg";
import ReactComponent24 from "./cleanliness/e24.jpg";
import ReactComponent25 from "./cleanliness/e25.jpg";
import ReactComponent26 from "./cleanliness/e26.jpg";
import ReactComponent27 from "./cleanliness/e27.jpg";
import BannerArea from '../../banner-area.component';

const IMAGES =
[{
        original: ReactComponent1,
        thumbnail: ReactComponent1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
},
{
    original: ReactComponent2,
    thumbnail: ReactComponent2,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},

{
    original: ReactComponent3,
    thumbnail: ReactComponent3,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent4,
    thumbnail: ReactComponent4,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent5,
    thumbnail: ReactComponent5,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent6,
    thumbnail: ReactComponent6,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent7,
    thumbnail: ReactComponent7,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent8,
    thumbnail: ReactComponent8,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent9,
    thumbnail: ReactComponent9,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent10,
    thumbnail: ReactComponent10,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent11,
    thumbnail: ReactComponent11,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent12,
    thumbnail: ReactComponent12,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent13,
    thumbnail: ReactComponent13,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent14,
    thumbnail: ReactComponent14,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent15,
    thumbnail: ReactComponent15,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent16,
    thumbnail: ReactComponent16,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent17,
    thumbnail: ReactComponent17,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent18,
    thumbnail: ReactComponent18,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent19,
    thumbnail: ReactComponent19,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent20,
    thumbnail: ReactComponent20,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent21,
    thumbnail: ReactComponent21,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent22,
    thumbnail: ReactComponent22,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent23,
    thumbnail: ReactComponent23,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent24,
    thumbnail: ReactComponent24,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent25,
    thumbnail: ReactComponent25,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent26,
    thumbnail: ReactComponent26,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent27,
    thumbnail: ReactComponent27,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
}
]


const Cleanliness = () =>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <React.Fragment>
            <BannerArea text = "Our Stories" />
            <div className="container mt-5">
            <div className="main_title">
				<h2>Cleanliness campaign</h2>
			</div>
                <ImageGallery items = {IMAGES}/>
            </div>
            
        </React.Fragment>
    )
}

export default Cleanliness;