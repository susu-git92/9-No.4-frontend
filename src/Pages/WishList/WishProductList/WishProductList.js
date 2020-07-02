import React from 'react';
import './WishProductList.scss';



class wishProductList extends React.Component {

  render () {

    return (
      <>
      <div className="wrapper_B">
        <div className="bag-img_B"></div>

      <div className="text_box_B">
        <div className="list_name_B">{this.props.product_name}</div>
          <div className="list_material_B">{this.props.product_texture}</div>
              <div className="list_price_B"> ₩{this.props.product_price}<span className="gray_star">*</span>
              </div>
              <div className="list_other_B">다른 옵션</div>
      </div>
      </div>
      </>
    )
  }
}

export default wishProductList;