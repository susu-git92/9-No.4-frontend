import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { srcs } from '../../config.js';
import './Collection.scss';

class Collection extends React.Component {
  state = {
    collectionItems: {},
  };

  // componentDidMount() {
  //   fetch('http://10.58.0.55:8000/product/cruise-2019-20')
  //     .then((res) => res.json())
  //     .then((res) => this.setState({ products: res }));
  // }

  render() {
    const collectionItems = srcs.img.collection;
    return (
      <article className="Collection">
        <Nav />
        <div className="collectionWrapper">
          <div>
            {collectionItems.map((item, idx) => (
              <div className="itemsContainer" key={item[idx + 1].name}>
                <div className="nameWrapper">
                  {item[idx + 1].name}
                  <FontAwesomeIcon className="starIcon" icon={faStar} />
                </div>
                <div className="imgWrapper">
                  <img src={item[idx + 1].img} alt="img" />
                </div>
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
