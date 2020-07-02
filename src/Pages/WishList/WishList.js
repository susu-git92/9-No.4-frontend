import React from 'react';
import './WishEmpty/WishEmpty';
import './WishViewer/WishViewer';
import './WishList.scss';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { srcs } from '../../config';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { withRouter } from 'react-router-dom'
import WishEmpty from './WishEmpty/WishEmpty';
import WishViewer from './WishViewer/WishViewer';



export class WishList extends React.Component {
  constructor() {
    super();
    this.state = {
      productListArr: [],
    };
  }


  getToken = (item) => {
    const Token = 
  }

  componentDidMount () {
  fetch('http://10.58.0.55:8000/account/wishlist/', {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('AccessToken')
    }
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
  }

  render() {
   //const {isEmptyOpen , input} = this.state
  /* console.log(this.state.bag)*/
   
   //(bag) => (bag.name)
   console.log(this.state.productListArr)
  
      

    return (

    <div className="WishList">
      <Nav/> 
       
        <div className="wishlist-header">
          {this.state.productListArr.length > 0 ? <WishViewer products={this.state.productListArr} /> : <WishEmpty/>};
        </div>
     
      <Footer/> 
    </div>
    );
  };
}

export default withRouter(WishList);