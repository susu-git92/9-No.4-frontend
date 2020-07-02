import React, { Component } from 'react';

class ProductImg extends Component {
  state = {
    imgUrl: [],
  };

  componentDidMount() {
    this.setState({
      imgUrl: this.props.imgAll,
    });
  }

  render() {
    const url = this.props.imgAll;
    //console.log(url);
    return (
      <>
        {url && (
          <div className="img_slider">
            <div
              className="img1"
              style={{
                backgroundImage: `url(${url[0]})`,
              }}
            />
            <div
              className="img2"
              style={{ backgroundImage: `url(${url[1]})` }}
            />
            <div
              className="img3"
              style={{ backgroundImage: `url(${url[2]})` }}
            />
            <div
              className="img4"
              style={{
                backgroundImage: `url(${url[3]})`,
                width: '80%',
                height: '80%',
              }}
            />
          </div>
        )}
      </>
    );
  }
}

export default ProductImg;
