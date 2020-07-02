import React from 'react';
import './WishProductList.scss';

class WishProductList extends React.Component {

  render () {
    console.log("hi")
    return (
      <div className="wrapper_B">
        <div className="bag-img_B"><img src={this.props.product_img} /></div>
        <div className="list_name_B">{this.props.product_name}</div>
        <div className="list_price_B"> ₩{this.props.product_price}<span className="gray_star">*</span></div>
        <div className="list_other_B">다른 옵션</div>
      </div>
    )
  }
}

export default WishProductList;