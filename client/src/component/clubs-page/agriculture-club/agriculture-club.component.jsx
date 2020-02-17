import React from 'react';
// import Gallery from 'react-grid-gallery';
import ImageGallery from 'react-image-gallery';
import "../entrepreneurship-club/entrepreneurship.styles.scss";


import ReactComponent1 from "./img/e1.jpg";
import ReactComponent2 from "./img/e2.jpg";
import ReactComponent3 from "./img/e3.jpg";
import ReactComponent4 from "./img/e4.jpg";
import ReactComponent5 from "./img/e5.jpg";
import ReactComponent6 from "./img/e6.jpg";
import ReactComponent7 from "./img/e7.jpg";
import ReactComponent8 from "./img/e8.jpg";
import ReactComponent9 from "./img/e9.jpg";
import ReactComponent10 from "./img/e10.jpg";
import ReactComponent11 from "./img/e11.jpg";
import ReactComponent12 from "./img/e12.jpg";
import ReactComponent13 from "./img/e13.jpg";
import ReactComponent14 from "./img/e14.jpg";
import ReactComponent15 from "./img/e15.jpg";
import ReactComponent16 from "./img/e16.jpg";

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
}
]


const AgricultureClub = () =>{

    return(
        <React.Fragment>
            <BannerArea text = "Agriculture Club" />
            {/* <Gallery images={IMAGES}/> */}
            <div className="container mt-5">
                <ImageGallery items = {IMAGES}/>
            </div>
            
        </React.Fragment>
    )
}

export default AgricultureClub;