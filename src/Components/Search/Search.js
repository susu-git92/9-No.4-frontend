import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Search.scss';

class Search extends React.Component {
  render() {
    return (
      <div className="Search">
        <div className="boldLine" />
        <div className="searchInputWrapper">
          <input placeholder="검색하기" />
        </div>
        <FontAwesomeIcon className="searchIcon" icon={faSearch} />
        <FontAwesomeIcon
          onClick={this.props.onClick}
          className="closeBtn"
          icon={faTimes}
        />
        <div className="textWrapper">
          <p>위치 찾기</p>
          <ul>
            <p>추천</p>
            <li>2020 봄-여름 컬렉션</li>
            <li>2020 봄-여름 프리-컬렉션</li>
            <li>2020 봄-여름 아이웨어 캠페인</li>
            <li>2020/21 가을-겨울</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Search;
