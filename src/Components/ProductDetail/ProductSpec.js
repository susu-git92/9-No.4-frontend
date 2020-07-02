import React, { Component } from 'react';

class ProductSpec extends Component {
  state = {
    unit: true,
    priceFix: '0',
  };

  componentDidMount() {
    this.setState({
      priceFix: this.props.price,
    });
  }

  unitClick = () => {
    if (this.state.unit) {
      this.setState({ size: this.props.sizeSub, unit: false });
    }
    if (!this.state.unit) {
      this.setState({ size: this.props.sizeMain, unit: true });
    }
  };

  render() {
    let priceCut = '';
    this.props.price > 0 &&
      (priceCut = this.props.price
        .substring(0, 7)
        .replace(/\B(?=(?:\d{3})+(?!\d))/g, ','));

    return (
      <div className="detail_box">
        <div className="material">{this.props.material}</div>
        <div className="item_color">{this.props.color}</div>
        <div className="item_size">
          {this.state.unit ? this.props.sizeMain : this.props.sizeSub}
          <span className="unit_box">
            (
            <span className="unit_change" onClick={this.unitClick}>
              {this.state.unit ? 'in' : 'cm'}
            </span>
            )
          </span>
        </div>

        <div className="reference">레퍼런스: {this.props.rKey}</div>

        <div className="price">₩{priceCut}</div>
      </div>
    );
  }
}

export default ProductSpec;
