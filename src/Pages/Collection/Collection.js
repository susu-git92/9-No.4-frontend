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
  };

  componentDidMount() {
    // fetch('http://10.58.0.55:8000/product/cruise-2019-20')
    //   .then((res) => res.json())
    //   .then((res) => this.setState({ collectionItems: res.look }));

    this.setState({
      collectionItems: srcs.img.look,
    });
  }

  // addWishList = (itemId) => {
  //   fetch(`http://10.58.0.55:8000/product/cruise-2019-20/${itemId}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(itemId),
  //   }).then((res) => res.json());
  // };

  render() {
    const { collectionItems } = this.state;
    // console.log(this.props);

    return (
      <article className="Collection">
        <Nav />
        <div className="collectionWrapper">
          <div>
            {collectionItems.map((item) => (
              <div
                className="itemsContainer"
                key={item.id}
                onClick={() => this.props.history.push(`/product/${item.id}`)}
              >
                <div className="nameWrapper">
                  {item.id}
                  <FontAwesomeIcon className="starIcon" icon={faStar} />
                </div>
                <Link to={`/product/${item.id}`}>
                  <div className="imgWrapper">
                    <img src={item.image} alt="img" />
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
