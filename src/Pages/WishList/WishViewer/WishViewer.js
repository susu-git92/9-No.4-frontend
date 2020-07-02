import React from 'react';
import './WishViewer.scss';
import { withRouter } from 'react-router-dom'



class WishViewer extends React.Component {
  constructor() {
    super();
    this.state = {
      bag : {},
      input: "",
    }
  };
  
  componentDidMount () {
    fetch('http://10.58.0.55:8000/account/wishlist/', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('AccessToken')
      }
    })
      .then((res) => res.json())
      .then((res) => this.setState({ bag : res}))
    }
  

  render () {
    console.log(this.state.bag)
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

        <div className="list_item">
          <div className="wrapper">
            <div className="bag-img"></div>


            <div className="text_box">
              <div className="list_name">CHANEL 19 플랩백</div>
              <div className="list_material">고트스킨, 골드 메탈, 실버 메탈, 루테늄 메탈</div>
              <div className="list_price">
                <span className="gray_star">*</span>
              </div>

              <div className="list_other">다른 옵션</div>
            </div>
          </div>
        </div>

      </>
    )
  }
}

export default withRouter(WishViewer);
