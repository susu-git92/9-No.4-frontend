import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import './Main.scss';
import { srcs } from '../../config';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Nav />
        <article>
          <div className="videoWrapper">
            <video
              autoPlay={true}
              loop={true}
              title="19bag"
              width="100%"
              height="100%"
            >
              <source src={srcs.video.main} type="video/mp4" />
            </video>
            <div className="textWrapper">
              <p>CHANEL 19 백</p>
              <h4>부티크</h4>
              <div>더보기</div>
            </div>
          </div>
          <div className="centerContainer">
            <div className="centerWrapper">
              <div className="callCenter">
                <p>고객 문의</p>
              </div>
              <div className="location">
                <p>위치 찾기</p>
              </div>
            </div>
            <div className="logoBox">
              <img src={srcs.img.logo.black} alt="chanel logo" />
            </div>
          </div>
        </article>
        <Footer />
      </div>
    );
  }
}

export default Main;
