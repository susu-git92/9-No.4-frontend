import React, { Component } from 'react';
import './Chanel19Detail.scss';
import ProductImg from '../../../Components/ProductDetail/ProductImg';
import ProductSpec from '../../../Components/ProductDetail/ProductSpec';
import OptionImg from '../../../Components/ProductDetail/OptionImg';

class Chanel19Detail extends Component {
  render() {
    return (
      <div className="container">
        <ProductImg />
        <div className="product_box">
          <div className="name_box">
            <div className="name">CHANEL 19 플랩 백</div>
          </div>
          <ProductSpec />
          <div className="option_box">
            <div className="option_number">다른 옵션(7)</div>
            <div className="option_slider">
              <div className="option_category_list">
                <div className="option_category1">Leather</div>
                <div className="option_category2">트위드 & 패브릭</div>
                <div className="option_category3">기타 재질</div>
              </div>
              <OptionImg />
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
    );
  }
}

export default Chanel19Detail;
