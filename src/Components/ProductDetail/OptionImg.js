import React, { Component } from 'react';

class OptionImg extends Component {
  state = {
    rKey: '',
  };

  render() {
    //Object.keys(this.state.leather) > 0 && console.log(this.state.leather);
    // console.log(this.props.opInfo);
    const leatherData = this.props.opInfo;
    const tweedData = this.props.opInfoT;
    const otherData = this.props.opInfoO;
    let leatherKey = [];
    let leatherValue = [];
    let tweedKey = [];
    let tweedValue = [];
    let otherKey = [];
    let otherValue = [];
    let activeKey = [];
    let activeValue = [];

    leatherData && (leatherKey = Object.keys(leatherData));
    leatherData && (leatherValue = Object.values(leatherData));
    tweedData && (tweedKey = Object.keys(tweedData));
    tweedData && (tweedValue = Object.values(tweedData));
    otherData && (otherKey = Object.keys(otherData));
    otherData && (otherValue = Object.values(otherData));

    if (this.props.activeTab === 0) {
      activeKey = leatherKey;
      activeValue = leatherValue;
    }
    if (this.props.activeTab === 1) {
      activeKey = tweedKey;
      activeValue = tweedValue;
    }
    if (this.props.activeTab === 2) {
      activeKey = otherKey;
      activeValue = otherValue;
    }

    return (
      <div className="option_img_box">
        <div
          className="option_img_list"
          style={this.props.optionScroll ? { left: -280 } : { left: 0 }}
        >
          {activeValue.length > 0 &&
            activeValue.map((url, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    return (
                      this.props.history.history.push(
                        `/chanel19/detail/${activeKey[index]}`,
                      ),
                      window.location.reload()
                    );
                  }}
                  rKey={activeKey[index]}
                  className={`option_img${index}`}
                  style={{
                    backgroundImage: `url(${url})`,
                  }}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

export default OptionImg;
