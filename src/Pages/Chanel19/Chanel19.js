import React from 'react';
import ProductList from '../../Components/Body/ProductList';
import { Chanel19Api } from '../../Api';
import './Chanel19.scss';

class Chanel19 extends React.Component {
  state = {
    Chanel19List: {},
  };

  componentDidMount() {
    this.setState({
      Chanel19List: Chanel19Api,
    });
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
