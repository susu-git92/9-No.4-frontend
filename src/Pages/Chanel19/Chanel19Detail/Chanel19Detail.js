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
    currentScroll: 0,
    handleLock: true,
    product_info: {},
    opNum: 0,
    rKey: '',
  };

  scrollClick = () => {
    this.setState({ optionScroll: !this.state.optionScroll });
  };

  optionClick = (id) => {
    this.setState({ activeTab: id, optionScroll: false });
  };

  dotClick = (id) => {
    this.setState({
      activeDot: id,
      // handleLock: false,
    });
  };

  componentDidMount() {
    fetch(
      `http://10.58.4.250:8000/products/chanel-19/detail/${this.props.match.params.rkey}`,
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          product_info: res.detail_bag_info,
          opNum: res.detail_bag_info.option_num,
        }),
      );

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (
      window.scrollY >= 0 &&
      window.scrollY < 600 &&
      this.state.activeDot !== 0 &&
      this.state.handleLock
    ) {
      this.setState({
        activeDot: 0,
        // handleLock: false,
      });
    }
    if (
      window.scrollY >= 600 &&
      window.scrollY < 1150 &&
      this.state.activeDot !== 1 &&
      this.state.handleLock
    ) {
      this.setState({
        activeDot: 1,
        // handleLock: false,
      });
    }
    if (
      window.scrollY >= 1150 &&
      window.scrollY < 1800 &&
      this.state.activeDot !== 2 &&
      this.state.handleLock
    ) {
      this.setState({
        activeDot: 2,
        // handleLock: false,
      });
    }
    if (
      window.scrollY >= 1800 &&
      this.state.activeDot !== 3 &&
      this.state.handleLock
    ) {
      this.setState({
        activeDot: 3,
        // handleLock: false,
      });
    }
  };

  componentDidUpdate(prevProps) {
    const isOption =
      prevProps.match.params.rkey !== this.props.match.params.rkey;

    if (isOption) {
      this.setState({ rKey: this.props.match.params.rkey });
      fetch(
        `http://10.58.4.250:8000/products/chanel-19/detail/${this.props.match.params.rkey}`,
      )
        .then((res) => res.json())
        .then((res) =>
          this.setState({
            product_info: res.detail_bag_info,
            opNum: res.detail_bag_info.option_num,
          }),
        );
    }

    this.moveScroll();
  }

  moveScroll = () => {
    if (this.state.activeDot === 0) {
      window.scrollTo({ top: 0 });
    }
    if (this.state.activeDot === 1) {
      window.scrollTo({ top: 600 });
    }
    if (this.state.activeDot === 2) {
      window.scrollTo({ top: 1150 });
    }
    if (this.state.activeDot === 3) {
      window.scrollTo({ top: 1800 });
    }
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
          {/* {this.state.product_info.length > 0 && (
            <ProductImg
              activeDot={this.state.activeDot}
              img={this.state.product_info.bag_image_all}
            />
          )} */}
          <ProductImg
            activeDot={this.state.activeDot}
            imgAll={this.state.product_info.bag_image_all}
          />

          <div className="product_box">
            <div className="name_box">
              <div className="name">{this.state.product_info.bag_name}</div>
            </div>
            <ProductSpec
              sizeMain={this.state.product_info.bag_size_main}
              sizeSub={this.state.product_info.bag_size_sub}
              material={this.state.product_info.bag_texture}
              color={this.state.product_info.bag_color}
              rKey={this.state.product_info.bag_code}
              price={this.state.product_info.bag_price}
            />
            <div className="option_box">
              <div className="option_number">
                다른 옵션({this.state.opNum !== 0 && this.state.opNum})
              </div>
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

                {this.state.product_info.bag_color && (
                  <OptionImg
                    optionScroll={this.state.optionScroll}
                    activeTab={this.state.activeTab}
                    productInfo={this.state.product_info}
                    defaultKey={this.state.product_info.leather_bag_info.map(
                      (info) => info.code,
                    )}
                    defaultValue={this.state.product_info.leather_bag_info.map(
                      (info) => info.image,
                    )}
                    // leatherInfo={this.state.product_info.leather_bag_info}
                    // tweedInfo={this.state.product_info.tweed_bag_info}
                    // otherInfo={this.state.product_info.other_bag_info}
                    history={this.props}
                  />
                )}
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
