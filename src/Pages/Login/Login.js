import React from 'react';
//import logo from './logo.svg';
import './Login.scss';
import './Register.scss';
//import { withRouter } from 'react-router-dom'
import reactDOM from "react-dom";



export class Rederer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true, 
      isRegisterOpen:false
    };
  }
    
  showLoginBox = (e) => {
    this.setState({isLoginOpen: true, isRegisterOpen: false});
  }
    
  showRegisterBox = (e) => {
    this.setState({isRegisterOpen: true, isLoginOpen: false});
  }
    
 
    
  render () {
    return (
      <>
          <main id="main">
            <div className = "screen">
              <div className = "wrapper">
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
                        
                            <a className={"signIn" +(this.state.isRegisterOpen ? "selected-controller" : "")}
                              onClick={this.showLoginBox}>
                                SIGN IN
                                </a>
                         

                         
                            <a className={"signUp" + (this.state.isLoginOpen ? "selected-controller" : "")} 
                            onClick={this.showRegisterBox}
                            >REGISTER
                            </a>
                         
                        </nav>
                      </div>

                      <div className = "box-container">
                      {this.state.isLoginOpen && <Login/>}
                      {this.state.isRegisterOpen && <Register/>}

                      </div>
    
    
                    </div>
    
                  </div>
                  
    
                </div>
              </div>
            </div>
          </main>
        </>
    );
  }
}
    
export default Rederer;







class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    };
  
  submitLogin = (e) => {
    e.preventDefault();
  }
 
/*
  handleInput = (e) => {
    console.log(e.target.name, ' : ', e.target.value);
    this.setState({
      InputId: e.target.value,
    })
    this.setState({ 
      changeId: e.target.value.includes('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/')
      ? true: false })
      
      
      //ChangeId: e.target.value.includes('@') })
  }

  changeHandlePwInput = (e) => {
    console.log(e.target.name, ':', e.target.valuie);
    this.setState({
      InputPw: e.target.value,
    })
    this.setState({ ChangePw: e.target.value.length >=6  ? true: false })
  }

  onClickhandler = (e) => {
    e.preventDefault()
    console.log(this.state)
  }

  loginTabHandler = () => {


  }

  registerTabHandler = () => {

  }

  
  


    /*

      //!!!ROUTER경로!!!!!
  goToSignup() {
    //if... 조건걸어주기 if (inputId.value.length > )
    this.props.history.push('/main') //main경로
  }
  



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


  render () {
    return (
      <>

        <div className="contentBox">

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
                  onChange = {this.changehandleInput}
                />  
                <small>Please note: use a valid email such as name@mail.com</small> 
              </div>

              <div className="form-control">
                <input type="password" id="email" 
                  placeholder="Password"
                  name = "inputPw" //네임값 꼭 지정해줘야함(리액트)
                  onChange={this.changeHandlePwInput}
                />  
                <small>Please note: Password is required</small>         
              </div>

            </div>
                

            <div className= "link-2">
                
              <div className="buttonBox">
                <button type="submit" id="submit" className="button"
                  onClick = {this.submitLogin}  >
                <div className="btnWrapper">
                  <div id="signinbox">Sign in</div>
                </div>
                </button>
              </div>
                
            </div>

        </div>


      </>
    )
  }
}




class Register extends React.Component {
  constructor(props) {
    super(props)

    this.state = {isRegisterOpen: true, isLoginOpen:false};
  }

submitRegister = (e) => {
  e.preventDefault();
}

  render() {  
    return (
      <>
        <div className="contentBox">

          <div className = "welcomeText1-r">
             <p>Create an account and benefit from a more personal shopping experience, and quicker online checkout.</p>
          </div>

            <div className = "welcomeText2-r">
              <p>All fields are mandatory.</p>
              </div>
            <div className = "formBox">


            <div className="form-control">
              <input type="text" id="email" 
                placeholder="Email"
                name="inputEmail"
                onChange={this.changeHandleEmail} />
               <small>Please note: use a valid email such as name@mail.com</small>    
            </div>

            <div className="form-control">
              <input type="text" id="firstName" 
              placeholder="First name" 
              name="inputFirstName"
                onChange={this.changeHandleFirstName} />
              <small>Please note: use a valid email such as name@mail.com</small>           
            </div>
                      
            <div className="form-control">
              <input type="text" id="lastName" 
              placeholder="Last name"
              name="inputLastName"
                onChange={this.changeHandleLastName} />
               
              <small>Please note: use a valid email such as name@mail.com</small>        
            </div>

            <div className="form-control">
              <input type="text" id="password" 
              placeholder="Password" 
              name="inputRegisterPassword"
                onChange={this.changeHandleRegisterPassword}/>  
              <small>Please note: use a valid email such as name@mail.com</small>          
            </div>

                    
            <div className = "agreeArea">
                
              <span className= "checkBoxP"> <input type="checkbox" name="agree" id="register-terms"></input>I agree to the Privacy/Policy </span>
                    
              </div>
                  
                    
              <div className= "link-2">
                <div className="buttonBox">
                  <button type="submit" id="submit" className="button"
                  onClick = {this.submitRegister}>
                    <div className="btnWrapper">
            
                      <div id="signinbox">CREATE ACCOUNT</div>
                    </div>
                  </button>
                </div>
              </div>


          </div>

                  

        </div>

    
      </>
    )
  }
}


