import React,{useEffect} from 'react';
import ImageGallery from 'react-image-gallery';
import "./entrepreneurship.styles.scss";

import ReactComponent1 from "./sponsor/e1.jpg";
import ReactComponent2 from "./sponsor/e2.jpg";
import ReactComponent3 from "./sponsor/e3.jpg";
import ReactComponent4 from "./sponsor/e4.jpg";
import ReactComponent5 from "./sponsor/e5.jpg";
import ReactComponent6 from "./sponsor/e6.jpg";
import ReactComponent7 from "./sponsor/e7.jpg";
import ReactComponent8 from "./sponsor/e8.jpg";
import ReactComponent9 from "./sponsor/e9.jpg";
import ReactComponent10 from "./sponsor/e10.jpg";
import ReactComponent11 from "./sponsor/e11.jpg";
import ReactComponent12 from "./sponsor/e12.jpg";
import ReactComponent13 from "./sponsor/e13.jpg";
import ReactComponent14 from "./sponsor/e14.jpg";
import ReactComponent15 from "./sponsor/e15.jpg";
import ReactComponent16 from "./sponsor/e16.jpg";
import ReactComponent17 from "./sponsor/e17.jpg";
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
}
]


const Sponsor = () =>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <React.Fragment>
            <BannerArea text = "Our Stories" />
            <div className="container mt-5">
            <div className="main_title">
				<h2>Sponsor my studies and consider me as your daughter or son</h2>
			</div>
                <ImageGallery items = {IMAGES}/>
            </div>
            
        </React.Fragment>
    )
}

export default Sponsor;