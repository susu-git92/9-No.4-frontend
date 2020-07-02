import React from 'react';
import './ProductList.scss';

class ProductList extends React.Component {
  render() {
    //console.log(this.props);
    return (
      // <a href={`http://localhost:3000/chanel19detail`} className="list_item">
      <div
        className="list_item"
        onClick={() =>
          this.props.history.history.push(
            `/chanel19/detail/${this.props.listCode}`,
          )
        }
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
            ₩
            {this.props.listPrice
              .substring(0, 7)
              .replace(/\B(?=(?:\d{3})+(?!\d))/g, ',')}
            <span className="gray_star">*</span>
          </div>

          <div className="list_other">다른 옵션</div>
        </div>
      </div>
    );
  }
}

export default ProductList;
