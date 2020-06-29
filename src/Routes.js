import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Category from './Pages/Category/Category';
import Collection from './Pages/Collection/Collection';
// import News from './Pages/News/News';
// import Loginscreen from './Pages/Login/Loginscreen';
// import Login from './Pages/Login/Login/Login';
// import Signup from './Pages/Login/Signup/Signup';
import Chanel19 from './Pages/Chanel19/Chanel19';
import Chanel19Detail from './Pages/Chanel19/Chanel19Detail/Chanel19Detail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/category" component={Category} />
          <Route exact path="/collection" component={Collection} />
          {/* <Route exact path="/news" component={News} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/chanel19" component={Chanel19} />
          <Route exact path="/chanel19detail" component={Chanel19Detail} />
          {/* <Route exact path="/loginscreen" component={Loginscreen} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;
