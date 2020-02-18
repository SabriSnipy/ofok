import React,{useEffect} from 'react';
import ImageGallery from 'react-image-gallery';
import "./entrepreneurship.styles.scss";

import ReactComponent1 from "./eid/e1.jpg";
import ReactComponent2 from "./eid/e2.jpg";
import ReactComponent3 from "./eid/e3.jpg";
import ReactComponent4 from "./eid/e4.jpg";
import ReactComponent5 from "./eid/e5.jpg";
import ReactComponent6 from "./eid/e6.JPG";
import ReactComponent7 from "./eid/e7.JPG";
import ReactComponent8 from "./eid/e8.JPG";
import ReactComponent9 from "./eid/e9.JPG";
import ReactComponent10 from "./eid/e10.JPG";
import ReactComponent11 from "./eid/e11.JPG";
import ReactComponent12 from "./eid/e12.JPG";
import ReactComponent13 from "./eid/e13.JPG";
import ReactComponent14 from "./eid/e14.JPG";
import ReactComponent15 from "./eid/e15.JPG";
import ReactComponent16 from "./eid/e16.JPG";
import ReactComponent17 from "./eid/e17.JPG";
import ReactComponent18 from "./eid/e18.JPG";
import ReactComponent19 from "./eid/e19.JPG";
import ReactComponent20 from "./eid/e20.JPG";
import ReactComponent21 from "./eid/e21.JPG";
import ReactComponent22 from "./eid/e22.JPG";
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
}
]


const Eid= () =>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <React.Fragment>
            <BannerArea text = "Our Stories" />
            <div className="container mt-5">
            <div className="main_title">
				<h2>Eid</h2>
			</div>
                <ImageGallery items = {IMAGES}/>
            </div>
            
        </React.Fragment>
    )
}

export default Eid;