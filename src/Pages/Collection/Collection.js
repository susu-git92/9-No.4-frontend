import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import './Collection.scss';

class Collection extends React.Component {
  render() {
    return (
      <article className="Collection">
        <Nav />
        <div className="collectionWrapper"></div>
        <Footer />
      </article>
    );
  }
}

export default Collection;
