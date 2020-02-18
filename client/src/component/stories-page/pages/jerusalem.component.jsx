import React,{useEffect} from 'react';
import ImageGallery from 'react-image-gallery';
import "./entrepreneurship.styles.scss";

import ReactComponent1 from "./jerusalem/e1.jpg";
import ReactComponent2 from "./jerusalem/e2.jpg";
import ReactComponent3 from "./jerusalem/e3.jpg";
import ReactComponent4 from "./jerusalem/e4.jpg";
import ReactComponent5 from "./jerusalem/e5.jpg";
import ReactComponent6 from "./jerusalem/e6.jpg";
import ReactComponent7 from "./jerusalem/e7.jpg";
import ReactComponent8 from "./jerusalem/e8.jpg";
import ReactComponent9 from "./jerusalem/e9.jpg";
import ReactComponent10 from "./jerusalem/e10.jpg";
import ReactComponent11 from "./jerusalem/e11.jpg";
import ReactComponent12 from "./jerusalem/e12.jpg";
import ReactComponent13 from "./jerusalem/e13.jpg";
import ReactComponent14 from "./jerusalem/e14.jpg";
import ReactComponent15 from "./jerusalem/e15.jpg";
import ReactComponent16 from "./jerusalem/e16.jpg";
import ReactComponent17 from "./jerusalem/e17.jpg";
import ReactComponent18 from "./jerusalem/e18.jpg";
import ReactComponent19 from "./jerusalem/e19.jpg";
import ReactComponent20 from "./jerusalem/e20.jpg";
import ReactComponent21 from "./jerusalem/e21.jpg";
import ReactComponent22 from "./jerusalem/e22.jpg";
import ReactComponent23 from "./jerusalem/e23.jpg";
import ReactComponent24 from "./jerusalem/e24.jpg";
import ReactComponent25 from "./jerusalem/e25.jpg";
import ReactComponent26 from "./jerusalem/e26.jpg";
import ReactComponent27 from "./jerusalem/e27.jpg";
import ReactComponent28 from "./jerusalem/e28.jpg";
import ReactComponent29 from "./jerusalem/e29.jpg";
import ReactComponent30 from "./jerusalem/e30.jpg";
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
},
{
    original: ReactComponent28,
    thumbnail: ReactComponent28,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent29,
    thumbnail: ReactComponent29,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
{
    original: ReactComponent30,
    thumbnail: ReactComponent30,
    thumbnailWidth: 320,
    thumbnailHeight: 174,
},
]


const Jerusalem = () =>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <React.Fragment>
            <BannerArea text = "Our Stories" />
            <div className="container mt-5">
            <div className="main_title">
				<h2>Jerusalem is my trust</h2>
			</div>
                <ImageGallery items = {IMAGES}/>
            </div>
            
        </React.Fragment>
    )
}

export default Jerusalem;