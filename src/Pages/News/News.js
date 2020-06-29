import React from 'react';
import './News.scss';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { srcs } from '../../config';
//import { Slideshow} from 'react-slideshow-image';
//import Slider from './Slider/Slider';
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import SlideView from '../News/Slider/Slider';
//import '../../../node_modules/slick-carousel/slick/slick.css';
//import '../../../node_modules/slick-carousel/slick/slick-theme.css';
//import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons"
//import { faSquare } from "@fortawesome/free-regular-svg-icons"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class News extends React.Component {

render() {

return (
 

  <div className="news">
    <Nav/>
 
    <div className = "newsWrapper">         
      <div className="newsHeader" >

        <div className = "newsLogoWrapper">
          <div className = "wrapperwrapper">
            <img alt="newsHeader" src={srcs.img.news.newsLetterLogo}></img> 
          </div>
        </div>

      <div className = "newsArticle">
        <SlideView/>
      </div>   

      </div>
    </div>
    <Footer/> 

  </div>




);
};
}

export default News;