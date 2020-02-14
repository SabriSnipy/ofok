import React from 'react';
// import Gallery from 'react-grid-gallery';
import ImageGallery from 'react-image-gallery';
import "../entrepreneurship-club/entrepreneurship.styles.scss";


import ReactComponent1 from "./mental/e1.jpg";
import ReactComponent2 from "./mental/e2.jpg";
// import ReactComponent3 from "./mental/e3.jpg";
import ReactComponent4 from "./mental/e4.jpg";
import ReactComponent5 from "./mental/e5.jpg";
import ReactComponent6 from "./mental/e6.jpg";
import ReactComponent7 from "./mental/e7.jpg";
import ReactComponent8 from "./mental/e8.jpg";
import ReactComponent9 from "./mental/e9.jpg";
import ReactComponent10 from "./mental/e10.jpg";
import ReactComponent11 from "./mental/e11.jpg";
import ReactComponent12 from "./mental/e12.jpg";
import ReactComponent13 from "./mental/e13.jpg";
import ReactComponent14 from "./mental/e14.jpg";
import ReactComponent15 from "./mental/e15.jpg";
// import ReactComponent16 from "./mental/e16.jpg";
import ReactComponent17 from "./mental/e17.jpg";

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

// {
//     original: ReactComponent3,
//     thumbnail: ReactComponent3,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
// },
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
// {
//     original: ReactComponent16,
//     thumbnail: ReactComponent16,
//     thumbnailWidth: 320,
//     thumbnailHeight: 174,
// },
{
    original: ReactComponent17,
    thumbnail: ReactComponent17,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
}
]


const MentalArithmetic = () =>{

    return(
        <React.Fragment>
            <BannerArea text = "Mental Arithmetic Club" />
            {/* <Gallery images={IMAGES}/> */}
            <div className="container mt-5">
                <ImageGallery items = {IMAGES}/>
            </div>
            
        </React.Fragment>
    )
}

export default MentalArithmetic;