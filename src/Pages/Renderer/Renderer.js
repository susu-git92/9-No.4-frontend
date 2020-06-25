import React from 'react';
import Login from './Login/Login'
import Signup from './Signup/Signup';

export class Renderer extends React.Component{
  constructor() {
    super();
    this.state = {
      isLoginOpen: true, 
    };
  }

  showLoginBox = () => {
    this.setState({isLoginOpen: true});

  }

  hideLoginBox = () => {
    this.setState({isLoginOpen: false});
  }

  render () {
    return (
          <div id="Renderer">
            <div className = "screen">
                <div className="container">
                  <div className="accountBox">
                    <div className="accountText">
                      <h1> ACCOUNT </h1>
                    </div>
                  </div>
                  <div className= "innerContainer">
                    <div className= "SingnIn-Register">
                      <div className="box-controller">
                        <nav className = "customer-nav">
                            <div 
                              className={!this.state.isLoginOpen ? "signin-selected" : "signin"}
                              onClick={this.showLoginBox} >
                                SIGN IN
                            </div>
                            <div 
                              className={this.state.isLoginOpen ? "signup-selected" : "signup"} 
                              onClick={this.hideLoginBox}>
                                REGISTER
                            </div>
                        </nav>
                      </div>
                      <div className = "box-container">
                        {this.state.isLoginOpen ? <Login /> : <Signup />}
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
    );
  }
}

export default Renderer;





