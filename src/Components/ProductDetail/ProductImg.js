import React, { Component } from 'react';

class ProductImg extends Component {
  render() {
    return (
      <div
        className="img_slider"
        style={
          this.props.activeDot === 0
            ? {
                'margin-top': '25%',
              }
            : this.props.activeDot === 1
            ? {
                'margin-top': '-20%',
              }
            : this.props.activeDot === 2
            ? {
                'margin-top': '-65%',
              }
            : this.props.activeDot === 3
            ? {
                'margin-top': '-112%',
              }
            : {}
        }
      >
        <div className="img1" />
        <div className="img2" />
        <div className="img3" />
        <div className="img4" />
      </div>
    );
  }
}

export default ProductImg;
