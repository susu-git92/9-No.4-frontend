import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { srcs } from '../../config.js';
import './Collection.scss';

class Collection extends React.Component {
  state = {
    collectionItems: [],
    wishItemsList: [],
  };

  componentDidMount() {
    this.setState({
      collectionItems: srcs.img.look,
      wishItemsList: srcs.img.look_wishlist,
    });

    // localStorage.setItem(
    //   'user',
    //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImludHplcm9Ad2Vjb2RlLmNvbSJ9.kkMVMG0hgqywiz81AihEs6syYkB7kDC1MHf1YfwcB0I',
    // );

    // this.getAllLookItems();
    // this.getWishList();
  }

  getAllLookItems = () => {
    fetch('http://10.58.0.55:8000/product/cruise-2019-20')
      .then((res) => res.json())
      .then((res) => this.setState({ collectionItems: res.look }));
  };

  getWishList = () => {
    const userToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImludHplcm9Ad2Vjb2RlLmNvbSJ9.kkMVMG0hgqywiz81AihEs6syYkB7kDC1MHf1YfwcB0I';

    fetch('http://10.58.0.55:8000/account/wishlist/', {
      method: 'GET',
      headers: {
        Authorization: userToken,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({ wishItem: res.look_wishlist });
      });
  };

  toggleWishIcon = (e, item) => {
    if (e.target.parentNode.classList.contains('activeIcon')) {
      e.target.parentNode.classList.remove('activeIcon');
      e.target.parentNode.classList.add('inactiveIcon');
    } else {
      e.target.parentNode.classList.add('activeIcon');
      e.target.parentNode.classList.remove('inactiveIcon');
    }
    // this.addAndDeleteWishList(item);
  };

  addAndDeleteWishList = (item) => {
    const userToken =
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImludHplcm9Ad2Vjb2RlLmNvbSJ9.kkMVMG0hgqywiz81AihEs6syYkB7kDC1MHf1YfwcB0I';
    fetch(`http://10.58.0.55:8000/product/wishlist/look/${item.id}/`, {
      method: 'POST',
      headers: {
        Authorization: userToken,
      },
    })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          console.log('성공');
        } else {
          console.error('실패: ' + res.status);
        }
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { collectionItems } = this.state;

    return (
      <article className="Collection">
        <Nav />
        <div className="collectionWrapper">
          <div>
            {collectionItems.map((item) => (
              <div className="itemsContainer" key={item.id}>
                <div className="nameWrapper">
                  <span>{item.id}</span>
                  {/* <WishItem
                    toggleWishIcon={this.toggleWishIcon}
                    collectionItems={collectionItems}
                    wishItemsList={wishItemsList}
                    item={item}
                  /> */}
                  <span>
                    <FontAwesomeIcon
                      className="inactiveIcon"
                      icon={faStar}
                      onClick={(e) => this.toggleWishIcon(e, item)}
                    />
                  </span>
                </div>
                <Link to={`/product/${item.id}`}>
                  <div className="imgWrapper">
                    <img
                      src={item.image}
                      alt="img"
                      onClick={() =>
                        this.props.history.push(`/product/${item.id}`)
                      }
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </article>
    );
  }
}

// class WishItem extends React.Component {
//   checkWish = () => {
//     this.props.collectionItems.forEach((item) => {
//       this.props.wishItemsList.forEach((wish) => {
//         if (item.id === wish.look_id) {
//           return true;
//         } else {
//           return false;
//         }
//       });
//     });
//   };

//   render() {
//     const { toggleWishIcon, item } = this.props;
//     return (
//       <span>
//         <FontAwesomeIcon
//           className={this.checkWish ? 'activeIcon' : 'inactiveIcon'}
//           icon={faStar}
//           onClick={(e) => toggleWishIcon(e, item)}
//         />
//       </span>
//     );
//   }
// }

export default Collection;
