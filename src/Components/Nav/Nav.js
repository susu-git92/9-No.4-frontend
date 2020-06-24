import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';

class Nav extends React.Component {
  state = {
    isActive: 0,
  };
  selectedMenu = (num) => {
    this.setState({
      isActive: num,
    });
  };
  render() {
    return (
      <div className="Nav">
        <div className="boldLine" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/3/35/Chanel_logo.svg"
          alt="chanel logo"
        />
        <div className="iconWrapper">
          <FontAwesomeIcon className="searchIcon" icon={faSearch} />
          <FontAwesomeIcon className="userIcon" icon={faUser} />
          <FontAwesomeIcon className="starIcon" icon={faStar} />
        </div>
        <ul>
          <li
            className={this.state.isActive === 1 ? 'active' : 'none'}
            onClick={() => this.selectedMenu(1)}
          >
            오뜨 꾸뛰르
          </li>
          <li
            className={this.state.isActive === 2 ? 'active' : 'none'}
            onClick={() => this.selectedMenu(2)}
          >
            컬렉션
          </li>
          <li
            className={this.state.isActive === 3 ? 'active' : 'none'}
            onClick={() => this.selectedMenu(3)}
          >
            카테고리
          </li>
          <li
            className={this.state.isActive === 4 ? 'active' : 'none'}
            onClick={() => this.selectedMenu(4)}
          >
            CHANEL NEWS
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
