import React from 'react';
import ModalCategory from '../ModalCategory/ModalCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faStar,
  faUser,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';
import { srcs } from '../../config';

class Nav extends React.Component {
  state = {
    isActive: 0,
    mobileMenuActive: false,
  };
  selectedMenu = (num) => {
    this.setState({
      isActive: num,
    });
  };
  closeModal = () => {
    this.setState({
      isActive: 0,
    });
  };
  openMenu = () => {
    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive,
    });
  };
  render() {
    return (
      <div className="Nav">
        <div className="NavWrapper">
          <div className="boldLine" />
          <img src={srcs.img.logo.black} alt="chanel logo" />
          <FontAwesomeIcon
            onClick={this.openMenu}
            className="hamburgerBtn"
            icon={faBars}
          />
          <div className="iconWrapper">
            <FontAwesomeIcon className="searchIcon" icon={faSearch} />
            <FontAwesomeIcon className="userIcon" icon={faUser} />
            <FontAwesomeIcon className="starIcon" icon={faStar} />
          </div>
          <div
            style={{ display: this.state.mobileMenuActive ? 'block' : 'none' }}
            className="MobileMenuWrapper"
          >
            <MobileMenu
              isActive={this.state.isActive}
              onClick={() => this.selectedMenu}
              mobileMenuActive={this.openMenu}
            />
          </div>
          <ul className="desktopMenuList">
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
        <ModalCategory
          currentMenu={this.state.isActive}
          onClick={this.closeModal}
        />
      </div>
    );
  }
}

class MobileMenu extends React.Component {
  render() {
    const { isActive, onClick, mobileMenuActive } = this.props;
    return (
      <div className="MobileMenu">
        <div className="menuWrapper">
          <p>메뉴</p>
          <FontAwesomeIcon
            onClick={mobileMenuActive}
            className="closeBtn"
            icon={faTimes}
          />
          <ul>
            <li
              className={isActive === 1 ? 'active' : 'none'}
              onClick={() => onClick(1)}
            >
              오뜨 꾸뛰르
            </li>
            <li
              className={isActive === 2 ? 'active' : 'none'}
              onClick={() => onClick(2)}
            >
              컬렉션
            </li>
            <li
              className={isActive === 3 ? 'active' : 'none'}
              onClick={() => onClick(3)}
            >
              카테고리
            </li>
            <li
              className={isActive === 4 ? 'active' : 'none'}
              onClick={() => this.onClick(4)}
            >
              CHANEL NEWS
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Nav;
