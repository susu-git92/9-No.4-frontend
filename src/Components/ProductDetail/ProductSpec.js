import React, { Component } from 'react';

class ProductSpec extends Component {
  state = {
    unit: 'in',
    priceFix: '0',
  };

  unitClick = () => {
    if (this.state.unit === 'in') {
      this.setState({ size: this.props.sizeSub, unit: 'cm' });
    }
    if (this.state.unit === 'cm') {
      this.setState({ size: this.props.sizeMain, unit: 'in' });
    }
  };

  componentDidMount() {
    this.setState({
      priceFix: this.props.price,
    });
  }

  render() {
    //console.log(this.props.material);
    return (
      <div className="detail_box">
        <div className="material">{this.props.material}</div>
        <div className="item_color">{this.props.color}</div>
        <div className="item_size">
          {this.state.unit === 'in' ? this.props.sizeMain : this.props.sizeSub}
          <span className="unit_box">
            (
            <span
              className="unit_change"
              onClick={this.unitClick}
              style={{ cursor: 'pointer' }}
            >
              {this.state.unit}
            </span>
            )
          </span>
        </div>

        <div className="reference">레퍼런스: {this.props.rKey}</div>

        <div className="price">₩{this.props.price}</div>
      </div>
    );
  }
}

export default ProductSpec;
