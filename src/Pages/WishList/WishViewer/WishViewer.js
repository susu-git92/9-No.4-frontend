import React from 'react';
import './WishViewer.scss';
import { withRouter } from 'react-router-dom'



class WishViewer extends React.Component {
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
          <div class="fs-wishlist-header__share fs-share-button" 
          data-title="CHANEL - 위시리스트" data-description="위시리스트" 
          data-url="https://www.chanel.com/ko_KR/fashion/wishlist.html?share=l_20spodium010,p_as1160b0321594305" popin-enable="true">
            <i class="fs-icon icon-hv4-share"></i>
            <button class="fs-wishlist-header__share__label">
            위시리스트 공유하기
            </button>
          </div>
        </div>  
                

        <div className = "fs-wishlist-tab">
          <div class="fs-wishlist-tab__head open" 
          data-datalayer-title="Handbags" animation="false">
            <span class="fs-wishlist-tab__title">핸드백</span>
            <span class="fs-wishlist-tab__subtitle font-family-basic">1 제품</span>
            <span class="fs-wishlist-tab__arrow">
              <i class="fs-icon icon-hv4-arrow-down">
              </i>
            </span>
          </div>
      
        
        </div>

      </>
    )
  }
}

export default withRouter(WishViewer);
