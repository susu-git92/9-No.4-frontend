import React from 'react';
import './WishViewer.scss';
import WishProductList from '../WishProductList/WishProductList'

class WishViewer extends React.Component {
  render () {
    console.log("data >>> ",this.props.products)
    return (
      <>
        <div className="wishlist-title">
          <h2 className="wishlist-header-title">위시리스트</h2>
          <div className="wishlist-header-share">
            <button className="wishlist-header-label">
            위시리스트 공유하기
            </button>
          </div>
        </div>        
        <div className="wishlist-tab">
          <div className="wishlist-tab-head open">
            <span className="wishlist-tab-title">핸드백</span>
            <span className="wishlist-tab-subtitle">1 제품</span>
          </div>
        </div>
        <div className="list_box_viewer">
        <div className="list_grid_viewer">
          {this.props.products && this.props.products.map((product, index) => {
            return(
              <WishProductList
                key= {index}
                product_img= {product.image}
                product_name={product.product_name}
                product_price={product.product_price}
              />
            )
          })}
        </div>
      </div>
      </>
    )
  }
}

export default WishViewer;
