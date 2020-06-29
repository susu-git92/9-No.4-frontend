import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from './Pages/Main/Main';
import Category from './Pages/Category/Category';
import Collection from './Pages/Collection/Collection';
import News from './Pages/News/News';
<<<<<<< HEAD
import Renderer from './Pages/Renderer/Renderer';
=======
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Chanel19 from './Pages/Chanel19/Chanel19';
>>>>>>> eabf886aa060ade4b224d33a212398fd414f9f0a

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/main" component={Main} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/news" component={News} />

          <Route exact path="/renderer" component={Renderer} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/Chanel19" component={Chanel19} />

        </Switch>
      </Router>
    );
  }
}

export default Routes;
