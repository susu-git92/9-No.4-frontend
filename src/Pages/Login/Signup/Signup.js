import React from 'react';
import './Signup.scss';
import { withRouter } from 'react-router-dom'

class Signup extends React.Component {
  constructor() {
    super()
    this.state = { 
      inputEmail:"",
      inputFirstName:"",
      inputLastName: "",
      inputRegisterPassword: "",
      changeEmail: "",
      changePassword:""
    }
  }


   
  changeHandleInput = (e) => {
    e.preventDefault();
    this.setState ({
      [e.target.name]: e.target.value,
   })
    this.setState({changeEmail: e.target.value.includes('@')? true : false})
    this.setState({changePassword: e.target.value.length > 0 ? true : false})
  }

 // goToSignup () {
 // //  this.props.history.push('/main')
  //}

  submitRegister = (e) => {
    e.preventDefault();
    //console.log(this.state)
    alert('회원가입 성공!')
 
  fetch(
    'http://10.58.0.55:8000/account/sign-up/',
    {
      //백엔드에서 받은 주소
      method: 'POST', //값이포스트 ,
      //headers: { Authorization: localStorage.getItem('access_token') }, //로그인시
      body: JSON.stringify({
        //json 스트링화시키겠다 라는 뜻  요 안에 인자로(json화된 자바스크립트 데이터)
        //user_id: this.state.InputId, //성공하면 토큰이 제이슨바디에들어온다
        email: this.state.inputEmail,
        first_name: this.state.inputFirstName,
        last_name: this.state.inputLastName,
        password: this.state.inputRegisterPassword,
      })
    },
  )
    .then((res) => res.json()) //여기에 만약 콘솔만찍으면 콘솔찍어주고 하는일이없다.
    //.then((res) => console.log(res))
    //.then((res) => console.log(res.status))
   // .then((res) => localStorage.setItem('access_token',res)) //로그인시
    // if (res.token) {
    //localStorage.setItem('access_token', res.token)
    //this.props.history.push('/main') //로그인할때 연결 
      
}


  render() {  
    console.log (this.props.history)
    console.log('this.state.inputEmail>>>', this.state.inputEmail);
    console.log('this.state.inputFirstName>>>', this.state.inputFirstName);
    console.log('this.state.inputLastName>>>', this.state.inputLastName);
    console.log('this.state.inputRegisterPassword>>>', this.state.inputRegisterPassword);
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
                onChange={this.changeHandleInput} />
               <small>Please note: use a valid email such as name@mail.com</small>    
            </div>

            <div className="form-control">
              <input type="text" id="firstName" 
              placeholder="First name" 
              name="inputFirstName"
                onChange={this.changeHandleInput} />
              <small>Please note: use a valid email such as name@mail.com</small>           
            </div>
                      
            <div className="form-control">
              <input type="text" id="lastName" 
              placeholder="Last name"
              name="inputLastName"
                onChange={this.changeHandleInput} />
               
              <small>Please note: use a valid email such as name@mail.com</small>        
            </div>

            <div className="form-control">
              <input type="password" id="password" 
              placeholder="Password" 
              name="inputRegisterPassword"
                onChange={this.changeHandleInput}/>  
              <small>Please note: use a valid email such as name@mail.com</small>          
            </div>
                  
            <div className = "agreeArea">
              <span className= "checkBoxP"> <input type="checkbox" name="agree" id="register-terms"></input><p>I agree to the Privacy/Policy</p> </span>              
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

export default withRouter(Signup);