import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';

class Nav extends React.Component {
  state = {
    bottomLine: false,
  };

  selectedMenu = () => {
    this.setState({
      bottomLine: !this.state.bottomLine,
    });
  };

  render() {
    const bottomLine = {
      borderBottom: '3px solid black',
    };
    const bottomLineNone = {
      borderBottom: 'none',
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
          <li
            value="오뜨 꾸뛰르"
            style={this.state.bottomLine ? bottomLine : bottomLineNone}
            onClick={this.selectedMenu}
          >
            <div>오뜨 꾸뛰르</div>
          </li>
          <li
            value="컬렉션"
            style={this.state.bottomLine ? bottomLine : bottomLineNone}
            onClick={this.selectedMenu}
          >
            <div>컬렉션</div>
          </li>
          <li
            value="카테고리"
            style={this.state.bottomLine ? bottomLine : bottomLineNone}
            onClick={this.selectedMenu}
          >
            <div>카테고리</div>
          </li>
          <li
            value="CHANEL NEWS"
            style={this.state.bottomLine ? bottomLine : bottomLineNone}
            onClick={this.selectedMenu}
          >
            <div>CHANEL NEWS</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
