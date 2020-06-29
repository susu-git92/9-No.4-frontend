import React, { Component } from 'react';

class OptionImg extends Component {
  state = {
    isScroll: false,
  };

  render() {
    return (
      <div className="option_img_box">
        <div
          className="option_img_list"
          style={this.props.optionScroll ? { left: -280 } : { left: 0 }}
        >
          <div className="option_img1" />
          <div className="option_img2" />
          <div className="option_img3" />
          <div className="option_img4" />
          <div className="option_img5" />
        </div>
      </div>
    );
  }
}

export default OptionImg;
