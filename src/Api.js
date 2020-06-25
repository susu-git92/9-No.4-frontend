import React from 'react';

export class Chanel19Api extends React.Component {
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
    console.log('패치중');
    return;
  }
}
