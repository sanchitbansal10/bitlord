import React, { Component } from 'react';
import './Login.css'
import {Link} from 'react-router-dom'
import $ from 'jquery';
window.jQuery = window.$ = $;

export default class Login extends Component{
    constructor(){
        super()
        this.state={
            username:'',
            password:''
        }
        this.stateChange=this.stateChange.bind(this)
    }
    componentDidMount(){
        var working = false;
$('.login').on('submit', function(e) {
  e.preventDefault();
  if (working) return;
  working = true;
  var $this = $(this),
    $state = $this.find('button > .state');
  $this.addClass('loading');
  $state.html('Authenticating');
  setTimeout(function() {
    $this.addClass('ok');
    $state.html('Welcome back!');
    setTimeout(function() {
      $state.html('Log in');
      $this.removeClass('ok loading');
      working = false;
    }, 4000);
  }, 3000);
});
    }

    stateChange(e){
        this.setState({[e.target.name]:e.target.value})
      } 

    render(){
        return(
            <div class="wrapper">
      <form class="login">
        <p class="title">Log in</p>
        <input name="username" value={this.state.username} type="text" placeholder="Username" onChange={this.stateChange} autofocus/>
        <i class="fa fa-user"></i>
        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.stateChange} />
        <i class="fa fa-key"></i>
        <a href="#">Forgot your password?</a>
        <Link to="/infoForm"><button>
          <i class="spinner"></i>
          <span class="state">Log in</span>
        </button>
        </Link>
      </form>
    </div>
        )
    }
}
