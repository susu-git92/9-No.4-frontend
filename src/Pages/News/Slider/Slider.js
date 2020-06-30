import React from 'react';
import './Slider.scss';
//import { Slide } from 'react-slideshow-image';
import Slider from 'react-slick';
//import '../../../node_modules/slick-carousel/slick/slick.css';
//import '../../../node_modules/slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const photos = [
  {
    name: 'Photo 1',
    url:
      'https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_1344/FSH-CHN-1592983596128-eyewearss20pedrowinter01bts169.jpg',
  },
  {
    name: 'Photo 2',
    url:
      'https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_680/FSH-CHN-1592208804078-eyewearss20pedrowinter02bts169.jpg',
  },
  {
    name: 'Photo 3',
    url:
      'https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_680/FSH-CHN-1592208804853-eyewearss20pedrowinter03bts169.jpg',
  },
  {
    name: 'Photo 4',
    url:
      'https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_680/FSH-CHN-1592208805205-eyewearss20pedrowinter04bts169.jpg',
  },
  {
    name: 'Photo 5',
    url:
      'https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_680/FSH-CHN-1592208807134-eyewearss20pedrowinter05bts169.jpg',
  },
];

class SlideView extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'slides',
    };

    return (
      <>
        <Slider
          className="slider"
          {...settings}
          class="fs-icon icon-hv4-arrow-right"
          aria-hidden="true"
        >
          {photos.map((photo) => {
            return (
              <div className="each-slide">
                <div className="slideImg">
                  <img width="100%" src={photo.url} alt="slider img" />
                  <i
                    class="fs-icon icon-hv4-arrow-right"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            );
          })}
        </Slider>
      </>
    );
  }
}
export default SlideView;
