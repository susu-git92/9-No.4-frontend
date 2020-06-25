import React, { Component } from 'react';
import './Chanel19Detail.scss';

class Chanel19Detail extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="img_slider">
            {/* 이미지들은 나중에 맵을 이용하여 동적으로 구현 */}
            <div className="img1" />
            <div className="img2" />
            <div className="img3" />
            <div className="img4" />
          </div>
          <div className="product_box">
            <div className="name_box">
              <div className="name">CHANEL 19 플랩 백</div>
            </div>
            <div className="detail_box">
              <div className="material">
                트위드, 골드 메탈, 실버 메탈, 루테늄 메탈
              </div>
              <div className="item_color">네이비 블루, 화이트, 레드</div>
              <div className="item_size">
                16 × 26 × 9 cm
                <span className="unit_change">(in)</span>
              </div>

              <div className="reference">레퍼런스: AS1160 B02877 MH694</div>
              <div className="price">₩5,850,000</div>
            </div>
            <div className="option_box">
              <div className="option_number">다른 옵션(7)</div>
              <div className="option_slider">
                <div className="option_category_list">
                  <div className="option_category1">Leather</div>
                  <div className="option_category2">트위드 & 패브릭</div>
                  <div className="option_category3">기타 재질</div>
                </div>
                <div className="option_img_list">
                  <div className="option_img1" />
                  <div className="option_img2" />
                  <div className="option_img3" />
                </div>
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
