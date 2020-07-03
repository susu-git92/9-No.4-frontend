import React from 'react';
import { Link } from 'react-router-dom';
import ModalCategory from '../ModalCategory/ModalCategory';
import Search from '../Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faStar,
  faUser,
  faBars,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { srcs } from '../../config';
import './Nav.scss';

class Nav extends React.Component {
  state = {
    isActive: 0,
    mobileMenuActive: false,
    searchModal: true,
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

  handleMobileMenu = () => {
    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive,
    });
  };

  searchToggle = () => {
    this.setState({
      searchModal: !this.state.searchModal,
    });
  };

  render() {
    const { isActive, mobileMenuActive, searchModal } = this.state;
    return (
      <div className="Nav">
        {searchModal ? (
          <>
            <div className="NavWrapper">
              <div className="boldLine" />
              <Link to="/">
                <img src={srcs.img.logo.black} alt="chanel logo" />
              </Link>
              <FontAwesomeIcon
                className="hamburgerBtn"
                onClick={this.handleMobileMenu}
                icon={faBars}
              />
              <div className="iconWrapper">
                <FontAwesomeIcon
                  className="searchIcon"
                  onClick={this.searchToggle}
                  icon={faSearch}
                />
                <Link className="link" to="/loginscreen">
                  <FontAwesomeIcon className="userIcon" icon={faUser} />
                </Link>
                <Link className="link" to="/wishlist">
                  <FontAwesomeIcon className="starIcon" icon={faStar} />
                </Link>
              </div>
              <div
                className="MobileMenuWrapper"
                style={{ display: mobileMenuActive ? 'block' : 'none' }}
              >
                <MobileMenu
                  isActive={isActive}
                  handleSelectedMobileMenu={() => this.selectedMenu}
                  mobileMenuActive={this.handleMobileMenu}
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
                  <Link className="link" to="/news">
                    CHANEL NEWS
                  </Link>
                </li>
              </ul>
            </div>
            <ModalCategory
              currentMenu={isActive}
              handleCloseBtn={this.closeModal}
            />
          </>
        ) : (
          <Search
            style={{
              display: searchModal ? 'block' : 'none',
            }}
            onClick={this.searchToggle}
          />
        )}
      </div>
    );
  }
}

class MobileMenu extends React.Component {
  render() {
    const { isActive, mobileMenuActive, handleSelectedMobileMenu } = this.props;
    return (
      <div className="MobileMenu">
        <div className="menuWrapper">
          <p>메뉴</p>
          <FontAwesomeIcon
            className="closeBtn"
            onClick={mobileMenuActive}
            icon={faTimes}
          />
          <ul className="mobileMenuList">
            <li
              className={isActive === 1 ? 'active' : 'none'}
              onClick={() => handleSelectedMobileMenu(1)}
            >
              오뜨 꾸뛰르
            </li>
            <li
              className={isActive === 2 ? 'active' : 'none'}
              onClick={() => handleSelectedMobileMenu(2)}
            >
              컬렉션
            </li>
            <li
              className={isActive === 3 ? 'active' : 'none'}
              onClick={() => handleSelectedMobileMenu(3)}
            >
              카테고리
            </li>
            <li
              className={isActive === 4 ? 'active' : 'none'}
              onClick={() => handleSelectedMobileMenu(4)}
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
