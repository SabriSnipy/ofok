import React ,{useEffect} from 'react';
import ImageGallery from 'react-image-gallery';
import "./entrepreneurship.styles.scss";

import ReactComponent1 from "./camping/e1.jpg";
import ReactComponent2 from "./camping/e2.jpg";
import ReactComponent3 from "./camping/e3.jpg";
import ReactComponent4 from "./camping/e4.jpg";
import ReactComponent5 from "./camping/e5.jpg";
import ReactComponent6 from "./camping/e6.jpg";
import ReactComponent7 from "./camping/e7.jpg";
import ReactComponent10 from "./camping/e10.jpg";
import ReactComponent11 from "./camping/e11.png";
import ReactComponent12 from "./camping/e12.jpg";
import ReactComponent13 from "./camping/e13.jpg";
import ReactComponent14 from "./camping/e14.jpg";
import ReactComponent15 from "./camping/e15.jpg";
import ReactComponent16 from "./camping/e16.jpg";
import ReactComponent17 from "./camping/e17.jpg";
import ReactComponent18 from "./camping/e18.jpg";
import ReactComponent19 from "./camping/e19.jpg";
import ReactComponent20 from "./camping/e20.jpg";
import ReactComponent21 from "./camping/e21.jpg";
import ReactComponent22 from "./camping/e22.png";
import ReactComponent23 from "./camping/e23.png";
import ReactComponent24 from "./camping/e24.jpg";
import ReactComponent25 from "./camping/e25.jpg";
import ReactComponent26 from "./camping/e26.jpg";
import ReactComponent27 from "./camping/e27.jpg";
import ReactComponent28 from "./camping/e28.jpg";
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
}
]


const Camping = () =>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <React.Fragment>
            <BannerArea text = "Our Stories" />
            <div className="container mt-5">
            <div className="main_title">
				<h2>Camping</h2>
			</div>
                <ImageGallery items = {IMAGES}/>
            </div>
            
        </React.Fragment>
    )
}

export default Camping;