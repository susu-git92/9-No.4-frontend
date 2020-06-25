import React from 'react';
import './Login.scss';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      inputId : "",
      inputPw: "",
      changeId: "",
      changePw: "",
      idError: "",
      pwError: "",
    };
  };

  goToSignup = () => {
    this.props.history.push('/main')
  }

  changeHandle = (e) => {
    e.preventDefault();
    this.setState ({
      inputId: e.target.value,
      inputPw: e.target.value,
   })
      this.setState({changePw: e.target.value.length > 0 ? true : false})
      this.setState({changePw: e.target.value.includes('@')? true : false})
  }

  validate = () => {
    let idError = "";
    let pwError = "";

    if (!this.state.inputId.includes('@')) { //if it is not includes @ 이라는 뜻 
      console.log(this.state.inputId.includes("@"), idError)
      idError = "Please note: use a valid email such as name@mail.com"
    } else {
      console.log(idError)
      return "";
    }

    if (!this.state.inputPw.length > 0) {
      pwError = "Please note: Password is required";
    } 
      
    if (idError || pwError) {
      this.setState ({idError : idError, pwError: pwError});
      return false;
    }
      return true;
  };

  submitLogin = (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);

      /*
    fetch(
      'http://10.58.1.76:8000/account/sign-in',
      {
        //백엔드에서 받은 주소
        method: 'POST', //값이포스트 ,
        headers: { Authorization: localStorage.getItem('access_token') }, //로그인시
        body: JSON.stringify({
          //json 스트링화시키겠다 라는 뜻  요 안에 인자로(json화된 자바스크립트 데이터)
          //user_id: this.state.InputId, //성공하면 토큰이 제이슨바디에들어온다
          password: this.state.InputPw,
          email: this.state.InputId,
        }),
      },
    )
      .then((res) => res.json()) //여기에 만약 콘솔만찍으면 콘솔찍어주고 하는일이없다.
      //.then((res) => console.log(res))
      //.then((res) => console.log(res.status))
      .then((res) => localStorage.setItem('access_token', res)) //로그인시
    /* if (res.token) {
      localStorage.setItem('access_token', res.token)
     // this.props.history.push('/main') //로그인할때 연결 
  }
 */
    }
  }

  render () {
    console.log('this.state.inputId>>>', this.state.inputId);
    return (
      <div className="Login">
        <form>
          <div className = "welcomeText1">
            <p>Welcome back.</p>
          </div>
          <div className = "welcomeText2">
            <p>Sign in with your email and password.</p>
          </div>
                    
            <div className = "formBox">
              <div className="form-control">
                <input type="text" id="username" 
                  placeholder="Email"
                  name = "inputId" 
                  onChange = {this.changeHandle}
                />  
                <small style = {{fontSize: 12, color: "red"}}>
                {this.state.idError}</small> 
              </div>

              <div className="form-control">
                <input type="password" id="email" 
                  placeholder="Password"
                  name = "inputPw" //네임값 꼭 지정해줘야함(리액트)
                  onChange={this.changeHandle}
                />  
                <small style = {{fontSize: 12, color: "red"}}>{this.state.pwError}</small>         
              </div>
            </div>          

              <div className= "link-2">
                <div className="buttonBox">
                  <button type="submit" id="submit" className="button"
                    onClick = {this.submitLogin} noValidate >
                    <div className="btnWrapper">
                      <div id="signinbox">Sign in</div>
                    </div>
                  </button>
                </div>
              </div>
        </form>
      </div>
    )
  }
}

export default Login;





