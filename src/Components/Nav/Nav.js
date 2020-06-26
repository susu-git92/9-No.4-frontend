import React from 'react';
import { Link } from 'react-router-dom';
import ModalCategory from '../ModalCategory/ModalCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';
import { srcs } from '../../config';

class Nav extends React.Component {
  state = {
    isActive: 0,
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
  render() {
    return (
      <div className="Nav">
        <div className="NavWrapper">
          <div className="boldLine" />
          <Link to="/chanel19" className="productLink">
            <img src={srcs.img.logo.black} alt="chanel logo" />
          </Link>
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
        <ModalCategory
          currentMenu={this.state.isActive}
          onClick={this.closeModal}
        />
      </div>
    );
  }
}

export default Nav;
