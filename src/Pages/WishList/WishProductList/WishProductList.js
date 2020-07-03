import React from 'react';
import './WishProductList.scss';


class WishProductList extends React.Component {

  render () {
    console.log("hi")
    return (
      <div className= "list_item_B">
        <div className = "star1">
          <img className= "star" src='../../../Images/star1.png'></img></div>
        
        <div className = "img_box">
        <div className="list_img"><img src={this.props.product_img} /></div>
        </div>
      <div className="text_box_B">
        
        <div className="list_name_B">{this.props.product_name}</div>
        <div className="list_price"> ₩{this.props.product_price}<span className="gray_star">*</span></div>
        <div className="list_other">다른 옵션</div>
      </div>
      </div>
    )
  }
}

export default WishProductList;