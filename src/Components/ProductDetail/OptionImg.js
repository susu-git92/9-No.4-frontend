import React, { Component } from 'react';

class OptionImg extends Component {
  render() {
    //Object.keys(this.state.leather) > 0 && console.log(this.state.leather);
    // console.log(this.props.opInfo);
    const lD = this.props.opInfo;
    const tD = this.props.opInfoT;
    const oD = this.props.opInfoO;
    let lK = [];
    let lV = [];
    let tK = [];
    let tV = [];
    let oK = [];
    let oV = [];
    let aK = [];
    let aV = [];

    lD && (lK = Object.keys(lD));
    lD && (lV = Object.values(lD));
    tD && (tK = Object.keys(tD));
    tD && (tV = Object.values(tD));
    oD && (oK = Object.keys(oD));
    oD && (oV = Object.values(oD));

    if (this.props.activeTab === 0) {
      aK = lK;
      aV = lV;
    }
    if (this.props.activeTab === 1) {
      aK = tK;
      aV = tV;
    }
    if (this.props.activeTab === 2) {
      aK = oK;
      aV = oV;
    }
    //console.log(lV);

    return (
      <div className="option_img_box">
        <div
          className="option_img_list"
          style={this.props.optionScroll ? { left: -280 } : { left: 0 }}
        >
          {aV.length > 0 &&
            aV.map((url, index) => {
              return (
                <div
                  key={index}
                  rKey={aK[index]}
                  className={`option_img${index}`}
                  style={{
                    backgroundImage: `url(${url})`,
                  }}
                />
              );
            })}
          {/* <div className="option_img1" />
           <div className="option_img2" />
           <div className="option_img3" />
           <div className="option_img4" />
           <div className="option_img5" /> */}
        </div>
      </div>
    );
  }
}

export default OptionImg;
