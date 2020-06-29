import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import SlideView from '../News/Slider/Slider';
import { srcs } from '../../config';
import './News.scss';

export class News extends React.Component {
  render() {
    return (
      <div className="news">
        <Nav />
        <div className="newsWrapper">
          <div className="newsHeader">
            <div className="newsLogoWrapper">
              <div className="wrapperwrapper">
                <img
                  className="newsHeader"
                  src={srcs.img.news.newsLetterLogo}
                  alt="new logo"
                ></img>
              </div>
            </div>
            <div className="newsArticle">
              <SlideView />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default News;
