import React,{useEffect} from 'react';
import ImageGallery from 'react-image-gallery';
import "./entrepreneurship.styles.scss";

import ReactComponent1 from "./sewing/e1.jpg";
import ReactComponent2 from "./sewing/e2.jpg";
import ReactComponent3 from "./sewing/e3.png";
import ReactComponent4 from "./sewing/e4.png";
import ReactComponent5 from "./sewing/e5.png";
import ReactComponent6 from "./sewing/e6.png";
import ReactComponent7 from "./sewing/e7.png";
import ReactComponent8 from "./sewing/e8.jpg";
import ReactComponent9 from "./sewing/e9.png";
import ReactComponent10 from "./sewing/e10.jpg";
import ReactComponent11 from "./sewing/e11.jpg";
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
}
]


const Sewing = () =>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <React.Fragment>
            <BannerArea text = "Our Stories" />
            <div className="container mt-5">
            <div className="main_title">
				<h2>Sewing</h2>
			</div>
                <ImageGallery items = {IMAGES}/>
            </div>
            
        </React.Fragment>
    )
}

export default Sewing;