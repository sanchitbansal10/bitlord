import React, { Component } from 'react';
import ReactSignupLoginComponent from 'react-signup-login-component';
import './SignUp.css'

export default class SignUp extends Component{
  constructor(){
    super()
    this.state={
        username:'',
        email:'',
        password:''
    }
    this.stateChange=this.stateChange.bind(this)
}

  stateChange(e){
  this.setState({[e.target.name]:e.target.value})
} 

    render(){
        return(  
<div id="login-box">
  <div class="left">
    <h1>Sign up</h1>
    
    <input type="text" name="username" value={this.state.username} onChange={this.stateChange} placeholder="Username" />
    <input type="text" name="email" value={this.state.email} onChange={this.stateChange} placeholder="E-mail" />
    <input type="password" name="password" value={this.state.password} onChange={this.stateChange} placeholder="Password" />
    <input type="password" name="password2" placeholder="Retype password" />
    
    <input type="submit" name="signup_submit" value="Sign me up" />
  </div>
  
  <div class="right">
    <span class="loginwith">Sign in with<br />social network</span>
    
    <button class="social-signin facebook">Log in with facebook</button>
    <button class="social-signin twitter">Log in with Twitter</button>
    <button class="social-signin google">Log in with Google+</button>
  </div>
  <div class="or">OR</div>
</div>
        )
    }
    
}