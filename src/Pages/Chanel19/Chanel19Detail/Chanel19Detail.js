import React, { Component } from 'react';
import './Chanel19Detail.scss';
import ProductImg from '../../../Components/ProductDetail/ProductImg';
import ProductSpec from '../../../Components/ProductDetail/ProductSpec';
import OptionImg from '../../../Components/ProductDetail/OptionImg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes,
  faChevronRight,
  faChevronLeft,
  faCircle,
} from '@fortawesome/free-solid-svg-icons';

class Chanel19Detail extends Component {
  state = {
    activeTab: 0,
    activeDot: 0,
    optionScroll: false,
  };

  scrollClick = () => {
    if (this.state.optionScroll === true) {
      this.setState({ optionScroll: false });
    }
    if (this.state.optionScroll === false) {
      this.setState({ optionScroll: true });
    }
  };
  optionClick = (id) => {
    this.setState({ activeTab: id });
  };
  dotClick = (id) => {
    this.setState({ activeDot: id });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="dotNav">
            <div
              className="dot1"
              onClick={() => this.dotClick(0)}
              style={
                this.state.activeDot === 0
                  ? {
                      width: '10px',
                      height: '10px',
                      border: '1px solid black',
                      'background-color': 'white',
                    }
                  : {
                      width: '7px',
                      height: '7px',
                      border: '1px solid white',
                      'background-color': 'gray',
                    }
              }
            />
            <div
              className="dot2"
              onClick={() => this.dotClick(1)}
              style={
                this.state.activeDot === 1
                  ? {
                      width: '10px',
                      height: '10px',
                      border: '1px solid black',
                      'background-color': 'white',
                    }
                  : {
                      width: '7px',
                      height: '7px',
                      border: '1px solid white',
                      'background-color': 'gray',
                    }
              }
            />
            <div
              className="dot3"
              onClick={() => this.dotClick(2)}
              style={
                this.state.activeDot === 2
                  ? {
                      width: '10px',
                      height: '10px',
                      border: '1px solid black',
                      'background-color': 'white',
                    }
                  : {
                      width: '7px',
                      height: '7px',
                      border: '1px solid white',
                      'background-color': 'gray',
                    }
              }
            />
            <div
              className="dot4"
              onClick={() => this.dotClick(3)}
              style={
                this.state.activeDot === 3
                  ? {
                      width: '10px',
                      height: '10px',
                      border: '1px solid black',
                      'background-color': 'white',
                    }
                  : {
                      width: '7px',
                      height: '7px',
                      border: '1px solid white',
                      'background-color': 'gray',
                    }
              }
            />
          </div>
          <ProductImg activeDot={this.state.activeDot} />
          <div className="product_box">
            <div className="name_box">
              <div className="name">CHANEL 19 플랩 백</div>
            </div>
            <ProductSpec />
            <div className="option_box">
              <div className="option_number">다른 옵션(7)</div>
              <FontAwesomeIcon
                className={
                  this.state.optionScroll === true
                    ? 'scroll_btn_on'
                    : 'scroll_btn_off'
                }
                icon={
                  this.state.optionScroll === true
                    ? faChevronLeft
                    : faChevronRight
                }
                size="2x"
                onClick={this.scrollClick}
              />

              <div className="option_slider">
                <div className="option_category_list">
                  <div
                    className="option_category1"
                    onClick={() => this.optionClick(0)}
                  >
                    Leather
                    <div
                      className="optionUnderline"
                      style={
                        this.state.activeTab === 0
                          ? { left: '0%', width: '100%' }
                          : this.state.activeTab === 1
                          ? { left: '148%', width: '202%' }
                          : this.state.activeTab === 2
                          ? { left: '400%', width: '120%' }
                          : {}
                      }
                    />
                  </div>
                  <div
                    className="option_category2"
                    onClick={() => this.optionClick(1)}
                  >
                    트위드 & 패브릭
                  </div>
                  <div
                    className="option_category3"
                    onClick={() => this.optionClick(2)}
                  >
                    기타 재질
                  </div>
                </div>

                <OptionImg optionScroll={this.state.optionScroll} />
              </div>
              <div className="find_store_box">
                <div className="find_store_icon" />
                <div className="find_store_text">
                  부티크에서 더 많은 셀렉션을 만나보실 수 있습니다.
                </div>
              </div>
              <div className="law">
                소비자 권장가. 자세한 법률 정보는 여기를 클릭하세요.
                <span className="law_link">
                  자세한 법률 정보는 여기를 클릭하세요.
                </span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Chanel19Detail;
