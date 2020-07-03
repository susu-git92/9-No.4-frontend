import React, { Component } from 'react';
import './Slider3.scss';
//import { Slide } from 'react-slideshow-image';
import Slider3 from 'react-slick';
//import '../../../node_modules/slick-carousel/slick/slick.css';
//import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const photos3 = [
  {
    name: 'thirdPhoto 1',
    url: "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1344/FSH-CHN-1591781849966-200603chanelcruisejmllook041i01.jpg"
    },
  {name: 'thirdPhoto 2',
    url: "https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1344/FSH-CHN-1591781846710-21clandscapes1x12.jpg"
    }
]

class SlideView3 extends React.Component{
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
      <Slider3 className="slider3" {...settings} class="fs-icon icon-hv4-arrow-right" aria-hidden="true">
        {photos3.map((thirdPhoto) => {
          return (
              <div className = "each-slide3">                
                <div className = "slideImg3">
                  <img width= "100%" height= "100%"  src={thirdPhoto.url} />
                  <i class="fs-icon icon-hv4-arrow-right" aria-hidden="true"></i>
                </div>
              </div>
          )
        })}
      </Slider3>
  
    </>
  );
  }
  }
  export default SlideView3;
    