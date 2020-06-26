import React from 'react';
import ModalCategory from '../ModalCategory/ModalCategory';
import Search from '../Search/Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faStar, faUser } from '@fortawesome/free-solid-svg-icons';
import './Nav.scss';
import { srcs } from '../../config';

class Nav extends React.Component {
  state = {
    isActive: 0,
    searchModal: false,
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
  SearchToggle = () => {
    this.setState({
      searchModal: !this.state.searchModal,
    });
  };
  render() {
    return (
      <div className="Nav">
        {this.state.searchModal ? (
          <div>
            <div className="NavWrapper">
              <div className="boldLine" />
              <img src={srcs.img.logo.black} alt="chanel logo" />
              <div className="iconWrapper">
                <FontAwesomeIcon
                  onClick={this.SearchToggle}
                  className="searchIcon"
                  icon={faSearch}
                />
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
        ) : (
          <Search
            style={{ display: this.state.searchModal ? 'block' : 'none' }}
            onClick={this.SearchToggle}
          />
        )}
      </div>
    );
  }
}

export default Nav;
