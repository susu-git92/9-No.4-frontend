import React from 'react';
import { withRouter } from 'react-router-dom';
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

  componentDidMount() {
    fetch('http://10.58.0.55:8000/account/wishlist', {
      method: 'GET',
      headers: { Authorization: localStorage.getItem('AccessToken') },
    })
      .then((res) => res.json())
      .then((res) => this.setState({ productListArr: res.prod_wishlist }));
  }

  render() {
    console.log('productListArr >>> ', this.state.productListArr);
    return (
      <div className="WishList">
        <Nav />
        <div className="wishlist-container">
          {this.state.productListArr.length > 0 ? (
            <WishViewer products={this.state.productListArr} />
          ) : (
            <WishEmpty />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(WishList);
