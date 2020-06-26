import React from 'react';
import ProductList from '../../Components/ProductList/ProductList.js';
import './Chanel19.scss';

class Chanel19 extends React.Component {
  constructor() {
    super();
    this.state = {
      Chanel19List: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((res) => this.setState({ Chanel19List: res }));
  }

  render() {
    console.log(this.state.Chanel19List);
    return (
      <div className="list_box">
        <div className="list_grid">
          {this.state.Chanel19List.map((info, index) => (
            <ProductList
              key={index}
              listName={info.name}
              listMaterial={info.username}
              listPrice={info.email}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Chanel19;
