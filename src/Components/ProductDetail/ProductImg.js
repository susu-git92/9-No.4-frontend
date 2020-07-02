import React, { Component } from 'react';

class ProductImg extends Component {
  state = {
    imgUrl: [],
  };

  componentDidMount() {
    // fetch('http://10.58.0.214:8000/products/chanel-19/detail/AS1160B02876N6832')
    //   .then((res) => res.json())
    //   .then((res) =>
    //     this.setState({ imgUrl: res.detail_bag_info.bag_image_all }),
    //   );
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
