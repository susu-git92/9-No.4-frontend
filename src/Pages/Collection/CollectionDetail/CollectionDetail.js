import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import Nav from '../../../Components/Nav/Nav';
import Footer from '../../../Components/Footer/Footer';
import './CollectionDetail.scss';
// import { srcs } from '../../../config';

class CollectionDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productsId: 1,
      productImages: [],
      productInfo: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://10.58.0.55:8000/product/cruise-2019-20/${this.state.productsId}`,
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({ productImages: res.img, productInfo: res.products }),
      );
    this.getState();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getState();
      fetch(
        `http://10.58.0.55:8000/product/cruise-2019-20/${this.state.productsId}`,
      )
        .then((res) => res.json())
        .then((res) =>
          this.setState({ productImages: res.img, productInfo: res.products }),
        );
    }
  }

  getState = () => {
    this.setState({
      // productImages: srcs.currentProduct.img,
      // productInfo: srcs.currentProduct.products,
      productsId: Number(this.props.match.params.id),
    });
  };

  prevProduct = () => {
    this.props.history.push(
      `/product/${Number(this.props.match.params.id) - 1}`,
    );
  };
  nextProduct = () => {
    this.props.history.push(
      `/product/${Number(this.props.match.params.id) + 1}`,
    );
  };

  render() {
    const { productImages, productsId } = this.state;
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
                <FontAwesomeIcon
                  className="prevIcon"
                  icon={faChevronLeft}
                  onClick={this.prevProduct}
                />
                <FontAwesomeIcon
                  className="nextIcon"
                  icon={faChevronRight}
                  onClick={this.nextProduct}
                />
              </div>
            </div>
            <div>
              <span>크루즈 2019/20</span>
              <FontAwesomeIcon className="starIcon" icon={faStar} />
            </div>
            <p>추천 카테고리</p>
            <ul>
              <li>핸드백</li>
              <li>시즌 신상품</li>
              <li>클래식 플랩 백</li>
              <li>2.55 플랩 백</li>
              <li>
                <Link className="productListLink" to="/chanel19">
                  Chanel 19 백
                </Link>
              </li>
              <li>샤넬 가브리엘 백</li>
              <li>보이 샤넬 플랩 백</li>
              <li>All Handbags</li>
              <li>자켓</li>
              <li>드레스</li>
              <li>블라우스와 탑</li>
              <li>가디건 & 점퍼</li>
              <li>스커트</li>
              <li>팬츠 & 점프 수트</li>
              <li>아우터</li>
              <li>수영복</li>
              <li>니트웨어</li>
              <li>레더</li>
              <li>모든 레디-투-웨어</li>
            </ul>
          </div>
        </div>
        <Footer />
      </article>
    );
  }
}

export default CollectionDetail;
