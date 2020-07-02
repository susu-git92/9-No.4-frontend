import React from 'react';
import './WishViewer.scss';
import WishProductList from './WishViewer';

class WishViewer extends React.Component {
  render () {
    //console.log(this.state.bag)
    console.log(this.props.products)

    return (
      <>
        <div className = "wishlist-title">
          <h2 className="wishlist-header-title">위시리스트</h2>
          <div className="fs-wishlist-header__share fs-share-button" 
          data-title="CHANEL - 위시리스트" data-description="위시리스트" 
          data-url="https://www.chanel.com/ko_KR/fashion/wishlist.html?share=l_20spodium010,p_as1160b0321594305" popin-enable="true">
            <i className="fs-icon icon-hv4-share"></i>
            <button className="fs-wishlist-header__share__label">
            위시리스트 공유하기
            </button>
          </div>
        </div>  
                

        <div className = "fs-wishlist-tab">
          <div className="fs-wishlist-tab__head open" 
          data-datalayer-title="Handbags" animation="false">
            <span className="fs-wishlist-tab__title">핸드백</span>
            <span className="fs-wishlist-tab__subtitle font-family-basic">1 제품</span>
            <span className="fs-wishlist-tab__arrow">
              <i className="fs-icon icon-hv4-arrow-down">
              </i>
            </span>
          </div>
      
        
        </div>

        <div className="list_item_B">
          {this.props.products.length > 0 && this.props.products.map((productListArr, index) => {
            return(
 
              <WishProductList
              key= {index}
              product_name={productListArr.product_name}
              product_texture={productListArr.product_texture}
              product_price={productListArr.product_price}
              />
             
            )
          })}
        </div>

      </>
    )
  }
}

export default WishViewer;
