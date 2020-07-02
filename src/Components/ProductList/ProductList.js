import React from 'react';
import './ProductList.scss';

class ProductList extends React.Component {
  state = {
    rKey: '',
  };

  postRkey = (id) => {
    this.setState({
      rKey: id,
      // handleLock: false,
    });
  };

  render() {
    return (
      <div
        className="list_item"
        onClick={() => this.postRkey(this.props.listCode)}
      >
        <div className="img_box">
          <div
            className="list_img"
            style={{ backgroundImage: `url(${this.props.listImg})` }}
          />
        </div>
        <div className="text_box">
          <div className="list_name">{this.props.listName}</div>
          <div className="list_material">{this.props.listMaterial}</div>
          <div className="list_price">
            ₩{this.props.listPrice.substring(0, 7)}
            <span className="gray_star">*</span>
          </div>

          <div className="list_other">다른 옵션</div>
        </div>
      </div>
    );
  }
}

export default ProductList;
