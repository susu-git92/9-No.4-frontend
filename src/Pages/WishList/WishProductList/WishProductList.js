import React from 'react';
import './WishProductList.scss';


class WishProductList extends React.Component {

  render () {
    console.log("hi")
    return (
      <div className = "wrapper-bag">
        <div className= "star"><img src="data:image/png;base64,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" /></div>
        
        <div className= "list_item_B">
            <div className = "img_box">
              <div className="list_img"><img src={this.props.product_img} /></div>
            </div>
        <div className="text_box_B">
          <div className="list_name_B">{this.props.product_name}</div>
          <div className="list_price"> ₩{this.props.product_price}<span className="gray_star">*</span></div>
          <div className="list_other">다른 옵션</div>
        </div>
        </div>
      </div>
 
    )
  }
}

export default WishProductList;