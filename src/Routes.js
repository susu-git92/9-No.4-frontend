import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
<<<<<<< HEAD:src/Routes.js
import Category from './Pages/Category/Category';
import Collection from './Pages/Collection/Collection';
import News from './Pages/News/News';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
=======
import Chanel19 from './Pages/Chanel19/Chanel19';
>>>>>>> feature/product_list:src/routes.js

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
<<<<<<< HEAD:src/Routes.js
          <Route exact path="/category" component={Category} />
          <Route exact path="/collection" component={Collection} />
          <Route exact path="/news" component={News} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
=======
          <Route exact path="/Chanel19" component={Chanel19} />
>>>>>>> feature/product_list:src/routes.js
        </Switch>
      </Router>
    );
  }
}

export default Routes;
