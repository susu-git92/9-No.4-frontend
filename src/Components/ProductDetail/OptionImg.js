import React, { Component } from 'react';

class OptionImg extends Component {
  state = {
    rKey: '',
    leatherInfo: [],

    tweedInfo: [],

    otherInfo: [],

    activeKey: [],
    activeValue: [],
  };

  componentDidMount() {
    const {
      leather_bag_info,
      tweed_bag_info,
      other_bag_info,
    } = this.props.productInfo;

    this.setState(
      {
        leatherInfo: leather_bag_info,
        tweedInfo: tweed_bag_info,
        otherInfo: other_bag_info,
        activeKey: this.props.defaultKey,
        activeValue: this.props.defaultValue,
      },
      //() => console.log(this.state),
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const isDiff = prevProps.activeTab !== this.props.activeTab;

    if (isDiff) {
      if (this.props.activeTab === 0) {
        // this.state.leatherInfo.length > 0 &&
        this.setState({
          activeKey: this.state.leatherInfo.map((info) => info.code),
          activeValue: this.state.leatherInfo.map((info) => info.image),
        });
      }
      if (this.props.activeTab === 1) {
        // this.state.tweedInfo.length > 0 &&
        this.setState({
          activeKey: this.state.tweedInfo.map((info) => info.code),
          activeValue: this.state.tweedInfo.map((info) => info.image),
        });
      }
      if (this.props.activeTab === 2) {
        // this.state.otherInfo.length > 0 &&
        this.setState({
          activeKey: this.state.otherInfo.map((info) => info.code),
          activeValue: this.state.otherInfo.map((info) => info.image),
        });
      }
    }
  }

  render() {
    return (
      <div className="option_img_box">
        <div
          className="option_img_list"
          style={this.props.optionScroll ? { left: -280 } : { left: 0 }}
        >
          {this.state.activeValue.length > 0 &&
            this.state.activeValue.map((url, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    return this.props.history.history.push(
                      `/chanel19/detail/${this.state.activeKey[index]}`,
                    );
                    // window.location.reload()
                  }}
                  rKey={this.state.activeKey[index]}
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
