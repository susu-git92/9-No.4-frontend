import React from 'react';
import Nav from '../../../Components/Nav/Nav';
import Footer from '../../../Components/Footer/Footer';
import './CollectionDetail.scss';

class CollectionDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentProduct: Number(this.props.match.params.id),
    };
  }

  componentDidMount() {
    fetch(
      `http://10.58.0.55:8000/product/cruise-2019-20/${this.state.currentProduct}/`,
    )
      .then((res) => res.json())
      .then((res) => console.log(res));
  }

  render() {
    console.log(this.props);
    return (
      <article className="CollectionDetail">
        <Nav />
        <div className="productContainer">detail page</div>
        <Footer />
      </article>
    );
  }
}

export default CollectionDetail;
