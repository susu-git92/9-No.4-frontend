import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Chanel19 from './Pages/Chanel19/Chanel19';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/Chanel19" component={Chanel19} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
