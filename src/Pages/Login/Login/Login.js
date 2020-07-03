import React from 'react';
import './Login.scss';
import { withRouter } from 'react-router-dom'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputId: "",
      inputPw: "",
      changeId: "",
      changePw: "",
    };
  }

  goToSignup ()  {
    this.props.history.push('/')
  }

  changeHandle = (e) => {
    e.preventDefault();
    this.setState ({
      [e.target.name]: e.target.value,
   })
    this.setState({changeId: e.target.value.includes('@')? true : false})
    this.setState({changePw: e.target.value.length > 0 ? true : false})
  }

  submitLogin = (e) => {
    e.preventDefault();
    
    fetch(
      'http://10.58.0.55:8000/account/sign-in/',
      {
        method: 'POST',
        headers: { Authorization: localStorage.getItem('AccessToken')},
        body: JSON.stringify({
     
          email: this.state.inputId,
          password: this.state.inputPw
        }),
      },
    )
      .then((res) => res.json()) 
      .then((res) => {console.log(res)
        localStorage.setItem('AccessToken', res.Access_Token)})       
      this.props.history.push('/') 
  }
 
  render() {
    console.log('this.state.inputId>>>', this.state.inputId);
    console.log('this.state.inputPw>>>', this.state.inputPw);
    console.log(localStorage.getItem("AccessToken"))
    return (
      <div className="Login">
        <form>
          <div className="welcomeText1">
            <p>Welcome back.</p>
          </div>
          <div className="welcomeText2">
            <p>Sign in with your email and password.</p>
          </div>
          <div className="formBox">
            <div className="form-control">
              <input
                type="text"
                id="username"
                placeholder="Email"
                name="inputId"
                onChange={this.changeHandle}
              />
              <small style={{ fontSize: 12, color: 'red' }}>
                {this.state.idError}
              </small>
            </div>
            <div className="form-control">
              <input
                type="password"
                id="email"
                placeholder="Password"
                name="inputPw"
                onChange={this.changeHandle}
              />
              <small style={{ fontSize: 12, color: 'red' }}>
                {this.state.pwError}
              </small>
            </div>
          </div>
            <div className= "link-2">
              <div className="buttonBox">
                <button type="submit" id="submit" className="button"
                  onClick = {this.submitLogin} >
                  <div className="btnWrapper">
                    <div id="signinbox">Sign in</div>
                  </div>
                </button>
              </div>      
            </div>
        </form>
      </div>
    );
  }
}
export default withRouter(Login);





