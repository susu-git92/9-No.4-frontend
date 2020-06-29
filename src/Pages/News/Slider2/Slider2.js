import React, { Component } from 'react';
import './Slider2.scss';
import { srcs } from '../../../config';
//import { Slide } from 'react-slideshow-image';
import Slider2 from 'react-slick';
//import '../../../node_modules/slick-carousel/slick/slick.css';
//import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const photos2 = [
  {
    name: 'secondPhoto 1',
    url: "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1344/FSH-CHN-1591781863700-200603chanelcruisejmllook040.jpg"
    },
  {name: 'secondPhoto 2',
    url: "http://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1344/FSH-CHN-1591781861682-200603chanelcruisejmllook035.jpg"
    }
]

class SlideView2 extends React.Component{
render () {
const settings = {
dots : true,
infinite: true,
arrows: true,
speed: 500,
slidesToShow: 1,
slidesToScroll: 1,
className: 'slides',
}

return(
  <>
    <Slider2 className="slider2" {...settings} class="fs-icon icon-hv4-arrow-right" aria-hidden="true">
      {photos2.map((secondPhoto) => {
        return (
            <div className = "each-slide2">                
              <div className = "slideImg2">
                <img width= "100%" height= "100%"  src={secondPhoto.url} />
                <i class="fs-icon icon-hv4-arrow-right" aria-hidden="true"></i>
              </div>
            </div>
        )
      })}
    </Slider2>

  </>
);
}
}
export default SlideView2;
  