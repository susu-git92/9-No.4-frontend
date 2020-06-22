import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    const bottomLine = {
      borderBottom: '3px solid black',
    };
    return (
      <div className="Nav">
        <div className="boldLine" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/35/Chanel_logo.svg"
          alt="chanel logo"
        />
        <div className="iconWrapper">
          <FontAwesomeIcon className="searchIcon" icon={faSearch} />
          <FontAwesomeIcon className="starIcon" icon={faStar} />
        </div>
        <ul>
          <li style={bottomLine}>
            <div>오뜨 꾸뛰르</div>
          </li>
          <li>
            <div>컬렉션</div>
          </li>
          <li>
            <div>카테고리</div>
          </li>
          <li>
            <div>CHANEL NEWS</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
