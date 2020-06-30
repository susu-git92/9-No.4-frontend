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
import SlideView2 from '../News/Slider2/Slider2';
import SlideView3 from '../News/Slider3/Slider3';

//import '../../../node_modules/slick-carousel/slick/slick.css';
//import '../../../node_modules/slick-carousel/slick/slick-theme.css';
//import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons"
//import { faSquare } from "@fortawesome/free-regular-svg-icons"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export class News extends React.Component {
  constructor() {
    super();
    this.state = {
      //scrolltrigger: false,
      prevScrollpos: window.pageYOffset,
      visible: true
    }
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
  
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
  
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

render() {

  return (

  <div className="news">
    <Nav/> 
    <div className = "newsWrapper">         
      <div className="newsHeader" >
        <div className = "newsLogoWrapper">
          <div className = "wrapperwrapper">
            <img className={`newsHeader ${this.state.prevScrollpos > 0 && this.state.visible === false ? "small" : ""}`}  src={srcs.img.news.newsLetterLogo}
            // style = {{ width: this.state.prevScrollpos > 0 && this.state.visible === false ? "670px" : "780px"}}
            ></img> 
          </div>
        </div>

        <div className = "newsArticle">
          <SlideView/>
        
          
        

          <div className="news-desc">
              <p className="news-credits font-family-basic">© CHANEL</p>
              
             
              <p className= "news-date">
                <time datetime="2020-06-16" class="__web-inspector-hide-shortcut__">2020년 6월 16일 화요일</time>
              </p>

              <h2 className="news-title">
               
                <p>2020 봄-여름</p>
                <p>아이웨어 캠페인</p>
                <p>비하인드 신</p> 
                
              </h2>

              <div className="news-text">
                <p>샤넬의 우아함을 담은 5개의 2020 봄-여름 아이웨어 디자인. 퍼렐 윌리엄스, 세바스티앙 텔리에르, 마가렛 퀄리 그리고 이자벨 아자니와 함께한 순간들, 카림 사들리가 담아냈습니다.</p>
                <p>
                  <a href="https://www.instagram.com/explore/tags/chaneleyewear/" target="_blank" rel="noopener">#CHANELEyewear</a> <br></br>
                  <a href="https://www.instagram.com/explore/tags/chanelsunglasses/" target="_blank" rel="noopener">#CHANELSunglasses</a>
                </p>
              </div>
          </div>


      

          <div className = "video-layout">
            <embed className="akamai-media-element" playsinline="" src="https://youtube.com/embed/izSJCau66To">
            </embed> 
          </div>
            
          <div className="news-desc">
              <p className="news-credits font-family-basic">© Karim Sadi</p>

              <p className= "news-date">
                <time datetime="2020-06-15" class="__web-inspector-hide-shortcut__">2020년 6월 15일 월요일</time>
              </p>

              <h2 className="news-title">
                <p>2020 봄-여름</p>
                <p>아이웨어 캠페인</p>
                <p>비하인드 신</p> 
              </h2>

              <div className="news-text">
                  <p>샤넬 2020 봄-여름 아이웨어 캠페인의 비하인드 신. 마가렛 퀄리, 앙젤, 이자벨 아자니, 퍼렐 윌리엄스 그리고 세바스티앙 텔리에르와 함께한 순간들을 전합니다.</p>
                  <p>
                    <a href="https://www.instagram.com/explore/tags/chaneleyewear/" target="_blank" rel="noopener">#CHANELEyewear</a> <br></br>
                    <a href="https://www.instagram.com/explore/tags/chanelsunglasses/" target="_blank" rel="noopener">#CHANELSunglasses</a>
                  </p>
              </div>
          </div>
        


          <div className = "video-layout">
            <embed
              className="akamai-media-element" playsinline="" src="https://youtube.com/embed/dP5YRKMQIBk">
            </embed>  
          </div>

          <div className="news-desc">
            <p className="news-credits font-family-basic">© Massimiliano Bomba</p>

            <p className= "news-date">
              <time datetime="2020-06-12" class="__web-inspector-hide-shortcut__">2020년 6월 12일 금요일</time>
            </p>

            <h2 className="news-title">
              <p>샤넬 2020/21</p>
              <p>크루즈 컬렉션</p>
              <p>플레이리스트</p> 
            </h2>

            <div className="news-text">
                <p>샤넬 2020/21 크루즈 컬렉션 프레젠테이션의 분위기에 영감을 받은 플레이리스트. 미쉘 고베르의 큐레이션으로 전합니다. 지금 바로 Melon 에서 만나보세요. 
                <br></br>마시밀리아노 봄바가 촬영했습니다.</p>
                <p>
                  <a href="https://www.instagram.com/explore/tags/chanelcruise/?hl=en/" target="_blank" rel="noopener">#CHANELCruise</a>
                </p>
            </div>
          </div>


          <SlideView2/>
          <div className="news-desc">
            <p className="news-credits font-family-basic">© Julien Martinez Leclerc</p>

            <p className= "news-date">
              <time datetime="2020-06-03" class="__web-inspector-hide-shortcut__">2020년 6월 3일 수요일</time>
            </p>

            <h2 className="news-title">
              <p>여유로운 매혹</p>
              <p>2020/21 크루즈</p> 
            </h2>

            <div className="news-text">
                <p>샤넬 2020/21 크루즈 컬렉션, 자유와 여유로움이 어우러진 매혹. 포토그래퍼 줄리앙 마르티네즈 르클레크. 
                <br></br>11월부터 부티크에서 만나보실 수 있습니다.</p>
                <p>
                  <a href="https://www.instagram.com/explore/tags/chanelcruise/?hl=en/" target="_blank" rel="noopener">#CHANELCruise</a>
                </p>
            </div>
          </div>


          <SlideView3/>
          <div className="news-desc">
            <p className="news-credits font-family-basic">© Julien Martinez Leclerc</p>

            <p className= "news-date">
              <time datetime="2020-06-01" class="__web-inspector-hide-shortcut__">2020년 6월 1일 월요일</time>
            </p>

            <h2 className="news-title">
              <p>커스텀 주얼리</p>
              <p>프린트</p>
              <p>2020/21 크루즈</p> 
            </h2>

            <div className="news-text">
                <p>샤넬 2020/21 크루즈 컬렉션, 자유와 여유로움이 어우러진 매혹. 포토그래퍼 줄리앙 마르티네즈 르클레크. 
                <br></br>11월부터 부티크에서 만나보실 수 있습니다.</p>
                <p>
                  <a href="https://www.instagram.com/explore/tags/chanelcruise/?hl=en/" target="_blank" rel="noopener">#CHANELCruise</a>
                </p>
            </div>
          </div>
     

        </div>
         

      </div>
    </div>
    <Footer/> 
  </div>
);
};
}

export default News;