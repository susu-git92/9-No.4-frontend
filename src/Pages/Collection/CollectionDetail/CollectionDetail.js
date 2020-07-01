import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import Nav from '../../../Components/Nav/Nav';
import Footer from '../../../Components/Footer/Footer';
import './CollectionDetail.scss';
import { srcs } from '../../../config';

class CollectionDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsId: Number(this.props.match.params.id),
      productImages: [],
      productInfo: [],
    };
  }

  componentDidMount() {
    // fetch(
    //   `http://10.58.0.55:8000/product/cruise-2019-20/${this.state.productsId}`,
    // )
    //   .then((res) => res.json())
    //   .then((res) =>
    //     this.setState({ productImages: res.img, productInfo: res.products }),
    //   );
    this.setState({
      productImages: srcs.img.currentProduct.img,
      productInfo: srcs.img.currentProduct.products,
    });
  }

  render() {
    const { productImages, productInfo, productsId } = this.state;
    return (
      <article className="CollectionDetail">
        <Nav />
        <div className="productContainer">
          {productImages.map((img) => (
            <div className="productWrapper" key={img}>
              <div className="imgWrapper">
                <img src={img} alt="look img" />
              </div>
            </div>
          ))}
          <div className="textWrapper">
            <div className="boldLine">
              <h4>룩 {productsId}</h4>
              <div className="iconWrapper">
                <FontAwesomeIcon className="prevIcon" icon={faChevronLeft} />
                <FontAwesomeIcon className="nextIcon" icon={faChevronRight} />
              </div>
            </div>
            <div>
              <span>크루즈 2019/20</span>
              <FontAwesomeIcon className="starIcon" icon={faStar} />
            </div>
          </div>
        </div>
        <Footer />
      </article>
    );
  }
}

export default CollectionDetail;
