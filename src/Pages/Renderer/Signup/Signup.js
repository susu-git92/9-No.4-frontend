import React from 'react';
import Register from './Signup.scss';

class Signup extends React.Component {
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
              <input type="password" id="password" 
              placeholder="Password" 
              name="inputRegisterPassword"
                onChange={this.changeHandleRegisterPassword}/>  
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

export default Signup;