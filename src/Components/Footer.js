import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className="Footer">
        <div className="logoWrapper">
          <img
            src="https://i.ya-webdesign.com/images/chanel-drawing-logo-6.png"
            alt="chanel logo"
          />
        </div>
        <div className="listContainer">
          <div className="listWrapper">
            <p>
              <a href="https://www.chanel.com/">CHANEL.COM </a>더 보기
            </p>
            <ul>
              <li>오뜨 꾸뛰르</li>
              <li>패션</li>
              <li>시계</li>
              <li>화인 주얼리</li>
              <li>향수</li>
              <li>메이크업</li>
              <li>스킨케어</li>
            </ul>
          </div>
          <div className="listWrapper">
            <p>하우스 오브 샤넬</p>
            <ul>
              <li>인사이드 샤넬</li>
              <li>채용</li>
              <li>Foundation Chanel</li>
            </ul>
          </div>
          <div className="listWrapper">
            <p>케어 & 서비스</p>
            <ul>
              <li>매장 찾기</li>
              <li>고객 문의</li>
              <li>FAQ</li>
              <li>케어 & 서비스</li>
            </ul>
          </div>
          <div className="listWrapper">
            <p>법률</p>
            <ul>
              <li>법률 성명</li>
              <li>개인정보 처리방침</li>
            </ul>
          </div>
        </div>
        <div className="snsLinks">
          <div className="languageWrapper">
            <span>Languages: </span>
            <span className="selectModal">대한민국</span>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
          <div className="iconsWrapper">
            <a href="https://www.facebook.com/ChanelKR/">
              <FontAwesomeIcon className="facebookIcon" icon={faFacebook} />
            </a>
            <a href="https://instagram.com/chanelofficial">
              <FontAwesomeIcon className="instaIcon" icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/chanel">
              <FontAwesomeIcon className="youtubeIcon" icon={faYoutube} />
            </a>
            <a href="https://twitter.com/CHANEL">
              <FontAwesomeIcon className="twitterIcon" icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
