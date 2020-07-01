import React from 'react';
import './WishList.scss';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { srcs } from '../../config';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export class WishList extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }



  render() {

    return (

    <div className="WishList">
      <Nav/> 
      <div className="wishlist-header">
        <div className = "wishlist-title">
          <h2 className="wishlist-header-title">위시리스트</h2>
            <div className= "wishlist-empty">
              <p>위시리스트가 비었습니다</p>
            </div>
        </div>  
      </div>      


      <div className="products-slideshow">

        <div className = "slideshow-title-box" data-slideshowtype= "products-viewed">
          <h2 className="products-slideshow-title">지난 제품 보기 </h2>
          <div className="pagination">1 / 2</div>
          <a href="/ko_KR/fashion/last-products-viewed.html" 
          class="products-slideshow__all_button" data-datalayer-click="true" >
          모두 보기<i className="fs-icon icon-hv4-arrow-small-right"></i></a>
        </div>
          <div class="products-slideshow__wrapper">
            <div class="products-slideshow__list" >
              <button type="button" className="slick-prev slick-arrow slick-disabled" >
              <p className="products-slideshow__material">자세한 법률 정보는 여기를 클릭하세요.</p>
              </button>
            </div>
          </div>
    
      
      </div>

                            
                                    
         
     
    
    
      <Footer/> 
    </div>
    );
  };
}

export default WishList;