import React, { Component } from 'react';

class ProductSpec extends Component {
  state = {
    size: '16 × 26 × 9 cm',
    unit: 'in',
  };

  unitClick = () => {
    if (this.state.unit === 'in') {
      this.setState({ size: '6.3 × 10.2 × 3.5 in', unit: 'cm' });
    }
    if (this.state.unit === 'cm') {
      this.setState({ size: '16 × 26 × 9 cm', unit: 'in' });
    }
  };

  render() {
    return (
      <div className="detail_box">
        <div className="material">
          트위드, 골드 메탈, 실버 메탈, 루테늄 메탈
        </div>
        <div className="item_color">네이비 블루, 화이트, 레드</div>
        <div className="item_size">
          {this.state.size}
          <span className="unit_box">
            (
            <span className="unit_change" onClick={this.unitClick}>
              {this.state.unit}
            </span>
            )
          </span>
        </div>

        <div className="reference">레퍼런스: AS1160 B02877 MH694</div>
        <div className="price">₩5,850,000</div>
      </div>
    );
  }
}

export default ProductSpec;
