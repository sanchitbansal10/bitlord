import React, { Component } from 'react';
import { Route,Link,Switch } from 'react-router-dom';
import InfoForm from './components/InfoForm'
import MainDashboard from './components/MainDashboard'
import SignUp from './components/SignUp';
import Test from './components/Test'
import Login from './components/Login'
import Pnr from './components/Pnr'

import LandingPage from './components/LandingPage'
import SubmitTravel from './components/SubmitTravel';

class App extends Component {
  constructor(){
    super()
    this.state={
      selectedSuggestData:{},
      loggedIn:false,
        pnr:'',
        date:'',
        address:'',
        hotelName:'',
        others:[]
      }
    
    this.pnrProp=this.pnrProp.bind(this)
    }

  pnrProp(pnr){
    console.log('pnr status called')
   
    this.setState({pnr})
  }

  render() {
    return (
      <div>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signUp' component={SignUp} />
        <Route exact path='/infoForm' component={InfoForm} />
        <Route exact path="/submitTravel" component={SubmitTravel} />
        <Route exact path="/pnr" render={props => <Pnr pnrProp={this.pnrProp} {...props} />}/>
      </div>
    );
  }
}

export default App;
