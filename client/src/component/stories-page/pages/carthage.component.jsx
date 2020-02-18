import React,{useEffect} from 'react';
import ImageGallery from 'react-image-gallery';
import "./entrepreneurship.styles.scss";

import ReactComponent1 from "./carthage/e1.jpg";
import ReactComponent2 from "./carthage/e2.jpg";
import ReactComponent3 from "./carthage/e3.jpg";
import ReactComponent4 from "./carthage/e4.jpg";
import ReactComponent5 from "./carthage/e5.jpg";
import ReactComponent6 from "./carthage/e6.jpg";
import ReactComponent7 from "./carthage/e7.jpg";
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
}
]


const Carthage = () =>{
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return(
        <React.Fragment>
            <BannerArea text = "Our Stories" />
            <div className="container mt-5">
            <div className="main_title">
				<h2>Carthage Land Excursion</h2>
			</div>
                <ImageGallery items = {IMAGES}/>
            </div>
            
        </React.Fragment>
    )
}

export default Carthage;