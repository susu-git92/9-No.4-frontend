import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Category from './Pages/Category/Category';
import Collection from './Pages/Collection/Collection';
import News from './Pages/News/News';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/news" component={News} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
