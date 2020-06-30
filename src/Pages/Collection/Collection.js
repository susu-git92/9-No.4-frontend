/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import { srcs } from '../../config.js';
import './Collection.scss';

class Collection extends React.Component {
  render() {
    const collectionImgs = srcs.img.collection;
    return (
      <article className="Collection">
        <Nav />
        <div className="collectionWrapper">
          <div>
            {collectionImgs.map((img) => (
              <div className="imgWrapper" key={img.id}>
                <img src={img.url} alt="img" />
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
