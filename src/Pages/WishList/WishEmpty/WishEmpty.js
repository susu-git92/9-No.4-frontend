import React from 'react';
import './WishEmpty.scss';
import { withRouter } from 'react-router-dom'

class WishEmpty extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  };
  render () {
    return (
      <>
        <div className = "wishlist-title">
          <h2 className="wishlist-header-title">위시리스트</h2>
          <div className= "wishlist-empty">
          <p className="emptyempty">위시리스트가 비었습니다</p>
          </div>
        </div>  
        <div className="products-slideshow">
          <div className = "slideshow-title-box" data-slideshowtype= "products-viewed">
            <h2 className="products-slideshow-title"> </h2>
            <div className="pagination"></div>
            <a href="/ko_KR/fashion/last-products-viewed.html" 
            className="products-slideshow__all_button"  >
            <i className="fs-icon icon-hv4-arrow-small-right"></i>
            </a>
          </div>
          <div className="products-slideshow__wrapper">
            <div className="products-slideshow__list" ></div>
          </div>    
        </div>
      </>
    )
  }
}

export default withRouter(WishEmpty)
