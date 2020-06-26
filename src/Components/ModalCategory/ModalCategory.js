import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './ModalCategory.scss';
import { srcs } from '../../config';

class ModalCategory extends React.Component {
  render() {
    const { currentMenu, onClick } = this.props;

    return (
      <div className="ModalCategory">
        {currentMenu === 2 && <CollectionDropdown onClick={onClick} />}
        {currentMenu === 3 && <CategoryDropdown onClick={onClick} />}
      </div>
    );
  }
}

class CollectionDropdown extends React.Component {
  render() {
    return (
      <div className="CollectionDropdown">
        <div className="imgWrapper">
          <img src={srcs.img.menu.collection} alt="collection" />
          <p className="season">2020/21 크루즈</p>
        </div>
        <ul>
          <li>최신 패션쇼 및 컬렉션 프레젠테이션</li>
          <li>
            <p className="season">2020/21 크루즈</p>
          </li>
          <li>
            <p className="season">2020/21 가을-겨울</p>
          </li>
          <li>
            <p className="season">2019/20 공방(Métiers d’Art)</p>
          </li>
        </ul>
        <ul>
          <li>부티크</li>
          <li>
            <p className="season">2020 봄-여름</p>
          </li>
          <li>
            <p className="season">2020 봄-여름 프리-컬렉션</p>
          </li>
          <li>
            <p className="season">2019/20 크루즈</p>
          </li>
        </ul>
        <ul>
          <li></li>
        </ul>
        <FontAwesomeIcon
          className="closeBtn"
          icon={faTimes}
          onClick={this.props.onClick}
        />
      </div>
    );
  }
}

class CategoryDropdown extends React.Component {
  render() {
    return (
      <div className="CategoryDropdown">
        <div className="dropdownWrapper">
          <div className="imgWrapper">
            <img src={srcs.img.menu.category} alt="category" />
            <p className="season">CHANEL 19 백</p>
          </div>
          <ul>
            <li>
              <p className="season">레디 투 웨어</p>
            </li>
            <li>자켓</li>
            <li>드레스</li>
            <li>블라우스와 탑</li>
            <li>가디건 & 점퍼</li>
            <li>스커트</li>
            <li>팬츠 & 점프 수트</li>
            <li>아우터</li>
            <li>수영복</li>
            <li>니트웨어</li>
            <li>레더</li>
            <li>모든 레디-투-웨어</li>
          </ul>
          <ul>
            <li>
              <p className="season">핸드백</p>
            </li>
            <li>시즌 신상품</li>
            <li>클래식 플랩 백</li>
            <li>2.55 플랩 백</li>
            <li>Chanel 19 백</li>
            <li>샤넬 가브리엘 백</li>
            <li>보이 샤넬 플랩 백</li>
            <li>All Handbags</li>
          </ul>
          <ul>
            <li>
              <p className="season">액세서리</p>
            </li>
            <li>슈즈</li>
            <li>지갑</li>
            <li>커스텀 주얼리</li>
            <li>스카프</li>
            <li>모자</li>
            <li>까멜리아</li>
            <li>벨트</li>
            <li>기타 액세서리</li>
          </ul>
          <ul>
            <li>
              <p className="season">아이웨어</p>
            </li>
            <li>선글라스</li>
            <li>옵티컬</li>
          </ul>
          <FontAwesomeIcon
            className="closeBtn"
            icon={faTimes}
            onClick={this.props.onClick}
          />
        </div>
        <div className="preProduct">
          <p>지난 제품 보기</p>
          <FontAwesomeIcon className="chevronRightIcon" icon={faChevronRight} />
        </div>
      </div>
    );
  }
}

export default ModalCategory;
