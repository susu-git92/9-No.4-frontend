import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
// import { srcs } from '../../config.js';
import './Collection.scss';

class Collection extends React.Component {
  state = {
    collectionItems: [],
  };

  componentDidMount() {
    fetch('http://10.58.0.55:8000/product/cruise-2019-20')
      .then((res) => res.json())
      .then((res) => this.setState({ collectionItems: res.look }));

    // this.setState({
    //   collectionItems: srcs.img.look,
    // });

    localStorage.setItem(
      'user',
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImludHplcm9Ad2Vjb2RlLmNvbSJ9.kkMVMG0hgqywiz81AihEs6syYkB7kDC1MHf1YfwcB0I',
    );
  }

  addWishList = (item) => {
    console.log(item.id);
    const userToken = localStorage.getItem('user');
    fetch(`http://10.58.0.55:8000/product/wishlist/look/${item.id}/`, {
      method: 'post',
      headers: {
        Authorization: userToken,
      },
    })
      .then((res) => {
        if (res.statue === 200 || res.status === 201) {
          res.json().then((json) => console.log(json));
        } else {
          console.log(res.status);
        }
      })
      .catch((err) => console.error(err));
  };

  render() {
    const { collectionItems } = this.state;
    // console.log(this.props);

    return (
      <article className="Collection">
        <Nav />
        <div className="collectionWrapper">
          <div>
            {collectionItems.map((item) => (
              <div className="itemsContainer" key={item.id}>
                <div className="nameWrapper">
                  {item.id}
                  <FontAwesomeIcon
                    onClick={() => this.addWishList(item)}
                    className="starIcon"
                    icon={faStar}
                  />
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

export default Collection;
