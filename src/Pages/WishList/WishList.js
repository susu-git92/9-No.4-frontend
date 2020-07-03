import React from 'react';
import { withRouter } from 'react-router-dom'
import Nav from '../../Components/Nav/Nav';
import WishViewer from './WishViewer/WishViewer';
import WishEmpty from './WishEmpty/WishEmpty';
import Footer from '../../Components/Footer/Footer';
import './WishList.scss';

export class WishList extends React.Component {
  constructor() {
    super();
    this.state = {
      productListArr: [],
    };
  }

  componentDidMount () {
    const token = localStorage.getItem('AccessToken')
    if(token) {
      fetch('http://10.58.0.55:8000/account/wishlist/',
      {
        method: 'GET',
        headers: {Authorization: localStorage.getItem('AccessToken')
      }
      }
    )
      .then((res) => res.json())
      .then((res) => this.setState({productListArr : res.prod_wishlist}))
    } else {
      alert("로그인을 먼저 진행해주세요");
      this.props.history.push('/loginscreen');
    }
  }
  
  render() {
   console.log("productListArr >>> ",this.state.productListArr)
   const { productListArr } = this.state; // destructuring
    return (
      <div className="WishList">
        <Nav/> 
        <div className="wishlist-container">
          {
            productListArr.length !== 0 
            ? <WishViewer products={productListArr} /> 
            : <WishEmpty/>
          }
        </div>
        <Footer/> 
      </div>
    );
  };
}

export default withRouter(WishList);