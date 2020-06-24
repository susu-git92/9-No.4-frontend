import React from 'react';
import Nav from '../../Components/Nav/Nav';
import Footer from '../../Components/Footer/Footer';
import './Main.scss';
class Main extends React.Component {
  render() {
    console.log('working');
    return (
      <div className="Main">
        <Nav />
        <article>
          <div></div>
        </article>
        <Footer />
      </div>
    );
  }
}

export default Main;
