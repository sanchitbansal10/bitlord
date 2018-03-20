import React, {Component} from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import './InfoForm.css'
import $ from 'jquery';
window.jQuery = window.$ = $;
class InfoForm extends Component{
    constructor(){
        super()
        this.state={
            name:'',
            age:'',
            occupation:'',
            budget:'',
            marital:'',
            targetLocation:'',
        }
        this.stateChange=this.stateChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    stateChange(e){
        this.setState({[e.target.name]:e.target.value})
    }

    onSubmit(e){
      e.preventDefault()
      console.log('submit called from the browser')
        let suggestion={
            suggestion:this.state
        }
        axios.post('/submitSuggestion',suggestion)
    }

    render(){
        return( <div>
                		<header>Please Provide some info that will help us in suggesting you best options</header>

                    <form id="form" class="topBefore" onSubmit={this.onSubmit}>
                        
                        <input placeholder="Your name" name="name" value={this.state.name}  onChange={this.stateChange} />
                        <input placeholder="Your age" name="age" value={this.state.age}  onChange={this.stateChange} />
                        <input placeholder="Are you married(yes or no)" name="maritalStatus" value={this.state.maritalStatus} onChange={this.stateChange}  />
                        
                      <input placeholder="Your current city" name="currentCity" value={this.state.currentCity} onChange={this.stateChange} />
                    
                    
                      <input placeholder="What's your occupation" name="occupation" value={this.state.occupation} onChange={this.stateChange} />
                    
                    
                      <input placeholder="Where are you planning the trip" name="targetLocation" value={this.state.targetLocation} onChange={this.stateChange} />
                    
                    
                      <input placeholder="Whats the approximate budget" name="budget" value={this.state.budget} onChange={this.stateChange}  />
                      <input placeholder="press Enter to Send."   />
                    
                        <Link to="/submitTravel">  <input id="submit" type="submit" /> </Link>
                      
                    </form>
                    </div>
        )
    }
}

export default InfoForm